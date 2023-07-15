const themeController = (doc, win, storage) => {
  const getActiveTheme = () => {
    if (!!storage && "getItem" in storage) {
      return storage.getItem("selectedTheme");
    }
  };
  const setActiveTheme = (theme) => {
    if (!!storage && "setItem" in storage && !!doc && "querySelector" in doc)
      doc.querySelector(":root").setAttribute("data-theme", theme);
    storage.setItem("selectedTheme", theme);
  };
  const init = () => {
    if (getActiveTheme()) {
      setActiveTheme(getActiveTheme());
    } else {
      if (!!win && "matchMedia" in win) {
        const preferredTheme = window.matchMedia(
          "(prefers-color-scheme: light)",
        ).matches
          ? "light"
          : "dark";
        setActiveTheme(preferredTheme);
      }
    }
  };
  const toggleTheme = () => {
    let newTheme = getActiveTheme() === "light" ? "dark" : "light";
    setActiveTheme(newTheme);
  };
  return { init, toggleTheme };
};

export { themeController };
