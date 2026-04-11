export function logPerformance(fn: () => void, message?: string) {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(message ?? `Time for ${fn} execution: `, end - start);
}
