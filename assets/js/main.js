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
const allSections = pageContent.querySelectorAll("section.level1, section.level2");

const pageToc = document.querySelector(".nav--page");
const tocLinks = pageToc ? pageToc.querySelectorAll(":scope a") : [];

// adjust overall grid if toc missing. I need to refactor these responsibilities soon.
if (!pageToc) document.body.setAttribute("data-layout", "column");

const observerOptions = {
  root: null,
  rootMargin: "0px",
};

const observeSections = new IntersectionObserver(setActive, observerOptions);
allSections.forEach((section) => observeSections.observe(section));

// implementation v2: measure section intersectionRatio
// based on: https://css-tricks.com/table-of-contents-with-intersectionobserver/
function setActive(entries) {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    if (entry.intersectionRatio > 0) {
      document
        .querySelector(`nav li a[href="#${id}"]`)
        .classList.add("active");
    } else {
      document
        .querySelector(`nav li a[href="#${id}"]`)
        .classList.remove("active");
    }
  });
}

// implementation v1: when header detected, remove active from all others
// function setActive(entries) {
//   entries.map((e) => {
//     if (e.isIntersecting === true) {
//       tocLinks.forEach((link) => link.classList.remove("active"));
//       document
//         .querySelector(`nav li a[href="#${e.target.id}"]`)
//         .classList.add("active");
//     }
//   });
// }


// implementation v3: combine v2 and v1
// This query defaults to selecting the first section (good). 
let activeSection = pageContent.querySelector("article > section");
let activeTocLink = pageToc.querySelector(`#${activeSection.getAttribute('id')}`)

function setActive(observedSections) {
  observedSections.forEach(section => {
    const id = section.target.getAttribute('id');
    const sectionTocLink = document.querySelector(`nav li a[href="#${id}"]`);
    section.intersectionRatio > 0 ? 
      sectionTocLink.classList.add("semi-active") : 
      sectionTocLink.classList.remove("semi-active");
  });
  let minViewportDist = Number.MAX_VALUE;
  let closestSection = activeSection;
  let closestTocLink = activeTocLink;
  allSections.forEach(section => {
    const id = section.getAttribute('id');
    const viewportDist = section.getBoundingClientRect().top;
    if (viewportDist > 0 && viewportDist < minViewportDist) {
      closestSection = pageContent.querySelector(`section#${id}`)
      closestTocLink = pageToc.querySelector(`a[href="#${id}"]`)
      minViewportDist = viewportDist;
    }
  });
  tocLinks.forEach((link) => link.classList.remove("active"));
  closestTocLink.classList.add("active");
  activeSection = closestSection;
  activeTocLink = closestTocLink;
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
  event.stopPropagation();
  let dropbtn = event.currentTarget;
  let activeDropdown = dropbtn.nextElementSibling;

  dropdowns
    .filter((dropdown) => dropdown !== activeDropdown)
    .forEach((dropdown) => hide(dropdown));

  toggleVisible(activeDropdown);
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (e) {
  if (!e.target.matches(".dropbtn") && !e.target.matches(".dropdown")) {
    dropdowns.forEach((dropdown) => hide(dropdown));
  }
};

// Set current site section to active
const siteLinks = document.querySelectorAll('[id^="site-"]:is(a, button)');

window.onload = function (e) {
  let currentPath = window.location.pathname
    .substring(0, window.location.pathname.lastIndexOf('.'))
    .split("/")
  let currentLink = currentPath.includes("lectures") ? "lectures" : currentPath.at(-1);
  let currentLinkElem = document.querySelector(`#site-${currentLink}`);
  turnActive(currentLinkElem);
};
