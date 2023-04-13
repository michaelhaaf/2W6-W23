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
- How do we achieve responsive design using just HTML?
- How do we add style and advanced layouts without taking away responisivity?
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

It's one thing to know in theory what Responsive web design is. Let's see some examples and learn how to assess how responsive a web design is by experimentation.

It turns out, our lab work so far this semester is a good starting point. We already have a few examples to work with:

[lab1-eg]: ../assets/videos/wk11/lab1-eg.webm "Lab 1 demonstrates surprisingly strong responsive traits, realigning images (which are inline elements by default) and resizing text appropriately in response to increased zoom." 
[lab2-eg]: ../assets/videos/wk11/lab2-eg.webm "Lab 2 shows how horizontal scrollbars are introduced when CSS layout forces the page layout to be wider than the viewport width" 
[lab3-eg]: ../assets/videos/wk11/lab3-eg.webm "Lab 3 shows that information can even be LOST when CSS layouts force the page width to be wider than the viewport width. Lab 3 also shows how Flexbox row-wrap does adjust elegantly to decreased viewport width, automatically restacking its flex-items." 
[lab4-eg]: ../assets/videos/wk11/lab4-eg.webm "Lab 4 shows that with careful CSS choices, our elements and our layout can be perfeclty responsive, even when that layout is complex." 

### Bad examples:

1. [Lab 2][lab2solution]: 

In Lab 2, we can see one classic example of poor usability when the device width narrows. A **horizontal scrollbar** is introduced. On mobile phones, users will have to scroll sideways in order to see the full content.

