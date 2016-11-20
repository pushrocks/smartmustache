# tlt
templates done right

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/tlt)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://gitlab.com/pushrocks/tlt)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/tlt)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/tlt/)

## Status for master
[![build status](https://gitlab.com/pushrocks/tlt/badges/master/build.svg)](https://gitlab.com/pushrocks/tlt/commits/master)
[![coverage report](https://gitlab.com/pushrocks/tlt/badges/master/coverage.svg)](https://gitlab.com/pushrocks/tlt/commits/master)
[![Dependency Status](https://david-dm.org/pushrocks/tlt.svg)](https://david-dm.org/pushrocks/tlt)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/tlt/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/tlt/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/tlt/badges/code.svg)](https://www.bithound.io/github/pushrocks/tlt)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

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

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
