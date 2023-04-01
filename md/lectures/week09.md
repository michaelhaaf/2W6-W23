---
title: "2W6-W23: Week 9 Lecture Notes"
toc-title: "In this article"
abstract-title: "Cascading StyleSheets: What is the 'Cascade' of CSS?"
abstract: |
  We have yet to learn in concrete detail a very important mechanic of CSS: when two styles contradict, how does the browser determine which style to apply?

  In this lesson, we will learn how CSS rules cascade -- that is, how browsers traverse CSS files top-down to determine which rules are most specific, and therefore chosen as the winning rules.

  We will also learn about CSS Custom Properties: these are CSS 'rules' that we can define once and reuse many times throughout our document to reduce code repetitio0n.
---

Last update: Monday, Mar 27, 2023.

---

# Lesson Overview

- Review important CSS mechanics we have learned so far
- How browsers *resolve* the CSS rules we write for elements in our document using **CSS Cascade**
- How to calculate CSS **specificity** and **inheritance**, the two most important concepts for determining the result of CSS Cascade.
- How to declare and access CSS custom properties (variables)


---

# CSS Mechanics Review

It is worthwhile to double check that you have understood all of the CSS mechanics (i.e., the rules for CSS works and why) that we have learned in this class so far. These include:

- **Syntax**: What are the *three* ways to add CSS styles to an HTML element? What are the basic syntax rules for CSS rules?
- **Selectors**: How do we *select* HTML elements to apply CSS rules? You should know the differences between `type`, `id`, and `class` selectors. You should also know the difference between **grouping**, **chaining**, and **descendent** **combinations** of selectors.
- **Properties**: You should know some of the CSS properties that are common to all elements and are being used in our class all the time: `color`, `background-color`, `font-family`, etc.

I have assigned a new reading this class where you can review all of these topics: [The Odin Project: CSS Foundations][odin-foundations].

You can also review exercises from previous weeks, including particularly the [CSS Diner][css-diner].

[odin-foundations]: https://www.theodinproject.com/lessons/foundations-css-foundations
[css-diner]: https://flukeout.github.io/

# CSS Cascade

*This section was adapted directly from the 'The Cascade of CSS' section of the [Odin CSS Foundations][odin-foundations] article linked above, as well as a more detailed blog post describing the CSS Cascade directly by Amelia Wattenberger, which you can find [here][css-cascade].*

[css-cascade]: https://wattenberger.com/blog/css-cascade

Sometimes we may have rules that conflict with one another, and we end up with some unexpected results. “But I wanted these paragraphs to be blue, why are they red like these other paragraphs?!” As frustrating as this can be, it’s important to understand that CSS doesn’t just do things against our wishes. **CSS only does what we tell it to do.** What we need to understand more closely is the **mechanics** of **how** CSS does what we tell it, and for that, we need to understand the **CSS Cascade**.

One exception to the above rule is the [default styles][default-styles] that are provided by a browser. These default styles vary from browser to browser, and they are why some elements create a large “gap” between themselves and other elements, or why buttons look the way they do, despite us not writing any CSS rules to style them that way.

[default-styles]: https://www.w3schools.com/cssref/css_default_values.php

So if you are writing CSS, there are three possible reasons for "unexpected behavior": 

- A browser default style has not been overwritten by you
- You have not understood how a property you have written works
- You have not understood how the properties you wrote Cascade

Happily, the procedure for determining why each CSS rule is applied to a document is **well-defined** by a procedure known as the **CSS Cascade**. There are different factors that the cascade uses to determine this, **three** of which we’ll cover in this class.

## Specificity

A CSS declaration that is **more specific** will take precedence over less specific ones. What does it mean for a declaration to be more specific than another? There are a few basic rules to know:

- Inline CSS styles (applied directly to the HTML element) are more specific than internal `<style>` declarations AND external .css file declarations
- For all other declarations (internal and external), **equally specific declarations** are prioritized in the **order they are read by the browser** (top-to-bottom for the HTML file).

These rules distinguish the basic differences between where CSS declarations are read by the browser (inline vs internal vs external). However, they do not tell us: which declarations are most specific? Which are least specific? The **specificity** of a CSS **selector** is dependent upon the components of that selector. This will make more sense when we see some concrete rules. The following selectors are ordered from most-specific to least-specific:

