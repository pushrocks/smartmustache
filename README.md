# tlt
templates done right

## Usage
We recommend the use of TypeScript for best in class Intellisense

```javascript
import { Tlt } from 'tlt'

let myTlt = new Tlt('my template String for {{somePlaceholder}} and {{anotherPlaceholder}}')
myTlt.getStringFor({
    "somePlaceholder": "pushrocks",
    "anotherPlaceholder": "anotherPlaceholder"
})
```