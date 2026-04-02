type M2 = [[number, number], [number, number]];
type V2 = [[number, number]];
type V2T = [[number], [number]];

export const kalmanParams = {
  Q: 0.01,
  R: 0.0001
};

export const oneEuroParams = {
  minCutoff: 1.2,
  beta: 3.0,
  dCutoff: 1
};

export const FILTERS = {
  KALMAN: "kalman",
  ONEEURO: "oneEuro",
  NONE: "none"
} as const;

export type Filter = (typeof FILTERS)[keyof typeof FILTERS];

export class LowPassFilter {
  factor: number;
  prev: number | null;

  constructor(factor: number) {
    this.factor = factor;
    this.prev = null;
  }

  filter(z: number) {
    if (this.prev !== null) z = z * this.factor + this.prev * (1 - this.factor);
    this.prev = z;
    return z;
  }
}

export class KalmanFilter {
  Q: number;
  R: number;
  private x: V2T;
  private P: M2;
  private F: M2;
  private H: V2;
  private lastTime?: number;

  constructor(processNoise: number, observationNoise: number) {
    const state = [[0], [0]] satisfies V2T; // Initial state (pos, vel)
    const stateCovariance = [
      [1, 0], // Initial state variance
      [0, 1]
    ] satisfies M2;
    const stateTransition = [
      [1, 0], // pos_k+1 = pos_k + dt * vel_k
      [0, 1]
    ] satisfies M2; // vel_k+1 = vel_k

    const observationModel = [[1, 0]] satisfies V2; // Update state from position

    this.Q = processNoise;
    this.R = observationNoise;

    this.x = state;
    this.P = stateCovariance;
    this.F = stateTransition;
    this.H = observationModel;
  }

  private predict(dt: number) {
    const F = this.F;
    const P = this.P;
    const Q = this.Q;

    F[0][1] = dt;
    // x_k = Fx
    const x_new = [
      [F[0][0] * this.x[0][0] + F[0][1] * this.x[1][0]],
      [F[1][0] * this.x[0][0] + F[1][1] * this.x[1][0]]
    ] satisfies V2T;

    const q11 = Q * dt * dt;
    const q01 = q11 * dt * 0.5;
    const q00 = q01 * dt * 0.5;

    // P = FPF^T + Q
    const P_new = [
      [
        F[0][0] * P[0][0] * F[0][0] +
          F[0][1] * P[1][0] * F[0][0] +
          F[0][0] * P[0][1] * F[0][1] +
          F[0][1] * P[1][1] * F[0][1] +
          q00,

        F[0][0] * P[0][0] * F[1][0] +
          F[0][1] * P[1][0] * F[1][0] +
          F[0][0] * P[0][1] * F[1][1] +
          F[0][1] * P[1][1] * F[1][1] +
          q01
      ],
      [
        F[1][0] * P[0][0] * F[0][0] +
          F[1][1] * P[1][0] * F[0][0] +
          F[1][0] * P[0][1] * F[0][1] +
          F[1][1] * P[1][1] * F[0][1] +
          q01,

        F[1][0] * P[0][0] * F[1][0] +
          F[1][1] * P[1][0] * F[1][0] +
          F[1][0] * P[0][1] * F[1][1] +
          F[1][1] * P[1][1] * F[1][1] +
          q11
      ]
    ] satisfies M2;

    this.P = P_new;
    this.x = x_new;
  }

  private update(z: number) {
    const P = this.P;
    const H = this.H;
    // y = z - Hx
    const y = z - (H[0][0] * this.x[0][0] + H[0][1] * this.x[1][0]);

    // S = HPH^T + R
    const S = H[0][0] * P[0][0] * H[0][0] + this.R;

    // K = PH^T * S'
    const K = [(P[0][0] * H[0][0]) / S, (P[1][0] * H[0][0]) / S];

    // x = x + Ky
    this.x[0][0] = this.x[0][0] + K[0] * y;
    this.x[1][0] = this.x[1][0] + K[1] * y;

    // P = (I - KH)P
    this.P = [
      [(1 - K[0] * H[0][0]) * P[0][0], (1 - K[0] * H[0][0]) * P[0][1]],
      [-K[1] * H[0][0] * P[0][0] + P[1][0], -K[1] * H[0][0] * P[0][1] + P[1][1]]
    ];

    return this.x[0][0];
  }

  filter(z: number, timestamp: number) {
    if (this.lastTime === undefined || timestamp - this.lastTime === 0) {
      this.lastTime = timestamp;
      return this.update(z);
    }

    const dt = timestamp - this.lastTime;
    this.predict(dt);

    return this.update(z);
  }
}

export class OneEuroFilter {
  minCutoff: number;
  beta: number;
  dCutoff: number;

  private x: LowPassFilter;
  private dx: LowPassFilter;

  private lastTime?: number;

  constructor(minCutoff = 1.0, beta = 0.2, dCutoff = 1.0) {
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;

    this.x = new LowPassFilter(1);
    this.dx = new LowPassFilter(1);
  }

  private alpha(dt: number, cutoff: number) {
    const tau = 1 / (2 * Math.PI * cutoff);
    return 1 / (1 + tau / dt);
  }

  filter(value: number, timestamp: number) {
    if (this.lastTime === undefined || timestamp - this.lastTime === 0) {
      this.lastTime = timestamp;
      return this.x.filter(value);
    }

    const dt = timestamp - this.lastTime;
    this.lastTime = timestamp;

    const dvalue = (value - (this.x.prev ?? value)) / dt;

    this.dx.factor = this.alpha(dt, this.dCutoff);
    const edvalue = this.dx.filter(dvalue);
    const cutoff = this.minCutoff + this.beta * Math.abs(edvalue);

    this.x.factor = this.alpha(dt, cutoff);
    return this.x.filter(value);
  }
}
