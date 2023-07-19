import {
  Accordion,
  DisclosureNav,
  SectionObserver,
  ThemeController,
} from "./components/index.js";

const article = document.querySelector(".page-article");
const toc = document.querySelector(".toc");

SectionObserver(article, toc).init();
ThemeController().init();

const accordionNodes = Array.from(document.querySelectorAll(".accordion"));
const navNodes = Array.from(document.querySelectorAll(".disclosure-nav"));

accordionNodes.forEach((node) => Accordion(node));
navNodes.forEach((node) => DisclosureNav(node));
