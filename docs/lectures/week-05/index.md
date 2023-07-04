---
title: "2W6-W23: Week 5 Lecture Notes"
date: 2023-02-19
toc-title: "Lecture navigation"
prev-page: "../lectures/week04.html"
next-page: "../lectures/week06.html"
abstract-title: "Intro to Layouts and Floats in CSS"
abstract: |
  Last week, we learned a large set of CSS properties for applying styles to text, image, and other content elements.

  Now that we have a decent amount of practise selecting and styling CSS elements individually, it's time to learn strategies for styling groups of elements -- that is, controlling the layout of HTML elements using CSS.

  There are many techniques for layout in CSS. We will focus on the technique most commonly used for the first two decades of web development: "Floating" elements.
---

# Lesson Overview

- How to achieve horizontal positioning in CSS using the `float` property
- The behavior of floating elements when nested/in groups
- How to control vertical and horizontal flow with floating elements
- Example layouts that can be achieved using floats 

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

It’s worth taking a look at what happens when we shrink an element’s width. Try opening the CodePen (click the "Edit on Codepen" button) and update the `.sidebar` rule to match the following:


```css {.numberLines}
.sidebar {
  width: 200px;                 /* Add this */
  height: 300px;
  background-color: #F09A9D;
}
```

The sidebar element gets narrower, but the rest of the boxes stay in the same position. All the blocks are still rendered vertically one after another. This is the behavior we’ll be changing with floats.

## Floating an Element

The CSS float property gives us control over the horizontal position of an element. By “floating” the sidebar to the left, we’re telling the browser to align it to the left side of the page. Go ahead and float our sidebar with the following line:


```css {.numberLines}
.sidebar {
  float: left;                  /* Add this */
  width: 200px;
  height: 300px;
  background-color: #F09A9D;
}
```

However, this doesn’t just align the sidebar — it also tells surrounding elements that they can flow around the sidebar instead of beginning underneath it. It’s as if the sidebar is inside the `.content` block, so any HTML markup in `.content` would wrap around the sidebar’s box. This gives us a magazine-style layout:

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


```css {.numberLines}
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


```CSS {.numberLines}
.page {
  width: 900px; /* Add this line */
  margin: 0 auto;
}
```

Does the `sidebar` hug the left hand of the browser window, or of its parent? You may need to zoom out in your browser window to observe the effect.

Positioning nested container divs like this is how you build up
sophisticated website layouts. Here, we started with `.page` to center *everything*, then we left-aligned a sidebar *inside* that centered page. Things can get way more complex, but our simple example demonstrates the universal truth of CSS layouts: *everything is a box, inside of another box, inside of another box, etc.*


## Multiple floats

Let’s examine our current magazine-style float a little bit more by adding an explicit width to our `.content` block:


```css {.numberLines}
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


```css {.numberLines}
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


You probably noticed that our footer shows up in the top right, directly below `.menu`. That’s because floated boxes are removed from the normal flow of the page; therefore, **the height of our floated elements do not contribute to the vertical position of the footer**, so it simply sticks itself below the last element that wasn’t floated (i.e., the `.menu`).

We can see this more clearly by adding a red border around our `.page` element:


```css {.numberLines}
.page {
  width: 900px;
  margin: 0 auto;
  border: 1px solid red;  /* Add this */
}
```
Notice how the border is only around the `.menu` and `.footer` elements. It’s as if the floated elements weren’t even there. There are two ways to fix this: **clearing a float** and **hiding overflow**.

## Clearing Floats

“Clearing” a float is when we tell a block to ignore any floats that appear before it. **A cleared element always appears after any floats**, instead of flowing around floated boxes. It’s like forcing a box back into the default vertical flow of the page.

We can use the clear property to make our `.footer` drop down to the bottom of the page:


```css {.numberLines}
.footer {
  clear: both;            /* Add this */
  height: 200px;
  background-color: #D6E9FE;
}
```

Usually, you want to clear both left and right floats as we did here (using `clear: both`), but you can choose to clear only one or the other using `clear: left` or `clear: right`. 

If you added a red border around the `.page` element (see previous section CodePen if not) then you should see that the red border now wraps all the way around the footer, inidicating that thte floated elements indeed count towards the height of the `.page` container.

![Figure from Interneting is Hard: [Floats][clear-source]][clear-img]

[clear-img]: ../assets/content/wk5/iih-clear.png "Using the `clear` property on an element allows it to stack underneath clearing elements, returning the document to normal vertical flow."
[clear-source]: https://www.internetingishard.com/html-and-css/clears/

Depending on the type of layout you’re trying to create, this is a perfectly acceptable solution. We could stop here, but we’re going to explore float behavior more by transforming our page into a [full-bleed layout](#full-bleed-layout) that has background colors filling the entire browser window.

Watch what happens when we take the menu and footer out of the `.page` element. Change the `HTML` in the CodePen to match the following:


```html {.numberLines}
  <div class='menu'>Menu</div>
  <div class='page'>
    <div class='sidebar'>Sidebar</div>
    <div class='content'>Content</div>
  </div>
  <div class='footer'>Footer</div>
