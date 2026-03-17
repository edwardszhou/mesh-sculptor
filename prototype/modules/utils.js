function throttle(callback, wait) {
  let timeoutId = null;
  return (...args) => {
    if (timeoutId !== null) return;

    callback(...args);
    timeoutId = setTimeout(() => {
      timeoutId = null;
    }, wait);
  };
}
