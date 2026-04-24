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

export function cross(a: V3, b: V3): V3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

export function add(a: V3, b: V3): V3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

export function sub(a: V3, b: V3): V3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

export function mul(a: V3, c: number): V3 {
  return [a[0] * c, a[1] * c, a[2] * c];
}

export function mag(a: V3): number {
  return Math.sqrt(dot(a, a));
}

export function normalize(a: V3): V3 {
  const magA = Math.max(mag(a), 1e-5);
  return [a[0] / magA, a[1] / magA, a[2] / magA];
}

export function distance(a: V3, b: V3) {
  return mag(sub(a, b));
}

export function average(a: V3, b: V3): V3 {
  return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
}

export function matmul(A: [V3, V3, V3], B: [V3, V3, V3]): [V3, V3, V3] {
  const result = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ] satisfies [V3, V3, V3];

  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++) for (let k = 0; k < 3; k++) result[i][j] += A[i][k] * B[k][j];
  return result;
}

export function mattranspose(A: [V3, V3, V3]): [V3, V3, V3] {
  return [
    [A[0][0], A[1][0], A[2][0]],
    [A[0][1], A[1][1], A[2][1]],
    [A[0][2], A[1][2], A[2][2]]
  ];
}

export function remap(
  t: number,
  minA: number,
  maxA: number,
  minB: number,
  maxB: number,
  clampRange = true
) {
  const res = minB + ((t - minA) / (maxA - minA)) * (maxB - minB);
  return clampRange ? clamp(res, minB, maxB) : res;
}
