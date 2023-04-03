---
title: "2W6-W23: Week 7 Lecture Notes"
date: 2023-02-28
toc-title: "Lecture navigation"
prev-page: "../lectures/week06.html"
next-page: "../lectures/week09.html"
abstract-title: "Intermediate Web Development: the Browser, Javascript, and the DOM"
abstract: |
  In first half of this program, we learned a ton of HTML and CSS. You will continue to learn more about HTML and CSS in this course and in your life -- both are vast subjects.

  For now, let's take a big picture break and return to some of the other technologies used in web development. This week, we are going to master using the browser for web development. We are also going to learn the very basics of Javascript in order to learn how HTML/CSS projects can be given dynamic behavior.
---

---

# Lesson Overview

- Choosing a browser for web development
- Introduction to Javascript
- Introduction to the DOM

---

# Browsers

A web browser is an integral part of a web developer's toolkit. Not only does the browser render HTML and CSS, all modern browsers are essentially IDEs that contain a suite of tools for inspecting, modifying, and debugging HTML, CSS, and JavaScript.

No matter which browser you use, the following tutorial (covered in class on Feb 28) will be useful to you: [Chrome Developer Tools][chrome-devtools].

Due to [circumstances beyond the scope of this course](https://en.wikipedia.org/wiki/Monopoly_(game)), almost all modern browsers are based on Chromium -- unless you use Firefox, the above tutorial will be directly relevant to your browser. Make sure you understand all of the techniques shown here!

[chrome-devtools]: https://developer.chrome.com/docs/devtools/dom/

If you (like me) use Firefox, I currently do not have a tutorial available for you. You can pay close attention to my demonstrations in class to see where Firefox differs from Chromium-based browsers (the differences, for our purposes, are pretty small).

# Javascript

More notes will appear here soon. For now (Wednesday Mar 1), check out [this Odin Project tutorial][odin-js-1] and [the follow up tutorial][odin-js-2] for the content we will be covering. This is more javascript than you need to know for this course -- we will just be getting a taste. But feel free to explore more if you like!

[odin-js-1]: https://www.theodinproject.com/lessons/foundations-fundamentals-part-1
[odin-js-2]: https://www.theodinproject.com/lessons/foundations-fundamentals-part-2

# The DOM

More notes will appear here soon. For now (Friday Mar 3), check out the following resources:

- [MDN Web Docs: Introduction to the DOM][mdn-web-docs-DOM] (Article)

For this article, focus in particular on understanding the big picture: what is the difference between HTML and the DOM? What are the properties (things that are part of) and methods (behaviors) of the ```document``` and ```window``` objects? How can they be useful for finding other elements on your webpage? Try coding along with the [Active learning](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list) portion of the article in particular to ge the hang of what Javascript is capable of.

- [Web Dev Simplified: Learn DOM Traversal in 15 Minutes][web-dev-simp-dom-trav] (Youtube video)

  The most important methods to learn from this video are:

  - ```getElementById(String id)```: returns the element which has the ```id``` provided as an argument
  - ```getElementsByClassName(String className)```: returns a ```NodeList``` of elements which have the ```className``` in their list of classes
  - ```querySelector(String cssSelector)```: returns the single element which matches the CSS selector provided
  - ```querySelectorAll(String cssSelector)```: returns a ```NodeList``` of elements which match the CSS selector provided

- [Web Dev Simplified: Learn DOM Manipulation in 18 Minutes][web-dev-simp-dom-manip] (Youtube video)

[web-dev-simp-dom-trav]: https://www.youtube.com/watch?v=v7rSSy8CaYE
[web-dev-simp-dom-manip]: https://www.youtube.com/watch?v=y17RuWkWdn8
[mdn-web-docs-DOM]: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction

# Skills needed for Lab 3

## Theme toggling

You should now be able to understand a bit better the theme toggling button we used in assignment 2: [CodePen link](https://codepen.io/michaelhaaf/pen/gOdWqpN). You can adapt this for the last parts of Lab 3 in order to add theme toggling behavior.

## SVG Icons

One other thing I haven't covered that you need for Lab 3: getting SVGs to use as icons, and changing their colour. More information to come soon.




# Knowledge Check

Stay tuned for more information!

# Exercises

Stay tuned for more information!
