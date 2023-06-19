# Elevenwind

An Eleventy Starter Kit, my base for all new 11ty projects now with Tailwind.css

Based of [Eleventastic](https://github.com/maxboeck/eleventastic/tree/master) (no external build, maintains manifest.json)

## Features

* Tailwind CSS
* Additional CSS Pipeline (Sass, CleanCSS)
* JS Bundling (Webpack)
* HTML Minification
* No external builds, everything runs through 11ty
* Enhanced Eleventy Navigation

## Getting Started

To install the necessary packages, run this command in the root folder of the site:

```sh
npm install
```

### Commands

* Run `npm start` or `npm run dev` for a development server and live reloading
* Run `npm run build` to generate a production build


## Template Filters
### Page
Each provides array of page objects matching filter

To use, add the following page data within template front matter data (can add to these):
```text
---
page:
    title: Beyond Wordpress
    excerpt: The dawn of Wordpress began in 2003 and has since become widely adopted as “go to” website solution for any business wanting a CMS.
    image: artwork/laptop.png
    related: ['/articles/grass-roots']
---
```

Available filters:
* Breadcrumb - hierarchy to include/exclude current page
```twig
    {% collections.all | breadcrumb(page) %}
```
* Children - page children
```twig
    {% set children = collections.all | children(page) %}
```
* Siblings - pages with same parent
```twig
    {% set siblings = collections.all | siblings(page) }}
```
* Related - defined in front matter data
```twig
    {% set related = collections.all | related(page) }}
```
* Similar - siblings and related
```twig
    {% set similar = collections.all | similar(page) }}
```

Note: could also use [Tags](https://www.11ty.dev/docs/collections/) to filter collections like Shopify

### URL
Each returns formatted url prefixed with any base url defined `process.env.APP_URL` and suffixed with version param where applicable
* URL
```twig
    {{ '/services' | url }}
```
* Asset URL - return asset url within /assets with version param
```twig
    {{ 'css/main.css' | asset }}
```
* Image URL - returns image url within /assets/url (no image processing at this point) with version param
```twig
    {{ 'logo.png' | image }}
```

## CSS

Styling works with Tailwind CSS, see tailwind.config.js. 

Additional Sass pipeline. The main index file is in src/assets/styles/main.scss. Import any SCSS code you want in there; it will be processed and optimized. The output is in public/assets/css/main.css.

## JS

Javascript can be written in ES6 syntax. The main index file is in src/assets/scripts/main.js. It will be transpiled to ES5 with babel, bundled together with webpack, and minified in production. The output is in public/assets/js/main.js