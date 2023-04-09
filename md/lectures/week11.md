---
title: "2W6-W23: Week 11 Lecture Notes"
toc-title: "Lecture navigation"
prev-page: "../lectures/week10.html"
next-page: "../lectures/week12.html"
abstract-title: "Responsive Web Development: Best Practise for Best User Experiences"
abstract: |
  Throughout this course, we have learned a variety of techniques for performing particular useful interface tasks. We have focused on learning the mechanics of CSS and HTML in order understand fundamentally how web interfaces are structured.

  This knowledge will pay great dividends in the following section. Here, we are applying our knowledge of HTML and CSS mechanics to learn best practises for creating universally userable, and enjoyable, user interfaces.
---

---

# Lesson Overview

- What is responsive design?
- What are the responsive properties of pure HTML?
- How do we add style and layout without reducing responsiveness?
- How do we recognize patterns in our designs to reuse style components?
- How do we adjust the website layout for different devices? 

---

# What is Responsive Design?[^responsive-design-attribution]



    
[^responsive-design-attribution]: This section was adapted directly from the article ["Responsive Design"][mdn-responsive-design] (MDN Web Docs)

> *Responsive web design* is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability. 
>
> <footer>
>   MDN Web Docs, [Responsive Design][mdn-responsive-design]
> </footer>

Responsive web design isn't a separate technology -- it is an approach. It is a term used to describe a set of **best practices** used to create a layout that can respond to any device being used to view the content.

[mdn-responsive-design]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

## Examples

Creating a non-resizable web page by setting a fixed width doesn't work either; that leads to scroll bars on narrow devices and too much empty space on wide screens.

## Browser Dev Tools Responsive Mode

# HTML: Responsive by Default

> HTML is fundamentally responsive, or *fluid*. If you create a web page containing only HTML, with no CSS, and resize the window, the browse will automatically reflow the text to fit the viewport.
> 
> <footer>
>   MDN Web Docs, [Responsive Design][mdn-responsive-design]
> </footer>

While the default responsive behavior may sound like no solution is needed, long lines of text displayed full screen on a wide monitor can be difficult to read. If wide screen line length is reduced with CSS, such as by creating columns or adding significant padding, the site may look squashed for the user who narrows their browser window or opens the site on a mobile device.

Start Lab 4 by creating the HTML, ensure you have a coherent layout (the relationship between all webpage content makes sense)

# Benefits of Semantic HTML

How to use the Semantic HTML elements to further improve the accesibility of your website by default.

# Responsive CSS Techniques

A list of other CSS techniques worth mentioning

## Percentages vs. Pixels

Fixed vs. dynamic sizing

## Width vs. Max-width

Large screens, things get too big,

## Height vs. Padding

Overflow vs. natural dimensions of container

## Overriding the `position` property

For adjusting specific elements.

## Media queries[^queries-attribution]

[^queries-attribution]: This section was adapted directly from the articles ["Media Queries"][mdn-media-queries] (MDN Web Docs) and ["A Complete Guide to CSS Media Queries"][css-tricks-media-queries](css-tricks).

[css-tricks-media-queries]: https://css-tricks.com/a-complete-guide-to-css-media-queries/

**Media queries** are a key component of responsive design that allow you to apply CSS styles depending properties of client-side device characteristics. 

CSS Media queries are a way to identify important browser characteristics, features, and user preferences, then apply styles adapting to those things. Perhaps the most common media queries in the world are those that target particular [viewport][mdn-viewport] ranges and apply custom styles.

For example, you may have a smaller font size for devices with small screens, increase the padding between paragraphs when a page is viewed in portrait mode, or increase the size of buttons on touchscreens.

###### CSS{.sourceCode}
```css
/* Some default style: */
body {
  background-color: blue;
}

/* When the browser is AT LEAST (min-width) 600px and above */
@media screen and (min-width: 600px) {
  .element {
    /* Apply some styles */
  }
}

/* When the browser is AT MOST (max-width) 600px or below */
@media screen and (max-width: 80rem) {
  .element {
    /* Apply some styles */
  }
}

/* When the browser is BETWEEN 30em and 80em */
@media (min-width: 30em) and (max-width: 80em) {
  body {
    background-color: purple;
  }
}
```

You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. The points at which a media query is introduced, and the layout changed, are known as **breakpoints.**

