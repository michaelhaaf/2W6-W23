---
title: "2W6-W23: Week 14 Lecture Notes"
toc-title: "Lecture navigation"
prev-page: "/lectures/week-13"
next-page: "/pages/calendar"
lang: "en"
abstract-title: "Intermediate User Interfaces: Accesibility, CSS Best Practises, and more"
abstract: |
  Building off of creating Responsive Designs, we will continue learning best practises for functional, usable, and accessible websites.

  We will finish by covering a few more important CSS concepts: positioning, design, and frameworks (as much as time allows).
---

# Lesson Overview

- Accessibility
- Other CSS odds and ends we haven't yet had time for

---

# Accessibility

Accesibility[^accessibility-attribution] is...

[^accessibility-attribution]: This section was adapted directly from the articles ["Understanding the Web Content Accessibility Guidelines"](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG) (MDN Web Docs).  

[accessibility-drewdevault]: https://drewdevault.com/2022/02/13/Framing-accessibility-in-broader-terms.html

## Keyboard input

## Color contrast

## Images, videos, and other media

## Auditing accesibility using Developer Tools

## WCAG: The Web Content Accessibility Guidelines

The best practises shown in the previous sections developed from standards set by The [Web Content Accessibility Guidelines (WCAG)][wcag]. 

WCAG is broadly broken down into four principles: 

- [Perceivable][wcag-perceivable]: Users must be able to perceive it in some way, using one or more of their senses.
- [Operable][wcag-operable]: Users must be able to control UI elements (e.g. buttons must be clickable in some way \u2014 mouse, keyboard, voice command, etc.).
- [Understandable][wcag-understandable]: The content must be understandable to its users.
- [Robust][wcag-robust]: The content must be developed using well-adopted web standards that will work across different browsers, now and in the future.

Each of the links above will take you to pages that further expand on these areas, with practical recommendations for how to measure and achieve these outcomes.

[wcag]: https://www.w3.org/WAI/standards-guidelines/wcag/
[wcag-perceivable]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
[wcag-operable]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable
[wcag-understandable]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Understandable
[wcag-robust]: https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust
[css-tricks-reduced-motion]: https://css-tricks.com/revisiting-prefers-reduced-motion/

---

# Semantic CSS?

## Organizing stylesheets

## Choosing class names

## Choosing the right selector

---

# CSS Miscellany

Here are a list of important topics in CSS that I'm not sure we will have time to cover in full detail. More information to come.

## Positioning & Overflow

More to come. For now, here is last year's content:

- [positioning](https://maujac.github.io/2W6-UI/#/./wk5/positioning-zIndex)
- [overflow](https://maujac.github.io/2W6-UI/#/./wk8/displayNone-overflow)

And here's a nice video reviewing what we learned about positioning from the guest lecture.

- [CSS positioning in 60 seconds](https://www.youtube.com/shorts/jFcWa9kiOHQ)

## Design Fundamentals

More to come. For now, here is last year's content:

- [Design Fundamentals](https://maujac.github.io/2W6-UI/#/./wk9/design_fundamentals)

as well as some articles I personally have found helpful:

- [Material Design color theme tutorial](https://m2.material.io/design/color/the-color-system.html)
- [Material Design DARK color theme tutorial](https://m2.material.io/design/color/dark-theme.html)

## Frameworks

More to come. For now, here is last year's content:

- [CSS Frameworks](https://maujac.github.io/2W6-UI/#/./wk14/css_frameworks)


# Knowledge Check

Stay tuned for more information!

# Readings & Resources

1. [Traversy Media: Web Development in 2023 - a Practical Guide][webdev2023]: The entire video is almost 3 hours (!!) and covers much more than we have in this class. **You do not need to watch the whole thing**. Instead, focus on the following: 

    - Watch the first **33 minutes** (up to the end of the **Design Software** section) to review the content we have covered in this class
    - Then, skip ahead to the "No Code Tools" chapter to review what we have learned about Content Management Systems like Wordpress.
    - Subtitles file (with timestamps): [link][subs-timestamps]
    - Subtitles file (without timestamps): [link][subs-raw]
    - Written guide by the author: [link](https://www.traversymedia.com/guide)
    - (Coming soon) **Milestone 2** of your project will ask you a few questions about the content of this video and of this lecture. I will post an update on LEA as soon as it's all ready.


[webdev2023]: https://www.youtube.com/watch?v=u72H_zZzkcw
[subs-timestamps]: subs-with-timestamps.txt
[subs-raw]: subs-without-timestamps.txt
