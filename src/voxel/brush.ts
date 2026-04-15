export type BrushContext = {
  vx: number;
  vy: number;
  vz: number;
  current: number;
  weight: number;
  getVal: (vx: number, vy: number, vz: number) => number;
};

export const FALLOFF = {
  constant: (_: number) => 1,
  cubic: (t: number) => 1 - t * t * (3 - 2 * t),
  quadratic: (t: number) => (1 - t) * (1 - t),
  cosine: (t: number) => 0.5 * (1 + Math.cos(Math.PI * t))
} as const;

export type FalloffFn = (t: number) => number;

class Brush {
  id: string;
  radius: number;
  strength: number;
  state: any;
  falloff: FalloffFn;

  before?: () => void;
  apply?: (ctx: BrushContext) => number;
  after?: () => void;

  constructor(id: string, radius: number, strength: number, falloff: FalloffFn) {
    this.id = id;
    this.radius = radius;
    this.strength = strength;
    this.falloff = falloff;
  }
}

export { Brush };
