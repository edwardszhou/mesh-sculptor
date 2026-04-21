import { clamp } from "../utils/math";

export type BrushContext = {
  vx: number;
  vy: number;
  vz: number;
  current: number;
  weight: number;
  direction: [number, number, number];
  getVal: (vx: number, vy: number, vz: number) => number;
};

export const FALLOFF = {
  constant: (_: number) => 1,
  cubic: (t: number) => 1 - t * t * (3 - 2 * t),
  quadratic: (t: number) => (1 - t) * (1 - t),
  cosine: (t: number) => 0.5 * (1 + Math.cos(Math.PI * t))
} as const;

export type FalloffFn = (t: number) => number;

export type Brush = {
  radius: number;
  strength: number;
  falloff: FalloffFn;

  state?: any;
  before?: () => void;
  apply: (ctx: BrushContext) => number;
  after?: () => void;
};

export const BrushSet: Record<string, Brush> = {
  carve: {
    radius: 0.2,
    strength: 0.2,
    falloff: FALLOFF.cubic,
    apply: ({ current, weight }) => clamp(current + weight, -1, 1)
  },
  stuff: {
    radius: 0.2,
    strength: 0.2,
    falloff: FALLOFF.cubic,
    apply: ({ current, weight }) => clamp(current - weight, -1, 1)
  },
  smooth: {
    radius: 0.3,
    strength: 0.8,
    falloff: FALLOFF.cubic,
    apply: ({ vx, vy, vz, getVal, current, weight }) => {
      const avg =
        (getVal(vx + 1, vy, vz) +
          getVal(vx - 1, vy, vz) +
          getVal(vx, vy + 1, vz) +
          getVal(vx, vy - 1, vz) +
          getVal(vx, vy, vz + 1) +
          getVal(vx, vy, vz - 1)) /
        6;
      return current + weight * (avg - current);
    }
  },
  pinch: {
    radius: 0.3,
    strength: 0.8,
    falloff: FALLOFF.cubic,
    apply: ({ vx, vy, vz, getVal, weight, current, direction }) => {
      const [dvx, dvy, dvz] = direction;
      const shift = weight;
      const vxSample = vx + Math.round(-dvx * shift);
      const vySample = vy + Math.round(-dvy * shift);
      const vzSample = vz + Math.round(-dvz * shift);
      return Math.min(current, getVal(vxSample, vySample, vzSample));
    }
  }
};