A common approach when using media queries is to create a simple single-column layout for narrow-screen devices (e.g. mobile phones), then check for wider screens and implement a multiple-column layout when you know that you have enough screen width to handle it. Designing for mobile first is known as **mobile first design.**

Media queries can help with responsive web design, but are not a requirement: they should only be introduced when the web layout you are working with **breaks** (overlaps, overflows, becomes unusable) at small or large resolutions. 

[mdn-at-rule]: https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
[mdn-viewport]: https://developer.mozilla.org/en-US/docs/Glossary/Viewport
[mdn-media-queries]: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

### Media Query Syntax: CSS at-rules

The syntax above may seem strange -- what is the `@` for? We haven't seen it yet: in CSS, [at-rules][mdn-at-rule] (rules starting with an `@` character) define a variety of high-level formatting and layout behaviors for the CSS engine. [`@media`][mdn-media] is the only one we will focus on in this class, but there are a few others that are worth knowing:

- [`@media`][mdn-media]: Defines a conditional group of rules (nested inside curly braces) that apply only if the client device meets certain criteria.
- [`@import`][mdn-import]: Tells the CSS engine to include an external style sheet. This is often used to import fonts, as an alternative to HTML techniques we learned in [week 4](../lectures/week04.html##using-web-font-families).
- [`@namespace`][mdn-namespace]: (Advanced) Allows us to write selectors for XML-based documents like SVG files (i.e.: you can write selectors for XML elements inside of SVG elements using `@namespace` -- this is one way to control \texttt{.svg} styles directly in CSS)

[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/CSS/@import
[mdn-namespace]: https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace
[mdn-media]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media

# Flexbox

The typical layout designs we can achieve in Flexbox

# Responsive design using Grid

This section is adapted directly from [Website Layouts with Grid](https://maujac.github.io/2W6-UI/#/./wk9/layouts_grid) from the Winter 2021 version of the course, in turn based on the page **[Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)** by MDN web docs, **[A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)** by CSS Tricks and [**CSS Grid Layout Module**](https://www.w3schools.com/css/css_grid.asp) by W3Schools.

## Nested grids

A grid item can also become a grid container

###### HTML{.sourceCode}
```html
<div class="wrapper">
    <div class="box1">
        <div class="nested">a</div>
        <div class="nested">b</div>
        <div class="nested">c</div>
    </div>
    <div class="box2">Two</div>
    <div class="box3">Three</div>
    <div class="box4">Four</div>
</div>
```

###### CSS{.sourceCode}
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box1 {
  grid-column: 1/4;
  grid-row: 1/3;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.nested:nth-child(2){
  grid-column: 2/4;
}
```

<iframe height="287" style="width: 100%;" scrolling="no" title="wk9-layout_grid-ex10" src="https://codepen.io/maujac/embed/mdJNOpq?height=287&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/mdJNOpq'>wk9-layout_grid-ex10</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Overlapping Grid Items

Grid items can overlap inside their grid container without any problems.

In the example below **.box2 overlaps on top of .box1** and **.box3 overlaps on top of .box2**.

###### HTML{.sourceCode}
```html
<div class="wrapper">
    <div class="box box1">One</div>
    <div class="box box2">Two</div>
    <div class="box box3">Three</div>
    <div class="box box4">Four</div>
</div>
```

###### CSS{.sourceCode}
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 75px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

.box3 {
  grid-column: 2 / 3;
  grid-row: 3 / 4;
}
```

<iframe height="336" style="width: 100%;" scrolling="no" title="wk9-z-overlap-ex11" src="https://codepen.io/maujac/embed/MWwNbNw?height=336&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/MWwNbNw'>wk9-z-overlap-ex11</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Layering Grid Items

Grid items can be layered/stacked by properly positioning them and assigning `z-index` when necessary. 

> The higher the `z-index` value the higher the priority order of the element.
>
> The default value of `z-index` is 0.

Considering the previous example, we will place .box2 on top of .box1 **and** .box3 by setting it's `z-index` to 1.

###### CSS{.sourceCode}
```css
.box2 {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
  z-index: 1;
}
```



<iframe height="337" style="width: 100%;" scrolling="no" title="wk9-z-index-ex12" src="https://codepen.io/maujac/embed/PoqMpzP?height=337&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/PoqMpzP'>wk9-z-index-ex12</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



## Grid area Property

It is possible to shorten the `grid-row` and `grid-column` notation even further by using `grid-area`

The order of value declaration of `grid-area` is as follows:

1. grid-row-start number
2. grid-column-start number
3. grid-row-end number
4. grid-column-end number

**Syntax**

###### CSS{.sourceCode}
```css
grid-area: <row-start> / <column-star> / <row-end> / <column-end>
```



> Think of the order of declaration as the definition of two points, each defined by a set of row and line numbers in a coordinate system.
>
> - First value is the top-left point
> - Second value is the bottom-right point.



Example of `grid-area`:

###### HTML{.sourceCode}
```html
<div class="wrapper">
   <div class="box1">One</div>
   <div class="box2">Two</div>
   <div class="box3">Three</div>
   <div class="box4">Four</div>
</div>
```



###### CSS{.sourceCode}
```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 75px);
}

.box1 {
   grid-area: 1 / 1 / 4 / 2;
}
.box2 {
   grid-area: 1 / 3 / 3 / 4;
}
.box3 {
   grid-area: 1 / 2 / 2 / 3;
}
.box4 {
   grid-area: 3 / 2 / 4 / 4;
}
```



<iframe height="389" style="width: 100%;" scrolling="no" title="wk9-grid-area-ex13" src="https://codepen.io/maujac/embed/XWbvRVW?height=389&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/XWbvRVW'>wk9-grid-area-ex13</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



## Naming and Positioning by Grid Areas

In the example above we defining an area by specifying the lines that enclose that area:



###### CSS{.sourceCode}
```css
.box1 {
   grid-area: 1 / 1 / 4 / 2;
}
```



It is also possible to define an area by giving it a name via  [`grid-area`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)  and then specify the location of that area with the [`grid-template-areas`](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) property.

Consider the layout below with the following sections:

- header
- footer
- sidebar
- main content

###### CSS{.sourceCode}
```html
<div class="wrapper">
    <header>Header</header>
    <footer>Footer</footer>
    <main>Main</main>
    <aside class="sidebar">Sidebar</aside>
</div>
```



## Assigning names with `grid-area` 

You can assign any name to a HTML element with the `grid-area`  property.

###### CSS{.sourceCode}
```css
header {
    grid-area: hd;
}
footer {
    grid-area: ft;
}
main {
    grid-area: main;
}
.sidebar {
    grid-area: sd;
}
```



Once the naming convention has been assigned, create the layout using the item names instead of line numbers. 

## Templates with `grid-template-areas`

The `grid-template-areas` property defines a grid template by referencing the names of the grid areas.

- Repeating the name of a grid area causes the content to span those cells.
- The area names should be surrounded in single or double quotes.
- Each name must be separated by a whitespace.
- A period signifies an empty cell. 

###### CSS{.sourceCode}
```css
.wrapper {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(3, 75px);
    
    grid-template-areas: 
      "hd  hd  hd   hd"
      "sd  .  main main"
      "sd  ft  ft   ft";
}
```



<iframe height="386" style="width: 100%;" scrolling="no" title="wk9-grid-area_names-ex14" src="https://codepen.io/maujac/embed/vYOomae?height=386&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/vYOomae'>wk9-grid-area_names-ex14</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



# Using Grid vs Flexbox

When to use Grid rather than Flexbox? Ask yourself the following questions:

### 1 direction vs 2 directions

If you **only** need to control the layout by **row *or* column** – use a flexbox

If you need to control the layout by **both row *and* column** – use a grid


### Content vs layout

Flexbox works from the content out, meaning you start with a set of items and then you space them out evenly inside a flexbox.

- The size of the content decides how much individual space each item  takes up **on that line.**



Grid works from the layout in. You start by creating a layout and then you place items inside it.

- The layout of the grid determines the size of the elements.

>  If you are using flexbox and find yourself disabling some of the flexibility, you probably need to use CSS Grid Layout.

An example would be setting a percentage width on a flex item to make it line up with other items in a row above.

> Flexbox and Grid are perfectly compatible and most powerful when used together


# Semantic CSS?

## Organizing stylesheets

## Choosing class names

## Choosing the right selector

# Knowledge Check

Stay tuned for more information!

# Readings

1.

# Exercises

These exercises will be based on June's guest lecture (Wednesday, April 5)


[semrush-html-review]: https://www.semrush.com/blog/semantic-html5-guide/ 
