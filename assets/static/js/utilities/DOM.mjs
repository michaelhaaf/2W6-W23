const DOM = (() => {
  const hide = (elem) => {
    elem.classList.add("visually-hidden");
  };

  const show = (elem) => {
    elem.classList.remove("visually-hidden");
  };

  const toggleVisible = (elem) => {
    elem.classList.toggle("visually-hidden");
  };

  const toggleAttribute = (elem, attribute) => {
    const currentValue = elem.getAttribute(attribute);
    const newValue = currentValue === "true" ? "false" : "true";
    elem.setAttribute(attribute, newValue);
  };

  return { hide, show, toggleVisible, toggleAttribute };
})();

export default DOM;
