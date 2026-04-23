import { add, clamp, dot, FALLOFF, mul, sub, type FalloffFn, type V3 } from "../utils/math";

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
  indent: new Brush(0.15, 0.5, FALLOFF.cubic, (_self, { current, weight }) =>
    clamp(current + weight, -1, 1)
  ),
  pinch: new Brush(0.2, 0.7, FALLOFF.cosine, (self, { current, weight }) => {
    return clamp(current - weight * self.state.factor, -1, 1);
  }),
  smooth: new Brush(0.5, 1.0, FALLOFF.cubic, (_self, ctx) => {
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
  squish: new Brush(0.2, 0.6, FALLOFF.cubic, (self, ctx) => {
    const { left, right, mid, crossAxis } = self.state;
    const { current, direction, weight } = ctx;

    const voxelPos = add(mid, direction);
    const dLeft = dot(sub(voxelPos, left), mul(crossAxis, -1));
    const dRight = dot(sub(voxelPos, right), mul(crossAxis, 1));
    if (dLeft < 0 || dRight < 0) {
      const newVal = clamp(current + weight / 1, -1, 1);
      self.state.massStore += newVal - current;
      return newVal;
    }
    const newVal = clamp(current - weight / 4, -1, 1);
    if (self.state.massStore + newVal - current < 0) return current;
    self.state.massStore += newVal - current;
    return newVal;
  })
};