1. ID selectors (most specific selector)
2. Class selectors
3. Type selectors

**Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-breaker**. An ID selector will always beat any number of class selectors, a class selector will always beat any number of type selectors, and a type selector will always beat any number of anything less specific than it. 

Sounds good. But there are other ways to make selectors **more specific**, which is intuitive when you consider it: when no declaration has a selector with a higher specificity, **a larger amount of a single selector will beat a smaller amount of that same selector**.

Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:

###### HTML{.sourceCode}
```html
<!-- index.html -->

<div class="main">
  <div class="list subsection"></div>
</div>
```

###### CSS{.sourceCode}
```css
/* rule 1 */
.subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

In the example above, both rules are using only class selectors, but rule 2 is more specific because it is using more class selectors, so the `color: red;` declaration would take precedence.

Now, let’s change things a little bit:

###### HTML{.sourceCode}
```html
<!-- index.html -->

<div class="main">
  <div class="list" id="subsection"></div>
</div>
```

###### CSS{.sourceCode}
```css
/* rule 1 */
#subsection {
  color: blue;
}

/* rule 2 */
.main .list {
  color: red;
}
```

In the example above, despite rule 2 having more class selectors than ID selectors, rule 1 is more specific because ID beats class. In this case, the `color: blue;` declaration would take precedence.

Let’s consider one final example:

###### HTML{.sourceCode}
```html
<!-- index.html -->

<div class="main">
  <div class="list">
    <div id="subsection"></div>
  </div>
</div>
```

###### CSS{.sourceCode}
```css
/* rule 1 */
.list #subsection {
  background-color: yellow;
  color: blue;
}

/* rule 2 */
.main .list #subsection {
  color: red;
}
```

In this example, both rules are using ID and class selectors, so neither rule is using a more specific selector than the other. The cascade then checks the amounts of each selector type. Both rules only have one ID selector, but rule 2 has more class selectors, so rule 2 has a higher specificity!

**NOTE:** While the `color: red` declaration would take precedence, the `background-color: yellow` declaration would still be applied **because there’s no conflicting declaration for it**.

**NOTE:** When comparing selectors, you may come across special symbols for the universal selector `*` as well as combinators (`+`, `~`, `>`, and an empty space). **These symbols do not add any specificity in and of themselves**.

## Inheritance

One thing that you might have noticed already is that some CSS properties are **automatically propagated** from parents to children. A common example you will see in many websites is that most `font` properties are set in the `<body>` element, rather than explicitly defined for every single element in the page. However, not all CSS properties are inherited this way. How does this work?

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (`color, font-size, font-family`, etc.) are **usually inherited**, while **most other properties are not**.

The exception to this is when directly targeting an element, as this always beats inheritance:

###### HTML{.sourceCode}
```html
<!-- index.html -->

<div id="parent">
  <div class="child"></div>
</div>
```

###### CSS{.sourceCode}
```css
/* styles.css */

#parent {
  color: red;
}

.child {
  color: blue;
}
```

Despite the parent element having a higher specificity with an ID, the child element would have the `color: blue` style applied since that declaration directly targets it, while `color: red` from the parent is only inherited.

Sometimes it can be difficult to determine if a CSS property is inherited or not. If you are curious about a property in particular, you can search for it in the [Mozilla CSS Properties Reference][mdn-properties-reference]: simply look for the **Inherited** field inside the **Formal Definition** section. [Here's an example](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition) for the CSS `color` property (you can see **Inheritance** has the value **yes** for `color`).

[mdn-properties-reference]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference

## Rule Order

The final factor, the end of the line, the tie-breaker of the tie-breaker. Let’s say that after every other factor has been taken into account, there are still multiple conflicting rules targeting an element. How does the cascade determine which rule to apply?

Really simply, actually. Whichever rule was the last defined is the winner.

###### CSS{.sourceCode}
```css
/* styles.css */

.alert {
  color: red;
}

.warning {
  color: yellow;
}
```

For an element that has both the `alert` and `warning` classes, the cascade would run through every other factor, including inheritance (none here) and specificity (neither rule is more specific than the other). Since the `.warning` rule was the last one defined, and no other factor was able to determine which rule to apply, it’s the one that gets applied to the element.

But, you might ask, aren't there multiple ways to add CSS to an HTML Element? In fact, aren't there **three** different ways? Yes: **inline**, **internal**, and **external** CSS each have specificity; we will learn how the three of them work just below.

### Inline CSS

Quick review: Inline CSS makes it possible to add styles directly to HTML elements:

###### HTML{.sourceCode}
```html
<body>
  <div style="color: white; background-color: black;">...</div>
