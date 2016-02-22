# nd-easing

[![Travis](https://img.shields.io/travis/ndfront/nd-easing.svg?style=flat-square)](https://github.com/ndfront/nd-easing)
[![Coveralls](https://img.shields.io/coveralls/ndfront/nd-easing.svg?style=flat-square)](https://github.com/ndfront/nd-easing)
[![NPM version](https://img.shields.io/npm/v/nd-easing.svg?style=flat-square)](https://npmjs.org/package/nd-easing)

> Easing 是动画的平滑函数扩展包。由于 jQuery 自带的比较少，通过这个包可以增加更多平滑函数。

## 安装

```bash
$ npm install nd-easing --save
```

## 使用

```js
var $ = require('jquery');
var Easing = require('nd-easing');
// use Easing
$.extend($.easing, Easing);
```
