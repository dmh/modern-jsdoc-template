# Dark JSDoc default template
This is a JSDoc default template with a **Dark theme** style that closely resembles the Dark theme found on **GitHub**.

[![Run tests](https://github.com/dmh/dark-jsdoc-default/actions/workflows/test.yml/badge.svg)](https://github.com/dmh/dark-jsdoc-default/actions/workflows/test.yml)
![node-current](https://img.shields.io/node/v/dark-jsdoc-default)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![JSDoc](https://img.shields.io/badge/API\%20documentation-JSDoc-yellow)

## [**Demo Documentation**](https://dmh.github.io/dark-jsdoc-default)




# Image/image/image




## Why?
**Dark theme.**

This template enhances the simple and minimalistic JSDoc default template by incorporating a dark theme styling, similar to GitHub's dark theme. There are no other significant alterations.

## Goal
**Minimal changes to the default theme.**

The JSDoc default theme has undergone minimal changes. The template only includes new styles and slight script additions to the JSDoc default template. The main functionality and features remain unchanged. During the build process, most of the templates are copied from JSDoc without any modifications, ensuring alignment with the JSDoc default template in terms of features and functionality.

## Features:
- **Dark theme** similar to GitHub dark theme
- [Highlight.js](https://github.com/highlightjs/highlight.js) as a code syntax highlighter instead of `prettify.js`
- Table of contents based on [tocbot.js](https://github.com/tscanlin/tocbot)

### Comparison Table
||JSDoc default template|Dark JSDoc default template|
|---|---|---|
|**Publish Script**|`publish.js`|`publish.js` (_no changes, same as in JSDoc default template_)|
|**Code syntax highlighter script**|`prettify.js`(_self-hosted_)|`highlight.js` (_CDN_)|
|**Code line numbers script**|`linenumber.js` (_self-hosted_)|`highlightjs-line-numbers.js` (_CDN_)|
|**General CSS styling**|JSDoc default|**Dark theme** (_similar to GitHub_)|
|**Code syntax highlighter styles**|JSDoc `prettify.js` theme|**Dark theme** (_similar to GitHub_)|
|**Layout Template**|JSDoc default layout |JSDoc default layout with some modifications to add scripts and styles|
|**All others templates**|JSDoc default|Same as in **JSDoc default**, no changes!
|**Fonts**|OpenSans (_external_)|system fonts|
|**Table of contents**|no|yes|

## Quick start
1. Install `jsdoc`
```
npm install --save-dev jsdoc
```
2. Install `dark-jsdoc-default`
```
npm install --save-dev dark-jsdoc-default
```
3. Specify a souce and dark template in `jsdoc.json`
```json
{
  "plugins": ["plugins/markdown"],
  "source": {
    "include": ["source???/"]
  },
  "templates": {
    "cleverLinks": true,
    "default": {
      "includeDate": false
    }
  },
  "opts": {
    "template": "dark-jsdoc-default/template",
    "readme": "./README.md",
    "destination": "./docs/",
    "recurse": true,
    "verbose": true
  },
  "markdown": {
    "idInHeadings": true
  }
}
```
4. Generate documentation
```js
npx jsdoc -c jsdoc.json
```

## Thanks
- [JSDoc](https://jsdoc.app)
- [Highlight.js](https://github.com/highlightjs/highlight.js)
- [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js/)
- [Tocbot](https://github.com/tscanlin/tocbot)
- [GitHub dark theme](https://github.com)


## Real examples
