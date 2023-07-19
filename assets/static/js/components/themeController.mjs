import { storage } from "../utilities/index.js";

const themeController = (() => {

  const _getDefaultTheme = () => {
    if (!!window && "matchMedia" in window) {
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } else {
      return "dark";
    }
  };

  const toggleTheme = () => {
    const newTheme = getSelectedTheme() === "light" ? "dark" : "light";
    setSelectedTheme(newTheme);
  };
  const getSelectedTheme = () => {
    return storage.getItem(_STORAGE_KEY);
  };
  const setSelectedTheme = (theme) => {
    storage.setItem(_STORAGE_KEY, theme);
  };

  const _init = () => {
    if (_selectedTheme) {
      _rootElem.setAttribute(_DATA_ATTRIBUTE_KEY, _selectedTheme);
    } else {
      setSelectedTheme(_defaultTheme);
    }
    if (_toggleBtn) {
      _toggleBtn.addEventListener("click", toggleTheme);
    }
  };

  const _STORAGE_KEY = "selected-theme";
  const _DATA_ATTRIBUTE_KEY = "data-theme";
  const _defaultTheme = _getDefaultTheme();
  const _selectedTheme = getSelectedTheme();

  const _rootElem = document.querySelector(":root");
  const _toggleBtn = _rootElem.querySelector("#theme-toggle-btn");

  _init();

  return { toggleTheme, getSelectedTheme, setSelectedTheme };
})();

export { themeController };
