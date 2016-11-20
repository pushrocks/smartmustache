# tlt
templates done right

## Usage
We recommend the use of TypeScript for best in class Intellisense

```javascript
import * as tlt from 'tlt

let myTlt = new tlt('my template String for {{somePlaceholder}} and {{anotherPlaceholder}}')
myTlt.getStringFor({
    "somePlaceholder": "pushrocks",
    "anotherPlaceholder": "anotherPlaceholder"
})
```