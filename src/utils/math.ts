export function clamp(x: number, min: number, max: number) {
  return Math.max(Math.min(x, max), min);
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export const FALLOFF = {
  constant: (_: number) => 1,
  cubic: (t: number) => 1 - t * t * (3 - 2 * t),
  quadratic: (t: number) => (1 - t) * (1 - t),
  cosine: (t: number) => 0.5 * (1 + Math.cos(Math.PI * t))
} as const;

export type FalloffFn = (t: number) => number;
