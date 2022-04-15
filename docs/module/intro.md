---
sidebar_position: 1
title: module docs
description: core neo-jquery docs as npm module
keywords: [neo-jquery module, neo-jquery npm]
---

# module getting started

neo-jquery using as node frontend module CJS and ESM import mode

``` js
/* CJS */
const neoJquery = require('neo-jquery/cjs') // full module
const { $id } = require('neo-jquery/cjs') // destructuring module

/* ESM */
import neoJquery from 'neo-jquery/mjs' // full module
import { $id } from 'neo-jquery/mjs' // destructuring module

/* dynamic import promise */
import('neo-jquery/mjs')
  .then(({ $id }) => {
    .....
  })
  
/* async/await and top level await*/
const { $id } = await import('neo-jquery/mjs')
```

> dynamic import is compatible with neo-jquery CJS

## $id function

``` js
$id('hello-world');
```

| desc | type |
| ----------- | ----------- |
| param: el | string |
| return | HTMLElement |


## $selector function

``` js
$selector('hello-world');
```

| desc | type |
| ----------- | ----------- |
| param: el | string |
| return | Element &#124; null |

## $selectorAll function

``` js
$selectorAll('hello-world');
```

| desc | type |
| ----------- | ----------- |
| param: el | string |
| return | NodeListOf&#60;Element&#62; |

## $createElement function

``` js
$createElement('h2');
```

| desc | type |
| ----------- | ----------- |
| param: el | string |
| return | HTMLElement |

## $body function

``` js
$body.textContent = 'hello world'
```

| type |
| ----------- |
| HTMLElement |

## $date function

``` js
$date() // param null
$data('2021-12-03') // with param
```

| desc | type |
| ----------- | ----------- |
| param: el | null &#124; any |
| return | Date |

## $getJSON function

``` js
$getJSON('http://jsonplaceholder.typicode.com/users', (data) => {
  console.info(data)
})
```

| desc | type |
| ----------- | ----------- |
| param: url | string |
| param: callback | (param: any) =&#62; void |
| return | Promise&#60;void&#62; |

## $ajax function

``` js
$ajax({
    url: 'http://jsonplaceholder.typicode.com/users',
    type: 'get', // http method
    data: JSON.stringify({
        names: names,
        typedoc: typedoc,
        numdoc: Number(numdoc),
        numtitulada: Number(numtitulada),
        numcomplementarias: Number(numcomplementarias),
        estado: estado,
        certificado: Boolean(certificado)
    }), // from data only in http post | put method
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }, // except http get method
    success(data) {
        console.log(data)
    },
    failed(err) {
        console.error(err)
    }
})
```

| desc | type |
| ----------- | ----------- |
| params: { url, type, data, headers, dataType, success, failed } | ajax |
| return | Promise&#60;void&#62; |

### ajax type params

| propiety | type |
| ----------- | ----------- |
| url (required) | string |
| type (optional) | string |
| data (optional) | any |
| headers (optional) | any |
| dataType (required) | string |
| success (required) | (param: any) =&#62; void |
| failed (required) | (param: any) =&#62; void |

## fadeIn function

``` js
const main = $selector('h1')

fadeIn(main);
```

| desc | type |
| ----------- | ----------- |
| param: el | HTMLElement &#124; Element |
| return | void |

## fadeOut function

``` js
const main = $selector('h1')

fadeOut(main);
```

| desc | type |
| ----------- | ----------- |
| param: el | HTMLElement &#124; Element |
| return | void |

## hide function

``` js
const main = $selector('h1')

hide(main);
```

| desc | type |
| ----------- | ----------- |
| param: el | any |
| return | string |

## show function

``` js
const main = $selector('h1')

show(main);
```

| desc | type |
| ----------- | ----------- |
| param: el | any |
| return | string |

## $toast method

new function add version 1.0.5 extract from stack-analyze desktop 5.0.0 higher

``` js
$toast('hello user', 'alert', 5000)
```

| desc | type |
| ----------- | ----------- |
| param: msg | string |
| param: classAlert | string |
| param: time | number |
| return | void |