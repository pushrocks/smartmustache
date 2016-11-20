# tlt
templates done right

## Usage
We recommend the use of TypeScript for best in class Intellisense

```javascript
import { Tlt } from 'tlt'

let myTlt = new Tlt('my {{somePlaceholder}} are {{anotherPlaceholder}}!')
let appliedString = myTlt.applyData({
    "somePlaceholder": "horses",
    "anotherPlaceholder": "awesome"
})

// appliedString will be 'my horses are awesome!'
```