export const pageBottomDetection = (
  callback = (...args) => {},
  offset = 1500,
) => {
  window.addEventListener("scroll", () => {
    const height = document.body.scrollHeight;
    if (window.scrollY >= height - offset) {
      callback();
    }
  });
};
