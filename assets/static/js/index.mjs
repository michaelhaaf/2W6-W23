import { domController } from "./domController.mjs";
import { themeController } from "./themeController.mjs";
import { observerController } from "./observerController.mjs";

// UI elements
const baselinerToggle = document.querySelector("#baseliner-toggle");
// baselinerToggle.addEventListener(click, baseliner);

const themeToggleIcon = document.querySelector("#theme-toggle-icon");
themeController(document, window, localStorage).init();
themeToggleIcon.addEventListener("click", themeController.toggleTheme);

const pageArticle = document.querySelector("article");
const pageSections = pageArticle.querySelectorAll(
  "section.level1:not(.overlay-grid), section.level2, section.level3",
);
observerController.init();

// Clickable dropdown:
// https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/ (sort of)
const dropdownBtns = Array.from(
  document.querySelectorAll(
    ".disclosure-nav button[aria-controls][aria-expanded]",
  ),
);
const dropdownMenus = dropdownBtns.map((btn) =>
  btn.parentElement.querySelector("ul[role=menu]"),
);
const dropdowns = new Map(
  dropdownBtns.map(function (btn, index) {
    return [btn, dropdownMenus[index]];
  }),
);
dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", toggleDropdown);
});

function toggleDropdown(event) {
  event.stopPropagation();
  const activeDropdownBtn = event.currentTarget;
  dropdownBtns
    .filter((btn) => btn !== activeDropdownBtn)
    .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  toggleAttribute(activeDropdownBtn, "aria-expanded");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (e) {
  if (
    !e.target.matches("button[aria-expanded][aria-controls]") &&
    !e.target.matches("ul[role=menu]")
  ) {
    dropdownBtns.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  }
};

// accordion pattern
const accordions = Array.from(document.querySelectorAll(".accordion"));
accordions.forEach((accordion) => {
  accordion.addEventListener("click", expandCollapsible);
});

function expandCollapsible(event) {
  let elem = event.target;
  toggleAttribute(elem, "aria-expanded");
}
