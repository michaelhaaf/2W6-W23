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

A CSS declaration that is **more specific** will take precedence over less specific ones. Inline styles, which we will go over more in the Adding CSS to HTML section towards the end of the lesson, have the highest specificity compared to selectors, while each type of selector has its own specificity level that contributes to how specific a declaration is. Other selectors contribute to specificity, but we’re focusing only on the ones mentioned in this lesson:

1. ID selectors (most specific selector)
2. Class selectors
3. Type selectors

Specificity will only be taken into account when an element has multiple, conflicting declarations targeting it, sort of like a tie-breaker. An ID selector will always beat any number of class selectors, a class selector will always beat any number of type selectors, and a type selector will always beat any number of anything less specific than it. When no declaration has a selector with a higher specificity, a larger amount of a single selector will beat a smaller amount of that same selector.

Let’s take a look at a few quick examples to visualize how specificity works. Consider the following HTML and CSS code:

## Inheritance

## Rule Order


# Other New CSS Mechanics

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
