import { Storage } from "../utilities/index.js";

const ThemeController = () => {
  const STORAGE_KEY = "stored-theme";
  const DATA_ATTR_KEY = "data-theme";
  const rootElem = document.querySelector(":root");
  const toggleBtn = rootElem.querySelector("#theme-toggle-btn");

  const getDefaultTheme = () => {
    if (!!window && "matchMedia" in window) {
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    } else {
      return "dark";
    }
  };

  const toggleTheme = () => {
    const newTheme = getStoredTheme() === "light" ? "dark" : "light";
    applyTheme(newTheme);
    setStoredTheme(newTheme);
  };

  const getStoredTheme = () => {
    return Storage.getItem(STORAGE_KEY);
  };

  const setStoredTheme = (theme) => {
    Storage.setItem(STORAGE_KEY, theme);
  };

  const applyTheme = (theme) => {
    rootElem.setAttribute(DATA_ATTR_KEY, theme);
  };

  const init = () => {
    const defaultTheme = getDefaultTheme();
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      applyTheme(storedTheme);
    } else {
      applyTheme(defaultTheme);
      setStoredTheme(defaultTheme);
    }
    toggleBtn.addEventListener("click", toggleTheme);
  };

  return { init };
};

export default ThemeController;
