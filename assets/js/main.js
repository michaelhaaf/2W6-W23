// Theme toggle
if (!localStorage.getItem("selectedTheme")) {
  let currentTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  localStorage.setItem("selectedTheme", currentTheme);
} else {
  document
    .querySelector(":root")
    .setAttribute("data-theme", localStorage.getItem("selectedTheme"));
}

function toggleTheme() {
  let newTheme =
    localStorage.getItem("selectedTheme") === "light" ? "dark" : "light";
  document.querySelector(":root").setAttribute("data-theme", newTheme);
  localStorage.setItem("selectedTheme", newTheme);
}

const themeToggleIcon = document.querySelector("#theme-toggle-icon");
themeToggleIcon.addEventListener("click", toggleTheme);

// Side-scroller Table of Contents with "active" section.
// Adapted from https://benfrain.com/building-a-table-of-contents-with-active-indicator-using-javascript-intersection-observers/
const pageContent = document.querySelector("article.article");
const pageToc = document.querySelector(".nav--page");

const tocLinks = pageToc ? pageToc.querySelectorAll(":scope a") : [];
const allHeaders = pageContent.querySelectorAll(":scope > h1, :scope > h2");

const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: [1],
};

const observeHeaders = new IntersectionObserver(setActive, observerOptions);
allHeaders.forEach((header) => observeHeaders.observe(header));

function setActive(entries) {
  entries.map((e) => {
    if (e.isIntersecting === true) {
      tocLinks.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`nav li a[href="#${e.target.id}"]`)
        .classList.add("active");
    }
  });
}

// Clickable dropdown:
// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar_click

const dropbtns = Array.from(document.querySelectorAll(".dropbtn"));
const dropdowns = Array.from(document.querySelectorAll(".dropdown"));
dropbtns.forEach((btn) => {
  btn.addEventListener("click", toggleDropdown);
});

function toggleVisible(elem) {
  elem.classList.toggle("hidden");
}

function hide(elem) {
  if (!elem.classList.contains("hidden")) {
    elem.classList.add("hidden");
  }
}

function show(elem) {
  if (elem.classList.contains("hidden")) {
    elem.classList.remove("hidden");
  }
}

function toggleActive(elem) {
  elem.classList.toggle("active");
}

function turnInactive(elem) {
  if (elem.classList.contains("active")) {
    elem.classList.remove("active");
  }
}

function turnActive(elem) {
  if (!elem.classList.contains("active")) {
    elem.classList.add("active");
  }
}

function toggleDropdown(event) {
  let dropbtn = event.target;
  let activeDropdown = dropbtn.nextElementSibling;

  dropdowns
    .filter((dropdown) => dropdown !== activeDropdown)
    .forEach((dropdown) => hide(dropdown));
  dropbtns.filter((btn) => btn !== dropbtn).forEach((btn) => turnInactive(btn));

  toggleVisible(activeDropdown);
  toggleActive(dropbtn);
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn") && !e.target.matches(".dropdown")) {
    dropdowns.forEach((dropdown) => hide(dropdown));
    dropbtns.forEach((dropbtn) => turnInactive(dropbtn));
  }
};
