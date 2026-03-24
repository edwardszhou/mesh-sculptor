export function clamp(x: number, min: number, max: number) {
  return Math.max(Math.min(x, max), min);
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