</body>
```

The first thing to note is that we don’t actually use any selectors here, since the styles are being added directly to the opening `<div>` tag itself. Next, we have the `style=` attribute, with its value within the pair of quotation marks being the declarations.

If you need to add a unique style for a single element, this method can work just fine. Generally, though, this isn’t exactly a recommended way for adding CSS to HTML for a few reasons:

- It can quickly become pretty messy once you start adding a lot of declarations to a single element, causing your HTML file to become unnecessarily bloated.
- If you want many elements to have the same style, you would have to copy + paste the same style to each individual element, causing lots of unnecessary repetition and more bloat.
- **Most crucially, for our lesson:** Any inline CSS will override internal/external CSS, which can cause unexpected results.

Since there is no selector for inline CSS, there is no specificity to calculate; inline CSS rules automatically beat all other CSS rules for this reason. 

There is only one way for internal/external CSS to beat inline css: using the `!important` keyword. We will dive into that in a [later section](#calculation).

### Internal and External CSS

Quick review: External CSS is the most common method you will come across. It involves creating a separate file for the CSS and linking it inside of an HTML’s opening and closing `<head>` tags with a self-closing `<link>` element.

Internal CSS (or embedded CSS) involves adding the CSS within the HTML file itself instead of creating a completely separate file. With the internal method, you place all the rules inside of a pair of opening and closing `<style>` tags, which are then placed inside of the opening and closing `<head>` tags of your HTML file. Since the styles are being placed directly inside of the `<head>` tags, we no longer need a `<link>` element that the external method requires.

Now: are internal CSS rules more specific, or external CSS rules?

Answer: neither. For all rules from each source, **when all other specificity is equal between two rules**, the **order that the rules are encountered by the browser is what determines the resulting style**. 

We can see examples of this below. First, an HTML file with two external `<link>` tags and one `<style>` tag. Pay attention to the order:

###### HTML{.sourceCode}
```html
<head>
  <link rel="stylesheet" href="style-file-1.css">    <!-- link to style-file-1.css -->
  <style>                                                   /* internal CSS style tag */
    div {
      color: white;
      background-color: black;
    }
    p {
      color: red;
    }
  </style>
  <link rel="stylesheet" href="style-file-1.css">    <!-- link to style-file-2.css -->
</head>
<body>
  <div>
    <p>Here is a paragraph!</p>
  </div>
</body>
```

Next, definitions for the .css files:

###### CSS{.sourceCode}
```css
/* style-file-1.css */
div {
  color: black;
  background-color: beige;
}

...

