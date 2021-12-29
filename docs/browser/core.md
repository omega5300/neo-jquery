---
sidebar_position: 1
---

# core browser

this module is the main one to use the concepts of DOM, ES6+ and to know the basics of ajax.

it has a size of almost 2KB which is much smaller than jQuery and beneficial for the correct functioning it is compatible with webpack and cjs electron

## using neo-jquery

``` html
<!--main file-->
<script src="https://unpkg.com/neo-jquery@1.0.3/browser/index.js"></script>
```

``` js
// id
const hello = $id('hello-world')

hello.textContent = 'hello world'
```

## function and selectors

``` js
/* id */
$id('hello-world'); // standalone
const helloWorld = $id('hello-world'); // using variable recommend const
/* based in document.getElementById */

/* query selector */
$selector('hello-world'); // standalone
const helloWorld = $selector('hello-world'); // using variable recommend const
/* based in document.querySelector */

/* query selector all */
$selectorAll('.hello-world'); // standalone
const helloWorld = $selectorAll('.hello-world'); // using variable recommend const
/* based in document.querySelectorAll */

/* body, const variable optional */
const bodyElement = $body;
/* based in document.body */

/* date, const variable and param optional */
const dateMethods = $date();
/* based Date class */

/* effects */
fadeIn(helloWorld) // using a dynamic classes styles
fadeOut(helloWorld) // using a dynamic classes styles

show(helloworld) // using inline css in js 
hide(helloworld) // using inline css in js 

// https methods
$getJSON('http://jsonplaceholder.typicode.com/users', (data) => console.log(data))
/* $getJSON fucntion using fetch API */

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
/* $ajax fucntion using fetch API with more callbacks */

/* create elements */
$createElement('p')
const parragram = $createElement('p')
```