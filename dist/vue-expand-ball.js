(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = retrieveMenuNodes;
/* harmony export (immutable) */ __webpack_exports__["b"] = isDescendant;

function retrieveMenuNodes(el) {
    return [].slice.apply(el.querySelector('.rounded-menus').childNodes).filter(function (node) {
        return node.nodeType === 1;
    });
}

function isDescendant(parent, child) {
    var node = child.parentNode;
    while (node !== null) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(10)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  "data-v-6f039d14",
  /* cssModules */
  null
)
Component.options.__file = "/Users/howard/codes/github/vue-expand-ball/src/components/expand-ball.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] expand-ball.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f039d14", Component.options)
  } else {
    hotAPI.reload("data-v-6f039d14", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_dom__ = __webpack_require__(0);


var listeners = {};

/* harmony default export */ __webpack_exports__["a"] = {
    bind: function bind(el, bindings, vnode) {

        el.dataset.listenerId = 'listener_' + new Date().getTime();
        listeners[el.dataset.listenerId] = [{
            name: 'mousedown',
            listener: startDrag
        }, {
            name: 'mouseup',
            listener: stopDrag
        }];

        var offsetX = 0,
            offsetY = 0,
            timer = null;

        var mousemoveTemp = null;

        function move(x, y) {
            el.style.left = parseInt(window.getComputedStyle(el).left) + x + 'px';
            el.style.top = parseInt(window.getComputedStyle(el).top) + y + 'px';
        }

        function mouseMoveHandler(e) {
            var evt = e || window.event;
            var x = mouseX(evt);
            var y = mouseY(evt);
            if (x !== offsetX || y !== offsetY) {
                move(x - offsetX, y - offsetY);
                offsetX = x;
                offsetY = y;
            }
            return false;
        }

        function startDrag(e) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_dom__["b" /* isDescendant */])(el, e.target)) {
                return false;
            }
            timer = setTimeout(function () {
                el.dataset.dragging = 'true';
                var evt = e || window.event;

                offsetX = mouseX(evt);
                offsetY = mouseY(evt);

                // save any previous mousemove event handler:
                if (document.body.onmousemove) {
                    mousemoveTemp = document.body.onmousemove;
                }
                document.body.onmousemove = mouseMoveHandler;
            }, 100);
            return false;
        }

        function stopDrag(e) {
            clearTimeout(timer);

            // restore previous mousemove event handler if necessary
            document.body.onmousemove = mousemoveTemp;
            mousemoveTemp = null;

            adjustBall(el);

            setTimeout(function () {
                el.dataset.dragging = '';
            }, 100);
            return false;
        }

        window.addEventListener('mousedown', startDrag, false);
        window.addEventListener('mouseup', stopDrag, false);
    },
    unbind: function unbind(el) {
        if (listeners[el.dataset.listenerId] && listeners[el.dataset.listenerId].length) {
            listeners[el.dataset.listenerId].forEach(function (listener) {
                window.removeEventListener(listener.name, listener.listener);
            });
            delete listeners[el.dataset.listenerId];
        }
    }
};

function adjustBall(ball) {
    var _ball$getBoundingClie = ball.getBoundingClientRect(),
        top = _ball$getBoundingClie.top,
        left = _ball$getBoundingClie.left,
        right = _ball$getBoundingClie.right,
        bottom = _ball$getBoundingClie.bottom,
        width = _ball$getBoundingClie.width,
        height = _ball$getBoundingClie.height;

    var _document$documentEle = document.documentElement,
        clientWidth = _document$documentEle.clientWidth,
        clientHeight = _document$documentEle.clientHeight;

    if (top < 0) {
        ball.style.top = '1px';
    }
    if (left < 0) {
        ball.style.left = '1px';
    }
    if (bottom > clientHeight) {
        ball.style.top = clientHeight - height - 1 + 'px';
    }
    if (right > clientWidth) {
        ball.style.left = clientWidth - width - 1 + 'px';
    }
}

function mouseX(e) {
    if (e.pageX) {
        return e.pageX;
    }
    if (e.clientX) {
        return e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    }
    return null;
}

