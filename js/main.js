const tocElements = Array.from(
  document.querySelectorAll(".page-nav a")
);

let currentTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";
localStorage.setItem("currentTheme", currentTheme);

function toggleTheme() {
  let newTheme =
    localStorage.getItem("currentTheme") === "light" ? "dark" : "light";
  document.querySelector(":root").setAttribute("data-theme", newTheme);
  localStorage.setItem("currentTheme", newTheme);
}

const getTop = (entry) => Math.abs(entry.boundingClientRect.top);

const setActive = (element) => {
  element.classList.add("active");
};

const setInactive = (element) => {
  element.classList.remove("active");
};

window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    console.log(observer);
    let activeEntry = entries.reduce((e, c) => (getTop(e) < getTop(c) ? e : c));

    if (!activeEntry.isIntersecting) return;
    let activeSectionId = activeEntry.target.getAttribute("id");
    let activeSection = document.querySelector(
      `nav li a[href="#${activeSectionId}"]`
    );
    tocElements.filter((elem) => elem !== activeSection).map(setInactive);
    setActive(activeSection);
  });

  // Track all elements in the page content
  //   - that have an `id` applied
  //   - that have a corresponding entry in the table of contents
  // Adapted from www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/index.html
  document.querySelectorAll("main *[id]").forEach((element) => {
    if (document.querySelector(`nav li a[href="#${element.id}"]`)) {
      observer.observe(element);
    }
  });
});
