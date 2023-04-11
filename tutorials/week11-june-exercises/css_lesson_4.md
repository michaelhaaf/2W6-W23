# Third revision

## pres specs:

whiteboard

##  intro self (3m)

Hi I'm June
I took this DEC, graduated in 2016, and have done web programming for about 8 years
I'm a friend of Michaels
I host my own web servers from home to serve a couple websites for fun
I wanna be a teacher

For me personally, it's the server side stuff that's really interesting. Most recently I've worked as a PHP developer.
Michael asked me if I could talk about CSS, since it's where you're at in the course calendar.
I think you guys are doing a grid assignment, which is cool.

web development is a class I took with Larry when I was about 17
I don't remember covering CSS and I'm pretty sure Flex did not exist when I was growing up
Web dev is something I'm very passionate about
There's a lot going on when we use an internet browser, that goes on behind the scenes
A lot of its pretty creative stuff

So, at any point, if you guys have questions
about anything involving web development in general, feel free to ask them
not just css

I have about two hours, for this class
I hope you don't get bored 
If you get bored put your hand up and ask me a stupid question or something

So I'm gonna talk about
i)  getting a job in web development
ii) having fun with web development

and we'll do a couple exercises time allowing



## jobs in web development

"web v.s. internet"

quick types:
a) frontend
a designer gives you a picture. You are expected to be able to create the website, given the same picture assets they used
a good designer will give you three pictures - what it should look like on mobile, tablet, and desktop. And if they're extra nice they'll do their designging in a program that will give you all the color hexes, margins, paddings llength etc when you mouse over them
they often dont

b) fullstack
you do the whole thing usually, typically more freelance or small business
You either need to know enough CSS to make a website look "professional", or, buy templates and reskin them for the customers


c) backend
CSS is only important when someone's page doesn't receives it's style assets because you accidentally forbade its file type in the server config


In pretty much all cases though, as long as you understand the basics of CSS (i.e. the box model) you can just learn most of the rules and properties on the spot or over a week.
And then also, knowing either flex or grid will solve all the trickier layout problems that come with designing using a bunch of squares

* basics (box-model) (ask someone to draw)
* flex or grid
* "position" keyword

I think you guys have covered all three of these. Colors and sizes arent tough with CSS, its usually the layouts designers and clients want (and user-interaction features) that cause the problems

Free web design tip: if you want a good website for everyone to use. Like a government website or something. The less interativity the better. No animations. No moving pictures

Especially in multi-team CSS files, the scripts for that can get pretty messy and big without any organization. The longer a websites been around and the more time the visuals are updated, that often results in messy CSS. What happens a lot is, updates are made to the design, a developer will add the CSS, but not remove the old, unused classes anymore (generally they are not sure if they are being used anywhere else). 

More free tips: here's how to deal with a few tricky things that people ask for. cheat sheat

MAKE EXAMPLES FOR EACH
b) gradient overlays on pictures (5m) [SUP ONE](SUP ONE)
c) text on pictures (5m) [SUP TWO](SUP TWO)
d) "background-image" intricacies [SUP THREE](SUP THREE)
e) position: absolute intricacies [SUP FOUR](SUP FOUR)
f) centering anything [SUP FIVE](SUP FIVE)
g) box-shadow and border


(will be tested somewhat)


Here are some other things, if you're interested in doing front end stuff full time, to look into

* BEM (https://getbem.com/introduction/)
	- you write your CSS in such a way that your class names tell you what element it represents
* SASS (https://sass-lang.com/)
	- a CSS pre-processor. Let's you write classes INSIDE other classes.. you compile your .sass or .scss files into regular CSS files which you link in your HTML
* csstricks.com (https://css-tricks.com/)
	- some of their articles are funny but I hear its gone a little downhill recently

"Optimal CSS development pattern"
* conventions + preprocessors
* minifiying & combining
* caching, serving

What does a web browser cache? how can you check?
What are the advantages to caching? disadvantages?

When it comes to CSS in a professional setting, its the same as anything else code related...
you can ALWAYS google it. But the more you understand how it generally works and what the more impactful features of it do, the less time you have to spend trying to understand what you're google. Or you can google it better



EXERCISE: [SUP SIX](SUP SIX)
provided two pictures, mobile and desktop, of a website design, try to make them
designs will be "professional"
purpose: day in the job.
OR
provided a template (zip with HTML,css,JS), and given a list of "revisions", change the provided template css to match the requested revisions
same purpose

(can you chatgpt a website by visually describing it? be my guest)


## Art in web development

Jobs suck and web development is like the most hyper futuristic medium of communication out there
its literally called hyper text transfer protocol

I want to show you some of the funkier things people have done in CSS

Cool websites to look through:
* http://old.reddit.com/r/ooer
* https://orteil.dashnet.org/cookieclicker/
* https://www.pokeclicker.com/
* css zengarden
* CSS spinners copy and paste


Open console & inspect some, explain how some properties work, walk through MDN google it

Fun stuff happens with JavaScript. You can use it to add or remove classes from elements on user interactions.

### JavaScript and CSS interaction
- Creating elements [SUP SEVEN](SUP SEVEN)
- getting DOM elements as JS obects (the https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement interface) [SUP 8](SUP EIGHT)
- Adding/removing classes to elements in JavaScript [SUP NINE](SUP NINE)
- Adding/removing inline styles to elements JavaScript  [SUP 10](SUP 10)
- HTML game hacks
- JavaScript v.s. React

Exercise: [SUP 11](SUP 11)
given simple idle game dev setup (click a text character to gain a point, two different upgrades with autoclick)
barebones HTML and CSS given, all JavaScript provided with no need to change it (but recommend doing so)