```
Since `.menu` and `.footer` are outside our fixed-width `.page,` they’re the full width of the window, which is exactly what we want for a full-bleed layout. However, notice how `.page` has zero height again despite the fact that the footer still clears the sidebar and content blocks.

Once again, the only elements in `.page` are floated, so they don’t count towards its height. In other words, moving the footer outside of the `.page` container broke our clear fix.

## Hiding Overflow

Clearing floats only fixes the height issue when there’s an element **inside** the container element that we can add a `clear` property to. Now that our footer is outside `.page`, we need a new way to make floated elements contribute to the height of their container.

![Figure from Interneting is Hard: [Floats][overflow-source]][overflow-img]

[overflow-img]: ../assets/content/wk5/iih-overflow.png "There are two properties for addressing block-height issues with float-based layouts: `clear` and `overflow`."
[overflow-source]: https://www.internetingishard.com/html-and-css/clears/

The solution is the [CSS overflow property](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow). The setting the property `overflow: hidden` on a container div tells the browser to **recognize the height of any floated elements within that container div**. This is how we can add a background color to our `.page` element and have it actually render:


```css {.numberLines}
.page {
  width: 900px;
  margin: 0 auto;
  overflow: hidden;             /* Add this */
  background-color: #EAEDF0;    /* Add this */
}
```

You should now be able to see a light gray background in `.page` instead of the default white. This isn’t full bleed yet (we’ll address that in the next section). The important part here is the behavior of `overflow: hidden`. Without it, we wouldn’t be able to see the `.page` container’s background because it would have zero height.

**Summary**: When you have an extra unfloated HTML element at the bottom of a container div, use the `clear` solution. Otherwise, add an `overflow: hidden` declaration to the container element. The underlying idea for both options is that you need a way to tell the browser to incorporate floats into the height of their container element in order for their backgrounds to show up.

## Example Float-based Layouts

The following subsections show some of the common web layouts that can be achieved using what we've learned about Floats so far.

### Floats for Full-Bleed Layout

In a few of the previous sections, the term [Full-bleed](https://www.joshwcomeau.com/css/full-bleed/) layout was used. This is jargon that comes from the print industry, where content "bleeds" all the way to the edge of the paper -- that is, a layout with no visible margin no matter the number of elements in the layout.

![Figure from Interneting is Hard: [Floats][fullbleed-source]][fullbleed-img]

[fullbleed-img]: ../assets/content/wk5/iih-full-bleed-layout.png
[fullbleed-source]: https://www.internetingishard.com/html-and-css/clears/

The full-bleed layout can be attained using the following techniques:

Our goal is to make the `.page` background fill the entire browser window, **without changing the alignment** of our sidebar or content blocks. The problem is our `.page` is busy centering everything. The `.page` container has too many jobs at the same time: it cannot be the background of our webpage at the same time as having a defined width that our `.sidebar` and `.content` blocks use for centering.

Whenever we want to rearrange the boxes of our webpage, we can consider adding *another* box. That is, another `<div>`. This way, we can separate the background of our webpage from the `.page` element and control their properties separately. Putting a box around `.page` lets `.page` continue centering stuff while giving us a different `<div>` to define a background-color property. Change our `<body>` element to match the following:


```html {.numberLines}
<body>
  <div class='menu'>Menu</div>

  <div class='container'>                 <!-- Add this -->
    <div class='page'>
      <div class='sidebar'>Sidebar</div>
      <div class='content'>Content</div>
    </div>
  </div>                                  <!-- Add this -->

  <div class='footer'>Footer</div>
</body>
```

Remember that the default block-rendering behavior is for elements to fill the width of their container. So, we should be able to move our `background-color` declaration to a `.container` rule to get a full-bleed background:


```css {.numberLines}
.page {
  width: 900px;
  margin: 0 auto;
}