/* style-file-2.css */
div {
  color: blue;
}
```

So, will be the color of the `<div>` and the `<p>` after all of these rules are read by the browser? (Remember: we will have to take [Inheritance](#inheritance) into account). To summarize the situation after the HTML is read by the browser:

1. `style-file-1.css` is read: `div` has the rules `color: black;` and `background-color: beige`.
2. The internal `<style>` is read: `div` has the rules `color: white;` and `background-color: black`. `p` has the rule `color: red`
3. `style-file-2.css` is read: `div` has the rules `color: blue;`

So, what is the result of these rules? Which rules are overwritten? Does Inheritance matter here? Plug it into your own `index.html` and `style.css` files to find out!

The main takeaway: the order of `<link>` and `<style>` tags in the `<head>` element is decisive for rules of equal specificity. A common pattern web developers use (especially with multiple stylesheets) is to place **more general** (i.e. website independent) sheets first, followed by **more specific** (i.e. style rules for a specific page in the website) rules later in the file -- this ensures that the more specific rules are not overwritten by more general rules.


## Calculation

*The examples in this section were adapted from [CSS Specificity](https://www.w3schools.com/css/css_specificity.asp) by W3Schools*

Now that we know the three most important mechanics behind CSS rule resolution (these are: [specificity](#specificity), [inheritance](#inheritance), and [rule order](#rule-order)), we should be able to know with certainty which CSS rules will apply in a given situation. The major principles to keep in mind are summarized below.

The simplest case: if a property has a CSS rule defined (assuming there are no syntax errors), that rule is applied. This is fairly intuitive.

Next, if a property does not have a CSS rule defined:

1. If that property can be inherited, check all ancestors to see if property is defined, and use that one. Else:
2. Use the default browser style for that property.

Finally, if a property has more than one CSS rule defined, we need to **calculate** its **specificity**. This is represented internally by a **specificity score**, calculated as follows:

1. Any rule with `!important` wins, adding **10000** to the specificity score. Two or more rules with `!important` cancel out, and normal specificity determination continues. Else:
2. Any in-line rule wins, adding **1000** to the specificity score. Else:
3. The property with the highest specificity wins. This is calculated according to the following rules:
    - Each `id` in the selector contributes **100** to the specificity score
    - Each `class` in the selector contributes **10** to the specificity score
    - Each `type` in the selector contributes **1** to the specificity score

We can see that the examples we went over in the [Specificity](#specificity) section follow this algorithm: a single `id` property will outweight many `class` properties; while many `class` properties are more specific than just one `class` property, and so on.

**NOTE:** The "specificity score" isn't actually a base-10 number, it is a [number system with a "large base"][w3-docs-specificity]. 

In order words: 10 `type` selectors do not equal 1 `class` selector, and 10 `class` selectors do not equal 1 `id` selector. Rather, each category is **infinitely** more specific than the next category.

[w3-docs-specificity]: https://www.w3.org/TR/CSS2/cascade.html#specificity

To see this in action, try using a [Specificity Calculator][specificity-calculator]. I've put some of the selectors we've seen so far into this calculator to show how this works below:

![Figure: sample specificity calculations using Keegan Street's [online specificity calculator][specificity-calculator]. The selectors above are organized in order from most specific to least specific selector. Note that the specificity score is given here using only 3 numbers; it is common to use either 3, 4, or 5 numbers to define the specificity score depending on the context.][eg-calc]

[eg-calc]: ../assets/content/wk9/specificity-calc.png

We can see that even using **16** `<div>` selectors (that is: a `<div>` inside a `<div>` inside a `<div>`... 16 times!) at once results in a **less specific** selector than having just one `class` in the selector.

## Using the Inspector to Debug

While knowing the underlying calculation is useful, it is rare that we need to actually do math to determine which CSS rules are applied. We can also use Developer tools like our browser's Inspector Mode to see how the CSS Cascade has resolved the various style rules on a webpage. 

For example, here is the Firefox Inspector viewing an element on this course webpage (Monday, March 27, 2023).

![Figure: Here we can see how the Table of Contents items in this website can be given an `active` color by taking advantage of CSS specificity. Take a look at the `<a>` element that has the class `active`. Since the selector `.nav a.active:link` is more specific than `.nav a:link`, the `color` property is updated to use `var(--accent-red)` instead of `var(--subtle)`.][style-pane]

[style-pane]: ../assets/content/wk9/style-pane.png

We can see in the figure that table of contents `<a>` elements that have the `.active` classhave a **more-specific** rule defining their `color` than other table of content `<a>` elements.

Properties are listed in order of specificity and inheritance in the Style pane. Properties that are ~~crossed out~~ have been **overridden** by more specific properties.


# CSS Custom Properties

*This section was adapted directly from [Custom Properties][odin-properties] by the Odin Project.*

[odin-properties]: https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-custom-properties

Custom properties (also known as CSS variables) are a powerful tool when writing our CSS files. In short, **they allow us to reference a CSS value as many times we want throughout a file**. This gives us similar advantages that we are used to in procedural programming languages like C#: we can place important data in variables which allows us to **define once** and **reuse many times**, making our data more robust and easier to change in the future.

By using custom properties, instead of having to update every single instance of a specific value, we only need to update a single instance: the custom property itself. Not only that, but custom properties can help us keep colors consistent throughout a project, something that will be really helpful as projects get larger.

## Custom Properties as Variables

The syntax for declaring and accessing a custom property is really simple and not too different from how we write normal rule declarations:

###### CSS{.sourceCode}
```css
.error-modal {
  /* the '--' characters signify a custom property */
  --color-error-text: red;          
  --modal-border: 1px solid black;
  --modal-font-size: calc(2rem + 5vw);

  /* the 'var()' function can reference custom properties */
  color: var(--color-error-text);       
  border: var(--modal-border);
  font-size: var(--modal-font-size);
}
```

That's it! First, we declare our custom property with a double hyphen followed by a **case-sensitive,** **hyphen-separated** property name (`--color-error-text` wouldn't be the same as `--Color-Error-Text`). 

Like normal CSS rule declarations, the use of single hyphens to separate words is very important here because spaces are not valid (`--color error text` would not work). Then we can store **any valid CSS value** in our newly declared custom property: whether that be a simple color value, shorthand values, or even a more complex function. This is quite powerful!

When we want to access a custom property, we use the `var()` function as the value of a CSS property, and then place our custom property inside of the parenthesis (including the double hyphen at the beginning).

## Fallback Values

The `var()` function actually accepts **two** parameters. The first parameter we've already seen: this is whichever custom property (variable) we are using (e.g. `--color-error-text`).

The second parameter is an optional fallback value: when a fallback value is provided in addition to a custom property, the fallback value will be used if the custom property is invalid or hasn't been declared yet. We can even pass in another custom property as a fallback, which can have its own fallback value as well!

###### CSS{.sourceCode}
```css
.fallback {
  --color-text: white;
  background-color: var(--undeclared-property, black);        /* What will the background-color be? */
  color: var(--undeclared-again, var(--color-text, yellow));  /* What will the color be? */
}
```

In the above example, our `background-color` property would have a value of `black` and our `color` property would have a value of `white.` If the `--color-text` custom property was invalid or didn't exist, the fallback to our fallback would take over and the `color` property would have a value of `yellow`. 


## Scope

In the previous section, we saw that that we could declare and then access custom properties within the same selector (whether `.error-modal` or `.fallback`). This is because the **scope** of a custom property is determined by the **selector** (which is bound by curly braces '`{`' and '`}`').

Scope in CSS is somewhat similar in appearance to scope in C#: **all properties defined within a selector are available for that selector, as well as any descendants of that selector.** 

In the example below, only the element with the cool-paragraph class would get styled with a red background since it's a descendant of the element where our custom property is declared:

###### HTML{.sourceCode}
```html
<div class='cool-div'>
  <p class='cool-p'>Check out my cool, red background!</p>
