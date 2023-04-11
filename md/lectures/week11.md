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
- How can we achieve responsive design using just HTML?
- How do we add style and advanced layouts without taking away responisivity?
- How do we recognize patterns in our designs to reuse style components?
- How do we adjust design layouts for different devices? 

---

# What is Responsive Design?

So far in this course, we have learned a great deal of `HTML`, `CSS`, and even some `JavaScript` to create website content, style it, and make it do stuff in a variety of ways. Your Lab3 and Lab4 homeworks are actually examples of the kind of work that web developers do on a regular basis. So what more is there to learn?

Answer: there's always more to learn. Have you ever been on a website that sucks to use? It's not enough just to throw technology at a problem: any creative trade requires both **technique** (`HTML, CSS`) as well as **design**. So what is responsive web design?

> *Responsive web design* is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability. 
>
> <footer>
>   MDN Web Docs, [Responsive Design][mdn-responsive-design]
> </footer>
>
> <br>
>
> With great power [to create websites], comes great responsibility [to make them readable on the devices that people actually use to read websites].
>
> <footer>
>   Uncle Ben, [Spider-Man (2002)](https://www.imdb.com/title/tt0145487/)
> </footer>

**Responsive web design** is an approach to using `HTML` and `CSS` to achieve an ambitious goal: we want not just make any web page, but web pages that render well on all screen sizes and resolutions while retaining usability and function. That is, responsive web design is the set of **best practices** used to create universally usable webpages.

[mdn-responsive-design]: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design

## Examples

It's one thing to know in theory what Responsive web design is. Let's see some examples and learn how to assess how responsive a web design is by experimentation:

Bad examples:

1. lab2
2. lab3

Good examples:

1. lab1!
2. lab4

### Bad examples

### Good examples

## Browser Dev Tools Responsive Mode

Getting good at any approach to `HTML/CSS` requires being able to debug our code and measure our success in achieving a design. Like in previous topics we have learned, modern internet browsers come with a suite of very useful tools for debugging and measuring -- for responsive design, most browsers have a **responsive design mode tool**. 

This tool is how I created the demonstrations in the [previous section](#examples); like [June showed us last week](../pages/tutorials.html#week-11-exercises), you will spend a lot of time opening Responsive Mode and dragging the bottom right corner to test responsivity as take on more web development.

To open and use Responsive Mode in the Browser Developer Tools:

[Firefox][firefox-designmode]: 
    
- Press `Ctrl + Shift + M` (windows/linux) or `option + command + M` (mac/osX)

[Chrome/Edge/Opera + most other browsers][chrome-designmode]: 
    
- Open the developer tools first: `Ctrl + Shift + I`  (windows/linux) or `option + command + I` (mac/osX)
- Then, press `Ctrl + Shift + M` (windows/linux) or `option + command + M` (mac/osX)

On all browsers, you will be able to **change the viewport size** (click + drag on bottom right corner), **choose viewport devices**, **add custom viewport devices**. There are more things the tool can do, but those three are what I use all the time. I've linked the documentation for each browser above, in case you want to learn more about them.

**Make sure you try using the tools yourself!** Head over to the [lab1][lab1solution], [lab2][lab2solution], and [lab3][lab3solution] solution files on this website to see if you can reproduce the videos I shared [above](#examples).

Then, whenever you're on the internet, **try the tool out on other people's websites (mine included! let me know if it sucks!)**

[firefox-designmode]: https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html
[chrome-designmode]: https://developer.chrome.com/docs/devtools/device-mode/

[lab1solution]: ../assignments/lab1solution/index.html
[lab2solution]: ../assignments/lab2solution/index.html
[lab3solution]: ../assignments/lab3solution/index.html
[lab4solution]: ../assignments/lab4solution/index.html

---

# HTML: Responsive by Default

As we saw in the [previous examples](#examples), our very first lab was strangely the *most* responsive of the labs we have made so far. This is because `HTML` is responsive by default:

> HTML is fundamentally responsive, or *fluid*. If you create a web page containing only HTML, with no CSS, and resize the window, the browse will automatically reflow the text to fit the viewport.
> 
> <footer>
>   MDN Web Docs, [Responsive Design][mdn-responsive-design]
> </footer>

Why is that? To understand this, we need to review some `HTML` fundamentals from the beginning of the semester. 

## Default HTML responsivity

There are two types of HTML element: most are `block`, and some are `inline`. How is the `height` and `width` of these elements [computed by default?][w3schools-html-sizes]

`block`: 

- `width: auto;     /* 100% of parent width (forces next element to new line) */`
- `height: auto;    /* same as content height (0px if no content inside element) */`

`inline`: 
    
- `width: auto;     /* same as content width (0px if no content inside element) */`
- `height: auto;    /* same as content height (0px if no content inside element) */`

[w3schools-html-sizes]: https://www.w3schools.com/htmL/html_blocks.asp

Because `HTML` uses relative concepts like **percentage of parent width** to compute width, and because the top visible parent (the `body` element) is by default a `block` element, pure `HTML` **automatically** resizes its elements in response to the devices and viewports of the user.

There are many public websites today which make use of only minimal CSS and are nonetheless fully responsive. Here is an arbitary example example: the online encyclopedia [marxists.org](https://www.marxists.org/reference/archive/hegel/works/hl/hl512.htm#HL2_524), which, among other things, contains `HTML` markup, minimal `CSS`, and the complete works of German philosopher [George Hegel](https://en.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel):

![In his *Science of Logic (1816)*, Hegel explains the relationship between parent and child objects in `HTML` user interfaces. Note that the article is completely readable anywhere between 2000px and 300px (most device widths), but for wider displays, the text starts to become too long.][responsive-html-eg]

[responsive-html-eg]: ../assets/videos/wk11/responsive-html-eg.webm "When webpages written without layout CSS are subject to different devices widths, HTML automatically adjusts the size of all elements to fit the screen." 

The default responsive behavior of HTML is a great starting point for any webside: all elements only take up the height they should take, and their widths adjust automatically to viewport widths. 

## Semantic HTML responsivity

On top of default `HTML` behavior, there are a few more improvements we can make using **semantic**, or meaningful, `HTML` element choices.

![Figure from Interneting is Hard: [Semantic HTML][iih-semantic-html-source]][iih-semantic-html-img]


[iih-semantic-html-img]: https://www.internetingishard.com/html-and-css/semantic-html/semantic-html-ffab7c.png "While semantic HTML elements have the exact same structural behavior as styled `<div>` elements, explicitly marking the meaning of our content defines the purpose of each section of our website, increasing the usability both for end-users as well as for other developers, browsers, and more."
[iih-semantic-html-source]: https://www.internetingishard.com/html-and-css/semantic-html/

By using **semantic**, that is, *meaningful* `HTML` tags, we significantly increase the usability and responsivity of our websites for free. How?

<div class="half-width">
![Semantic elements are *composable*: combine them to create meaning.][iih-footer]
</div>
<div class="half-width">
![Figures from Interneting is Hard: [Semantic HTML][iih-semantic-html-source]][iih-header]
</div>

[iih-footer]: https://www.internetingishard.com/html-and-css/semantic-html/html-footer-element-0c927a.png "The HTML element 'footer' inside of both the 'body' and an 'article' element of the webpage. Semantic elements can be re-used and re-combined to make meaningful distinction between webpage sections."
[iih-header]: https://www.internetingishard.com/html-and-css/semantic-html/html-header-element-7b4e01.png "The HTML element 'header' used much the same way as 'footer' in the previous image."

**NOTE**: Semantic markup does not directly improve the behavior of your webpage at different zoom levels.

That means we still haven't fixed problems like: the long lines of text displayed full screen on a wide monitor that are too wide to read. It isn't automatic to fix either: if we create columns or add padding, we will instead have the opposite problem and our website will be too narrow on small devices.

That's not even to mention: what if we need a real layout? We can't make elements stack on each-other, or "flow" horizontally, with just `HTML`. The point of this lesson isn't to never use `CSS`: it is to know when you actually need to do it, and what you could accidentally take away from the page design by adding it uncritically.

## Lab 4 Tip (HTML)

If you are stuck on Lab 4, you can start by making sense of your `HTML`. Remember that your `HTML` is the **foundation** of your website, and all of your structure and responsivity is based on that foundation. 

You can test how your website `HTML` looks by [removing the Page Style from your browser][remove-page-style]. Here is an example of what the `HTML` for my lab 4 solution looks like:

[remove-page-style]: #

---

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
