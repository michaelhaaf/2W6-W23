---
title: "2W6-W23: Week 10 Lecture Notes"
prev-page: "week09"
next-page: "week11"
abstract-title: "Intermediate CSS: Mastering Layouts with CSS Grid"
abstract: |
  We are now reaching a point in our CSS skills that we can create almost any layout or structure that we can envision.

  This week, we will learn about CSS Grid. These lecture notes are summaries adapted directly from The Odin Project.

---

Last update: Friday, March 31, 2023

---

# Lesson Overview

By the end of these lessons, you will know:

- what CSS Grid is and what it is useful for, its basic differences from Flexbox
- how to create and define the basic properties of a Grid Container
- how to manipulate Grid Items (elements inside a Grid Container)
- how create responsive, flexible, automatic Grids


---

# CSS Grid Fundamentals

**Lecture Notes:** [Grid Fundamentals (Introduction to Grid)][odin-fundamentals]

## Overview

For this week, the lectures will be based directly on CSS Grid notes from the Odin Project.

[odin-fundamentals]: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-introduction-to-grid
[odin-creating-grid]: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-creating-a-grid
[odin-positioning-grid]: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-positioning-grid-elements
[odin-automated-grid]: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-advanced-grid-properties

In the first part of the Grid lessons, you will learn what CSS Grids are: an explicit mechanism for defining two dimensional layouts in CSS. Before Grids (and [Flexbox](../week06.html), complicated website layouts were defined using [Tables][table-layouts] -- terrible! 

[table-layouts]: https://www.hotdesign.com/seybold/

By the end of this lesson, you should be able to:

- Compare the basics between Flexbox and Grid
- Describe a situation for using Grid over Flexbox

## Knowledge Check

This section contains questions for you to check your understanding of [grid fundamentals](css-grid-fundamentals). If you’re having trouble answering the questions below on your own, review the material above to find the answer.

- How can you use Flex to make a two-dimensional layout?
- Why was CSS Grid introduced?
- Which CSS layout module would you use to easily make equal sized items in a container?

# Creating a Grid

**Lecture Notes:** [Creating a Grid][odin-creating-grid]

## Overview

The previous article covered what CSS Grid Layouts are. In this article, you'll learn how to create your own grid. This lesson will cover making a grid container, adding columns and rows, the explicit and implicit concept behind Grid and how to space out grid gaps.


By the end of this lesson, you should be able to:

- Make a grid container
- Define grid tracks
- Explain the difference between an implicit and explicit grid
- Set gaps between grid cells

## Knowledge Check

This section contains questions for you to check your understanding of [creating a grid](#creating-a-grid). If you’re having trouble answering the questions below on your own, review the material above to find the answer.

- How does an HTML element become a grid item?
- What is the space between lines on the grid?
- How do you set gutters (also known as alleys) in the grid?
- Describe what happens when you have more content than defined tracks.
- How could you change the size for those undefined tracks?


# Positioning Grid Items 

**Lecture Notes:** [Positioning Grid Items][odin-positioning-grid]

## Overview 

In this lesson we will examine the different parts of a grid and explore common properties that can be used to position grid items.

By the end of this lesson, you should be able to:

- Describe the differences between tracks, lines and cells in CSS Grid
- Position items by defining their start and end lines
- Use shorthand notation for CSS Grid properties like `grid-template`, `grid-column`, `grid-row`, etc.

## Knowledge Check

This section contains questions for you to check your understanding of [positioning grid items](#positioning-grid-items). If you’re having trouble answering the questions below on your own, review the material above to find the answer.

- Explain the difference between a track and a line.
- What is the smallest unit on a grid?
- What kind of value do we give to the grid-column-start or grid-column-end properties?
- Which property can we use to combine all the start and end values for a grid item?
- Which grid container property can map out a visual structure of grid items?


# Automated Grids

**Lecture Notes:** [Automated Grids (Advanced Grid Properties)][odin-automated-grid]

## Overview

In the last part of the Grid lessons, you will learn how to define Automated Grids -- that is, grids which can automatically adapt otherwise static properties like the number of rows/columns, or the sizes of rows/columns.

By the end of this lesson, you will know how to:

- Create multiple grid tracks more easily using the repeat function
- Create grid tracks using `fr` units instead of an explicit size
- Set minimum, maximum, and ideal track size boundaries
- Use `auto-fit` and `auto-fill` to create a grid with a dynamic number of rows or columns
- Use `auto-fit/auto-fill` along with `minmax()` to create responsive grids

## Knowledge Check

This section contains questions for you to check your understanding of [automated grid properties](#automated-grids). If you’re having trouble answering the questions below on your own, review the material above to find the answer.

- How do you create several grid tracks of the same size without manually typing each one out?
- What is the difference between a static and dynamic size value?
- How can you assign a grid track a flexible value that changes depending on the remaining space available in the grid?
- How can you assign grid tracks an uneven distribution of the remaining space in a grid?
- Which CSS functions will return the smallest or largest value supplied to them?
- Which CSS Grid-only function allows you to supply a minimum and maximum track size that is calculated in realtime?
- Which global CSS function allows you to supply a minimum, ideal, and maximum value that is calculated in realtime?
- What attribute of repeat() can be used to fill in as many grid tracks as possible, given certain constraints?
- What is the difference between auto-fit and auto-fill?

# Readings and Resources

1. [CSS Grid Garden][grid-garden]: Similar to Flexbox Froggy and CSS Diner, this is an interactive set of Grid puzzles to help you get used to the mechanics of CSS grid. While it's a bit easy, it is worthwhile to practise to remind yourself of the various CSS Grid properties.
2. [CSS Grid Garden (solutions)][grid-garden-solutions]: Once you have tried your best to solve the 28 exercises in CSS Grid Garden, you can see reasonable explanations of most of the levels in this article -- in case there are any that you didn't quite understand on your own.
3. [CSS Tricks: A Complete Guide to Grid][css-tricks-grid]: This article is a complete reference to all of the properties available to CSS Grid containers and items. It is an excellent reference (with visual demonstrations) for what grids are capable of in most situations.
4. [Kevin Powell: Learn CSS Grid the easy way][kp-grid]: This YouTube tutorial (almost 40mins) is a reasonable introduction and demonstration of how CSS grid works. This is a good supplementary lecture to watch in case you would like additional visual demonstration beyond what we have covered in class.

[grid-garden]: https://cssgridgarden.com/
[grid-garden-solutions]: https://programmingmentor.com/post/playing-css-grid-garden/
[css-tricks-grid]: https://css-tricks.com/snippets/css/complete-guide-grid/
[kp-grid]: https://www.youtube.com/watch?v=rg7Fvvl3taU

# Exercises

1. Odin Project: CSS Grid Practise Exercises [(.zip)][tutCSSGrid]

[tutCSSGrid]: ../tutorials/css-exercises-grid.zip "Odin Project: CSS Grid Exercises. There are 3 exercises total in this set."