</div>
<p class='boring-p'>I'm not in scope so I'm not cool.</p>
<p class='cool-p'>I'm ALSO not in scope so I'm ALSO not cool (despite my class name!).</p>
```

###### CSS{.sourceCode}
```css
.cool-div {
  --main-bg: red;
}

/* For the first .cool-p, --main-bg is defined (because it is a child of a .cool-div element) */
/* For the second .cool-p, --main-bg is NOT defined, so background-color stays black */
.cool-p {
  background-color: var(--main-bg, black);
}

/* The only .boring-p is not a descendent of a .cool-div, so background-color stays black */
.boring-p {
  background-color: var(--main-bg, black);
}
```

## The `:root` selector

While there may be times where you will want to limit the scope of a custom property, you may want to be able to use other custom properties on many, unrelated selectors. One workaround would be declaring the same custom property on a bunch of selectors, but that defeats one of the purposes of using custom properties in the first place (the ease of changing multiple instances of a value at once).

What about placing the custom properties at the root of your document hierarchy? That is, in your `<body>` or even your `<html>` tags? That way, since all other HTML elements descend from these tags, the properties should be accessible everywhere.

This is essentially what is done in practise, with just a bit of extra fanciness: we can declare universal custom properties on the `:root` selector. The [:root selector][mdn-root] which is essentially the same thing as the html selector except it has a **higher specificity**.

[mdn-root]: https://developer.mozilla.org/en-US/docs/Web/CSS/:root
[w3-root]: https://www.w3schools.com/cssref/sel_root.php

###### HTML {.sourceCode}
```html
<p class='cool-paragraph'>Lorem ipsum dolor sit amet.</p>
<p class='exciting-paragraph'>Lorem ipsum dolor sit amet.</p>
```

###### CSS {.sourceCode}
```css
:root {
  --main-color: red;
}

/* This is equivalent to using the root selector in scope
but since <html> has lower specificity than :root, --main-color will be red*/
html {
  --main-color: blue; 
}

/* This time, all divs in the document have --main-color in their scope */
.cool-paragraph {
  color: var(--main-color);
}

