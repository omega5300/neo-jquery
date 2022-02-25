# webcomponents

new modules add in version 1.0.4 as universal using in:
 - browser
 - cjs electron
 - esm

## modal image component

for using the webcomponents modal image with html dialog tag form in js

``` html
<!-- modal Image -->
<modal-image url="/example.jp" alt="hello"></modal-image>
<!-- script -->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/components/modalImage.js"></script>
```

``` js
// cjs electron
require('neo-jquery/components/modalImage')

// esm as module
import 'neo-jquery/components/modalImage'

// esm as browser
import 'https://cdn.jsdelivr.net/npm/neo-jquery/components/modalImage.js'
```

### browser compatibility


## accordion

the accordion component using html native tags details and summary using:

``` html
<!-- modal Image -->
<neo-accordion title="example">
    <p class="accordion-panel">lorem</p>
</neo-accordion>
<!-- script -->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/components/accordion.js"></script>
```

**styles**
``` css
/* 
    accordion component custom propierties example
*/
neo-accordion {
  --accordion-title-bg: #0f0;
  --accordion-title-textColor: #fff;
  --accordion-title-padding: 18px;
  --accordion-panel-bg: #fff;
  --accordion-panel-textColor: #000;
  --accordion-panel-padding: 0 18px;
}
```

``` js
// cjs electron
require('neo-jquery/components/accordion')

// esm as module
import 'neo-jquery/components/accordion'

// esm as browser
import 'https://cdn.jsdelivr.net/npm/neo-jquery/components/accordion.js'
```

### browser compatibility