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
![Our sample layout without `float` property set][nofloat-img]
</div>
<div class="half-width">
![The same layout with `float: left` property added.][float-img]
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

## Nested floating elements


Floated boxes always align to the left or right of their **parent** element -- not their grandparent, not the `<body>` element, but their immediate parent. 

In our example, the sidebar's parent is `<div class='page'>`, which is as wide as the browser window. This is why our sidebar floats to the far left of the page.

If instead we had a fixed width for our `<div class='page'>` element, the floated boxes inside of this element will float to the far left of **its parent element**. Try inserting the code below into the CodePen we have been practising with. 

###### CSS{.sourceCode}
```CSS
.page {
  width: 900px; /* Add this line */
  margin: 0 auto;
}
```

Does the `sidebar` hug the left hand of the browser window, or of its parent? You may need to zoom out in your browser window to observe the effect.

Positioning nested container divs like this is how you build up
sophisticated website layouts. Here, we started with `.page` to center *everything*, then we left-aligned a sidebar *inside* that centered page. Things can get way more complex, but our simple example demonstrates the universal truth of CSS layouts: *everything is a box, inside of another box, inside of another box, etc.*


## Multiple floats

Let’s examine our current magazine-style float a little bit more by adding an explicit width to our .content block:

###### CSS{.sourceCode}
```css
.content {
  width: 650px;                 /* Add this */
  height: 500px;
  background-color: #F5CF8E;
}
```

This clearly demonstrates that our sidebar is in fact inside the `.content` block: if you take a screenshot of them, you’ll have an image that’s 650 pixels wide opposed to 850 pixels (our sidebar is 200 pixels wide). You can see the outcome of these changes in the CodePen below (**you will probably need to use 0.5x or 0.25x zoom).

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLxNZGp" data-user="michaelhaaf" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/michaelhaaf/pen/yLxNZGp">
  wk5-float-2</a> by Michael Haaf (<a href="https://codepen.io/michaelhaaf">@michaelhaaf</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

This kind of float behavior is nice for images (which we’ll see [later on](#floats-for-content)), but for page layout, we actually want the content block to be next to the sidebar, rather than having the sidebar float on-top of it. 

Remember that assigning the `float` property **changes the default flow behavior, allowing horizontal flow, for just that element**. In order for other elements to ALSO have different/horizontal flow, we need to make THOSE elements have the `float` property set as well. Add one more line to the `.content` rule:

###### CSS{.sourceCode}
```css
.content {
  float: left;            /* Add this line */
  width: 650px;
  height: 500px;
  background-color: #F5CF8E;
}
```

When you float multiple elements in the same direction, they’ll stack horizontally, much like the default vertical layout algorithm, except rotated 90 degrees. The above code causes our entire content block to appear on the right of the sidebar instead of wrapping around it.

This gives us true control over the horizontal alignment of our block boxes. Try playing with the float values for both `.sidebar` and `.content,` and you’ll find that we already have a couple of distinct layouts at our disposal:
You probably noticed that our footer shows up in the top right, directly below .menu. That’s because floated boxes are removed from the normal flow of the page. The height of our floated elements don’t contribute to the vertical position of the footer, so it simply sticks itself below the last element that wasn’t floated.
![Figure from Interneting is Hard: [Floats][layouts-source]][layouts-img]

[layouts-img]: ../assets/content/wk5/iih-float-layout-combinations.png  "Changing the value of the `float` property for the `.sidebar` and `content` elements allows us at least four different distinct and useful layout combinations."
[layouts-source]: https://www.internetingishard.com/html-and-css/floats/


## After a Float

You probably noticed that our footer shows up in the top right, directly below `.menu`. That’s because floated boxes are removed from the normal flow of the page; therefore, **the height of our floated elements do not contribute to the vertical position of the footer**, so it simply sticks itself below the last element that wasn’t floated (i.e., the `.menu`).

We can see this more clearly by adding a red border around our .page element:

###### CSS{.sourceCode}
```css
.page {
  width: 900px;
  margin: 0 auto;
  border: 1px solid red;  /* Add this */
}
```
Notice how the border is only around the `.menu` and `.footer` elements. It’s as if the floated elements weren’t even there. There are two ways to fix this: **clearing a float** and **hiding overflow**.

## Clearing Floats

This lesson (and those below it) is under construction! I will post an update on LEA when there is content here to see.

## Hiding Overflow

## Example Float-based Layouts

### Floats for Equal-Width Columns

### Floats for Grids

### Floats for Content

# Flexbox

*This lesson was adapted from the online HTML/CSS learning resource, [The Odin Project](https://www.theodinproject.com/lessons/foundations-introduction-to-flexbox).*

This lesson is under construction! I will post an update on LEA when there is content here to see.

# Knowledge Check

## Floats

This chapter was our first encounter with realistic web page layouts. We learned how to float divs to the left and right, how to deal with content after a float, and how to combine floats with the auto-margin centering technique from the CSS Box Model chapter. These are the tools we need to create sidebars, grids, an magazine-style layouts.

- What is the default layout behavior for block-level HTML elements?
- How does the default block-level layout behavior change for elements with the `float` property set?
- What are the two techniques we have for preventing float elements from overlapping?

## Flexbox

- What’s the difference between a flex container and a flex item?
- How do you create a flex item?
- More to come...

# Exercises

- Odin Project: CSS Flexbox Practise Exercises [(.zip)][tutCSSFlexbox]

[tutCSSFlexbox]: ../tutorials/css-exercises-flexbox.zip "Odin Project: CSS Flexbox Exercises. There are 7 exercises total in this set. You should be able to complete them all with what you have learned during Week 5 and 6."