function mouseY(e) {
    if (e.pageY) {
        return e.pageY;
    }
    if (e.clientY) {
        return e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    }
    return null;
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_dom__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = {
    bind: function bind(el, bindings, vnode) {
        var _bindings$value = bindings.value,
            ballSize = _bindings$value.ballSize,
            menuSize = _bindings$value.menuSize,
            ballColor = _bindings$value.ballColor,
            menuColor = _bindings$value.menuColor;

        var ballEl = el.querySelector('.center-ball');

        ballEl.style.width = ballSize + 'px';
        ballEl.style.height = ballSize + 'px';
        ballEl.style.lineHeight = ballSize + 'px';
        ballEl.style.backgroundColor = ballColor;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_dom__["a" /* retrieveMenuNodes */])(el).forEach(function (node) {
            node.style.backgroundColor = menuColor;
            node.style.width = menuSize + 'px';
            node.style.height = menuSize + 'px';
            node.style.lineHeight = menuSize + 'px';
            node.style.top = (ballSize - menuSize) / 2 + 'px';
            node.style.left = (ballSize - menuSize) / 2 + 'px';
        });
    }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_dom__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = {
    bind: function bind(el, bindings, vnode) {
        toggle(bindings, el);
    },
    update: function update(el, bindings, vnode) {
        toggle(bindings, el);
    }
};

function toggle(bindings, el) {
    var nodes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_dom__["a" /* retrieveMenuNodes */])(el);
    var _bindings$value = bindings.value,
        expanded = _bindings$value.expanded,
        radius = _bindings$value.radius,
        ballSize = _bindings$value.ballSize,
        menuSize = _bindings$value.menuSize;

    if (expanded) {
        return nodes.forEach(function (node, index) {
            node.style.transitionDelay = 100 * index + 'ms';
            node.style.webkitTransitionDelay = 100 * index + 'ms';
            node.style.left = parseInt(node.style.left) + radius * Math.cos(2 * Math.PI / 360 * (360 / nodes.length * index)) + 'px';
            node.style.top = parseInt(node.style.top) + -radius * Math.sin(2 * Math.PI / 360 * (360 / nodes.length * index)) + 'px';
        });
    }
    nodes.forEach(function (node, index) {
        node.style.top = (ballSize - menuSize) / 2 + 'px';
        node.style.left = (ballSize - menuSize) / 2 + 'px';
    });
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper_dom__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__directives_toggleExpand__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_setupStyle__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_draggable__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
    name: 'expand-ball',
    data: function data() {
        return {
            expanded: false
        };
    },

    props: {
        options: {
            type: Object,
            default: function _default() {
                return {
                    ballSize: 30,
                    menuSize: 30,
                    radius: 60,
                    ballColor: '#41b883',
                    menuColor: '#41b883'
                };
            }
        }
    },
    computed: {
        opts: function opts() {
            var ballSize = this.options.ballSize || 30;
            var ballColor = this.options.ballColor || '#41b883';
            return {
                ballSize: ballSize,
                menuSize: !this.options.menuSize || this.options.menuSize > ballSize ? ballSize : this.options.menuSize,
                expanded: this.expanded,
                radius: this.options.radius || 60,
                ballColor: ballColor,
                menuColor: this.options.menuColor || ballColor
            };
        }
    },
    mounted: function mounted() {
        var _this = this;

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helper_dom__["a" /* retrieveMenuNodes */])(this.$el).forEach(function (node) {
            node.addEventListener('click', function () {
                if (_this.expanded) {
                    _this.expanded = !_this.expanded;
                }
            }, false);
        });
    },

    methods: {
        toggle: function toggle() {
            if (this.$el.dataset.dragging === 'true') {
                return;
            }
            this.expanded = !this.expanded;
        }
    },
    directives: {
        toggleExpand: __WEBPACK_IMPORTED_MODULE_1__directives_toggleExpand__["a" /* default */],
        setupStyle: __WEBPACK_IMPORTED_MODULE_2__directives_setupStyle__["a" /* default */],
        draggable: __WEBPACK_IMPORTED_MODULE_3__directives_draggable__["a" /* default */]
    }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)();
// imports


// module
exports.push([module.i, "\n.expand-ball[data-v-6f039d14] {\n    position: fixed;\n    margin: 0;\n    padding: 0;\n    text-align: center;\n    color: #fff;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.expand-ball .rounded-menus > *[data-v-6f039d14],\n.center-ball[data-v-6f039d14] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n}\n.expand-ball .rounded-menus > *[data-v-6f039d14] {\n    transition: all 0.5s;\n}\n.center-ball[data-v-6f039d14] {\n    z-index: 1;\n    border-radius: 50%;\n}\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "toggle-expand",
      rawName: "v-toggle-expand",
      value: (_vm.opts),
      expression: "opts"
    }, {
      name: "setup-style",
      rawName: "v-setup-style",
      value: (_vm.opts),
      expression: "opts"
    }, {
      name: "draggable",
      rawName: "v-draggable"
    }],
    staticClass: "expand-ball"
  }, [_c('div', {
    staticClass: "center-ball",
    on: {
      "click": _vm.toggle
    }
  }, [(_vm.opts.expanded) ? _vm._t("ball-open", [_vm._v("-")]) : _vm._e(), _vm._v(" "), (!_vm.opts.expanded) ? _vm._t("ball-close", [_vm._v("+")]) : _vm._e()], 2), _vm._v(" "), _c('div', {
    staticClass: "rounded-menus"
  }, [_vm._t("menu")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6f039d14", module.exports)
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(11)("0a5359f4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6f039d14\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/postcss-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./expand-ball.vue", function() {
     var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/vue-loader/lib/style-rewriter.js?{\"id\":\"data-v-6f039d14\",\"scoped\":true,\"hasInlineConfig\":false}!./../../node_modules/postcss-loader/index.js!./../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./expand-ball.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(12)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_expand_ball__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_expand_ball___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_expand_ball__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VueExpandBall", function() { return VueExpandBall; });


var components = [__WEBPACK_IMPORTED_MODULE_0__components_expand_ball___default.a];

var VueExpandBall = {
    install: function install(Vue) {
        if (VueExpandBall.installed) {
            return;
        }

        components.forEach(function (_component) {
            Vue.component(_component.name, _component);
        });
    }
};

/***/ })
/******/ ]);
});