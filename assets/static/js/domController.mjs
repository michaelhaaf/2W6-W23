const domController = () => {
  const hide = (elem) => {
    if (!elem.classList.contains("visually-hidden")) {
      elem.classList.add("visually-hidden");
    }
  };

  const show = (elem) => {
    if (elem.classList.contains("visually-hidden")) {
      elem.classList.remove("visually-hidden");
    }
  };

  const toggleVisible = (elem) => {
    elem.classList.toggle("visually-hidden");
  };

  const toggleClass = (elem, clazz) => {
    elem.classList.toggle(clazz);
  };

  const toggleAttribute = (elem, attribute) => {
    let currentValue = elem.getAttribute(attribute);
    let newValue = currentValue === "true" ? "false" : "true";
    elem.setAttribute(attribute, newValue);
  };

  return { hide, show, toggleVisible, toggleClass, toggleAttribute };
};

export { domController };