.container {
  overflow: hidden;
  background-color: #EAEDF0;
}
```

As in the previous section, we still need the `overflow: hidden` line to force the `.container` to pay attention to the height of the floated elements. Without it, we wouldn’t see our background color because `.container` would have zero height.

This gives us three nested `<div>` elements just for laying out our page: a `.container` wrapper for full-bleed background color, a fixed-width `.page` for centering everything, and finally left-aligned `.sidebar` and `.content` blocks. This kind of nesting and aligning is pretty typical of most website layouts.

### Floats for Equal-Width Columns

So far, we've seen a sidebar layout, a fixed-width layout, and a full-bleed layout. Floats can also be used to create multi-column layouts. This works just like our `.sidebar` and `.content` floats; we just have more of them.

![Figure from Interneting is Hard: [Floats][equalwidth-source]][equalwidth-img]

[equalwidth-img]: ../assets/content/wk5/iih-equal-columns.png
[equalwidth-source]: https://www.internetingishard.com/html-and-css/clears/

Next we're going to add three equal-width columns to our footer. Update the `<footer>` element, like so:


```html {.numberLines}
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

We can style each of these columns just like we laid out the rest of our page. Add a new rule to styles.css:


```css {.numberLines}
.column {
  float: left;
  width: 31%;
  margin: 20px 1.15%;
  height: 160px;
  background-color: #B2D6FF;    /* Medium blue */
}
```

