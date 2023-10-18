---
title: detectBrowser module
---

# detectBrowser module

this module called $browserChecker using a indepent script only in browser not awolled in node only detect browser & os sized max 1.1KB

## example
``` html
<span id="os"></span>
<span id="browser"></span>
```

``` js
// this example using DOM traditional is valid using the neo-jquery $selector or $id

const osElement = document.querySelector('#os')
const browserElement = document.querySelector('#browser')

$browserChecker(osElement, browserElement)
```

### browser

``` html
<!--main file-->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/browser/detectBrowser.js"></script>
```

### core
``` js
/* CJS */
const { $browserChecker } = require('neo-jquery/core/detectBrowser')

/* ESM */
import { $browserChecker } from 'neo-jquery/core/detectBrowser'

/* Dynamic async/await and top level await */
const { $browserChecker } = await import('neo-jquery/core/detectBrowser')
```

| desc | type |
| ----------- | ----------- |
| params: $os & $browser | CurrentElement |
| return | void |

#### CurrentElement types

this type using HTMLElement or Element
