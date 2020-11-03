export const debounce = (callback, wait) => {
  let timeout;

  return (...args) => {
    const next = () => {
      timeout = null;
      callback(...args);
    }; 
    clearTimeout(timeout);
    timeout = setTimeout(next, wait);
  };
};