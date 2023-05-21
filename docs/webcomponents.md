---
sidebar_position: 1
title: webcomponents docs
description: neo-jquery webcomponents docs
keywords: [neo-jquery webcomponents, neo-jquery npm]
---

# webcomponents

new modules add in version 1.0.4 as universal using in:
 - browser
 - cjs electron
 - esm

## modal image component

for using the webcomponents modal image with html dialog tag form in js

``` html
<!-- modal Image -->
<modal-image url="/example.jpg" alt="hello"></modal-image>
<!-- script -->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery/components/modalImage.js"></script>
```

``` js
// cjs electron
require('neo-jquery/components/modalImage')

// esm as module bundle
import 'neo-jquery/components/modalImage'

// esm as browser
import 'https://cdn.jsdelivr.net/npm/neo-jquery/components/modalImage.js'
```

### browser compatibility

| firefox | chrome | opera | edge | safari |
| --- | --- | --- | --- | --- |
| stable version 98+ | stable version 67+ | stable version 64+ | stable in version 79+ | parcial support 10.1-15.4 and tp versions |
| for dialog element enabling dom.dialog_element.enabled in about:config | parcial support in versions 54-66 | parcial support in versions 54-66 | not compatibility in edge legacy | parcial support in versions 3.1-10 |

> note: only browser compatibility with html element dialog

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

// esm as module bundle
import 'neo-jquery/components/accordion'

// esm as browser
import 'https://cdn.jsdelivr.net/npm/neo-jquery/components/accordion.js'
```

### browser compatibility

| firefox | chrome | opera | edge | safari |
| --- | --- | --- | --- | --- |
| stable 63+ | stable version 67+ | stable version 64+ | stable in version 79+ | parcial support 10.1-15.4 and tp versions |

> note: version n+ example 45+ is version 45 and/or higher 

## radio player
``` html
<!-- modal Image -->
<neo-radio-player src="http://example.com/play.mp3"></neo-radio-player>
<!-- script -->
<script src="https://cdn.jsdelivr.net/npm/neo-jquery@1.1.0/components/radioPlayer.js"></script>
```
> recommend stream audio url or single tracks

**styles**
``` css
/* 
    radio player component custom propierties example
*/
neo-radio-player {
  --radio-color: #222;
  --radio-outline: 1px solid #000; /* default value '' */
  --radio-btn-size: 1em;
}
```

``` js
// cjs electron
require('neo-jquery/components/radioPlayer')

// esm as module bundle
import 'neo-jquery/components/radioPlayer'

// esm as browser
import 'https://cdn.jsdelivr.net/npm/neo-jquery/components/radioPlayer.js'
```

### browser compatibility

| firefox | chrome | opera | edge | safari |
| --- | --- | --- | --- | --- |
| stable 63+ | stable version 67+ | stable version 64+ | stable in version 79+ | parcial support 10.1-15.4 and tp versions |
