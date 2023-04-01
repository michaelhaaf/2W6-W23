---
title: "2W6-W23: Week 4 Lecture Notes"
toc-title: "In this article"
prev-page: "week03"
next-page: "week05"
abstract-title: "Styling HTML content with CSS"
abstract: |
  Last week, we learned the fundamentals of CSS; in particular: how CSS is inserted into HTML files, how CSS is used to select HTML elements, and how to inspect CSS properties and make changes using Browser Development tools. 

  There are hundreds, if not thousands, of different CSS properties. We will not learn them all at once -- over the next few weeks, we will add the foundational properties to our toolbelt and build confidence in our ability to use CSS to select and alter HTML elements as we require.

  This week, we will learn how to make use of the CSS properties for fonts, images, and icons; we will also learn more about how HTML and CSS create website layouts.
---

Last update: Sunday, March 26, 2023.

---

# Lesson Overview

- How to style fonts
- How to style images
- How to style icons
- The Box Model

---

# Fonts

*This section was adapted from [Mauricio Buschinelli's](https://maujac.github.io/2W6-UI/#/./wk/../wk3/wk3_3_text_units?id=fonts) course notes, which in turn were adapted from [CSS Fonts](https://www.w3schools.com/css/css_font.asp) by w3schools.com and [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals) by MDN Web Docs.*

## Font Families

In CSS, fonts are organized into groups of **Font Families**. In fact, the font family concept (also known as **typeface**) extends beyond CSS to typography in general:

> A **typeface** (or **font family**) is the design of <a href="https://en.wikipedia.org/wiki/Lettering" title="Lettering">lettering</a> that can include variations in size, weight (e.g. bold), slope (e.g. italic), width (e.g. condensed), and so on. Each of these variations of the typeface is a <a href="https://en.wikipedia.org/wiki/Font" title="Font">font</a>.
>
> <footer>
>   Wikipedia, [Typeface][wiki-typeface]
> </footer>

[wiki-typeface]: https://en.wikipedia.org/wiki/Typeface

There are two categories of font families in CSS: **Generic Font Families**, which describe the basic font categories in general, and **Specfic Font Families** (usually just called **Font Families**), each of which belongs to one of the Generic Family categories.

<figure style="">
+--------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| Generic Family                                   | Font Family                                                                                           |
+==================================================+=======================================================================================================+
| `serif`                                          | <span style="font-family: 'Times New Roman';">This sentence is written in Times New Roman</span> <br> |
|                                                  | <span style="font-family: 'Georgia';">This sentence is written in Georgia</span>                      |
+--------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| `sans-serif`                                     | <span style="font-family: 'Arial';">This sentence is written in Arial</span> <br>                     |
|                                                  | <span style="font-family: 'Verdana';">This sentence is written in Verdana</span>                      |
+--------------------------------------------------+-------------------------------------------------------------------------------------------------------+
| `monospace                                     ` | <span style="font-family: 'Courier';">This sentence is written in Courier New</span> <br>             |
|                                                  | <span style="font-family: 'Consolas';">This sentence is written in Consolas</span>                    |
+--------------------------------------------------+-------------------------------------------------------------------------------------------------------+
<figcaption>Font Family table: Each font family in CSS belongs to one of the generic families.</figcaption>
</figure>

Broadly speaking, the generic families have the following properties:

- `serif` - Letters are drawn with _serifs_, which are small extra strokes at the ends of the letter's defining strokes.
- `sans-serif` - Letters are drawn without serifs.

![Figure from Mark Womack: [What Font Should I Use?][womack-source]][womack-img]

[womack-img]: ../assets/content/wk4/serif-vs-sans-serif.png "A Serif font has serifs (extra strokes) drawn on the edges of the letter, while a Sans-serif font does not."
[womack-source]: https://drmarkwomack.com/a-writing-handbook/style/typography/

- Fonts in the `monospace` family force all letters to take the same amount of horizontal space, independent of the width of the strokes defining the letter.

![Figure from Wikipedia: [Typeface][wiki-typeface]][mono-img]

[mono-img]: ../assets/content/wk4/Proportional-vs-monospace.jpg "A Serif font has serifs drawn on the "

**Proportional** fonts are the opposite of `monospace` fonts: letters that are narrow take less horizontal space than letters that are wide. Fonts in the the `serif` and `sans-serif` families are typically proportional fonts.

### Changing fonts with `font-family`

The fonts available to the browser depend largely on the fonts installed in the operating system.

> When selecting a font, make sure to include a series of fallback fonts, from most specific to least specific.

This is also known as a **font stack**:

###### CSS{.sourceCode}

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

[This link leads to a list of fonts considered to be **Web Safe Fonts**](https://www.w3schools.com/cssref/css_websafe_fonts.asp), meaning you can count on them being available in most browsers.

> Font names composed of more than one word need to be written between quotations, such as "Times New Roman" above.

**Pro tip:** Typographic properties (`color`, `font-size`, `font-family`, etc.) are **inherited** by descendent elements. This means we do not need to apply these styles to evrey single element in the HTML markup; instead we can apply them to a root element like the `<body>` and those properties are inherited by descendant elements (like `<p>`, `<a>`, etc.) automatically.

###### CSS{.sourceCode}

```css
body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
```

We can see some examples of this in the CodePen (link) below. We will learn more about **inheritance** in CSS as it applies to non-typographic elements next week.

## Using Web Font Families

So far, all of the fonts that we have seen (Verdana, Times New Roman, etc.) are [**Web Safe**](https://www.w3schools.com/cssref/css_websafe_fonts.asp) -- fonts that are commonly available on most operating systems. This is good, because we can use them (as well as a few fallbacks and the generic font family fallback) without needing to worry whether every single person who uses our website has those fonts installed on their computer.

But there are many thousands of font families in this world (including the font of this website) -- the web would be a very boring place if we could only use a few dozen or so web safe fonts.

Fortunately, there are techniques that allow us to include **external fonts** in our CSS.

A popular location to get external fonts is [Google Fonts](https://fonts.google.com/):

![Gif: step-by step for choosing a google font to add to a project.](../assets/content/wk4/add_google_font.gif "On Google Fonts, font families and properties can be selected and configured before downloading or embedding on your webpage."){.full-width}

Include the provided link in the head section of your HTML file, just like you would link a CSS Style sheet.

###### HTML{.sourceCode}

```html
<link
  href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
  rel="stylesheet"
/>
```

Add the `font-family` property to your CSS. **Don't forget to add a fall-back font**.

###### CSS{.sourceCode}

```css
p {
  font-family: "Roboto", sans-serif;
}
```


## Font size

Font size can be set with the `font-size` property.

`font-size` value can be set as absolute or relative:

**Absolute size:**

- Sets the text to a fixed size.
- User cannot adjust it (eg. increase font size using browser or operating system settings).

**Relative size:**

- Size relative to another element in the page (see CSS Units below).
- User can adjust it.

### Recommendation & inheritance

For `font-size` **it is recommended that you use relative CSS units over fixed units.** You need to be aware of where your HTML element is inheriting these units from.

Two common relative units for `font-size` are:

**em:**

- 1 `em` is equal to the font size **set on the parent element of the current element** we are styling.
- Be careful when styling nested elements.

**rem:**

- 1 `rem` is equal to the font size **set on the root element of the document** ( the `<html>`), not the parent element.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qByeqVa" data-user="michaelhaaf" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/michaelhaaf/pen/qByeqVa">
  Untitled</a> by Michael Haaf (<a href="https://codepen.io/michaelhaaf">@michaelhaaf</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Font Weight

The [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) property sets how bold the text is, depending on the values supported by the font family.

Common values are:

- `normal`, `bold`: Normal and **bold** font weight
- `lighter`, `bolder`: Relative values. Sets the element's boldness to be one step lighter or heavier than its parent element.
- `100`–`1000`: Numeric boldness values that provide finer grained control than the above keywords.
  - `400` is equivalent to `normal`
  - `700` is equivalent to `bold`

See [font-weight by MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight) web docs for more information.

###### CSS{.sourceCode}

```css
font-weight: bold;

font-weight: lighter;

font-weight: 200;
```

## Text Decorations

The [`text-decoration`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration) sets the decorations on fonts (mainly used to change default underline on links).

Common values are:

- `none`: Unsets any text decorations already present.
- `underline`: <u>Underlines the text</u>.
- `line-through`: Puts a ~~strikethrough over the text~~.

## Text Layout & Alignment

_For this section refer to the "Text layout" section of [Fundamental text and font styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals#Text_layout) by MDN web docs._

Using the reference above, look at the following properties:

- [`text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [`letter-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing)
- [`word-spacing`](https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing)

## Other text styling

There are many other text styling properties, some more used than others:

- [`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style): Used to turn italic text on and off.
- [`text-transform`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform): Transform you font to upper case, capitalised, full-width, etc.
- [`text-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow): Applies drop shadows to your text.

## Shorthand Properties Notation

You can set multiple font values in one shot by using the shorthand `<font>` property (many CSS properties have a shorthand version):

> Refer to the MDN web doc page on the [**`<font>` property**](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

In the example below the following font properties are set at the same time:

- [`font-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
- [`font-variant`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant)
- [`font-weight`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)
- [`font-size`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size) / [`line-height`](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- [`font-family`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)

###### CSS{.sourceCode}

```css
body {
  font: italic small-caps bold 16px/2 cursive;
}
```

# The Box Model

*This section was adapted from [The Odin Project](https://www.theodinproject.com/lessons/foundations-the-box-model) and [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) course notes.*


In HTML, we have learned that every element is either **block** or **inline**. The introduction of CSS into this equation both gives us the tools to change default HML behavior (for instance, changing `<img>` from inline to block) while at the same time introducing more complications to the basic box model.

Understanding the model behind how elements are laid out on the web is key to being able to create more complex layouts with CSS, or to align items with other items. In this lesson, we will take a look at the CSS Box Model. You'll get an understanding of how it works and the terminology that relates to it.

## Block and inline boxes

Whether an element is **block** or **inline**, ALL elements have well defined box behavior that determines how the box behaves in terms of page flow and in relation to other boxes on the page. This is easy to see when elements are surrounded in by borders. 

The CodePen snippet below shows the two basic cases: a block-level `<p>` element containing an inline `<a>` element. The example also shows that in CSS, we can override the default HTML flow for block and inline elements using the `display` property:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="yLqmVMr" data-user="michaelhaaf" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/michaelhaaf/pen/yLqmVMr">
  Untitled</a> by Michael Haaf (<a href="https://codepen.io/michaelhaaf">@michaelhaaf</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


## Outer display type

In CSS, all boxes have an **inner display type** and an **outer display type**.

If a box has an outer display type of `block`, then:

- The box will break onto a new line.
- The `width` and `height` properties are respected.
- Padding, margin and border will cause other elements to be pushed away from the box.
- If `width` is not specified, the box will extend in the inline direction to fill the space available in its container. In most cases, the box will become as wide as its container, filling up 100% of the space available.

Some HTML elements, such as `<h1>` and `<p>,` use block as their outer display type by default.

If a box has an outer display type of `inline`, then:

- The box will not break onto a new line.
- The `width` and `height` properties will not apply.
- Vertical padding, margins, and borders will apply but will not cause other inline boxes to move away from the box.
- Horizontal padding, margins, and borders will apply and will cause other inline boxes to move away from the box.

Some HTML elements, such as `<a>`, `<span>`, `<em>` and `<strong>` use `inline` as their outer display type by default.

## Inner display type

Boxes also have an inner display type, which dictates how elements **inside** that box (i.e., the children of the box) are laid out.

Block and inline layout is the default way things behave on the web. By default and without any other instruction, the elements inside a box are also laid out in [normal flow](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Normal_Flow) and behave as block or inline boxes.

In the coming weeks, we will learn how to change this behavior to take advantage of **very** powerful CSS concepts like `grid`, `flex`, and more. For now, it's enough to know that there is a difference between the *outer* (behavior of element itself) and *inner* (behavior of element's children) display types.

## The Anatomy of the Box Model

It's cool and fine that all HTML elements are boxes. But, how do you change the behavior of those boxes themselves? We need to know the strucure, or anatomy, of the CSS box model:

- **Content box:** The area where your content is displayed; size it using properties like `inline-size` and `block-size` or `width` and `height`
- **Padding box:** The padding sits around the content as white space; size it using `padding` and related properties.
- **Border box:** The border box wraps the content and any padding; size it using `border` and related properties.
- **Margin box:** The margin is the outermost layer, wrapping the content, padding, and border as whitespace between this box and other elements; size it using `margin` and related properties.

The below diagram shows these layers:

![Figure from MDN: [The Box Model][bm-source]][bm-img]

[bm-img]: ../assets/content/wk4/box-model.png
[bm-source]: https://www.kirupa.com/html5/viewport_device_document_size.html

## Margins, padding, and borders

### Margin

### Margin Collapsing

### Padding

### Borders


# Knowledge Check

## Fonts

- What are the differences between the main Generic font families?
- Why and how do we assign multiple font families in CSS?
- What is the difference between absolute and relative font sizes?
- What is a "Web Safe" font? What are the ways that we use fonts that are not "web safe" in our designs?

## The Box Model

- From inside to outside, what is the order of box-model properties?
- What does the box-sizing CSS property do?
- What is the difference between the standard and alternative box model?
- Would you use margin or padding to create more space between 2 elements?
- Would you use margin or padding to create more space between the contents of an element and its border?
- Would you use margin or padding if you wanted two elements to overlap each other?


# Exercises

- Odin Project: CSS Foundations Practise Exercises [(.zip)][tutCSSFoundations]
- MDN: Typesetting a Homepage [(instructions)][tutStylingTextInstructions] [(starter files .zip)][tutStylingTextFiles]
- Odin Project: CSS Box Model Practise Exercises [(.zip)][tutCSSBoxModel]

[tutCSSFoundations]: ../tutorials/css-exercises-foundations.zip "Odin Project: CSS Foundations Exercises. There are 6 exercises total in this set. You should be able to complete them all with what you have learned during Week 3."
[tutStylingTextInstructions]: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Typesetting_a_homepage "MDN: Typesetting a homepage tutorial instructions."
[tutStylingTextFiles]: ../tutorials/css-styling-text.zip "MDN: Typesetting a homepage tutorial starter files."
[tutCSSBoxModel]: ../tutorials/css-exercises-box-model.zip "Odin Project: CSS Box Model Exercises. There are 2 exercises total in this set. You should be able to complete them all with what you have learned during Week 4."