.exciting-paragraph {
  background-color: var(--main-color);
}
```

By declaring our custom property on the `:root` selector in the example above, we can access it on any other valid selector within our CSS file, since any other selector would be considered a descendant of the `:root` selector.

## Themes with Custom Properties

There are plenty of applications for defining universal custom properties. One excellent application in particular is using the `:root` selector to define **color themes** on our webpages:

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="PojVRMb" data-user="TheOdinProjectExamples" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/TheOdinProjectExamples/pen/PojVRMb">
  Theme Toggle | CSS Custom Properties</a> by TheOdinProject (<a href="https://codepen.io/TheOdinProjectExamples">@TheOdinProjectExamples</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

Take a close look at the **CSS** tab in the above CodePen. There are **two scopes** for our custom properties on the :root selector:

- one for when the `<html>` (i.e. `:root`) element has a class of `dark` and 
- one for when it has a class of `light`. 

Our other selectors then use the values of any custom properties depending on which class is currently present on our root element.

Try pressing the **Toggle Theme** button in the CodePen, then take a close look at the first few lines of Javascript, particularly the `setTheme()` function. How is the theme actually being toggled on all of the elements in the page? 

This example shows the power of *well-defined* classes and custom properties in CSS. The problem of changing numerous element colors for numerous elements is reduced from having to query every element and every property to: just toggle the class on the `:root` element of the document, and the new property values naturally cascade to all selectors in your CSS.

# Knowledge Check

## CSS Cascade

  - [Can you rank `id`, `class`, and `type` selectors by specificity?](#specificity)
  - [Between a rule that uses one `id` selector and a rule that uses 3 `class` selectors, which rule has the higher specificity?](#specificity)
  - [Is there any **specificity** difference between external, internal, and inline CSS?](#inline-css)
  - [An element's parent has a high specificity selector with `font-size: 2rem`, but also has a direct low specificity selector with `font-size: 1rem`. What is the result?](#inheritance)


## CSS Custom Properties

  - [How do you **declare** a custom property with a name of `text-color?`](#custom-properties-as-variables)
  - [How do you **access** a custom property with a name of `background-color?`](#custom-properties-as-variables)
  - [What happens when you use a custom property that has not been defined?](#fallback-values)
  - [Can custom properties defined in an element be used outside of that element?](#scope)
  - [Where would you declare a custom property to have its scope be global and accessible by all other selectors?](#the-.root-selector)


# Readings and Resources

1. [The Odin Project: CSS Foundations][odin-foundations]. This article summarizes the most important CSS mechanics we have learned in class so far. The [Cascade of CSS](https://www.theodinproject.com/lessons/foundations-css-foundations#the-cascade-of-css) section in particular summarizes the most important components of the CSS Cascade behavior. My lecture notes are based directly on this article.

2. [Amelia Wattenberger: The CSS Cascade][css-cascade]. This article is a longer, more detailed and thorough, explanation of the Cascade behavior described in the Odin Project article. My lecture notes are partially based on this article.

3. [Kevin Powell: Specificity Explained][specificity-explained]. This is a 13 minute video that should be quite similar to what we covered in class together on Friday, March 24. This is not a replacement for attending class, but is helpful for reviewing the topics we covered on your own time.

4. [MDN Web Docs: Specificity][mdn-specificity]. This is a longer, more detailed reference about CSS Specifity rules.

4. [Online Specificity Calculator][specificity-calculator]. This is an online specificity calculator. You can copy-paste your own CSS selectors into this tool to compare which selector is more specific -- very useful for debugging when you cannot understand why one rule wins over another.

5. [MDN Web Docs: Using CSS Custom Properties][mdn-custom-props]: This is a more thorough explanation of CSS Custom Properties than given in the notes. This is recommended reading in any case, but especially if you are confused about the syntax or what kind of values that CSS Custom Properties can store and use, then check out this article for some helpful examples.

[specificity-explained]: https://www.youtube.com/watch?v=c0kfcP_nD9E
[specificity-calculator]: https://specificity.keegan.st/
[mdn-specificity]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
[mdn-custom-props]: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties

# Exercises

1. Open the Developer Tools inspector in your browser on this page. Can you see where the light and dark color schemes are defined?
2. Read through [The CSS Cascade][css-cascade] article linked above -- it contains 7 interactive questions you can try to answer make sure you are following the concepts.

