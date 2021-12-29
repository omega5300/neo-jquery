---
sidebar_position: 1
---

# scraping module getting started

scraping module using micro php backend code.

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