---
sidebar_position: 1
title: frontend scraping
description: frontend scraping neo-jquery docs as modules
keywords: [neo-jquery npm, frontend scraping modules]
---

# scraping module

this module called frontend scraping is a relatively new module that allows us to use web scraping for the client side as we do in the backend.

use a php file with a request parameter whether to use get or post weighs less than 1KB

scraping module using serverless node backend code.

## browser

``` html
<!--main file-->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/browser/scraping.js"></script>
```

## module

``` js
/* CJS */
const { $scraping } = require('neo-jquery/cjs/scraping')

/* ESM */
import { $scraping } from 'neo-jquery/mjs/scraping'
  
/* async/await and top level await*/
const { $scraping } = await import('neo-jquery/mjs/scraping')
```

> dynamic import is compatible with neo-jquery CJS

## using scraping module

``` js
$scraping({
  url: 'https://example.com',
  web(data) {
    console.info(data)
  },
  failed(err) {
    console.error(err)
  }
})
```

| desc | type |
| ----------- | ----------- |
| params: { url, web, failed } | scraping |
| return | Promise&#60;void&#62; |

### scraping type params

| propiety | type |
| ----------- | ----------- |
| url | string |
| web | (param: Document) =&#62; void |
| failed | (param: any) =&#62; void |

> similar to $ajax only DOM data