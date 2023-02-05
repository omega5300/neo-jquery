---
title: params module
---

# params module

new module for neo-jquery using the method URLSearchParams universal in node, esm with/without bundle and browser with esm

``` html
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/core/params.js"></script>
```


```js
// node cjs and electron
const { $urlParams } = require('neo-jquery/node/params')

// node as esm and bundler
import { $urlParams } from 'neo-jquery/node/params'

$urlParams({
  paramsList: 'example dsdas fgdfgfg',
  paramsNameAppend: 'title',
  splitparams: ' '
})
```



| desc | type |
| ----------- | ----------- |
| params: {paramsList, splitparams, paramsNameAppend} | Params |

## Params types

| desc | type |
| ----------- | ----------- |
| paramsList | string |
| splitparams | string |
| paramsNameAppend | string |