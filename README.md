# Fasticons 0.0.2-alpha

![Fasticons logo](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/fasticonslogo.svg)

Fasticons is a small bundle to add social and other icons faster and easier to your website.

It uses one svg file to hold the icons as symbols.

If you find an [issue](https://github.com/stenito/fasticons/issues) with something or have a [question](https://github.com/stenito/fasticons/labels/question), please do not hesitate to [post it here](https://github.com/stenito/fasticons/issues).

Please post [feature requests here](https://github.com/stenito/fasticons/labels/enhancement). Check if your request is already listed before.

---

## Available icons

I will add new icons as i need them or when requested. [Request new or additional icons here](https://github.com/stenito/fasticons/labels/new%20icon%20request).

> This is a screenshot of the icons. The quality of the SVG icons is razorsharp :).

![Available icons](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/fasticons.png)

- Facebook
- Instagram
- Github
- Whatsapp
- Youtube
- Vimeo
- Reddit
- Snapchat
- Twitter
- Pinterest
- Linkedin

[Request new or additional icons here](https://github.com/stenito/fasticons/labels/new%20icon%20request).

---

## Features

### Scalable icons

The icons are scalable. To keep the scss file small, I opted to size all icons to the same size.

[Learn how to change the size of the icons]()

### Icon styles

There are 4 icon styles available:

- Square (default)
- Rounded
- Rounded more
- Circle

[Learn how to change the style of an icon]()

### Automated (or not) Icon colors

The icons can be styled in black, in the default color set in css (`grey`) or in brand identity colors that can be set with a class per icon or automatically with JavaScript.

[Learn how to change the color of the icons]()

### Horizontal and vertical lists

A set of icons can be styled in a horizontal (default) or vertical list.

[Learn how to display icon lists in different ways]()

### With or without link

A tekst or link can be added on the right or below the icon.

[Learn how to add a tewt with or without link]()

### Sass ans plain CSS

Both versions have some settings variables you can adjust.

---

## Usage

- [Introduction](#Introduction)
- [Dev languages](#Dev-languages)
- [Files](#Files)
  - [Repository tree](#Repositor-tree)
  - [SVG files](#SVG-files)
  - [JavaScript files](#JavaScript-files)
  - [HTML files](#HTML-files)
  - [CSS files](#CSS-files)
  - [Other files](#Other-files)
- [Installation](#Installation)
- [The Sass version](#The-Sass-version)

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
│   ├── fasticons.png
│   ├── fasticons-styles.png
│   ├── fasticonslogo.png
│   └── fasticonslogo-svg
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

---
`src/assets/si.svg` currently holds 11 available icons. See [Usage](#).  
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

`src/js/fasticons.js` is a very small ES6 script to automate the use of colored icons. See [Usage](#Installation).  
Size: 213b

`dist/js/fasticons.min.js` is the compiled and minified script for use in production. See [Usage](#Installation).  
Size: 193b

#### HTML files

`src/index.html` source example file with some of the available icons, each in 4 versions. See [Usage](#).  
Size: 7kb

`dist/index.html` same as source example file but with css and js linking for compiled files. See [Usage](#).  
Size: 7kb

#### CSS files

`src/fasticons.scss` is a sass file with the styles for the icons as well as a few rules for the example file. See [Usage](#).  
Size: 2kb

`dist/fasticons.min.css` is the compiled and minified scss file. See [Usage](#).  
Size: 2kb

`dist/fasticons.css`as a css only version. See [Usage](#).  
Size: 3kb

#### Other files

All other files are supporting in some way or another.

### Installation

Download all the files and integrate them in your current project:

1. Integrate the sass file (`scr/fasticons.scss`) in your development process. You can either copy paste the code to your existing file or use `@import` to keep it separate.  
If you prefer to use the compiled and minified css (32px icon size), you can use integrate `dist/fasticons.min.css`. The limit of using a compiled file is that you can only change the icon size by changing it manually everywhere. Due to calculation of the sizes, this is virtually impossible.  
`dist/fasticons.css`is an uncompiled, not minified css only version with css variables to set size, color and spacer.

2. OPTIONAL: **Link** the javascript file just before the `</body>`closing tag and adapt the path to the project situation (eg: `js/`). `<script src="[PATH]fasticons.min.js"></script>`  
OPTIONAL: You can also **copy and paste** this snippet before the `</body>`closing tag:

``` JavaScript
"use strict";
var fasticons = function() {
    for (var t = document.querySelectorAll(".icon"), c = 0; c < t.length; c++)
    t[c].closest(".icon").classList.add(t[c].outerHTML.match(/(?<=#)(.*)(?=")/g))
};
fasticons();
```

3. Add si.svg to your assets folder. You can customise si.svg to remove any icons you will not use or even add your own! I will [provide detailed specifications for creating additional icons in the nera future](https://github.com/stenito/fasticons/projects/1).

4. Use index.html as a reference for creating lists using `flexbox` css or create your own.

### Adding icons to your HTML

#### Adding a single icon

Adding a single icon is as simple as adding a single line of HTML. Change `[YOUR PATH]` to the location of the `si.svg` file.

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

#### Adding a list of icons

To add a list of icons, include the icons in that list in `</div class='icon-list'>`.

```HTML
</div class='icon-list'>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#facebook"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#twitter"></use>
    </svg>
  </div>
</div>
```

#### Adding text to an icon

To add text to your icon, include the icon `div` in a `span` tag and add the text after the icon.

```HTML
<span>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
    </svg>
  </div>
  This is a Reddit icon
</span>
```

#### Adding a link on your icon

To add a link to your icon, include the icon `a` tag around the icon. If there is a `span` tag, remove it.

```HTML
<a href="#">
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
    </svg>
  </div>
  This is a Reddit icon
</a>
```

#### Changing text alignment

> NOTICE: Currently: changing text position is on a list basis. All icons in a list are changed.

Horizontal alignment is default.

To change the text position, add a `has-aligned-center` class to the `icon-list` `div`.

```HTML
<div class='icon-list has-aligned-center'>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#facebook"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#twitter"></use>
    </svg>
  </div>
</div>
```

---

![Horizontal text](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/hh.png)  
Text next to the icon (default)

---

![Vertical aligned text](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/vh.png)  
Text under the icon (`has-aligned-vertical`)

---

### Changing the list alignment

List horizontal alignment is default.

To change the list alignment to vertical, add add a `is-vertical` class to the `icon-list` `div`.

```HTML
<div class='icon-list is-vertical'>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#reddit"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#facebook"></use>
    </svg>
  </div>
  <div class="icon">
    <svg>
      <use xlink:href="[YOUR PATH]si.svg#twitter"></use>
    </svg>
  </div>
</div>
```
---

![Horizontal list](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/vh.png)  
Horizontal list (default)

---

![Vertical list](https://raw.githubusercontent.com/stenito/fasticons/master/documentation%20assets/vc.png)  
Vertical list (`has-aligned-vertical`)

---

### Changing the size of the icons

#### Sass version

`src/fasticons.scss` has 3 variables that you can change to fit your needs. The variables are marked as `!default`so you can change then in a global settings file that is imported before if you wish.

``` SCSS
// settings
$icon-size: 32px !default;
$default-icon-color: gray !default;
$spacer: 1rem !default;
```

`$icon-size` takes any valid CSS unit value.

`$default-icon-color` takes any valid CSS color value. Using the JavaScript color automation overrides the default color with a predefined color for all icons. Using a class in the HTML file to define the color can set the color per icon and leave others in the default color. [Learn how to set the color of the icons](#)

`$spacer` sets the spacing used in the HTML to style the icons and icon lists + their surrouding elements.

#### CSS version

`dist/fasticons.css` has 3 variables that you can change to fit your needs.

``` CSS
:root {
  /* Settings */
  --icon-size: 32px;
  --default-icon-color: gray;
  --spacer: 1rem;
  /* END Settings */
}
```

`--icon-size` takes any valid CSS unit value.

`--default-icon-color` takes any valid CSS color value. Using the JavaScript color automation overrides the default color with a predefined color for all icons. Using a class in the HTML file to define the color can set the color per icon and leave others in the default color. [Learn how to set the color of the icons](#)

`--spacer` sets the spacing used in the HTML to style the icons and icon lists + their surrouding elements.

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
