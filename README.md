# Fasticons 0.0.1-alpha

![Fasticons logo](https://raw.githubusercontent.com/stenito/fasticons/master/doc%20assets/fasticonslogo.svg)

Fasticons is a small bundle to add social and other icons faster and easier to your website.

It uses one svg file to hold the icons as symbols.

If you find an [issue](https://github.com/stenito/fasticons/issues) with something or have a [question](https://github.com/stenito/fasticons/labels/question), please do not hesitate to [post it here](https://github.com/stenito/fasticons/issues).

Please post [feature requests here](https://github.com/stenito/fasticons/labels/enhancement). Check if your request is already listed before.

## Available icons

![Available icons](https://raw.githubusercontent.com/stenito/fasticons/master/doc%20assets/fasticons.png)

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

## Features

### Scalable icons

The icons are scalable. To keep the scss file small, I opted to size all icons to the same size.

### Icon styles

There are 4 icon styles available:

- Square
- Rounded
- Rounded more
- Circle

### Icon colors

The icons can be styled in black, in the default color set in css (`grey`) or in brand identity colors that can be set with a class per icon or automatically with JavaScript.

### Horizontal and vertical lists

A set of icons can be stylesd in a horizontal (default) or vertical list.

### With or without link

A tekst or link can be added on the right or below the icon.

## Usage

### Introduction

I created this small bundle after I discovered a similar aproach for social icons on the basic pages Jekyll installs. As the functionality and flexibility is limited, I decided to do a little more research and testing to see if i could make the system more flexible.

#### Fasticons uses the following languages

- HTML
- Sass (CSS extension language & preprocessor)
- JavaScript (Optional use)

#### Files in the repository

``` plaintext
.
├── src
│   ├── assets
│   │   └── si.svg
│   ├── js
│   │   └── fasticons.js
│   ├── index.html
│   └── style.scss
├── LICENSE
└── README.md

```

---
`assets/si.svg` currently holds 11 available icons. See [Usage](#).

``` svg

<svg xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32">

  <symbol id="github" viewBox="0 0 32 32">

    <path d="M0 0v32h32V0H0zm18.855 24.555c-.45.08-.616-.198-..."/>

  </symbol>

</svg>

````

Size: 8.9kb

---
`js/fasticons.js` is a very small script to automate the use of colored icons. See [Usage](#Installation).

Size: 471b

---

`index.html` is an example file with the available icons, each in 4 versions. See [Usage](#).

Size: 7kb

---

`style.scss` is a sass file with the styles for the icons as well as a few rules for the example file. See [Usage](#).

Size: 2.1kb

---

### Installation

Download all the files and integrate them in your current project:

1. Integrate the style file (`style.scss`) in your development process. You can either copy paste the code to your existing file or use `@import` to keep it separate.  
If you prefer to use the compiled and/or minified css, you can use [this online tool (Sassmeister.com)](https://www.sassmeister.com/) to change the size, color and spacer variables and compile the code to CSS.

> **IMPORTANT NOTICE:** I plan to [include a compiled and minified css file in the near future](https://github.com/stenito/fasticons/projects/1). The limits of using a compiled file is that you can only change the icon size by changing it manually everywhere it is used. Due to calculation of the sizes, this is virtually impossible. Another option is to include a css version that uses css variables. Let me know if you would like that by [requesting it as an enhancement](https://github.com/stenito/fasticons/labels/enhancement).

2. OPTIONAL: **Include** the javascript file just before the `</body>`closing tag.  
OPTIONAL: You can also **copy and paste** this snippet before the `</body>`closing tag:

> **IMPORTANT NOTICE:** The JavaScript snippet below is compiled to work cross browser. The original script in the bundle is NOT COMPILED and supports ES6. I plan to [include a compiled and minified script in the near future](https://github.com/stenito/fasticons/projects/1).

```JavaScript

"use strict";
var fasticons = function() {
    for (var t = document.querySelectorAll(".icon"), c = 0; c < t.length; c++)
    t[c].closest(".icon").classList.add(t[c].outerHTML.match(/(?<=#)(.*)(?=")/g))
};
fasticons();

```

3. ...

1. ...
