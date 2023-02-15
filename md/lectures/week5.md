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

## Default HTML Layout Behavior

Floats alter the default layout of a web page, so we should probably start by reviewing what exactly that “default” behavior is. Default HTML flow was covered in Week 2 and 3, you can currently find our class notes about this on **LEA**.

Below is a simple codepen demonstrating the default HTML flow. We can see that each block-level element (that's all of the `<div>` elements) fills 100% of its parent elements’s width (`<div class='page'>` in this case), and they appear vertically one after another. 

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLxygJZ" data-user="michaelhaaf" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/michaelhaaf/pen/yLxygJZ">
  wk5-float-layout</a> by Michael Haaf (<a href="https://codepen.io/michaelhaaf">@michaelhaaf</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

We can see a single column layout with one element stacked on top of another in the flow. 

Typically, you’d want to let the height of these boxes be determined automatically based on the content they contain; however, we’re more concerned with controlling layouts this chapter, so we won’t be dealing with much real content. This is the reason for setting explicit `height` properties in the CSS.

It’s worth taking a look at what happens when we shrink an element’s width. Try opening the CodePen (click the "Edit on Codepen" button) and update the .sidebar rule to match the following:

###### CSS{.sourceCode}
```css
.sidebar {
  width: 200px;                 /* Add this */
  height: 300px;
  background-color: #F09A9D;
}
```

The sidebar element gets narrower, but the rest of the boxes stay in the same position. All the blocks are still rendered vertically one after another. This is the behavior we’ll be changing with floats.

## Floating an Element

The CSS float property gives us control over the horizontal position of an element. By “floating” the sidebar to the left, we’re telling the browser to align it to the left side of the page. Go ahead and float our sidebar with the following line:

###### CSS{.sourceCode}
```css
.sidebar {
  float: left;                  /* Add this */
  width: 200px;
  height: 300px;
  background-color: #F09A9D;
}
```

However, this doesn’t just align the sidebar — it also tells surrounding elements that they can flow around the sidebar instead of beginning underneath it. It’s as if the sidebar is inside the .content block, so any HTML markup in .content would wrap around the sidebar’s box. This gives us a magazine-style layout:

<div class="half-width">
![Our sample layout without `display` property set][nofloat-img]
</div>
<div class="half-width">
![The same layout with `display: float` property added.][float-img]
</div>

[float-img]: ../assets/content/wk5/iih-width-float.png  "ajlkwdja"
[nofloat-img]: ../assets/content/wk5/iih-width-nofloat.png  "ajlkwdja"
[float-source]: https://www.internetingishard.com/html-and-css/floats/

**Try changing the CodePen above** until you can see the results shown in these figures!

We are not constrained to floating elements to the left as in the above example. Try experimenting with the following properties as well:

###### CSS{.sourceCode}
```css
/* styles for block-level elements */
float: left;   /* left-aligned */
float: right;   /* Right-aligned */
float: none;   /* Reset to default flow */
margin: 0 auto;   /* Use margins for centering elements (do not need float property for this) */

/* styles for inline elements */
text-align: center; 
```

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
