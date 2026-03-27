type M2 = [[number, number], [number, number]];
type V2 = [[number, number]];
type V2T = [[number], [number]];

export class LowPassFilter {
  factor: number;
  prev: number | null;

  constructor(factor: number) {
    this.factor = factor;
    this.prev = null;
  }
  filter(z: number) {
    if (this.prev) z = this.prev * this.factor + z * (1 - this.factor);
    this.prev = z;
    return z;
  }
}

export class KalmanFilter {
  dt: number;
  Q: number;
  R: number;
  x: V2T;
  P: M2;
  F: M2;
  H: V2;
  constructor(dt: number, processNoise: number, observationNoise: number) {
    const state = [[0], [0]] satisfies V2T; // Initial state (pos, vel)
    const stateCovariance = [
      [1, 0], // Initial state variance
      [0, 1]
    ] satisfies M2;
    const stateTransition = [
      [1, dt], // pos_k+1 = pos_k + dt * vel_k
      [0, 1]
    ] satisfies M2; // vel_k+1 = vel_k

    const observationModel = [[1, 0]] satisfies V2; // Update state from position

    this.dt = dt;
    this.Q = processNoise;
    this.R = observationNoise;

    this.x = state;
    this.P = stateCovariance;
    this.F = stateTransition;
    this.H = observationModel;
  }

  predict() {
    const F = this.F;
    const P = this.P;
    const Q = this.Q;
    // x_k = Fx
    const x_new = [
      [F[0][0] * this.x[0][0] + F[0][1] * this.x[1][0]],
      [F[1][0] * this.x[0][0] + F[1][1] * this.x[1][0]]
    ] satisfies V2T;

    // P = FPF^T + Q
    const P_new = [
      [
        F[0][0] * P[0][0] * F[0][0] +
          F[0][1] * P[1][0] * F[0][0] +
          F[0][0] * P[0][1] * F[0][1] +
          F[0][1] * P[1][1] * F[0][1] +
          Q,

        F[0][0] * P[0][0] * F[1][0] +
          F[0][1] * P[1][0] * F[1][0] +
          F[0][0] * P[0][1] * F[1][1] +
          F[0][1] * P[1][1] * F[1][1]
      ],
      [
        F[1][0] * P[0][0] * F[0][0] +
          F[1][1] * P[1][0] * F[0][0] +
          F[1][0] * P[0][1] * F[0][1] +
          F[1][1] * P[1][1] * F[0][1],

        F[1][0] * P[0][0] * F[1][0] +
          F[1][1] * P[1][0] * F[1][0] +
          F[1][0] * P[0][1] * F[1][1] +
          F[1][1] * P[1][1] * F[1][1] +
          Q
      ]
    ] satisfies M2;

    this.P = P_new;
    this.x = x_new;
  }

  update(z: number) {
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

  filter(z: number) {
    this.predict();
    return this.update(z);
  }
}

export class OneEuroFilter {
  freq: number;
  minCutoff: number;
  beta: number;
  dCutoff: number;

  x: LowPassFilter;
  dx: LowPassFilter;

  constructor(freq: number, minCutoff = 1.0, beta = 0.2, dCutoff = 1.0) {
    this.freq = freq;
    this.minCutoff = minCutoff;
    this.beta = beta;
    this.dCutoff = dCutoff;

    this.x = new LowPassFilter(this.alpha(minCutoff));
    this.dx = new LowPassFilter(this.alpha(dCutoff));
  }

  alpha(cutoff: number) {
    const te = 1 / this.freq;
    const tau = 1 / (2 * Math.PI * cutoff);
    return 1 / (1 + tau / te);
  }

  filter(value: number) {
    const dvalue = (value - (this.x.prev ?? 0)) * this.freq;

    this.dx.factor = this.alpha(this.dCutoff);
    const edvalue = this.dx.filter(dvalue);
    const cutoff = this.minCutoff + this.beta * Math.abs(edvalue);

    this.x.factor = this.alpha(cutoff);
    return this.x.filter(value);
  }
}