This is the first time we've used percentage values instead of explicit pixel values. Percentages in CSS are relative to the width of the parent element. The result is three columns that automatically resize to one-third of the browser window. Resize the browser window, and you'll see our columns grow and shrink accordingly. This is the beginning of [responsive design](https://www.internetingishard.com/html-and-css/responsive-design/): a topic we'll cover in more detail in Lab 4.

Anyhoo, let's not lose sight of the central thesis of this lesson: floats let us stack things horizontally instead of vertically. By changing the widths of the elements we're floating, we can get all kinds of different layouts, from sidebars to multiple columns to grids.

### Floats for Grids

Want a grid in the footer instead of 3 columns? No problem! When there isn't enough room to stack a floated element horizontally, it pops down to the next line. All we need to do is add some more `.column` elements:

![Figure from Interneting is Hard: [Floats][grid-source]][grid-img]

[grid-img]: ../assets/content/wk5/iih-grids.png
[grid-source]: https://www.internetingishard.com/html-and-css/clears/


```html {.numberLines}
<div class='footer'>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
  <div class='column'></div>
</div>
```

Unfortunately, our footer background is too short. Fortunately, we already know how to fix that. Let's replace the footer's explicit height with another `overflow: hidden` so it can accommodate any number of grid items:


```css {.numberLines}
.footer {
  overflow: hidden;
  background-color: #D6E9FE;
}
```

You can use this same technique to make grids of any size. For example, creating a photo gallery with a bunch of thumbnails is simply a matter of putting the grid items in `.page` instead of the footer and adding `<img/>` elements to them. But, again, remember that flexbox is a more modern way to create these kinds of layouts.

### A Brief Note on Naming Conventions

The `.column` class name isn't exactly accurate anymore. This scenario is a good example of why we want to **avoid class names that refer to appearance**. "Column" isn't so great because the content it contains doesn't necessarily need to be rendered in multiple columns (e.g., for a mobile layout, there would likely only be one column). A better name would be something like `.footer-item`, but we'll leave that for you to fix.


### Floats for Content

There's two aspects to defining a web page layout. You have your overall page structure, which is what we've been focussing on throughout this lesson. This is stuff like where you sidebar goes, how big your navigation menu is, etc. The other aspect of layouts is styling the individual HTML components (your actual content) that go inside this overarching page structure.

![Figure from Interneting is Hard: [Floats][content-source]][content-img]

[content-img]: ../assets/content/wk5/iih-content-floats.png
[content-source]: https://www.internetingishard.com/html-and-css/clears/

The process for the latter is the same, it's just nested inside the former. Let's add some dummy content to our `.content` element so we have something to play with:


```html {.numberLines}
<div class='container'>
  <div class='page'>
    <div class='sidebar'></div>
    <div class='content'>
      
      <img src='?' class='article-image'/>

      <p>Ad netus sagittis velit orci est non ut urna taciti metus donec magnis
      hendrerit adipiscing mauris sit a proin ultrices nibh.</p>

      <p>Enim suspendisse ac scelerisque nascetur vestibulum parturient sed mi a
      dolor eu non adipiscing non neque scelerisque netus ullamcorper sed
      parturient integer.Eros dui risus non sodales ullamcorper libero a dis
      cubilia a orci iaculis cursus.</p>

      <p>Egestas at aliquam a egestas accumsan cum elementum consectetur conubia
      tristique eu et vitae condimentum in ante consectetur suscipit a a duis
      vestibulum gravida morbi sagittis.Parturient scelerisque facilisis
      ullamcorper a a pretium a nisl parturient semper senectus accumsan ipsum
      mus scelerisque eget ridiculus.Accumsan dolor a.</p>

      <p>Ligula taciti vel primis sit a tincidunt habitant parturient parturient
      in parturient ante nulla consectetur sem.Facilisis parturient litora.</p>

    </div>
  </div>
</div>
```

We've got an image and several paragraphs that we can style just like our structural divs. For example, let's create a magazine-style layout by floating the image and letting the text flow around it. Add a couple more rules to our stylesheet:


```css {.numberLines}
.content {
  padding: 20px;
}

.article-image {
  float: left;
  width: 300px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}
```

Notice how we have a float inside of a float, and everything works just fine. Laying out a website is a recursive process: you build a high-level structure to work in, then you fill it with your actual content. More complex layouts may need another layer or two of nesting, but the idea is the same.

### Hiding Overflow (For Content)

You'll find examples of nested layouts all over the place. For our final example, consider a basic user-comment thread. You have an image that's floated left with a heading and some text next to it:

![Figure from Interneting is Hard: [Floats][hidden-overflow-source]][hidden-overflow-img]

[hidden-overflow-img]: ../assets/content/wk5/iih-hidden-overflow.png
[hidden-overflow-source]: https://www.internetingishard.com/html-and-css/clears/

Let's try creating this in our footer. In your favorite `.column` element, add the following:


```html {.numberLines}
<div class='column'>
  <div class='avatar'></div>
  <h3 class='username'>Bob Smith</h3>
  <p class='comment'>Aptent vel egestas vestibulum aliquam ullamcorper volutpat
  ullamcorper pharetra hac posuere a rhoncus purus molestie torquent. Scelerisque
  purus cursus dictum ornare a phasellus. A augue venenatis adipiscing.</p>
</div>
```

And the corresponding CSS rules:


```css {.numberLines}
.avatar {
  float: left;
  width: 60px;
  height: 60px;
  margin: 25px;
  border-radius: 40px;
  background-color: #D6E9FE;
}

.username {
  margin-top: 30px;
}

.comment {
  margin: 10px;
  overflow: hidden;  /* This is important */
}
```

This highlights another use case for the `overflow: hidden` trick. Sticking it on our `.comment` box made sure that the text "horizontally cleared" the floated image. Without it, the last line of the `.comment` text would hang underneath the image.

Web pages showing with hidden overflow (text left-aligned) and without hidden overflow (text flowing around icon)

![Setting `overflow: hidden`  Figure from Interneting is Hard: [Floats][hidden-overflow-2source]][hidden-overflow-2img]

[hidden-overflow-2img]: ../assets/content/wk5/iih-hidden-overflow-2.png
[hidden-overflow-2source]: https://www.internetingishard.com/html-and-css/clears/

In other words, `overflow: hidden` prevents magazine-style overflow by ensuring that the `.comment` content DOES NOT overflow underneath the floated image.


# Knowledge Check

This chapter was our first encounter with realistic web page layouts. We learned how to float divs to the left and right, how to deal with content after a float, and how to combine floats with the auto-margin centering technique from the CSS Box Model chapter. These are the tools we need to create sidebars, grids, and magazine-style layouts.

- What is the default layout behavior for block-level HTML elements?
- How does the default block-level layout behavior change for elements with the `float` property set?
- What are the two techniques we have for preventing float elements from overlapping?

# Exercises

If you have been coding along with the CodePens given in this article, then you are already done the exercise! Otherwise, start with the base CodePen given [here](#default-html-layout-behavior). Then:

- Add the lines of CSS required to implement the [Float for Full-Bleed layout](#floats-for-full-bleed-layout)
- Add the lines of CSS required to implement the [Float for Equal-Width Columns](#floats-for-equal-width-columns)
- Add the lines of CSS required to implement the [Floats for Grids](#floats-for-grids)
- Add the lines of CSS required to implement the [Floats for Content](#floats-for-content)
