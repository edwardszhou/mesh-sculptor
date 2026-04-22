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

export type V3 = [number, number, number];

export function wendlandRBF(r: number, h: number) {
  const t = r / h;
  if (t >= 1) return 0;
  return (1 - t) ** 4 * (1 + 4 * t);
}

export function dot(a: V3, b: V3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function add(a: V3, b: V3): V3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

export function mag(a: V3): number {
  return Math.sqrt(dot(a, a));
}
