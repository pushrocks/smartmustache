# @pushrocks/smartmustache
templates done right

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartmustache)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartmustache)
* [github.com (source mirror)](https://github.com/pushrocks/smartmustache)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartmustache/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smartmustache/badges/master/build.svg)](https://gitlab.com/pushrocks/smartmustache/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartmustache/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartmustache/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartmustache.svg)](https://www.npmjs.com/package/@pushrocks/smartmustache)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartmustache/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartmustache)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import { SmartMustache } from '@pushrocks/smartmustache';

const mySmartmustache = new SmartMustache('my {{somePlaceholder}} are {{anotherPlaceholder}}!');
const appliedString = myTlt.applyData({
  somePlaceholder: 'horses',
  anotherPlaceholder: 'awesome'
});

// appliedString will be 'my horses are awesome!'
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