![Video: How my **Lab 2** solution responds to a variety of viewport widths. Ignore the weird resolution, I'll fix that later. Try to see where the website "breaks" as you change the preview size.][lab2-eg]

2. [Lab 3][lab3solution]: 

While it is possible to make Lab 3 work at a particular width, and even with clever use of `margin: 0 auto` we can center it at wide widths, there are quite a few issues that are introduced when we reduce the viewport width.

We once again see the **horizontal scrollbar**, but not just that: at certain widths, we even **lose information**! This is a devastating result: it means that your `CSS` is preventing the browser from rendering your content at all, making it impossible for the user to recover without using developer tools.

![Video: How my **Lab 3** solution responds to a variety of viewport widths. Try it yourself to see where the website "breaks" as you change the preview size.][lab3-eg]

### Good examples

1. Lab 1 (!!): [(link to solution preview -- try it out yourself!)][lab1solution], 

Surprisingly, our first lab is one of our best for demonstrating responsible design. We'll see in the [next section](#html-responsive-by-default) why this the case.

![Video: How my **Lab 1** (partially complete) solution responds to a variety of viewport widths. Ignore the weird resolution, I'll fix that later. See how the website does not experience the same "breaks" as the previous examples.][lab1-eg]

2. Lab 4: see below for a preview.

Finally, we have Lab 4. When Lab 4 is finished, we should be able to combine the natural responsivity of simple websites like Lab 1, with the more complicated needs of modern web layout and styling demanded by websites like Lab 2 and Lab 3.

![Video: How your **Lab 4** should (approximately) respond to a variety of viewport widths when complete. Pay attention to both how the the overall *layout*, as well as the individual *elements* like buttons and images, adjust as the viewport changes. NOTE: yours does not have to be exactly the same as mine, refer to the Lab 4 instructions for requirements.][lab4-eg]

## Browser Dev Tools Responsive Mode

Getting good at any approach to `HTML/CSS` requires being able to debug our code and measure our success in achieving a design. Like in previous topics we have learned, modern internet browsers come with a suite of very useful tools for debugging and measuring -- for responsive design, most browsers have a **responsive design mode tool**. 

This tool is how I created the demonstrations in the [previous section](#examples); like [June showed us last week](../pages/tutorials.html#week-11-exercises), you will spend a lot of time opening Responsive Mode and dragging the bottom right corner to test responsivity as take on more web development.

To open and use Responsive Mode in the Browser Developer Tools:

[Firefox][firefox-designmode]: 
    
- Press `Ctrl + Shift + M` (windows/linux) or `option + command + M` (mac/osX)

[Chrome/Edge/Opera + most other browsers][chrome-designmode]: 
    
- Open the developer tools first: `Ctrl + Shift + I`  (windows/linux) or `option + command + I` (mac/osX)
- Then, press `Ctrl + Shift + M` (windows/linux) or `option + command + M` (mac/osX)

On all browsers, you will be able to **change the viewport size** (click + drag on bottom right corner), **choose viewport devices**, and **add custom viewport devices**. There are more things the tool can do, but those three are what I use all the time. I've linked the documentation for each browser above, in case you want to learn more about them.

**Make sure you try using the tools yourself!** Head over to the [lab1][lab1solution], [lab2][lab2solution], and [lab3][lab3solution] solution files on this website to see if you can reproduce the videos I shared [above](#examples).

Then, whenever you're on the internet, **try the tool out on other people's websites** (mine included! let me know if it sucks!). 

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

There are many public websites today which make use of only minimal CSS and are nonetheless fully responsive. Here is an arbitary example example: the online encyclopedia [marxists.org](https://www.marxists.org/reference/archive/hegel/works/hl/hl512.htm#HL2_524), which, among other things, features **semantic `HTML`** markup, **minimal `CSS`** styling, and the complete works of German philosopher [George Hegel](https://en.wikipedia.org/wiki/Georg_Wilhelm_Friedrich_Hegel):

![In his *Science of Logic (1816)*, Hegel explains the relationship between parent and child objects in `HTML` user interfaces. Note that the article is completely readable anywhere between 2000px and 300px (most device widths), but for wider displays, the text starts to become too long.][responsive-html-eg]

[responsive-html-eg]: ../assets/videos/wk11/responsive-html-eg.webm "When webpages written without layout CSS are subject to different devices widths, HTML automatically adjusts the size of all elements to fit the screen." 

The default responsive behavior of HTML is a great starting point for any website: all elements only take up the inherent height of their actual content, and their widths adjust automatically to viewport widths. 

## Semantic HTML responsivity

On top of default `HTML` behavior, there are a few more improvements we can make using **semantic** `HTML` element choices.

![Figure from Interneting is Hard: [Semantic HTML][iih-semantic-html-source]][iih-semantic-html-img]


[iih-semantic-html-img]: https://internetingishard.netlify.app/semantic-html-ffab7c.f3d6e999.png "While semantic HTML elements have the exact same structural behavior as styled `<div>` elements, explicitly marking the meaning of our content defines the purpose of each section of our website, increasing the usability both for end-users as well as for other developers, browsers, and more."
[iih-semantic-html-source]: https://internetingishard.netlify.app/html-and-css/semantic-html/index.html

By using **semantic**, that is, *meaningful* `HTML` tags, we significantly increase the usability and responsivity of our websites for free. How?

Here is a (incomplete) list of ways:

- Browser [reader mode][css-tricks-reader-mode] discards elements like `<aside>`, `<header>`, `<footer>` etc. to focus on the `<main>` and `<article>` content of a webpage, allowing users to easily get a distraction and advertisement (!) free experience of any website. Reader mode **is not available** when semantic markup is not present.
- [Search Engine Optimization](https://en.wikipedia.org/wiki/Search_engine_optimization) relies on semantic HTML to determine the content of a webpage, making search results about your webpage more accurate.

[css-tricks-reader-mode]: https://css-tricks.com/reader-mode-the-button-to-beat/

<div class="half-width">
![Semantic elements are *composable*: combine them to create meaning.][iih-footer]
</div>
<div class="half-width">
![Figures from Interneting is Hard: [Semantic HTML][iih-semantic-html-source]][iih-header]
</div>



[iih-footer]: https://internetingishard.netlify.app/html-footer-element-0c927a.ea3eb425.png "The HTML element 'footer' inside of both the 'body' and an 'article' element of the webpage. Semantic elements can be re-used and re-combined to make meaningful distinction between webpage sections."
[iih-header]: https://internetingishard.netlify.app/html-header-element-7b4e01.d7494385.png "The HTML element 'header' used much the same way as 'footer' in the previous image."

Semantic HTML doesn't just improve the responsivity of your layout, it also also improves the responsivity of individual HTML elements. [You can find some ineresting examples at w3schools](https://www.w3schools.com/html/html_accessibility.asp), some highlights:

- `<button>` elements (as opposed to using a restyled/javascripted `<div>`) are [clickable][w3schools-semantic-html], [focusable][w3schools-semantic-html] and [understood by screen-readers][w3schools-semantic-html] by default. `<a>` elements are very similar in this manner.
- `<img>` tags with defined `alt` attributes allow you to automatically replace the content of an image in case the connection is bad/it cannot be rendered/some other issue -- on top of allowing non-sighted users to understand your content.
- screenreaders (and other tools) automatically generate Tables of Contents from your heading (`<h1>, <h2>,` etc.) elements. See the *Lecture Navigation* section of my website for an example!

[w3schools-semantic-html]: https://www.w3schools.com/html/html_accessibility.asp

As we can see, there is a large overlap between **Responsive Design** and [Accessibility](../lectures/week12.html#accessibility) -- in fact, I would say that Responsive Design is a subset of the broader study of accessible web design. We will cover this all in more detail next week!

### CSS: what is it good for?

**NOTE**: Semantic markup does not directly improve the behavior of your webpage at different zoom levels.

That means we still haven't fixed problems like: the long lines of text displayed full screen on a wide monitor that are too wide to read. It isn't automatic to fix either: if we create columns or add padding, we will instead have the opposite problem and our website will be too narrow on small devices.

That's not even to mention: what if we need a real layout? We can't make elements stack on each-other, or "flow" horizontally, with just `HTML`. The point of this lesson isn't to never use `CSS`: it is to know when you actually need to do it, and what you could accidentally take away from the page design by adding it without understanding it.

## The Viewport Meta Tag

There is one other `HTML` optimization worth knowing about. It's actually something that we have been using throughout this course without really acknowledging. Take a look at the [boilerplate](../pages/tutorials.html#week-01-exercises) code block below:

###### HTML{.sourceCode}
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Some title</title>
    <meta charset="UTF-8">

    /* What is the point of this element? */
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="css/style.css" rel="stylesheet">
  </head>
  <body>
  </body>
</html>
```

Many pages are not mobile optimized, and break (or at least look bad) when rendered at a small viewport width.

Therefore, narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is usually wider than the screen, and then shrink the rendered result down so it can all be seen at once.

The “viewport meta tag” let web developers control the viewport’s size and scale of a site and request that the site be loaded at the correct device width.

Make sure to include this in your website when using Media Queries or the browser might not load the correct page layout. **This element is included for free when you use the VSCode `!` emmet for automatically producing boilerplate.**

# Lab 4 Tip (HTML)

If you are stuck on Lab 4, you can start by making sense of your `HTML`. Remember that your `HTML` is the **foundation** of your website, and all of your structure and responsivity is based on that foundation. 

You can test how your website `HTML` looks by [removing the Page Style from your browser][remove-page-style]. Here is an example of what the `HTML` for my lab 4 solution looks like:

[remove-page-style]: #

---

# Responsive CSS Techniques

A list of other CSS techniques worth mentioning

## Height/Width vs. Padding

Style vs. Content specified size

Big picture:

- avoid setting `width` and `height` directly as much as possible (forces overflow, changes the behavior of the element in surprising ways)
- to set element height: add vertical padding (make content "taller")
- to set element width: add horizontal padding (make content "wider")


## Pixels vs. Percentage/Relative Units

Fixed vs. dynamic sizing. 

Big picture:

- percentages to divide containers into portions
- `em` for element sizes (auto adjust to PARENT font size: small font button should not grow as fast as large font button) 
- `rem` for text (user preference set at root, auto adjust all fonts to user prefence in proportion. `em` will use PARENT font size, which can cause deeply nested element font sizes to grow/shrink exponentially)

## Max and Min Height/Width

Overflow vs. natural dimensions of container

Big picture:

- in addition to the recommendations above:
- to set limits on how much an element's size can grow/shrink, use `min-` and `max-` properties instead.

See below.

- `max-width`:
- `min-width`:

- `max-height`:
- `min-height`:

## Media queries

[^queries-attribution]: This section was adapted directly from the articles ["Media Queries"][mdn-media-queries] (MDN Web Docs) and ["A Complete Guide to CSS Media Queries"][css-tricks-media-queries](css-tricks).


**Media queries**[^queries-attribution] are a key component of responsive design that allow you to apply CSS styles depending properties of client-side device characteristics. 

[css-tricks-media-queries]: https://css-tricks.com/a-complete-guide-to-css-media-queries/

CSS Media queries are a way to identify important browser characteristics, features, and user preferences, then apply styles adapting to those things. Perhaps the most common media queries in the world are those that target particular [viewport][mdn-viewport] ranges and apply custom styles.

Some possible examples:

1. Increase font size for devices with large screens
2. Increase the padding between paragraphs when a page is viewed on a narrow device
3. Increase the size of buttons on touchscreens

You can see an example of each below.

1. Increasing font size for devices with large screens using `min-width`:

###### CSS{.sourceCode}
```css
/* Some default style: */

html {
    /* Browser default is 16px, this will keep it at 16px */
    font-size: 100%;  
}


/* @media query override: */

/* Example using "min-width":
* When the browser is AT LEAST (min-width) 800px or larger: */
@media screen and (min-width: 800px) {
    html {
        font-size: 125%;    /* increase font size on large screens! */
    }
}
```

2. Increase the padding between paragraphs when a page is viewed on a narrow device using `max-width`

###### CSS{.sourceCode}
```css
/* Some default style: */

article p {
    /* Common typographic style: padding on top, margin on bottom */
    padding-top: 0.5rem;
    margin-bottom: 1.5rem;
}

/* @media query override: */

/* Example using "max-width":
* When the browser is AT MOST (max-width) 600px or smaller: */
@media screen and (max-width: 600px) {

    article p {
        /* It is common for line-height to be 1.5rem, so in this e.g.:
        *   - large devices: 0.5rem + 1rem = 1 line of whitespace
        *   - small devices: 1rem + 2rem = 2 lines of whitespace */
        padding-top: 1rem;  
        margin-bottom: 2rem; 
    }
}

```

3. Increase the size of buttons on touchscreens using ["hover"][mdn-hover]:

###### CSS{.sourceCode}
```css
/* Some default style: */

button {
    /* Use padding to define the "content" size of the button */
    padding: 1em 2em; 
}

/* @media query override: */

/* Example: detecting "touchscreen" device type with "hover: none" 
* When the browser does NOT have the ability to "hover":
*/
@media (hover: none) {

    /* overwrite previous values only on devices that cannot "hover" */
    button {
        padding: 2em 4em;
    }
}
```

[mdn-hover]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover

You can add multiple media queries within a stylesheet, tweaking your whole layout or parts of it to best suit the various screen sizes. The points at which a media query is introduced, and the layout changed, are known as **breakpoints.**

There are many other possible `@media` queries we can do, though `min-width` is the most common. You can see a complete list of possible breakpoints in the ["Media Features that can be Queried"](https://maujac.github.io/2W6-UI/#/./wk8/media_queries?id=media-features-to-be-queried) section of course notes from a previous year.

### Mobile first design

A common approach to web design is to start with a simple single-column layout for narrow-screen devices (e.g. mobile phones). Then, use `min-width` queries to check for wider screens, and add *only the rules necessary* to implement a multiple-column layout when you know that you have enough screen width to handle it. Designing for mobile first is known as **mobile first design.**

There three good reasons for this:

- Mobile-first websites are **lighter** in processing requirements for mobile users, since the browser only has to apply the CSS that occurs before `@media` queries. 
- The processing of complex media queries and the rendering of intricate layouts are done by larger devices, which presumably has higher computational power.
- Mobile layouts are simpler (usually [plain HTML][html-responsive-by-default] will suffice!) and therefore: easier to implement, faster to code, and easier to maintain. Complexity should be added incrementally as screen sizes increase.

Media queries can help with responsive web design, but are not a requirement: they should only be introduced when the web layout you are working with **breaks** (overlaps, overflows, becomes unusable) at small or large resolutions. 

[mdn-at-rule]: https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
[mdn-viewport]: https://developer.mozilla.org/en-US/docs/Glossary/Viewport
[mdn-media-queries]: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries

### Media Query Specificity

**NOTE WELL**: `@media` queries *do not add [specificity](../lectures/week09.html#specificity)* to your selectors. The examples above only worked *because the queries were placed at the end of the stylesheet* -- remember that, in a tie between two equally specific selectors, the *last selector read by the Browser wins*. 

A **common best practise** is to place your `@media` queries at the end of your files so that you do not need to make your `@media` queries any more specific than they need to be.


### Media Query Syntax: CSS at-rules

The syntax above may seem strange -- what is the `@` for? We haven't seen it yet: in CSS, [at-rules][mdn-at-rule] (rules starting with an `@` character) define a variety of high-level formatting and layout behaviors for the CSS engine. [`@media`][mdn-media] is the only one we will focus on in this class, but there are a few others that are worth knowing:

- [`@media`][mdn-media]: Defines a conditional group of rules (nested inside curly braces) that apply only if the client device meets certain criteria.
- [`@import`][mdn-import]: Tells the CSS engine to include an external style sheet. This is often used to import fonts, as an alternative to HTML techniques we learned in [week 4](../lectures/week04.html##using-web-font-families).
- [`@namespace`][mdn-namespace]: (Advanced) Allows us to write selectors for XML-based documents like SVG files (i.e.: you can write selectors for XML elements inside of SVG elements using `@namespace` -- this is one way to control \texttt{.svg} styles directly in CSS)

[mdn-import]: https://developer.mozilla.org/en-US/docs/Web/CSS/@import
[mdn-namespace]: https://developer.mozilla.org/en-US/docs/Web/CSS/@namespace
[mdn-media]: https://developer.mozilla.org/en-US/docs/Web/CSS/@media

# CSS Flexbox and Grid


## Flexbox techniques

Flexbox inherently allows for more precise control of how elements respond when their container width changes. Review [flexbox course content](../lectures/week06.html) for more information.

One way that Flexbox really shines is in combination with [media queries](#media-queries). Here is an example: 

###### CSS{.sourceCode}
```css
/* Say you have a flex container... */
.flex-container {
  display: flex;
  flex-direction: column; /* Single column layout for mobile devices? */

  gap: 1em;               /* some flexbox properties... */
  justify-content: center;
  align-items: center;
}

/* Responsive layout - makes a column into a row when a minimum width is met. */
@media (min-width: 800px) {
  .flex-container {
    flex-direction: row;

    /* all of the properties we set in .flex-container are maintained */
    /*align-items: center; (not necessary) */
    /*gap: 1em; (not necessary) */

    /* but that doesn't stop us from overwriting some if we like */
    justify-content: flex-start; 
  }
} 
```

Check out [w3schools](https://www.w3schools.com/css/css3_flexbox_responsive.asp) for more examples.

## Grid techniques

Similar to Flexbox, Grids allow for more precise control of how elements respond when their container width changes. The following examples[^grid-attribution] show some particularly useful situations:

[^grid-attribution]: This section is adapted directly from [Website Layouts with Grid](https://maujac.github.io/2W6-UI/#/./wk9/layouts_grid) from the Winter 2021 version of the course, in turn based on the page [Basic Concepts of grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout) by MDN web docs, [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) by CSS Tricks and [CSS Grid Layout Module](https://www.w3schools.com/css/css_grid.asp) by W3Schools.

### Nested grids


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

### Overlapping Grid Items

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

### Layering Grid Items

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



### Grid area Property

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



### Naming and Positioning by Grid Areas

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



### Assigning names with `grid-area` 

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

### Templates with `grid-template-areas`

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



## Grid vs Flexbox

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


# Knowledge Check

Stay tuned for more information!

# Readings and Resources

1. MDN Web Docs, ["Responsive Design"][mdn-responsive-design]
1. CSS Tricks, ["Reader Mode: the button to beat"][css-tricks-reader-mode]
2. CSS Tricks, ["A Complete Guide to CSS Media Queries"][css-tricks-media-queries]
3. MDN Web Docs, ["Media Queries"][mdn-media-queries]
4. Interneting is Hard, ["Semantic HTML"][iih-semantic-html-source]


# Exercises

1. **`sup11.html`** in [June's guest lecture exercises](../pages/tutorials.html#week-11-exercises). 
2. (Optional, but useful for lab 4:) **`sup1html - sup5.html`** from the guest lecture exercises contain examples and explanations for CSS layouts that are used in Lab 4 (placing text on top of images/videos, using the `position` property, etc.)


[semrush-html-review]: https://www.semrush.com/blog/semantic-html5-guide/ 
