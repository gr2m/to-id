# to-id

> Normalises strings for comparison or usage as IDs

[![Build Status](https://travis-ci.org/gr2m/to-id.svg?branch=master)](https://travis-ci.org/gr2m/to-id)
[![Coverage Status](https://codecov.io/gh/gr2m/to-id/branch/master/graph/badge.svg)](https://codecov.io/gh/gr2m/to-id)
[![Greenkeeper badge](https://badges.greenkeeper.io/gr2m/to-id.svg)](https://greenkeeper.io/)

## Usage

```js
toId('Inside a $34 smartphone') // inside-a-34-smartphone
toId('Kore: a fast web server') // kore-a-fast-webserver
toId(' L. (YC S15) - Is Hiring ') // l-yc-s15-is-hiring
toId('안_형_준') // 안-형-준
```

## Installation

You can download [to-id.js](https://github.com/gr2m/tree/master/to-id.js)
and add it to your site using `<script src="to-id.js"></script>`

Or install using [bower](http://bower.io/) for usage in browser:

```
bower install --save to-id
```

Install using [npm](https://npmjs.org/) for node.js or browserify:

```
npm install --save to-id
```

## Test

```
npm test
```

Tests are run with [testmate](https://github.com/gr2m/testmate).
In order to run them in a browser or through saucelabs,
set `TEST_CLIENT` accordingly, for example

```
TEST_CLIENT=selenium:firefox npm test
```
