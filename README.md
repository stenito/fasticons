# Fasticons 0.1.0-alpha

![Fasticons logo](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/fasticonslogo.svg)

Fasticons is a small bundle to add social and other icons faster and easier to your website.

It uses one svg file to hold the icons as symbols.

If you find an [issue](https://github.com/stenito/fasticons/issues) with something or have a [question](https://github.com/stenito/fasticons/labels/question), please do not hesitate to [post it here](https://github.com/stenito/fasticons/issues).

Please post [feature requests here](https://github.com/stenito/fasticons/labels/enhancement). Check if your request has already been posted before.

---

## Available icons

I will add new icons as i need them or when requested. [Request new or additional icons here](https://github.com/stenito/fasticons/labels/new%20icon%20request).

> This is a screenshot of the icons. The quality of the SVG icons is razorsharp :). See... --> ![Github icon](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/github.svg)

![Available icons](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/fasticons.png)

Reddit, Snapchat, Facebook, Twitter, Instagram, Github, Linkedin, Whatsapp, Youtube, Vimeo, Pinterest

[Request new or additional icons here](https://github.com/stenito/fasticons/labels/new%20icon%20request).

---

## Features

### Scalable icons

The icons are scalable. To keep the css small, All the icons have the same size.

[Learn how to change the size of the icons](#Changing-the-size-of-the-icons)

### Icon styles

There are 4 icon styles available:

- Square (default)
- Rounded
- Rounded more
- Circle

[Learn how to change the style of an icon](#Setting-the-style-of-an-icon)

### Automated (or not) Icon colors

The icons can be styled in black, in the default color set in css (`grey`) or in brand identity colors that can be set with a class per icon or automatically for all with JavaScript.

[Learn how to change the color of the icons](#Changing-the-color-of-the-icons)

### Sass ans plain CSS

Both versions have some settings variables you can adjust.

---

## Usage

- [Introduction](#Introduction)
- [Dev languages](#Dev-languages)
- [Files](#Files)
  - [Repository tree](#Repository-tree)
  - [SVG files](#SVG-files)
  - [JavaScript files](#JavaScript-files)
  - [HTML files](#HTML-files)
  - [CSS files](#CSS-files)
  - [Other files](#Other-files)
- [Installation](#Installation)
- [Adding an icon to HTML](#Adding-icons-to-HTML)
- [Changing the size of the icons](#Changing-the-size-of-the-icons)
  - [Sass version](#Sass-version)
  - [CSS version](#CSS-version)
- [Setting the style of an icon](#Setting-the-style-of-an-icon)
- [Changing the color of the icons](#Changing-the-color-of-the-icons)
  - [Automatic for all icons](#Automatic-for-all-icons)
  - [Per icon color without JavaScript](#Per-icon-color-without-JavaScript)

### Introduction

I created this small bundle after I discovered a similar aproach for social icons on the basic pages Jekyll installs. As the functionality and flexibility is limited, I decided to do a little more research and testing to see if i could make the system more flexible.

### Dev languages

- HTML
- Sass (CSS extension language & preprocessor)
- JavaScript (Optional use)

### Files

#### Repository tree

``` plaintext
.
├── dist
│   ├── assets
│   │   └── si.svg
│   ├── js
│   │   └── fasticons.min.js
│   ├── fasticons.css
│   ├── fasticons.min.css
│   └── index.html
├── documentation assets
│   └── ...
├── src
│   ├── assets
│   │   └── si.svg
│   ├── js
│   │   └── fasticons.js
│   ├── fasticons.scss
│   └── index.html
├── LICENSE
├── README.md
└── repository-tree.txt
```

#### SVG files

`src/assets/si.svg` currently holds 11 available icons.  
Size: 8.9kb

`dist/assets/si.svg`is the minified version. Both versions are optimised.  
Size: 8.9kb

``` svg
<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">

  <symbol id="github" viewBox="0 0 32 32">

    <path d="M0 0v32h32V0H0zm18.855 24.555c-.45.08-.616-.198-..."/>

  </symbol>

</svg>
```

#### JavaScript files

`src/js/fasticons.js` is a very small ES6 script to automate the use of colored icons.  
Size: 232b

`dist/js/fasticons.min.js` is the compiled and minified script for use in production.  
Size: 212b

#### HTML files

`src/index.html` source example file with some of the available icons, each in 4 versions.  
Size: 6kb

`dist/index.html` same as source example file but with css and js linking for compiled files.  
Size: 6kb

#### CSS files

`src/fasticons.scss` is a sass file with the styles for the icons as well as a few rules for the example file.  
Size: 1kb

`dist/fasticons.min.css` is the compiled and minified scss file.  
Size: 1kb

`dist/fasticons.css`as a css only version.  
Size: 2kb

#### Other files

All other files are supporting in some way or another.

### Installation

Download all the files and integrate them in your current project:

- Integrate the sass file (`scr/fasticons.scss`) in your development process. You can either copy paste the code to your existing file or use `@import` to keep it separate.  
If you prefer to use the compiled and minified css (32px icon size), you can use integrate `dist/fasticons.min.css`. The limit of using a compiled file is that you can only change the icon size by changing it manually everywhere. Due to calculation of the sizes, this is a 'nice' job.  
`dist/fasticons.css`is an uncompiled, not minified css only version with css variables to set size and color

- OPTIONAL: **Link** the javascript file just before the `</body>`closing tag and adapt the path to the project situation (eg: `js/`). Change `[YOUR PATH]` to the location of the `si.svg` file.  
`<script src="[YOUR PATH]fasticons.min.js"></script>`  
OPTIONAL: You can also **copy and paste** this snippet before the `</body>`closing tag:

``` JavaScript
"use strict";
var fasticons = function() {
    for (var t = document.querySelectorAll(".icon"), s = 0; s < t.length; s++)
    t[s].closest(".icon").classList.add(t[s].outerHTML.match(/#(.*)(?=")/g)
    .toString().substring(1))
}; fasticons();
```

- Add si.svg to your assets folder. You can customise si.svg to remove any icons you will not use or even add your own! I will [provide detailed specifications for creating additional icons in the nera future](https://github.com/stenito/fasticons/projects/1).

### Adding an icon to HTML

Adding an icon is as simple as adding a single line of HTML. Change `[YOUR PATH]` to the location of the `si.svg` file.

``` HTML
<div class="icon">
  <svg>
    <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
  </svg>
</div>

/* example with assets as path */
<div class="icon">
  <svg>
    <use xlink:href="assets/si.svg#reddit"></use>
  </svg>
</div>
```

### Changing the size of the icons

#### Sass version

`src/fasticons.scss` has 3 variables that you can change to fit your needs. The variables are marked as `!default`so you can change then in a global settings file that is imported before if you wish.

``` SCSS
// settings
$icon-size: 32px !default;
$default-icon-color: gray !default;
```

`$icon-size` takes any valid CSS unit value.

`$default-icon-color` takes any valid CSS color value. Using the JavaScript color automation overrides the default color with a predefined color for all icons. Using a class in the HTML file to define the color can set the color per icon and leaves others in the default color. [Learn how to set the color of the icons](#Changing-the-color-of-the-icons)

#### CSS version

`dist/fasticons.css` has 3 variables that you can change to fit your needs.

``` CSS
:root {
  /* Settings */
  --icon-size: 32px;
  --default-icon-color: gray;
  /* END Settings */
}
```

`--icon-size` takes any valid CSS unit value.

`--default-icon-color` takes any valid CSS color value. Using the JavaScript color automation overrides the default color with a predefined color for all icons. Using a class in the HTML file to define the color can set the color per icon and leave others in the default color. [Learn how to set the color of the icons](#Changing-the-color-of-the-icons)

### Setting the style of an icon

Setting the style of an icon the same for both Sass and CSS version.

There are 4 icon styles available:

- Square (default)
- Rounded
- Rounded more
- Circle

> This is a screenshot of the icons. The quality of the SVG icons is razorsharp :).

![Available icons styles](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/fasticons-styles.png)

The default style is Square
You can set the style per icon in the HTML by adding one of the followng classes:

`is-rounded`, `is-rounded-more`, `is-circle`.

### Changing the color of the icons

#### Automatic for all icons

You can choose to have the colors automatically set to the brand color by using a very small JavaScript.

**Link** the javascript file just before the `</body>`closing tag and adapt the path to the project situation (eg: `js/`). Change `[YOUR PATH]` to the location of the `si.svg` file.  
`<script src="[PATH]fasticons.min.js"></script>`  

You can also **copy and paste** this snippet before the `</body>`closing tag:

``` JavaScript
"use strict";
var fasticons = function() {
    for (var t = document.querySelectorAll(".icon"), c = 0; c < t.length; c++)
    t[c].closest(".icon").classList.add(t[c].outerHTML.match(/(?<=#)(.*)(?=")/g))
};
fasticons();
```

Removing or changing the CSS rule for a specific icon gives you control over the color of separate icons.

Example **Sass** version of the stylesheet rule:

``` SCSS
.reddit {
  fill: #ff4500;
}
```

Example **CSS** version of the stylesheet rule:

```CSS
.icon-list .icon.reddit {
  fill: #ff4500;
}
```

#### Per icon color without JavaScript

By adding the desired color class to each `icon` tag separately, you can color each icon separately. The class is named after the icon.

``` HTML
<div class="icon reddit">
  <svg>
    <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
  </svg>
</div>
```
