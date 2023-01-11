let currentTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";
localStorage.setItem("currentTheme", currentTheme);

function toggleTheme() {
  let newTheme = localStorage.getItem("currentTheme") === "light" ? "dark" : "light";
  document.querySelector(":root").setAttribute("data-theme", newTheme);
  localStorage.setItem("currentTheme", newTheme);
}
