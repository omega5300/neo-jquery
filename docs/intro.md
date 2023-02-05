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
const neoJquery = require('neo-jquery/core'); // full module
const { $id } = require('neo-jquery/core'); // destructuring

// es module
import neoJquery from 'neo-jquery/core'; // full module
import { $id } from 'neo-jquery/core'; // destructuring
```

## browser file

in javascript browser is easy size less 4KB

``` html
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/browser/index.js"></script>
```

## browser support

- legacy module *not include frontend scraping*: last IE versions
- core module: all browsers except IE
- scraping module: all browsers except IE
- intl module: all browsers except IE
- webcomponents: all browsers except IE
- css stylesheet file: all browsers except IE
- params module: all browsers and node except IE note: not avalible browser module
- node module only in node versions and electron