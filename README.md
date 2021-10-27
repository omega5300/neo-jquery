# neo-jquery

libreria de javascript inspirado en Jquery aplicado a las caracteristicas mordenas de ES6+ y api nativas de navegador algunas utilizando funciones

## uso de la libreria

el uso puede ser por medio de node o el navegador

``` js
// using with electron CJS
const neoJquery = require('neo-jquery'); // full module
const { $id } = require('neo-jquery'); // destructuring

// ES module webpack or electron via ESM or typescript
import neoJquery from 'neo-jquery';
```

``` html
<script src="https://unpkg.com/neo-jquery@1.0.2"></script>
```

## selectors

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

/* date, const variable optional */
const dateMethods = $date;
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

// ready
$ready(() => console.log('loading'))
```