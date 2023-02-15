---
title: "2W6-W23: Week 5 Lecture Notes"
toc-title: "In this article"
abstract-title: "Intro to Layouts in CSS: Floats and Flexbox"
abstract: |
  Last week, we learned a large set of CSS properties for applying styles to text, image, and other content elements.

  Now that we have a decent amount of practise selecting and styling CSS elements individually, it's time to learn strategies for styling groups of elements -- that is, controlling the layout of HTML elements using CSS.

  There are many techniques for layout in CSS. We will focus on two this week: Floats and Flexbox.
---

Last update: Wednesday, Feb 15, 2023.

---

# Lesson Overview

- How to use Floats to distrupt HTML block-level flow
- Introduction to Flexbox

---

# Floats

*This lesson was directly adapted from the online HTML/CSS learning resource, [Interneting is Hard](https://www.internetingishard.com/html-and-css/floats/).*


Over the last few chapters, we've learned how to manipulate the size of
[boxes](./week4.html#the-box-model) and the space around them, but for
the most part, we were stuck with the default vertical flow of the page.
Block elements always appeared vertically one after another, effectively
limiting us to a single-column layout.

![Figure from Interneting is Hard: [Floats][flow-source]][flow-img]

[flow-img]: ../assets/content/wk5/iih-vertical-horizontal-stacking.png  "Vertical (single-column) flow is the default behavior of HTML box elements. CSS Floats allow for block elements to be placed in a horizontal (side-by-side) flow."
[flow-source]: https://www.internetingishard.com/html-and-css/floats/

“Floats” let you put block-level elements side-by-side instead of on top of each other. This is a big deal. It lets us build all sorts of layouts, including sidebars, multi-column pages, grids, and magazine-style articles with text flowing around an image. This is where we finally start creating real web pages.

Float-based layouts have mostly been replaced with [Flexbox](#flexbox) in modern websites. That said, for over a decade, floats have served as the foundation for the majority of websites on the Internet, which means you’ll definitely encounter them at some point in your career -- and learn why the introduction of tools like Flexbox and CSS Grid (which we will learn about in a few weeks) were so important to web development.

Perhaps more importantly, the limited nature of floats makes them a gentler introduction to CSS layouts than Flexbox. Instead of being overwhelmed with all the possibilities of Flexbox, we’ll get a chance to focus more on the process of building up a sophisticated web page layout.

# Flexbox

*This lesson was adapted from the online HTML/CSS learning resource, [The Odin Project](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox).*

This lesson is under construction! I will post an update on LEA when there is content here to see.

# Knowledge Check

## Floats

This chapter was our first encounter with realistic web page layouts. We learned how to float divs to the left and right, how to deal with content after a float, and how to combine floats with the auto-margin centering technique from the CSS Box Model chapter. These are the tools we need to create sidebars, grids, an magazine-style layouts.

- What is the default layout behavior for block-level HTML elements?
- What layout control does the `display: float` property give web developers?
- What are the two techniques we have for preventing float elements from overlapping?

## Flexbox

- What’s the difference between a flex container and a flex item?
- How do you create a flex item?
- More to come...

# Exercises

- Odin Project: CSS Flexbox Practise Exercises [(.zip)][tutCSSFlexbox]

[tutCSSFlexbox]: ../tutorials/css-exercises-flexbox.zip "Odin Project: CSS Flexbox Exercises. There are 7 exercises total in this set. You should be able to complete them all with what you have learned during Week 5 and 6."
