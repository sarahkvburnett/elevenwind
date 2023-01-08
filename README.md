# Elevenwind

An Eleventy Starter Kit, my base for all new 11ty projects now with Tailwind.css

Based of Eleventastic (no external build, maintains manifest.json)

## Features

* Tailwind CSS
* JS Bundling (Webpack)
* HTML Minification
* No external builds, everything runs through 11ty

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```sh
npm install
```

### Commands

* Run `npm start` for a development server and live reloading
* Run `npm run build` to generate a production build


## CSS

Styling works with Tailwind CSS, see tailwind.config.js

## JS

Javascript can be written in ES6 syntax. The main index file is in src/assets/scripts/main.js. It will be transpiled to ES5 with babel, bundled together with webpack, and minified in production. The output is in public/assets/scripts/main.js
