---
sidebar_position: 1
title: getting started
description: intro for the library neo-jquery
keywords: [neo-jquery getting statted, neo-jquery npm]
---

# Getting Started

discover a jquery alternative main module size less 3KB. first npm module using cjs, esm and browser.

## npm module

install  and using

```shell
npm i neo-jquery
```

``` js
// using with electron CJS
const neoJquery = require('neo-jquery/cjs'); // full module
const { $id } = require('neo-jquery/cjs'); // destructuring

// es module
const neoJquery = require('neo-jquery/mjs'); // full module
const { $id } = require('neo-jquery/mjs'); // destructuring
```

## browser file

in javascript browser is easy size less 3KB

``` html
<script src="https://unpkg.com/neo-jquery@1.0.3/browser/index.js"></script>
```

## browser support

- legacy module *not include frontend scraping*: last IE versions
- core module: all browsers except IE
- scraping module: all browsers except IE
- css stylesheet file: all browsers except IE