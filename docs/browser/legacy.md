---
title: legacy module docs
description: legacy neo-jquery module docs
keywords: [neo-jquery ie, neo-jquery legacy]
---

# legacy module

this module is exclusive for the latest versions of Internet explorer and browsers that support es5 Internet explorer 9 or lower is not compatible is similar to the main module with a small difference this module weighs 2.2KB what is essential for DOM and ajax management.

## using legacy module

``` html
<!--legacy module-->
<script src="https://unpkg.com/neo-jquery@1.0.3/browser/legacy.js"></script>
```

``` js
// id
var hello = $..id('hello-world')

hello.textContent = 'hello world'
```

:::tip
this using module is $..{function} example $..body or $..id('hi')
:::

## function and selectors

``` js
/* id */
$.id('hello-world'); // standalone
var helloWorld = $.id('hello-world'); // using variable recommend var
/* based in document.getElementById */

/* query selector */
$.selector('hello-world'); // standalone
var helloWorld = $.selector('hello-world'); // using variable recommend var
/* based in document.querySelector */

/* query selector all */
$.selectorAll('.hello-world'); // standalone
var helloWorld = $.selectorAll('.hello-world'); // using variable recommend var
/* based in document.querySelectorAll */

/* body, var variable optional */
var bodyElement = $.body;
/* based in document.body */

/* date, var variable and param optional */
var dateMethods = $.date();
/* based Date class */

/* effects */
$.fadeIn(helloWorld) // using a dynamic classes styles
$.fadeOut(helloWorld) // using a dynamic classes styles

$.show(helloworld) // using inline css in js 
$.hide(helloworld) // using inline css in js 

// https methods
$.getJSON('http://jsonplaceholder.typicode.com/users', (data) => console.log(data))
/* $.getJSON fucntion using XHR API */

$.ajax({
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
/* $.ajax fucntion using XHR with more callbacks */

/* create elements */
$.createElement('p')
var parragram = $.createElement('p')
```