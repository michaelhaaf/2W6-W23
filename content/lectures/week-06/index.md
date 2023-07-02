---
title: "2W6-W23: Week 6 Lecture Notes"
date: 2023-02-18
toc-title: "Lecture navigation"
prev-page: "../lectures/week05.html"
next-page: "../lectures/week07.html"
abstract-title: "Intro to Layouts in CSS: Intro to Flexbox"
abstract: |
  Last week, we learned how to control the horizontal position of HTML block elements using Floats. For a long time, Floats (and tables) were the gold-standard techniques for creating web layouts.

  In 2009, CSS Flexibile Box Layout, otherwise known as [Flexbox](https://en.wikipedia.org/wiki/CSS_Flexible_Box_Layout) was introduced as a part of [CSS 3](https://en.wikipedia.org/wiki/CSS#CSS_3). As mobile devices became increasingly the most common interface for browsing web pages, Flexbox provided a framework superior to Float/Tables in responding to the viewport size of the user and arranging elements with precise developer control.
---

# Lesson Overview

- Introduction to Flexbox

---

# Flexbox

This lecture (will be) based on [this internetingishard lecture](https://www.internetingishard.com/html-and-css/flexbox/). For now, if you are stuck on class exercises, read through this document for explanations about how flexbox works.

Another useful reference can be found at [css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/). While there is little explanation of flexbox conceptually in this document, it is a comprehensive reference for the various flexbox properties and behaviors.

# Knowledge Check

This chapter was our first encounter with realistic web page layouts. We learned how to float divs to the left and right, how to deal with content after a float, and how to combine floats with the auto-margin centering technique from the CSS Box Model chapter. These are the tools we need to create sidebars, grids, an magazine-style layouts.

- What is the default layout behavior for block-level HTML elements?
- How does the default block-level layout behavior change for elements with the `float` property set?
- What are the two techniques we have for preventing float elements from overlapping?

# Exercises

- Odin Project: CSS Flexbox Practise Exercises [(instructions and starter files)][tutCSSFlexbox]

[tutCSSFlexbox]: ../pages/tutorials.html#week-06-exercises "Odin Project: CSS Flexbox Exercises. There are 7 exercises total in this set. You should be able to complete them all with what you have learned during Week 5 and 6."
