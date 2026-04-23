import { clamp, FALLOFF, type FalloffFn, type V3 } from "../utils/math";

export type BrushContext = {
  vx: number;
  vy: number;
  vz: number;
  current: number;
  weight: number;
  direction: V3;
  getVal: (vx: number, vy: number, vz: number) => number;
};

export class Brush {
  radius: number;
  strength: number;
  falloff: FalloffFn;

  state: any;
  before?: () => void;
  apply: (self: Brush, ctx: BrushContext) => number;
  after?: () => void;

  constructor(
    radius: number,
    strength: number,
    falloff: FalloffFn,
    apply: (self: Brush, ctx: BrushContext) => number
  ) {
    this.radius = radius;
    this.strength = strength;
    this.falloff = falloff;
    this.apply = apply;

    this.state = {};
  }
}

export const BrushSet: Record<string, Brush> = {
  noop: new Brush(0.2, 0, FALLOFF.constant, (_self, { current }) => current),
  indent: new Brush(0.15, 0.2, FALLOFF.cubic, (_self, { current, weight }) =>
    clamp(current + weight, -1, 1)
  ),
  pinch: new Brush(0.2, 0.2, FALLOFF.cosine, (self, { current, weight }) => {
    return clamp(current - weight * self.state.factor, -1, 1);
  }),
  smooth: new Brush(0.5, 3.0, FALLOFF.cubic, (_self, ctx) => {
    const { vx, vy, vz, getVal, current, weight } = ctx;
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
  squish: new Brush(0.2, 0.1, FALLOFF.cubic, (_self, _ctx) => {
    return 0;
  })
};
