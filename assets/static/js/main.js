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

// implementation v2: measure section intersectionRatio
// based on: https://css-tricks.com/table-of-contents-with-intersectionobserver/
// function setActive(entries) {
//   entries.forEach(entry => {
//     const id = entry.target.getAttribute('id');
//     if (entry.intersectionRatio > 0) {
//       document
//         .querySelector(`nav li a[href="#${id}"]`)
//         .classList.add("active");
//     } else {
//       document
//         .querySelector(`nav li a[href="#${id}"]`)
//         .classList.remove("active");
//     }
//   });
// }

// implementation v3: combine v2 and v1
// This kinda sucks if we're being honest, but it works well for now.
let activeSection;
let activeTocLink;
let observerOptions;
let observedSections;

const pageContent = document.querySelector("article");
const allSections = pageContent.querySelectorAll(
  "section.level1:not(.overlay-grid), section.level2, section.level3"
);
const currentActiveSections = [];

const pageToc = document.querySelector("nav.toc");
const tocLinks = pageToc ? pageToc.querySelectorAll(":scope a") : [];

if (!pageToc) {
  document.body.setAttribute("data-layout", "column");
} else {
  observerOptions = {
    root: null,
    rootMargin: "0px",
  };
  observeSections = new IntersectionObserver(setActive, observerOptions);
  allSections.forEach((section) => observeSections.observe(section));
  activeSection = pageContent.querySelector("article > section");
  activeTocLink = activeSection
    ? pageToc.querySelector(`#${activeSection.getAttribute("id")}`)
    : "";
}

function setActive(observedSections) {
  observedSections.forEach((section) => {
    const id = section.target.getAttribute("id");
    const sectionTocLink = document.querySelector(`nav li a[href="#${id}"]`);
    if (section.intersectionRatio > 0) {
      sectionTocLink.classList.add("semi-active");
      currentActiveSections.push(section.target);
    } else {
      sectionTocLink.classList.remove("semi-active");
      const index = currentActiveSections.indexOf(section.target);
      if (index > -1) {
        currentActiveSections.splice(index, 1);
      }
    }
  });
  let minViewportDist = Number.MAX_VALUE;
  let closestSection = activeSection;
  let closestTocLink = activeTocLink;
  allSections.forEach((section) => {
    const id = section.getAttribute("id");
    const viewportDist = section.getBoundingClientRect().top;
    if (viewportDist > 0 && viewportDist < minViewportDist) {
      closestSection = pageContent.querySelector(`section#${id}`);
      closestTocLink = pageToc.querySelector(`a[href="#${id}"]`);
      minViewportDist = viewportDist;
    }
  });
  tocLinks.forEach((link) => link.classList.remove("active"));
  closestTocLink.classList.add("active");
  activeSection = closestSection;
  activeTocLink = closestTocLink;
}

// Clickable dropdown:
// https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation-hybrid/ (sort of)
const dropdownBtns = Array.from(document.querySelectorAll("button[aria-controls][aria-expanded]"));
const dropdownMenus = dropdownBtns.map(btn => btn.parentElement.querySelector("ul[role=menu]"));
const dropdowns = new Map(dropdownBtns.map(
  function(btn, index) {
    return [btn, dropdownMenus[index]];
  })
);
dropdownBtns.forEach((btn) => {
  btn.addEventListener('click', toggleDropdown);
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

function setCurrent(elem) {
  elem.setAttribute("aria-current", "page");
}

function toggleAttribute(elem, attribute) {
  let currentValue = elem.getAttribute(attribute);
  let newValue = currentValue === "true" ? "false" : "true";
  console.log(elem);
  console.log("currentValue: " + currentValue + "... newValue: " + newValue);
  elem.setAttribute(attribute, newValue);
}

function toggleDropdown(event) {
  event.stopPropagation();
  const activeDropdownBtn = event.currentTarget;
  dropdownBtns
    .filter(btn => btn !== activeDropdownBtn)
    .forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  toggleAttribute(activeDropdownBtn, "aria-expanded");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (e) {
  if (!e.target.matches("button[aria-expanded][aria-controls]") && !e.target.matches("ul[role=menu]")) {
    dropdownBtns.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
  }
};

// Set current page
window.onload = function (e) {
  let pathname = window.location.pathname;
  let basename = pathname.substring(pathname.lastIndexOf("/") + 1);
  if (pathname.includes("lectures")) {
    basename = "lectures.html";
  } else if (pathname.includes("assignments")) {
    basename = "assignments.html";
  } else if (pathname.includes("tutorials")) {
    basename = "tutorials.html";
  }

  let currentPage = document.querySelector(`nav a[href$="${basename}"]`);
  setCurrent(currentPage);
};

// accordion pattern
const accordions = Array.from(document.querySelectorAll(".accordion"));
accordions.forEach((accordion) => {
  accordion.addEventListener("click", expandCollapsible);
});

function expandCollapsible(event) {
  let elem = event.target;
  elem.setAttribute(
    "aria-expanded",
    elem.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
}

// baseliner
const baselinerToggle = document.querySelector("#baseliner-toggle");

// https://keyes.ie/things/baseliner/
// This tool creates a bunch of divs, which can cause vertical overflow.
// I had to add some jank to remove those elems. TODO refactor for brevity/clarity
baselinerToggle.addEventListener("click", () => {
  let baselinerElem = document.querySelector("#overlay-it");
  let baselinerOverlay = document.querySelector("#baseline-overlay");
  if (baselinerElem) {
    document.body.removeChild(baselinerElem.parentElement);
    if (baselinerOverlay) {
      document.body.removeChild(baselinerOverlay);
    }
  } else {
    baseliner = new Baseliner({ gridHeight: 32, gridOffset: 12 });
  }
});