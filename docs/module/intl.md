---
title: intl module
description: intl module for neo-jquery
keywords: [neo-jquery browser, intl]
---

# intl

intl module is a new neo-jquery module this the the lightest size 1.06KB using the new api Intl and lightago variant

## browser

``` html
<!--main file-->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/browser/intl.js"></script>
```

## module

``` js
/* CJS */
const { $timeago } = require('neo-jquery/cjs/intl')

/* ESM */
import { $timeago } from 'neo-jquery/mjs/intl'

/* async/await and top level await*/
const { $timeago } = await import('neo-jquery/mjs/intl')
```

> dynamic import is compatible with neo-jquery CJS

## using

the using is easy except $timeago is unique form

### $currency

``` js
$currency('es', 'EUR').format(35000)
```

| desc | type |
| ----------- | ----------- |
| params: locale | string |
| params: currency | string |
| return | Intl.NumberFormat |

### $list

``` js
const vehicles = ['Motorcycle', 'Bus', 'Car']

$list('en', 'long', 'conjunction').format(vehicles)
```

| desc | type |
| ----------- | ----------- |
| params: locale | string |
| params: style | Intl.ListFormatStyle |
| params: type | Intl.ListFormatType |
| return | Intl.ListFormat |

### $timeago

``` js
$timeago('en') // date null
$timeago('en', '2012, 03, 30') // with date value
```

| desc | type |
| ----------- | ----------- |
| params: locale | string |
| params: date? | null &#124; any |
| return | string &#124; undefined |