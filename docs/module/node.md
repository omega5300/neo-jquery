---
title: node module
description: node functions for neo-jquery
keywords: [node, neo-jquery, cli]
---

# node module

## writeFile module

the node module is new in neo-jquery for special using this avalible in node and electron

```js
// node and electron
const { $writeFile } = require('neo-jquery/node')

// node with esm
import { $writeFile } from 'neo-jquery/node'

// example
const obj = { x: 22, y: 'ss' }

$writeFile('txt/7.txt', JSON.stringify(obj))

$writeFile('txt/0.txt', 'hello world')
```

:::danger
not using this values: 
- 0
- ''/""/``
- null
- undefined
- false
- and boolean value true
:::

:::caution
this function using writeFile function in fs/promises module.

recommend if using type not string first convert to string .toString() of json stringify
:::

### types

| desc | type |
| ----------- | ----------- |
| filename | string |
| data | any &#124; any&#91;&#93; |
| return | Promise&#60;void&#62; |

## osInfo module

this module inspired the module systeminformation & hardware information tool of stack-analyze

``` js
// node and electron
const { $osInfo } = require('neo-jquery/node')

// node with esm
import { $osInfo } from 'neo-jquery/node'

// example
console.table($osInfo)
```

### types

| type |
| ----------- |
| Readonly&#60;Props&#62; |

#### interface Props

| Property | type |
| ----------- | ----------- |
| &#91;s: string&#93; | any |
