import { clamp, FALLOFF, type FalloffFn } from "../utils/math";

export type BrushContext = {
  vx: number;
  vy: number;
  vz: number;
  current: number;
  weight: number;
  direction: [number, number, number];
  getVal: (vx: number, vy: number, vz: number) => number;
};

export class Brush {
  radius: number;
  strength: number;
  falloff: FalloffFn;

  state?: any;
  before?: () => void;
  apply: (ctx: BrushContext) => number;
  after?: () => void;

  constructor(
    radius: number,
    strength: number,
    falloff: FalloffFn,
    apply: (ctx: BrushContext) => number
  ) {
    this.radius = radius;
    this.strength = strength;
    this.falloff = falloff;
    this.apply = apply;
  }
}

export const BrushSet: Record<string, Brush> = {
  noop: new Brush(0.2, 0, FALLOFF.constant, ({ current }) => current),
  carve: new Brush(0.2, 0.2, FALLOFF.cubic, ({ current, weight }) =>
    clamp(current + weight, -1, 1)
  ),
  stuff: new Brush(0.2, 0.2, FALLOFF.cubic, ({ current, weight }) =>
    clamp(current - weight, -1, 1)
  ),
  smooth: new Brush(0.3, 0.8, FALLOFF.cubic, ({ vx, vy, vz, getVal, current, weight }) => {
    const avg =
      (getVal(vx + 1, vy, vz) +
        getVal(vx - 1, vy, vz) +
        getVal(vx, vy + 1, vz) +
        getVal(vx, vy - 1, vz) +
        getVal(vx, vy, vz + 1) +
        getVal(vx, vy, vz - 1)) /
      6;
    return current + weight * (avg - current);
  }),
  pinch: new Brush(
    0.3,
    0.8,
    FALLOFF.cubic,
    ({ vx, vy, vz, getVal, weight, current, direction }) => {
      const [dvx, dvy, dvz] = direction;
      const shift = weight;
      const vxSample = vx + Math.round(-dvx * shift);
      const vySample = vy + Math.round(-dvy * shift);
      const vzSample = vz + Math.round(-dvz * shift);
      return Math.min(current, getVal(vxSample, vySample, vzSample));
    }
  )
};
