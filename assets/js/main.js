if (!localStorage.getItem("selectedTheme")) {
  let currentTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
  localStorage.setItem("selectedTheme", currentTheme);
} else {
  document.querySelector(":root").setAttribute("data-theme", localStorage.getItem("selectedTheme"));
}

function toggleTheme() {
  let newTheme =
    localStorage.getItem("selectedTheme") === "light" ? "dark" : "light";
  document.querySelector(":root").setAttribute("data-theme", newTheme);
  localStorage.setItem("selectedTheme", newTheme);
}

const themeToggleIcon = document.querySelector("#theme-toggle-icon");
themeToggleIcon.addEventListener("click", toggleTheme)

// Side-scroller Table of Contents with "active" section.
// Adapted from https://benfrain.com/building-a-table-of-contents-with-active-indicator-using-javascript-intersection-observers/
const pageContent = document.querySelector("article.page-main-article");
const pageToc = document.querySelector(".article-nav");

const tocLinks = pageToc.querySelectorAll(":scope a");
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