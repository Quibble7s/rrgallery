export const useOnElementActive = (activeClass, defaultClass = "") => {
  const focus = {
    onFocus: (e) => {
      e.target.classList.add(activeClass);
      if (defaultClass !== "") {
        e.target.classList.remove(defaultClass);
      }
    },
    onBlur: (e) => {
      e.target.classList.remove(activeClass);
      if (defaultClass !== "") {
        e.target.classList.add(defaultClass);
      }
    },
  };

  return [focus.onFocus, focus.onBlur];
};
