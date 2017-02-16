# vue-expand-ball
=======================
[![NPM version][npm-image]][npm-url]
![][david-url]
![][dt-url]
![][license-url]

A damn easy expandable menu without any extra dependency for `vue`.

Read full documentation here: [documentation](https://leftstick.github.io/vue-expand-ball/)

![](./demo/img/preview.gif)

## Getting started

This is a component requires vue `^2.1.10`. And ease the way to display a draggable menu item on your page.

## Requirements ##

- [vue][vue-url]

## Install ##

### from npm ###

```bash
npm install --save vue vue-expand-ball
```

### from bower ###

```bash
bower install --save vue vue-expand-ball
```

## Import ##

### ES2015 ###

```javascript
import {VueExpandBall} from 'vue-expand-ball';
```

### CommonJS ###

```javascript
const {VueExpandBall} = require('vue-expand-ball');
```

### script ###

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>DEMO</title>
</head>
<body>

    <script type="text/javascript" src="node_modules/vue/dist/vue.min.js"></script>
    <script type="text/javascript" src="node_modules/vue-expand-ball/dist/vue-expand-ball.min.js"></script>
    <script type="text/javascript">
        var VueExpandBall = window.VueExpandBall;
    </script>
</body>
</html>
```

## Basic Usage ##

```css
.ball-pos {
    bottom: 200px;
    right: 200px;
}
```

```html
<expand-ball class="ball-pos">
    <span slot="menu" @click="clicked('M1')">M1</span>
    <span slot="menu" @click="clicked('M2')">M2</span>
</expand-ball>
```

```javascript
export default {
    methods: {
        clicked(str) {
            alert(str + ' is just clicked!!');
        }
    }
};
```


## LICENSE ##

[GPL v3 License](https://raw.githubusercontent.com/leftstick/vue-expand-ball/master/LICENSE)


[npm-url]: https://npmjs.org/package/vue-expand-ball
[npm-image]: https://img.shields.io/npm/v/vue-expand-ball.svg
[david-url]: https://david-dm.org/leftstick/vue-expand-ball.png
[dt-url]:https://img.shields.io/npm/dt/vue-expand-ball.svg
[license-url]:https://img.shields.io/npm/l/vue-expand-ball.svg
[vue-url]:https://vuejs.org/