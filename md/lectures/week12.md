---
title: "2W6-W23: Week 12 Lecture Notes"
toc-title: "Lecture navigation"
prev-page: "../lectures/week11.html"
next-page: "../lectures/week13.html"
abstract-title: "Intermediate User Interfaces: HTML Forms"
abstract: |
  We will learn how to create and style HTML Forms, which are ubiquitous on the web for entering data into a website.
---

# Lesson Overview

- HTML Forms

---

# HTML Forms

Forms[^forms-attribution] are the primary interactive component of websites. Forms allow users to enter data, which is generally sent to a web server for processing and storage, or used immediately on the browser to update the interface.

[^forms-attribution]: This section was adapted directly from [HTML Forms](https://maujac.github.io/2W6-UI/#/./wk11/forms) by Mauricio Buschinelli from the Winter 2021 offering of this couse.

We will not learn everything there is to know about forms in this class (particularly, we will not learn server-side nor client-side JavaScript for forms), but we will introduce them now since a few HTML Form elements are required for [Lab 4](../pages/assignments.html#lab-4).

HTML forms are made primarily of 4 components:

1. **One** `<form>` container element that **wraps all form elements**;
2. One or more `<input type="">` element where users **enter data** (e.g., `type=search` for a search bar, or `type=radio` to select one of many options)
3. An `<input type=submit>` element *or* a `<button>` element for **triggering the submission**;
4. `<label>` elements that visually *identify* `<input>` elements

Let's look at a basic `<form>`:

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bGVgKma" data-user="maujac" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/maujac/pen/bGVgKma">
  wk11-forms-ex1</a> by Mauricio Buschinelli (<a href="https://codepen.io/maujac">@maujac</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

A few notes about this form:

- The `<form>` is a `block` level element, **however, its items are `inline` elements.**
- The **labels must have the same name as their respective inputs**;
- The `<form>` container and it's children can be styled as usual via CSS;
- Notice the `focus` "glow" when an `<input>`  is selected.

Now we will look at each form component in a little more detail:

## The `<form>` Element

As mentioned, the `<form>` tag is used to create an HTML form for user input.

The most important attributes of `<form>`  is `action` , which defines the URL of where to send the data.

The URL usually points to a server-site script which will parse the data (categorize it) and store it. In this course we will not look at server side processing. 

The next most important attribute of `<form>` is `method`: this attribute specifies the HTTP method to use when the form is submitted (**GET** or  **POST**).

| Attribute                                                    | Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| [accept-charset](https://www.w3schools.com/tags/att_form_accept_charset.asp) | *character_set*                                              | Specifies the character encodings that are to be used for the form submission |
| [action](https://www.w3schools.com/tags/att_form_action.asp) | *URL*                                                        | Specifies where to send the form-data when a form is submitted |
| [autocomplete](https://www.w3schools.com/tags/att_form_autocomplete.asp) | on off                                                       | Specifies whether a form should have autocomplete on or off  |
| [enctype](https://www.w3schools.com/tags/att_form_enctype.asp) | application/x-www-form-urlencoded  multipart/form-data  text/plain | Specifies how the form-data should be encoded when submitting it to the server (only for method="post") |
| [method](https://www.w3schools.com/tags/att_form_method.asp) | get       post                                               | Specifies the HTTP method to use when sending form-data      |
| [name](https://www.w3schools.com/tags/att_form_name.asp)     | *text*                                                       | Specifies the name of a form                                 |
| [novalidate](https://www.w3schools.com/tags/att_form_novalidate.asp) | novalidate                                                   | Specifies that the form should not be validated when submitted |
| [target](https://www.w3schools.com/tags/att_form_target.asp) | _blank       _self       _parent       _top                  | Specifies where to display the response that is received after submitting the form |


> With a **GET method** the data is submitted and visible in the URL bar (i.e. to the user).
> With a **POST method**, the data is encoded in the HTML request body and can be encrypted (with https).

`method` uses GET by default. **Always use POST if the form data contains sensitive information.** Ideally, encrypt the data in the request body by using an HTTPS certified URL.

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="poRWweL" data-user="maujac" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/maujac/pen/poRWweL">
  forms - GET-search</a> by Mauricio Buschinelli (<a href="https://codepen.io/maujac">@maujac</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

You can find a complete description of `<form>` element attributes [here](https://www.w3schools.com/tags/tag_form.asp).

## The `<input>` Element

The [`<input>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) can be displayed in several ways, depending on the `type`  attribute.

By default the `type` attribute is "text".

> The `<input>` element is very extensible and adaptable. There are dozens of properties available. We will only focus on a few.
>
> To learn more, visite the [MDN Web docs page on the `<input>` element.](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### `<input>` Type

There are many values that  `type=` can take, we will focus on the following:

- Radio Buttons
- E-mail
- Search
- Submit Button

The input `type=` can take the following values:

| Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [button](https://www.w3schools.com/tags/att_input_type_button.asp) | Defines a clickable button (mostly used with a JavaScript to activate a script) |
| [checkbox](https://www.w3schools.com/tags/att_input_type_checkbox.asp) | Defines a checkbox                                           |
| [color](https://www.w3schools.com/tags/att_input_type_color.asp) | Defines a color picker                                       |
| [date](https://www.w3schools.com/tags/att_input_type_date.asp) | Defines a date control (year, month, day (no time))          |
| [datetime-local](https://www.w3schools.com/tags/att_input_type_datetime-local.asp) | Defines a date and time control (year,  month, day, time (no timezone) |
| [email](https://www.w3schools.com/tags/att_input_type_email.asp) | Defines a field for an e-mail address                        |
| [file](https://www.w3schools.com/tags/att_input_type_file.asp) | Defines a file-select field and a "Browse" button (for file uploads) |
| [hidden](https://www.w3schools.com/tags/att_input_type_hidden.asp) | Defines a hidden input field                                 |
| [image](https://www.w3schools.com/tags/att_input_type_image.asp) | Defines an image as the submit button                        |
| [month](https://www.w3schools.com/tags/att_input_type_month.asp) | Defines a month and year control (no timezone)               |
| [number](https://www.w3schools.com/tags/att_input_type_number.asp) | Defines a field for entering a number                        |
| [password](https://www.w3schools.com/tags/att_input_type_password.asp) | Defines a password field                                     |
| [radio](https://www.w3schools.com/tags/att_input_type_radio.asp) | Defines a radio button                                       |
| [range](https://www.w3schools.com/tags/att_input_type_range.asp) | Defines a range control (like a slider control)              |
| [reset](https://www.w3schools.com/tags/att_input_type_reset.asp) | Defines a reset button                                       |
| [search](https://www.w3schools.com/tags/att_input_type_search.asp) | Defines a text field for entering a search string            |
| [submit](https://www.w3schools.com/tags/att_input_type_submit.asp) | Defines a submit button                                      |
| [tel](https://www.w3schools.com/tags/att_input_type_tel.asp) | Defines a field for entering a telephone number              |
| [text](https://www.w3schools.com/tags/att_input_type_text.asp) | Default. Defines a single-line text field                    |
| [time](https://www.w3schools.com/tags/att_input_type_time.asp) | Defines a control for entering a time (no timezone)          |
| [url](https://www.w3schools.com/tags/att_input_type_url.asp) | Defines a field for entering a URL                           |
| [week](https://www.w3schools.com/tags/att_input_type_week.asp) | Defines a week and year control (no timezone)                |

Example of radio and email inputs:

<iframe height="300" scrolling="no" title="wk11-radio_email_search-ex2" src="https://codepen.io/maujac/embed/WNQRKpY?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/WNQRKpY'>wk11-radio_email_search-ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### The `<label>` elements

The [`<label>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) associates a text caption with an `<input>` field.

> Associate the `<label>` with an `<input>` element by giving the `<input>` an `id` attribute.
>
> The `<label>` then needs a `for` attribute whose value is the same as the input's `id`.

Using `<labels>` for `<inputs>` has two major advantages and is mandatory in this course:

- Screen readers can read out the label when the user is focused on the form input.
- Clicking on the label will focus/activate the input.

### `<input>` size & interaction

The [`size` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size) specifies how much of the input is shown. Has similar result as using CSS `width`, however, sizing is automatically adjusted to the input type.

There are also properties that will limit the user interaction with the `<input>`:

- [`disabled`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled): Input value can't be modified and is never sent with the rest of the form data. Typically rendered with a dimmer color
- [`readonly`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-readonly): User cannot modify the input value but it is still sent with the rest of the form data.

<iframe height="300" scrolling="no" title="wk11-input-size" src="https://codepen.io/maujac/embed/oNBGWZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/oNBGWZP'>wk11-input-size</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## The `<textarea>` Element

[The `<textare>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) provides a multi-line text field for larger messages:

<iframe height="300" scrolling="no" title="wk11-textarea-ex4" src="https://codepen.io/maujac/embed/yLYgRxx?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/yLYgRxx'>wk11-textarea-ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Placeholder and default text

To define the default value of an [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) element you have to use the `value` attribute:

<figure class="full-width">
  <iframe height="300" scrolling="no" title="wk11-placeholder_defaults-ex5" src="https://codepen.io/maujac/embed/BaopGZP?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
    See the Pen <a href='https://codepen.io/maujac/pen/BaopGZP'>wk11-placeholder_defaults-ex5</a> by Mauricio Buschinelli
    (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
  </iframe>
</figure>

### The `<select>` element

The [`<select>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) is used to create a drop-down list of options.

The [`option`](https://www.w3schools.com/tags/tag_option.asp) tags inside the `<select>` element define the available options in  the drop-down list.

<iframe class="interactive tabbed-standard" src="https://interactive-examples.mdn.mozilla.net/pages/tabbed/select.html" title="MDN Web Docs Interactive Example" loading="lazy" width="100%" height="400"></iframe>

There are two ways of triggering a form submission:

- Immediately after an `<input>` of `type=button` is clicked inside a form;
- Immediately after a `<button>` element is clicked inside a form;

As far as the form is concerned both methods are functionally the same.

Depending on the browser and the `action` attribute of the `<form>`, the page might quickly refresh, which can be hard to notice.

#### Submission with input type="button"

The `<input>` element can be used as a button in order to submit the form. This happens automatically as soon as the button is clicked.

<iframe height="300" scrolling="no" title="wk11-input_button-ex3" src="https://codepen.io/maujac/embed/JjYEaLZ?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/JjYEaLZ'>wk11-input_button-ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### Submission with button

The [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) element can also be used to submit the form. The main difference between the `<button>` and the `<input type="submit">`  is that the `<button>` element can take other elements inside, such as icons or images.

<iframe height="300" scrolling="no" title="Searchbar demo" src="https://codepen.io/maujac/embed/QWjjjda?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/QWjjjda'>Searchbar demo</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Built-in form validation

One of the most significant features of [HTML5 form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types) is the ability to validate most user data without relying onJavaScript.

This is done by using validation attributes on `<input>` elements:

- `required`: Specifies whether a form field needs to be filled in before the form can be submitted.
- `minlength` and `maxlength`: Specifies the minimum and maximum length of textual data (strings)
- `min` and `max`: Specifies the minimum and maximum values of numerical input types
- `type`: Specifies whether the data needs to be a number, an email address, or some other specific preset type. 
- `pattern`: Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) that defines a pattern the entered data needs to follow (advanced).
- `step`: Only useful on an `<input>` of `type=number`. Specified the increment amounts. Defaults to 1 unit (integer).

<iframe height="300" scrolling="no" title="wk11-required-ex6" src="https://codepen.io/maujac/embed/OJyWaoB?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/OJyWaoB'>wk11-required-ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

>Note that **data validation only happens once the `<form>` elements experiences a `submit` event.**
>
>The `submit` event is only triggered after the button's click has been processed. See DOM Events for more.

---

# Knowledge Check

Stay tuned for more information!

# Readings

  - [Basic native form controls](https://developer.mozilla.org/en-US/docs/Learn/Forms/Basic_native_form_controls) by MDN web docs
  - [Form Design Patterns Book Excerpt: A Registration Form](https://www.smashingmagazine.com/2018/10/form-design-patterns-excerpt-a-registration-form/) by Smashing Magazine
  - [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) by MDN web docs
  - [Youtube tutorial][yt-tutorial]

[yt-tutorial]: https://www.youtube.com/E5MEzC0prd4

# Exercises

(Not part of an assignment, just to study for Test 2) Complete the following exercises from W3C Schools:

1. [HTML Forms](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_forms1)
2. [Form Elements](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_elements1)
3. [Input Types](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_input_types1)
4. [Form Attributes](https://www.w3schools.com/html/exercise.asp?filename=exercise_html_form_attributes1)

