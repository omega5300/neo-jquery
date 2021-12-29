# frontend scraping

this module called frontend scraping is a relatively new module that allows us to use web scraping for the client side as we do in the backend.

use a php file with a request parameter whether to use get or post weighs less than 1KB

## using neo-jquery scraping module

``` html
<!--main file-->
<script src="https://unpkg.com/neo-jquery@1.0.3/browser/scraping.js"></script>
```

``` js
// id
$scraping({
  url: 'https://example.com',
  page(data) {
    console.log(data)
  },
  failed(err) {
    console.error(err)
  }
})
```

> similar to $ajax only DOM data