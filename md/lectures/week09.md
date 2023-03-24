---
title: "2W6-W23: Week 9 Lecture Notes"
toc-title: "In this article"
abstract-title: "Cascading StyleSheets: What is the 'Cascade' of CSS?"
abstract: |
  We have yet to learn in concrete detail a very important mechanic of CSS: when two styles contradict, how does the browser determine which style to apply?

  In this lesson, we will learn how CSS rules cascade -- that is, how browsers traverse CSS files top-down to determine which rules are most specific, and therefore chosen as the winning rules.
---

Last update: Friday, Mar 24, 2023.

---

# Lesson Overview

- Review/reference for important CSS mechanics we have learned so far
- Introduction to CSS Cascade: how browsers *resolve* the CSS rules we write for elements in our document. 
- Introduction to **specificity** and **inheritance**, the two most important concepts for determining the result of CSS Cascade.
- Introduction to a few more CSS mechanics: variables, scope, and more.

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

[default-styles]: https://example.org

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

Note: When comparing selectors, you may come across special symbols for the universal selector `*` as well as combinators (`+`, `~`, `>`, and an empty space). **These symbols do not add any specificity in and of themselves**.

## Inheritance

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

# Other New CSS Mechanics

More to come soon!

## Variables

## Scope

# Knowledge Check

Stay tuned for more information!

# Readings and Resources

1. [The Odin Project: CSS Foundations][odin-foundations]. This article summarizes the most important CSS mechanics we have learned in class so far. The [Cascade of CSS](https://www.theodinproject.com/lessons/foundations-css-foundations#the-cascade-of-css) section in particular summarizes the most important components of the CSS Cascade behavior. My lecture notes are based directly on this article.

2. [Amelia Wattenberger: The CSS Cascade][css-cascade]. This article is a longer, more detailed and thorough, explanation of the Cascade behavior described in the Odin Project article. My lecture notes are partially based on this article.

3. [Kevin Powell: Specificity Explained][specificity-explained]. This is a 13 minute video that should be quite similar to what we covered in class together on Friday, March 24. This is not a replacement for attending class, but is helpful for reviewing the topics we covered on your own time.

4. [MDN Web Docs: Specificity][mdn-specificity]. This is a longer, more detailed reference about CSS Specifity rules.

4. [Online Specificity Calculator][specificity-calculator]. This is an online specificity calculator. You can copy-paste your own CSS selectors into this tool to compare which selector is more specific -- very useful for debugging when you cannot understand why one rule wins over another.

[specificity-explained]: https://www.youtube.com/watch?v=c0kfcP_nD9E
[specificity-calculator]: https://specificity.keegan.st/
[mdn-specificity]: https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity

# Exercises

Stay tuned for more information!
