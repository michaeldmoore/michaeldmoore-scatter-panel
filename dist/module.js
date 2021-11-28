define(["@grafana/data","@grafana/ui","d3","jquery","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./ScatterPanel.css":
/*!****************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./ScatterPanel.css ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".FieldSetEditor {\n  margin-bottom: 25px;\n}\n\n.ScatterFlex {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 1px;\n}\n\n.ScatterSize {\n  width: 115px;\n}\n\n.ScatterSize input {\n  width: 55px;\n}\n\n.ScatterDotSize {\n  width: 220px;\n}\n\n.ScatterDotColor {\n  padding-top: 7px;\n}\n\n.ScatterSelect {\n  display: flex;\n  min-width: 160px;\n}\n\n.ScatterExtents {\n  display: flex;\n}\n\n.ScatterExtentLimit {\n  width: 180px;\n  padding-right: 20px;\n}\n\n.ScatterMargins {\n  display: flex;\n}\n\n.ScatterMarginLimit {\n  width: 180px;\n  padding-right: 20px;\n}\n\n.ScatterLabel {\n  padding-top: 6px;\n  width: 85px;\n  color: #9fa7b3;\n  font-size: 12px;\n  text-align: center;\n}\n\n.ScatterCheckbox {\n  padding-top: 6px;\n  padding-left: 5px;\n  width: 55px;\n  color: #9fa7b3;\n  font-size: 12px;\n}\n\n.ScatterFlex label {\n  margin-top: 5px;\n}\n\n.ScatterSetHidden {\n  fill: rgba(119, 119, 119, 0.25);\n}\n\n.ScatterLine {\n  fill: none;\n}\n\n.ScatterLineHidden {\n  opacity: 0.25;\n  stroke-width: 1px;\n}\n\n.TitleEditor {\n  display: flex;\n}\n\n.TitleText {\n  width: 160px;\n}\n\n.TitleColor {\n  padding-top: 7px;\n}\n\n.LabelEditor {\n  display: flex;\n}\n\n.LabelColor {\n  padding-top: 7px;\n}\n\n.ScatterLegend input {\n  width: 50px;\n}\n\n.ScatterLegendText {\n  border: 1px solid white;\n}\n\n.ScatterLegendTextHidden {\n  fill: rgba(119, 119, 119, 0.25);\n}", "",{"version":3,"sources":["ScatterPanel.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,+BAA+B;AACjC","file":"ScatterPanel.css","sourcesContent":[".FieldSetEditor {\n  margin-bottom: 25px;\n}\n\n.ScatterFlex {\n  display: flex;\n  flex-wrap: nowrap;\n  padding: 1px;\n}\n\n.ScatterSize {\n  width: 115px;\n}\n\n.ScatterSize input {\n  width: 55px;\n}\n\n.ScatterDotSize {\n  width: 220px;\n}\n\n.ScatterDotColor {\n  padding-top: 7px;\n}\n\n.ScatterSelect {\n  display: flex;\n  min-width: 160px;\n}\n\n.ScatterExtents {\n  display: flex;\n}\n\n.ScatterExtentLimit {\n  width: 180px;\n  padding-right: 20px;\n}\n\n.ScatterMargins {\n  display: flex;\n}\n\n.ScatterMarginLimit {\n  width: 180px;\n  padding-right: 20px;\n}\n\n.ScatterLabel {\n  padding-top: 6px;\n  width: 85px;\n  color: #9fa7b3;\n  font-size: 12px;\n  text-align: center;\n}\n\n.ScatterCheckbox {\n  padding-top: 6px;\n  padding-left: 5px;\n  width: 55px;\n  color: #9fa7b3;\n  font-size: 12px;\n}\n\n.ScatterFlex label {\n  margin-top: 5px;\n}\n\n.ScatterSetHidden {\n  fill: rgba(119, 119, 119, 0.25);\n}\n\n.ScatterLine {\n  fill: none;\n}\n\n.ScatterLineHidden {\n  opacity: 0.25;\n  stroke-width: 1px;\n}\n\n.TitleEditor {\n  display: flex;\n}\n\n.TitleText {\n  width: 160px;\n}\n\n.TitleColor {\n  padding-top: 7px;\n}\n\n.LabelEditor {\n  display: flex;\n}\n\n.LabelColor {\n  padding-top: 7px;\n}\n\n.ScatterLegend input {\n  width: 50px;\n}\n\n.ScatterLegendText {\n  border: 1px solid white;\n}\n\n.ScatterLegendTextHidden {\n  fill: rgba(119, 119, 119, 0.25);\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/is-any-array/src/index.js":
/*!*************************************************!*\
  !*** ../node_modules/is-any-array/src/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isAnyArray; });
const toString = Object.prototype.toString;

function isAnyArray(object) {
  return toString.call(object).endsWith('Array]');
}


/***/ }),

/***/ "../node_modules/median-quickselect/lib/median-quickselect.min.js":
/*!************************************************************************!*\
  !*** ../node_modules/median-quickselect/lib/median-quickselect.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){function a(d){for(var e=0,f=d.length-1,g=void 0,h=void 0,i=void 0,j=c(e,f);!0;){if(f<=e)return d[j];if(f==e+1)return d[e]>d[f]&&b(d,e,f),d[j];for(g=c(e,f),d[g]>d[f]&&b(d,g,f),d[e]>d[f]&&b(d,e,f),d[g]>d[e]&&b(d,g,e),b(d,g,e+1),h=e+1,i=f;!0;){do h++;while(d[e]>d[h]);do i--;while(d[i]>d[e]);if(i<h)break;b(d,h,i)}b(d,e,i),i<=j&&(e=h),i>=j&&(f=i-1)}}var b=function b(d,e,f){var _ref;return _ref=[d[f],d[e]],d[e]=_ref[0],d[f]=_ref[1],_ref},c=function c(d,e){return~~((d+e)/2)}; true&&module.exports?module.exports=a:window.median=a})();


/***/ }),

/***/ "../node_modules/ml-array-max/lib-es6/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/ml-array-max/lib-es6/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");


function max(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var _options$fromIndex = options.fromIndex,
      fromIndex = _options$fromIndex === void 0 ? 0 : _options$fromIndex,
      _options$toIndex = options.toIndex,
      toIndex = _options$toIndex === void 0 ? input.length : _options$toIndex;

  if (fromIndex < 0 || fromIndex >= input.length || !Number.isInteger(fromIndex)) {
    throw new Error('fromIndex must be a positive integer smaller than length');
  }

  if (toIndex <= fromIndex || toIndex > input.length || !Number.isInteger(toIndex)) {
    throw new Error('toIndex must be an integer greater than fromIndex and at most equal to length');
  }

  var maxValue = input[fromIndex];

  for (var i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] > maxValue) maxValue = input[i];
  }

  return maxValue;
}

/* harmony default export */ __webpack_exports__["default"] = (max);


/***/ }),

/***/ "../node_modules/ml-array-median/lib-es6/index.js":
/*!********************************************************!*\
  !*** ../node_modules/ml-array-median/lib-es6/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");
/* harmony import */ var median_quickselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! median-quickselect */ "../node_modules/median-quickselect/lib/median-quickselect.min.js");
/* harmony import */ var median_quickselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(median_quickselect__WEBPACK_IMPORTED_MODULE_1__);



function median(input) {
  if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  return median_quickselect__WEBPACK_IMPORTED_MODULE_1___default()(input.slice());
}

/* harmony default export */ __webpack_exports__["default"] = (median);


/***/ }),

/***/ "../node_modules/ml-array-min/lib-es6/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/ml-array-min/lib-es6/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");


function min(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
    throw new TypeError('input must be an array');
  }

  if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var _options$fromIndex = options.fromIndex,
      fromIndex = _options$fromIndex === void 0 ? 0 : _options$fromIndex,
      _options$toIndex = options.toIndex,
      toIndex = _options$toIndex === void 0 ? input.length : _options$toIndex;

  if (fromIndex < 0 || fromIndex >= input.length || !Number.isInteger(fromIndex)) {
    throw new Error('fromIndex must be a positive integer smaller than length');
  }

  if (toIndex <= fromIndex || toIndex > input.length || !Number.isInteger(toIndex)) {
    throw new Error('toIndex must be an integer greater than fromIndex and at most equal to length');
  }

  var minValue = input[fromIndex];

  for (var i = fromIndex + 1; i < toIndex; i++) {
    if (input[i] < minValue) minValue = input[i];
  }

  return minValue;
}

/* harmony default export */ __webpack_exports__["default"] = (min);


/***/ }),

/***/ "../node_modules/ml-array-rescale/lib-es6/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/ml-array-rescale/lib-es6/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rescale; });
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");
/* harmony import */ var ml_array_max__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-array-max */ "../node_modules/ml-array-max/lib-es6/index.js");
/* harmony import */ var ml_array_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml-array-min */ "../node_modules/ml-array-min/lib-es6/index.js");




function rescale(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
    throw new TypeError('input must be an array');
  } else if (input.length === 0) {
    throw new TypeError('input must not be empty');
  }

  var output;

  if (options.output !== undefined) {
    if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(options.output)) {
      throw new TypeError('output option must be an array if specified');
    }

    output = options.output;
  } else {
    output = new Array(input.length);
  }

  var currentMin = Object(ml_array_min__WEBPACK_IMPORTED_MODULE_2__["default"])(input);
  var currentMax = Object(ml_array_max__WEBPACK_IMPORTED_MODULE_1__["default"])(input);

  if (currentMin === currentMax) {
    throw new RangeError('minimum and maximum input values are equal. Cannot rescale a constant array');
  }

  var _options$min = options.min,
      minValue = _options$min === void 0 ? options.autoMinMax ? currentMin : 0 : _options$min,
      _options$max = options.max,
      maxValue = _options$max === void 0 ? options.autoMinMax ? currentMax : 1 : _options$max;

  if (minValue >= maxValue) {
    throw new RangeError('min option must be smaller than max option');
  }

  var factor = (maxValue - minValue) / (currentMax - currentMin);

  for (var i = 0; i < input.length; i++) {
    output[i] = (input[i] - currentMin) * factor + minValue;
  }

  return output;
}




/***/ }),

/***/ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js":
/*!******************************************************************!*\
  !*** ../node_modules/ml-distance-euclidean/lib-es6/euclidean.js ***!
  \******************************************************************/
/*! exports provided: squaredEuclidean, euclidean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squaredEuclidean", function() { return squaredEuclidean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "euclidean", function() { return euclidean; });
function squaredEuclidean(p, q) {
    let d = 0;
    for (let i = 0; i < p.length; i++) {
        d += (p[i] - q[i]) * (p[i] - q[i]);
    }
    return d;
}
function euclidean(p, q) {
    return Math.sqrt(squaredEuclidean(p, q));
}


/***/ }),

/***/ "../node_modules/ml-kernel-gaussian/gaussian-kernel.js":
/*!*************************************************************!*\
  !*** ../node_modules/ml-kernel-gaussian/gaussian-kernel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { squaredEuclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  sigma: 1
};

class GaussianKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.divisor = 2 * options.sigma * options.sigma;
  }
  compute(x, y) {
    const distance = squaredEuclidean(x, y);
    return Math.exp(-distance / this.divisor);
  }
}

module.exports = GaussianKernel;


/***/ }),

/***/ "../node_modules/ml-kernel-polynomial/polynomial-kernel.js":
/*!*****************************************************************!*\
  !*** ../node_modules/ml-kernel-polynomial/polynomial-kernel.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
  degree: 1,
  constant: 1,
  scale: 1
};

class PolynomialKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);

    this.degree = options.degree;
    this.constant = options.constant;
    this.scale = options.scale;
  }

  compute(x, y) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
      sum += x[i] * y[i];
    }
    return Math.pow(this.scale * sum + this.constant, this.degree);
  }
}

module.exports = PolynomialKernel;


/***/ }),

/***/ "../node_modules/ml-kernel-sigmoid/sigmoid-kernel.js":
/*!***********************************************************!*\
  !*** ../node_modules/ml-kernel-sigmoid/sigmoid-kernel.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
  alpha: 0.01,
  constant: -Math.E
};

class SigmoidKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.alpha = options.alpha;
    this.constant = options.constant;
  }

  compute(x, y) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
      sum += x[i] * y[i];
    }
    return Math.tanh(this.alpha * sum + this.constant);
  }
}

module.exports = SigmoidKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernel.js":
/*!***********************************************!*\
  !*** ../node_modules/ml-kernel/src/kernel.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { Matrix, MatrixTransposeView } = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");
const GaussianKernel = __webpack_require__(/*! ml-kernel-gaussian */ "../node_modules/ml-kernel-gaussian/gaussian-kernel.js");
const PolynomialKernel = __webpack_require__(/*! ml-kernel-polynomial */ "../node_modules/ml-kernel-polynomial/polynomial-kernel.js");
const SigmoidKernel = __webpack_require__(/*! ml-kernel-sigmoid */ "../node_modules/ml-kernel-sigmoid/sigmoid-kernel.js");

const ANOVAKernel = __webpack_require__(/*! ./kernels/anova-kernel */ "../node_modules/ml-kernel/src/kernels/anova-kernel.js");
const CauchyKernel = __webpack_require__(/*! ./kernels/cauchy-kernel */ "../node_modules/ml-kernel/src/kernels/cauchy-kernel.js");
const ExponentialKernel = __webpack_require__(/*! ./kernels/exponential-kernel */ "../node_modules/ml-kernel/src/kernels/exponential-kernel.js");
const HistogramKernel = __webpack_require__(/*! ./kernels/histogram-intersection-kernel */ "../node_modules/ml-kernel/src/kernels/histogram-intersection-kernel.js");
const LaplacianKernel = __webpack_require__(/*! ./kernels/laplacian-kernel */ "../node_modules/ml-kernel/src/kernels/laplacian-kernel.js");
const MultiquadraticKernel = __webpack_require__(/*! ./kernels/multiquadratic-kernel */ "../node_modules/ml-kernel/src/kernels/multiquadratic-kernel.js");
const RationalKernel = __webpack_require__(/*! ./kernels/rational-quadratic-kernel */ "../node_modules/ml-kernel/src/kernels/rational-quadratic-kernel.js");

const kernelType = {
  gaussian: GaussianKernel,
  rbf: GaussianKernel,
  polynomial: PolynomialKernel,
  poly: PolynomialKernel,
  anova: ANOVAKernel,
  cauchy: CauchyKernel,
  exponential: ExponentialKernel,
  histogram: HistogramKernel,
  min: HistogramKernel,
  laplacian: LaplacianKernel,
  multiquadratic: MultiquadraticKernel,
  rational: RationalKernel,
  sigmoid: SigmoidKernel,
  mlp: SigmoidKernel
};

class Kernel {
  constructor(type, options) {
    this.kernelType = type;
    if (type === 'linear') return;

    if (typeof type === 'string') {
      type = type.toLowerCase();

      var KernelConstructor = kernelType[type];
      if (KernelConstructor) {
        this.kernelFunction = new KernelConstructor(options);
      } else {
        throw new Error(`unsupported kernel type: ${type}`);
      }
    } else if (typeof type === 'object' && typeof type.compute === 'function') {
      this.kernelFunction = type;
    } else {
      throw new TypeError(
        'first argument must be a valid kernel type or instance'
      );
    }
  }

  compute(inputs, landmarks) {
    inputs = Matrix.checkMatrix(inputs);
    if (landmarks === undefined) {
      landmarks = inputs;
    } else {
      landmarks = Matrix.checkMatrix(landmarks);
    }
    if (this.kernelType === 'linear') {
      return inputs.mmul(new MatrixTransposeView(landmarks));
    }

    const kernelMatrix = new Matrix(inputs.rows, landmarks.rows);
    if (inputs === landmarks) {
      // fast path, matrix is symmetric
      for (let i = 0; i < inputs.rows; i++) {
        for (let j = i; j < inputs.rows; j++) {
          const value = this.kernelFunction.compute(
            inputs.getRow(i),
            inputs.getRow(j)
          );
          kernelMatrix.set(i, j, value);
          kernelMatrix.set(j, i, value);
        }
      }
    } else {
      for (let i = 0; i < inputs.rows; i++) {
        for (let j = 0; j < landmarks.rows; j++) {
          kernelMatrix.set(
            i,
            j,
            this.kernelFunction.compute(inputs.getRow(i), landmarks.getRow(j))
          );
        }
      }
    }
    return kernelMatrix;
  }
}

module.exports = Kernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/anova-kernel.js":
/*!*************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/anova-kernel.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const defaultOptions = {
  sigma: 1,
  degree: 1
};

class ANOVAKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.degree = options.degree;
  }

  compute(x, y) {
    var sum = 0;
    var len = Math.min(x.length, y.length);
    for (var i = 1; i <= len; ++i) {
      sum += Math.pow(
        Math.exp(
          -this.sigma *
            Math.pow(Math.pow(x[i - 1], i) - Math.pow(y[i - 1], i), 2)
        ),
        this.degree
      );
    }
    return sum;
  }
}

module.exports = ANOVAKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/cauchy-kernel.js":
/*!**************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/cauchy-kernel.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { squaredEuclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  sigma: 1
};

class CauchyKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
  }

  compute(x, y) {
    return 1 / (1 + squaredEuclidean(x, y) / (this.sigma * this.sigma));
  }
}

module.exports = CauchyKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/exponential-kernel.js":
/*!*******************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/exponential-kernel.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { euclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  sigma: 1
};

class ExponentialKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
    this.divisor = 2 * options.sigma * options.sigma;
  }

  compute(x, y) {
    const distance = euclidean(x, y);
    return Math.exp(-distance / this.divisor);
  }
}

module.exports = ExponentialKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/histogram-intersection-kernel.js":
/*!******************************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/histogram-intersection-kernel.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


class HistogramIntersectionKernel {
  compute(x, y) {
    var min = Math.min(x.length, y.length);
    var sum = 0;
    for (var i = 0; i < min; ++i) {
      sum += Math.min(x[i], y[i]);
    }

    return sum;
  }
}

module.exports = HistogramIntersectionKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/laplacian-kernel.js":
/*!*****************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/laplacian-kernel.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { euclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  sigma: 1
};

class LaplacianKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.sigma = options.sigma;
  }

  compute(x, y) {
    const distance = euclidean(x, y);
    return Math.exp(-distance / this.sigma);
  }
}

module.exports = LaplacianKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/multiquadratic-kernel.js":
/*!**********************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/multiquadratic-kernel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { squaredEuclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  constant: 1
};

class MultiquadraticKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.constant = options.constant;
  }

  compute(x, y) {
    return Math.sqrt(squaredEuclidean(x, y) + this.constant * this.constant);
  }
}

module.exports = MultiquadraticKernel;


/***/ }),

/***/ "../node_modules/ml-kernel/src/kernels/rational-quadratic-kernel.js":
/*!**************************************************************************!*\
  !*** ../node_modules/ml-kernel/src/kernels/rational-quadratic-kernel.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const { squaredEuclidean } = __webpack_require__(/*! ml-distance-euclidean */ "../node_modules/ml-distance-euclidean/lib-es6/euclidean.js");

const defaultOptions = {
  constant: 1
};

class RationalQuadraticKernel {
  constructor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.constant = options.constant;
  }

  compute(x, y) {
    const distance = squaredEuclidean(x, y);
    return 1 - distance / (distance + this.constant);
  }
}

module.exports = RationalQuadraticKernel;


/***/ }),

/***/ "../node_modules/ml-matrix/src/correlation.js":
/*!****************************************************!*\
  !*** ../node_modules/ml-matrix/src/correlation.js ***!
  \****************************************************/
/*! exports provided: correlation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return correlation; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");


function correlation(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }

  const { center = true, scale = true } = options;
  if (center) {
    xMatrix.center('column');
    if (!yIsSame) {
      yMatrix.center('column');
    }
  }
  if (scale) {
    xMatrix.scale('column');
    if (!yIsSame) {
      yMatrix.scale('column');
    }
  }

  const sdx = xMatrix.standardDeviation('column', { unbiased: true });
  const sdy = yIsSame
    ? sdx
    : yMatrix.standardDeviation('column', { unbiased: true });

  const corr = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < corr.rows; i++) {
    for (let j = 0; j < corr.columns; j++) {
      corr.set(
        i,
        j,
        corr.get(i, j) * (1 / (sdx[i] * sdy[j])) * (1 / (xMatrix.rows - 1)),
      );
    }
  }
  return corr;
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/covariance.js":
/*!***************************************************!*\
  !*** ../node_modules/ml-matrix/src/covariance.js ***!
  \***************************************************/
/*! exports provided: covariance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return covariance; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");


function covariance(xMatrix, yMatrix = xMatrix, options = {}) {
  xMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](xMatrix);
  let yIsSame = false;
  if (
    typeof yMatrix === 'object' &&
    !_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(yMatrix) &&
    !Array.isArray(yMatrix)
  ) {
    options = yMatrix;
    yMatrix = xMatrix;
    yIsSame = true;
  } else {
    yMatrix = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](yMatrix);
  }
  if (xMatrix.rows !== yMatrix.rows) {
    throw new TypeError('Both matrices must have the same number of rows');
  }
  const { center = true } = options;
  if (center) {
    xMatrix = xMatrix.center('column');
    if (!yIsSame) {
      yMatrix = yMatrix.center('column');
    }
  }
  const cov = xMatrix.transpose().mmul(yMatrix);
  for (let i = 0; i < cov.rows; i++) {
    for (let j = 0; j < cov.columns; j++) {
      cov.set(i, j, cov.get(i, j) * (1 / (xMatrix.rows - 1)));
    }
  }
  return cov;
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/cholesky.js":
/*!****************************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/cholesky.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CholeskyDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class CholeskyDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);
    if (!value.isSymmetric()) {
      throw new Error('Matrix is not symmetric');
    }

    let a = value;
    let dimension = a.rows;
    let l = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](dimension, dimension);
    let positiveDefinite = true;
    let i, j, k;

    for (j = 0; j < dimension; j++) {
      let d = 0;
      for (k = 0; k < j; k++) {
        let s = 0;
        for (i = 0; i < k; i++) {
          s += l.get(k, i) * l.get(j, i);
        }
        s = (a.get(j, k) - s) / l.get(k, k);
        l.set(j, k, s);
        d = d + s * s;
      }

      d = a.get(j, j) - d;

      positiveDefinite &= d > 0;
      l.set(j, j, Math.sqrt(Math.max(d, 0)));
      for (k = j + 1; k < dimension; k++) {
        l.set(j, k, 0);
      }
    }

    this.L = l;
    this.positiveDefinite = Boolean(positiveDefinite);
  }

  isPositiveDefinite() {
    return this.positiveDefinite;
  }

  solve(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let l = this.L;
    let dimension = l.rows;

    if (value.rows !== dimension) {
      throw new Error('Matrix dimensions do not match');
    }
    if (this.isPositiveDefinite() === false) {
      throw new Error('Matrix is not positive definite');
    }

    let count = value.columns;
    let B = value.clone();
    let i, j, k;

    for (k = 0; k < dimension; k++) {
      for (j = 0; j < count; j++) {
        for (i = 0; i < k; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(k, i));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    for (k = dimension - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        for (i = k + 1; i < dimension; i++) {
          B.set(k, j, B.get(k, j) - B.get(i, j) * l.get(i, k));
        }
        B.set(k, j, B.get(k, j) / l.get(k, k));
      }
    }

    return B;
  }

  get lowerTriangularMatrix() {
    return this.L;
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/evd.js":
/*!***********************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/evd.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EigenvalueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../node_modules/ml-matrix/src/dc/util.js");





class EigenvalueDecomposition {
  constructor(matrix, options = {}) {
    const { assumeSymmetric = false } = options;

    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
    if (!matrix.isSquare()) {
      throw new Error('Matrix is not a square matrix');
    }

    if (matrix.isEmpty()) {
      throw new Error('Matrix must be non-empty');
    }

    let n = matrix.columns;
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let d = new Float64Array(n);
    let e = new Float64Array(n);
    let value = matrix;
    let i, j;

    let isSymmetric = false;
    if (assumeSymmetric) {
      isSymmetric = true;
    } else {
      isSymmetric = matrix.isSymmetric();
    }

    if (isSymmetric) {
      for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
          V.set(i, j, value.get(i, j));
        }
      }
      tred2(n, e, d, V);
      tql2(n, e, d, V);
    } else {
      let H = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
      let ort = new Float64Array(n);
      for (j = 0; j < n; j++) {
        for (i = 0; i < n; i++) {
          H.set(i, j, value.get(i, j));
        }
      }
      orthes(n, H, ort, V);
      hqr2(n, e, d, V, H);
    }

    this.n = n;
    this.e = e;
    this.d = d;
    this.V = V;
  }

  get realEigenvalues() {
    return Array.from(this.d);
  }

  get imaginaryEigenvalues() {
    return Array.from(this.e);
  }

  get eigenvectorMatrix() {
    return this.V;
  }

  get diagonalMatrix() {
    let n = this.n;
    let e = this.e;
    let d = this.d;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        X.set(i, j, 0);
      }
      X.set(i, i, d[i]);
      if (e[i] > 0) {
        X.set(i, i + 1, e[i]);
      } else if (e[i] < 0) {
        X.set(i, i - 1, e[i]);
      }
    }
    return X;
  }
}

function tred2(n, e, d, V) {
  let f, g, h, i, j, k, hh, scale;

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
  }

  for (i = n - 1; i > 0; i--) {
    scale = 0;
    h = 0;
    for (k = 0; k < i; k++) {
      scale = scale + Math.abs(d[k]);
    }

    if (scale === 0) {
      e[i] = d[i - 1];
      for (j = 0; j < i; j++) {
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
        V.set(j, i, 0);
      }
    } else {
      for (k = 0; k < i; k++) {
        d[k] /= scale;
        h += d[k] * d[k];
      }

      f = d[i - 1];
      g = Math.sqrt(h);
      if (f > 0) {
        g = -g;
      }

      e[i] = scale * g;
      h = h - f * g;
      d[i - 1] = f - g;
      for (j = 0; j < i; j++) {
        e[j] = 0;
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        V.set(j, i, f);
        g = e[j] + V.get(j, j) * f;
        for (k = j + 1; k <= i - 1; k++) {
          g += V.get(k, j) * d[k];
          e[k] += V.get(k, j) * f;
        }
        e[j] = g;
      }

      f = 0;
      for (j = 0; j < i; j++) {
        e[j] /= h;
        f += e[j] * d[j];
      }

      hh = f / (h + h);
      for (j = 0; j < i; j++) {
        e[j] -= hh * d[j];
      }

      for (j = 0; j < i; j++) {
        f = d[j];
        g = e[j];
        for (k = j; k <= i - 1; k++) {
          V.set(k, j, V.get(k, j) - (f * e[k] + g * d[k]));
        }
        d[j] = V.get(i - 1, j);
        V.set(i, j, 0);
      }
    }
    d[i] = h;
  }

  for (i = 0; i < n - 1; i++) {
    V.set(n - 1, i, V.get(i, i));
    V.set(i, i, 1);
    h = d[i + 1];
    if (h !== 0) {
      for (k = 0; k <= i; k++) {
        d[k] = V.get(k, i + 1) / h;
      }

      for (j = 0; j <= i; j++) {
        g = 0;
        for (k = 0; k <= i; k++) {
          g += V.get(k, i + 1) * V.get(k, j);
        }
        for (k = 0; k <= i; k++) {
          V.set(k, j, V.get(k, j) - g * d[k]);
        }
      }
    }

    for (k = 0; k <= i; k++) {
      V.set(k, i + 1, 0);
    }
  }

  for (j = 0; j < n; j++) {
    d[j] = V.get(n - 1, j);
    V.set(n - 1, j, 0);
  }

  V.set(n - 1, n - 1, 1);
  e[0] = 0;
}

function tql2(n, e, d, V) {
  let g, h, i, j, k, l, m, p, r, dl1, c, c2, c3, el1, s, s2, iter;

  for (i = 1; i < n; i++) {
    e[i - 1] = e[i];
  }

  e[n - 1] = 0;

  let f = 0;
  let tst1 = 0;
  let eps = Number.EPSILON;

  for (l = 0; l < n; l++) {
    tst1 = Math.max(tst1, Math.abs(d[l]) + Math.abs(e[l]));
    m = l;
    while (m < n) {
      if (Math.abs(e[m]) <= eps * tst1) {
        break;
      }
      m++;
    }

    if (m > l) {
      iter = 0;
      do {
        iter = iter + 1;

        g = d[l];
        p = (d[l + 1] - g) / (2 * e[l]);
        r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, 1);
        if (p < 0) {
          r = -r;
        }

        d[l] = e[l] / (p + r);
        d[l + 1] = e[l] * (p + r);
        dl1 = d[l + 1];
        h = g - d[l];
        for (i = l + 2; i < n; i++) {
          d[i] -= h;
        }

        f = f + h;

        p = d[m];
        c = 1;
        c2 = c;
        c3 = c;
        el1 = e[l + 1];
        s = 0;
        s2 = 0;
        for (i = m - 1; i >= l; i--) {
          c3 = c2;
          c2 = c;
          s2 = s;
          g = c * e[i];
          h = c * p;
          r = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(p, e[i]);
          e[i + 1] = s * r;
          s = e[i] / r;
          c = p / r;
          p = c * d[i] - s * g;
          d[i + 1] = h + s * (c * g + s * d[i]);

          for (k = 0; k < n; k++) {
            h = V.get(k, i + 1);
            V.set(k, i + 1, s * V.get(k, i) + c * h);
            V.set(k, i, c * V.get(k, i) - s * h);
          }
        }

        p = (-s * s2 * c3 * el1 * e[l]) / dl1;
        e[l] = s * p;
        d[l] = c * p;
      } while (Math.abs(e[l]) > eps * tst1);
    }
    d[l] = d[l] + f;
    e[l] = 0;
  }

  for (i = 0; i < n - 1; i++) {
    k = i;
    p = d[i];
    for (j = i + 1; j < n; j++) {
      if (d[j] < p) {
        k = j;
        p = d[j];
      }
    }

    if (k !== i) {
      d[k] = d[i];
      d[i] = p;
      for (j = 0; j < n; j++) {
        p = V.get(j, i);
        V.set(j, i, V.get(j, k));
        V.set(j, k, p);
      }
    }
  }
}

function orthes(n, H, ort, V) {
  let low = 0;
  let high = n - 1;
  let f, g, h, i, j, m;
  let scale;

  for (m = low + 1; m <= high - 1; m++) {
    scale = 0;
    for (i = m; i <= high; i++) {
      scale = scale + Math.abs(H.get(i, m - 1));
    }

    if (scale !== 0) {
      h = 0;
      for (i = high; i >= m; i--) {
        ort[i] = H.get(i, m - 1) / scale;
        h += ort[i] * ort[i];
      }

      g = Math.sqrt(h);
      if (ort[m] > 0) {
        g = -g;
      }

      h = h - ort[m] * g;
      ort[m] = ort[m] - g;

      for (j = m; j < n; j++) {
        f = 0;
        for (i = high; i >= m; i--) {
          f += ort[i] * H.get(i, j);
        }

        f = f / h;
        for (i = m; i <= high; i++) {
          H.set(i, j, H.get(i, j) - f * ort[i]);
        }
      }

      for (i = 0; i <= high; i++) {
        f = 0;
        for (j = high; j >= m; j--) {
          f += ort[j] * H.get(i, j);
        }

        f = f / h;
        for (j = m; j <= high; j++) {
          H.set(i, j, H.get(i, j) - f * ort[j]);
        }
      }

      ort[m] = scale * ort[m];
      H.set(m, m - 1, scale * g);
    }
  }

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      V.set(i, j, i === j ? 1 : 0);
    }
  }

  for (m = high - 1; m >= low + 1; m--) {
    if (H.get(m, m - 1) !== 0) {
      for (i = m + 1; i <= high; i++) {
        ort[i] = H.get(i, m - 1);
      }

      for (j = m; j <= high; j++) {
        g = 0;
        for (i = m; i <= high; i++) {
          g += ort[i] * V.get(i, j);
        }

        g = g / ort[m] / H.get(m, m - 1);
        for (i = m; i <= high; i++) {
          V.set(i, j, V.get(i, j) + g * ort[i]);
        }
      }
    }
  }
}

function hqr2(nn, e, d, V, H) {
  let n = nn - 1;
  let low = 0;
  let high = nn - 1;
  let eps = Number.EPSILON;
  let exshift = 0;
  let norm = 0;
  let p = 0;
  let q = 0;
  let r = 0;
  let s = 0;
  let z = 0;
  let iter = 0;
  let i, j, k, l, m, t, w, x, y;
  let ra, sa, vr, vi;
  let notlast, cdivres;

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      d[i] = H.get(i, i);
      e[i] = 0;
    }

    for (j = Math.max(i - 1, 0); j < nn; j++) {
      norm = norm + Math.abs(H.get(i, j));
    }
  }

  while (n >= low) {
    l = n;
    while (l > low) {
      s = Math.abs(H.get(l - 1, l - 1)) + Math.abs(H.get(l, l));
      if (s === 0) {
        s = norm;
      }
      if (Math.abs(H.get(l, l - 1)) < eps * s) {
        break;
      }
      l--;
    }

    if (l === n) {
      H.set(n, n, H.get(n, n) + exshift);
      d[n] = H.get(n, n);
      e[n] = 0;
      n--;
      iter = 0;
    } else if (l === n - 1) {
      w = H.get(n, n - 1) * H.get(n - 1, n);
      p = (H.get(n - 1, n - 1) - H.get(n, n)) / 2;
      q = p * p + w;
      z = Math.sqrt(Math.abs(q));
      H.set(n, n, H.get(n, n) + exshift);
      H.set(n - 1, n - 1, H.get(n - 1, n - 1) + exshift);
      x = H.get(n, n);

      if (q >= 0) {
        z = p >= 0 ? p + z : p - z;
        d[n - 1] = x + z;
        d[n] = d[n - 1];
        if (z !== 0) {
          d[n] = x - w / z;
        }
        e[n - 1] = 0;
        e[n] = 0;
        x = H.get(n, n - 1);
        s = Math.abs(x) + Math.abs(z);
        p = x / s;
        q = z / s;
        r = Math.sqrt(p * p + q * q);
        p = p / r;
        q = q / r;

        for (j = n - 1; j < nn; j++) {
          z = H.get(n - 1, j);
          H.set(n - 1, j, q * z + p * H.get(n, j));
          H.set(n, j, q * H.get(n, j) - p * z);
        }

        for (i = 0; i <= n; i++) {
          z = H.get(i, n - 1);
          H.set(i, n - 1, q * z + p * H.get(i, n));
          H.set(i, n, q * H.get(i, n) - p * z);
        }

        for (i = low; i <= high; i++) {
          z = V.get(i, n - 1);
          V.set(i, n - 1, q * z + p * V.get(i, n));
          V.set(i, n, q * V.get(i, n) - p * z);
        }
      } else {
        d[n - 1] = x + p;
        d[n] = x + p;
        e[n - 1] = z;
        e[n] = -z;
      }

      n = n - 2;
      iter = 0;
    } else {
      x = H.get(n, n);
      y = 0;
      w = 0;
      if (l < n) {
        y = H.get(n - 1, n - 1);
        w = H.get(n, n - 1) * H.get(n - 1, n);
      }

      if (iter === 10) {
        exshift += x;
        for (i = low; i <= n; i++) {
          H.set(i, i, H.get(i, i) - x);
        }
        s = Math.abs(H.get(n, n - 1)) + Math.abs(H.get(n - 1, n - 2));
        x = y = 0.75 * s;
        w = -0.4375 * s * s;
      }

      if (iter === 30) {
        s = (y - x) / 2;
        s = s * s + w;
        if (s > 0) {
          s = Math.sqrt(s);
          if (y < x) {
            s = -s;
          }
          s = x - w / ((y - x) / 2 + s);
          for (i = low; i <= n; i++) {
            H.set(i, i, H.get(i, i) - s);
          }
          exshift += s;
          x = y = w = 0.964;
        }
      }

      iter = iter + 1;

      m = n - 2;
      while (m >= l) {
        z = H.get(m, m);
        r = x - z;
        s = y - z;
        p = (r * s - w) / H.get(m + 1, m) + H.get(m, m + 1);
        q = H.get(m + 1, m + 1) - z - r - s;
        r = H.get(m + 2, m + 1);
        s = Math.abs(p) + Math.abs(q) + Math.abs(r);
        p = p / s;
        q = q / s;
        r = r / s;
        if (m === l) {
          break;
        }
        if (
          Math.abs(H.get(m, m - 1)) * (Math.abs(q) + Math.abs(r)) <
          eps *
            (Math.abs(p) *
              (Math.abs(H.get(m - 1, m - 1)) +
                Math.abs(z) +
                Math.abs(H.get(m + 1, m + 1))))
        ) {
          break;
        }
        m--;
      }

      for (i = m + 2; i <= n; i++) {
        H.set(i, i - 2, 0);
        if (i > m + 2) {
          H.set(i, i - 3, 0);
        }
      }

      for (k = m; k <= n - 1; k++) {
        notlast = k !== n - 1;
        if (k !== m) {
          p = H.get(k, k - 1);
          q = H.get(k + 1, k - 1);
          r = notlast ? H.get(k + 2, k - 1) : 0;
          x = Math.abs(p) + Math.abs(q) + Math.abs(r);
          if (x !== 0) {
            p = p / x;
            q = q / x;
            r = r / x;
          }
        }

        if (x === 0) {
          break;
        }

        s = Math.sqrt(p * p + q * q + r * r);
        if (p < 0) {
          s = -s;
        }

        if (s !== 0) {
          if (k !== m) {
            H.set(k, k - 1, -s * x);
          } else if (l !== m) {
            H.set(k, k - 1, -H.get(k, k - 1));
          }

          p = p + s;
          x = p / s;
          y = q / s;
          z = r / s;
          q = q / p;
          r = r / p;

          for (j = k; j < nn; j++) {
            p = H.get(k, j) + q * H.get(k + 1, j);
            if (notlast) {
              p = p + r * H.get(k + 2, j);
              H.set(k + 2, j, H.get(k + 2, j) - p * z);
            }

            H.set(k, j, H.get(k, j) - p * x);
            H.set(k + 1, j, H.get(k + 1, j) - p * y);
          }

          for (i = 0; i <= Math.min(n, k + 3); i++) {
            p = x * H.get(i, k) + y * H.get(i, k + 1);
            if (notlast) {
              p = p + z * H.get(i, k + 2);
              H.set(i, k + 2, H.get(i, k + 2) - p * r);
            }

            H.set(i, k, H.get(i, k) - p);
            H.set(i, k + 1, H.get(i, k + 1) - p * q);
          }

          for (i = low; i <= high; i++) {
            p = x * V.get(i, k) + y * V.get(i, k + 1);
            if (notlast) {
              p = p + z * V.get(i, k + 2);
              V.set(i, k + 2, V.get(i, k + 2) - p * r);
            }

            V.set(i, k, V.get(i, k) - p);
            V.set(i, k + 1, V.get(i, k + 1) - p * q);
          }
        }
      }
    }
  }

  if (norm === 0) {
    return;
  }

  for (n = nn - 1; n >= 0; n--) {
    p = d[n];
    q = e[n];

    if (q === 0) {
      l = n;
      H.set(n, n, 1);
      for (i = n - 1; i >= 0; i--) {
        w = H.get(i, i) - p;
        r = 0;
        for (j = l; j <= n; j++) {
          r = r + H.get(i, j) * H.get(j, n);
        }

        if (e[i] < 0) {
          z = w;
          s = r;
        } else {
          l = i;
          if (e[i] === 0) {
            H.set(i, n, w !== 0 ? -r / w : -r / (eps * norm));
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            q = (d[i] - p) * (d[i] - p) + e[i] * e[i];
            t = (x * s - z * r) / q;
            H.set(i, n, t);
            H.set(
              i + 1,
              n,
              Math.abs(x) > Math.abs(z) ? (-r - w * t) / x : (-s - y * t) / z,
            );
          }

          t = Math.abs(H.get(i, n));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    } else if (q < 0) {
      l = n - 1;

      if (Math.abs(H.get(n, n - 1)) > Math.abs(H.get(n - 1, n))) {
        H.set(n - 1, n - 1, q / H.get(n, n - 1));
        H.set(n - 1, n, -(H.get(n, n) - p) / H.get(n, n - 1));
      } else {
        cdivres = cdiv(0, -H.get(n - 1, n), H.get(n - 1, n - 1) - p, q);
        H.set(n - 1, n - 1, cdivres[0]);
        H.set(n - 1, n, cdivres[1]);
      }

      H.set(n, n - 1, 0);
      H.set(n, n, 1);
      for (i = n - 2; i >= 0; i--) {
        ra = 0;
        sa = 0;
        for (j = l; j <= n; j++) {
          ra = ra + H.get(i, j) * H.get(j, n - 1);
          sa = sa + H.get(i, j) * H.get(j, n);
        }

        w = H.get(i, i) - p;

        if (e[i] < 0) {
          z = w;
          r = ra;
          s = sa;
        } else {
          l = i;
          if (e[i] === 0) {
            cdivres = cdiv(-ra, -sa, w, q);
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
          } else {
            x = H.get(i, i + 1);
            y = H.get(i + 1, i);
            vr = (d[i] - p) * (d[i] - p) + e[i] * e[i] - q * q;
            vi = (d[i] - p) * 2 * q;
            if (vr === 0 && vi === 0) {
              vr =
                eps *
                norm *
                (Math.abs(w) +
                  Math.abs(q) +
                  Math.abs(x) +
                  Math.abs(y) +
                  Math.abs(z));
            }
            cdivres = cdiv(
              x * r - z * ra + q * sa,
              x * s - z * sa - q * ra,
              vr,
              vi,
            );
            H.set(i, n - 1, cdivres[0]);
            H.set(i, n, cdivres[1]);
            if (Math.abs(x) > Math.abs(z) + Math.abs(q)) {
              H.set(
                i + 1,
                n - 1,
                (-ra - w * H.get(i, n - 1) + q * H.get(i, n)) / x,
              );
              H.set(
                i + 1,
                n,
                (-sa - w * H.get(i, n) - q * H.get(i, n - 1)) / x,
              );
            } else {
              cdivres = cdiv(
                -r - y * H.get(i, n - 1),
                -s - y * H.get(i, n),
                z,
                q,
              );
              H.set(i + 1, n - 1, cdivres[0]);
              H.set(i + 1, n, cdivres[1]);
            }
          }

          t = Math.max(Math.abs(H.get(i, n - 1)), Math.abs(H.get(i, n)));
          if (eps * t * t > 1) {
            for (j = i; j <= n; j++) {
              H.set(j, n - 1, H.get(j, n - 1) / t);
              H.set(j, n, H.get(j, n) / t);
            }
          }
        }
      }
    }
  }

  for (i = 0; i < nn; i++) {
    if (i < low || i > high) {
      for (j = i; j < nn; j++) {
        V.set(i, j, H.get(i, j));
      }
    }
  }

  for (j = nn - 1; j >= low; j--) {
    for (i = low; i <= high; i++) {
      z = 0;
      for (k = low; k <= Math.min(j, high); k++) {
        z = z + V.get(i, k) * H.get(k, j);
      }
      V.set(i, j, z);
    }
  }
}

function cdiv(xr, xi, yr, yi) {
  let r, d;
  if (Math.abs(yr) > Math.abs(yi)) {
    r = yi / yr;
    d = yr + r * yi;
    return [(xr + r * xi) / d, (xi - r * xr) / d];
  } else {
    r = yr / yi;
    d = yi + r * yr;
    return [(r * xr + xi) / d, (r * xi - xr) / d];
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/lu.js":
/*!**********************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/lu.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LuDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class LuDecomposition {
  constructor(matrix) {
    matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

    let lu = matrix.clone();
    let rows = lu.rows;
    let columns = lu.columns;
    let pivotVector = new Float64Array(rows);
    let pivotSign = 1;
    let i, j, k, p, s, t, v;
    let LUcolj, kmax;

    for (i = 0; i < rows; i++) {
      pivotVector[i] = i;
    }

    LUcolj = new Float64Array(rows);

    for (j = 0; j < columns; j++) {
      for (i = 0; i < rows; i++) {
        LUcolj[i] = lu.get(i, j);
      }

      for (i = 0; i < rows; i++) {
        kmax = Math.min(i, j);
        s = 0;
        for (k = 0; k < kmax; k++) {
          s += lu.get(i, k) * LUcolj[k];
        }
        LUcolj[i] -= s;
        lu.set(i, j, LUcolj[i]);
      }

      p = j;
      for (i = j + 1; i < rows; i++) {
        if (Math.abs(LUcolj[i]) > Math.abs(LUcolj[p])) {
          p = i;
        }
      }

      if (p !== j) {
        for (k = 0; k < columns; k++) {
          t = lu.get(p, k);
          lu.set(p, k, lu.get(j, k));
          lu.set(j, k, t);
        }

        v = pivotVector[p];
        pivotVector[p] = pivotVector[j];
        pivotVector[j] = v;

        pivotSign = -pivotSign;
      }

      if (j < rows && lu.get(j, j) !== 0) {
        for (i = j + 1; i < rows; i++) {
          lu.set(i, j, lu.get(i, j) / lu.get(j, j));
        }
      }
    }

    this.LU = lu;
    this.pivotVector = pivotVector;
    this.pivotSign = pivotSign;
  }

  isSingular() {
    let data = this.LU;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      if (data.get(j, j) === 0) {
        return true;
      }
    }
    return false;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let lu = this.LU;
    let rows = lu.rows;

    if (rows !== value.rows) {
      throw new Error('Invalid matrix dimensions');
    }
    if (this.isSingular()) {
      throw new Error('LU matrix is singular');
    }

    let count = value.columns;
    let X = value.subMatrixRow(this.pivotVector, 0, count - 1);
    let columns = lu.columns;
    let i, j, k;

    for (k = 0; k < columns; k++) {
      for (i = k + 1; i < columns; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    for (k = columns - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / lu.get(k, k));
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * lu.get(i, k));
        }
      }
    }
    return X;
  }

  get determinant() {
    let data = this.LU;
    if (!data.isSquare()) {
      throw new Error('Matrix must be square');
    }
    let determinant = this.pivotSign;
    let col = data.columns;
    for (let j = 0; j < col; j++) {
      determinant *= data.get(j, j);
    }
    return determinant;
  }

  get lowerTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i > j) {
          X.set(i, j, data.get(i, j));
        } else if (i === j) {
          X.set(i, j, 1);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get upperTriangularMatrix() {
    let data = this.LU;
    let rows = data.rows;
    let columns = data.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        if (i <= j) {
          X.set(i, j, data.get(i, j));
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get pivotPermutationVector() {
    return Array.from(this.pivotVector);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/nipals.js":
/*!**************************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/nipals.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nipals; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



class nipals {
  constructor(X, options = {}) {
    X = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(X);
    let { Y } = options;
    const {
      scaleScores = false,
      maxIterations = 1000,
      terminationCriteria = 1e-10,
    } = options;

    let u;
    if (Y) {
      if (Array.isArray(Y) && typeof Y[0] === 'number') {
        Y = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].columnVector(Y);
      } else {
        Y = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(Y);
      }
      if (Y.rows !== X.rows) {
        throw new Error('Y should have the same number of rows as X');
      }
      u = Y.getColumnVector(0);
    } else {
      u = X.getColumnVector(0);
    }

    let diff = 1;
    let t, q, w, tOld;

    for (
      let counter = 0;
      counter < maxIterations && diff > terminationCriteria;
      counter++
    ) {
      w = X.transpose().mmul(u).div(u.transpose().mmul(u).get(0, 0));
      w = w.div(w.norm());

      t = X.mmul(w).div(w.transpose().mmul(w).get(0, 0));

      if (counter > 0) {
        diff = t.clone().sub(tOld).pow(2).sum();
      }
      tOld = t.clone();

      if (Y) {
        q = Y.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
        q = q.div(q.norm());

        u = Y.mmul(q).div(q.transpose().mmul(q).get(0, 0));
      } else {
        u = t;
      }
    }

    if (Y) {
      let p = X.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      p = p.div(p.norm());
      let xResidual = X.clone().sub(t.clone().mmul(p.transpose()));
      let residual = u.transpose().mmul(t).div(t.transpose().mmul(t).get(0, 0));
      let yResidual = Y.clone().sub(
        t.clone().mulS(residual.get(0, 0)).mmul(q.transpose()),
      );

      this.t = t;
      this.p = p.transpose();
      this.w = w.transpose();
      this.q = q;
      this.u = u;
      this.s = t.transpose().mmul(t);
      this.xResidual = xResidual;
      this.yResidual = yResidual;
      this.betas = residual;
    } else {
      this.w = w.transpose();
      this.s = t.transpose().mmul(t).sqrt();
      if (scaleScores) {
        this.t = t.clone().div(this.s.get(0, 0));
      } else {
        this.t = t;
      }
      this.xResidual = X.sub(t.mmul(w.transpose()));
    }
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/qr.js":
/*!**********************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/qr.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QrDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../node_modules/ml-matrix/src/dc/util.js");





class QrDecomposition {
  constructor(value) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    let qr = value.clone();
    let m = value.rows;
    let n = value.columns;
    let rdiag = new Float64Array(n);
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      let nrm = 0;
      for (i = k; i < m; i++) {
        nrm = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(nrm, qr.get(i, k));
      }
      if (nrm !== 0) {
        if (qr.get(k, k) < 0) {
          nrm = -nrm;
        }
        for (i = k; i < m; i++) {
          qr.set(i, k, qr.get(i, k) / nrm);
        }
        qr.set(k, k, qr.get(k, k) + 1);
        for (j = k + 1; j < n; j++) {
          s = 0;
          for (i = k; i < m; i++) {
            s += qr.get(i, k) * qr.get(i, j);
          }
          s = -s / qr.get(k, k);
          for (i = k; i < m; i++) {
            qr.set(i, j, qr.get(i, j) + s * qr.get(i, k));
          }
        }
      }
      rdiag[k] = -nrm;
    }

    this.QR = qr;
    this.Rdiag = rdiag;
  }

  solve(value) {
    value = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].checkMatrix(value);

    let qr = this.QR;
    let m = qr.rows;

    if (value.rows !== m) {
      throw new Error('Matrix row dimensions must agree');
    }
    if (!this.isFullRank()) {
      throw new Error('Matrix is rank deficient');
    }

    let count = value.columns;
    let X = value.clone();
    let n = qr.columns;
    let i, j, k, s;

    for (k = 0; k < n; k++) {
      for (j = 0; j < count; j++) {
        s = 0;
        for (i = k; i < m; i++) {
          s += qr.get(i, k) * X.get(i, j);
        }
        s = -s / qr.get(k, k);
        for (i = k; i < m; i++) {
          X.set(i, j, X.get(i, j) + s * qr.get(i, k));
        }
      }
    }
    for (k = n - 1; k >= 0; k--) {
      for (j = 0; j < count; j++) {
        X.set(k, j, X.get(k, j) / this.Rdiag[k]);
      }
      for (i = 0; i < k; i++) {
        for (j = 0; j < count; j++) {
          X.set(i, j, X.get(i, j) - X.get(k, j) * qr.get(i, k));
        }
      }
    }

    return X.subMatrix(0, n - 1, 0, count - 1);
  }

  isFullRank() {
    let columns = this.QR.columns;
    for (let i = 0; i < columns; i++) {
      if (this.Rdiag[i] === 0) {
        return false;
      }
    }
    return true;
  }

  get upperTriangularMatrix() {
    let qr = this.QR;
    let n = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);
    let i, j;
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        if (i < j) {
          X.set(i, j, qr.get(i, j));
        } else if (i === j) {
          X.set(i, j, this.Rdiag[i]);
        } else {
          X.set(i, j, 0);
        }
      }
    }
    return X;
  }

  get orthogonalMatrix() {
    let qr = this.QR;
    let rows = qr.rows;
    let columns = qr.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](rows, columns);
    let i, j, k, s;

    for (k = columns - 1; k >= 0; k--) {
      for (i = 0; i < rows; i++) {
        X.set(i, k, 0);
      }
      X.set(k, k, 1);
      for (j = k; j < columns; j++) {
        if (qr.get(k, k) !== 0) {
          s = 0;
          for (i = k; i < rows; i++) {
            s += qr.get(i, k) * X.get(i, j);
          }

          s = -s / qr.get(k, k);

          for (i = k; i < rows; i++) {
            X.set(i, j, X.get(i, j) + s * qr.get(i, k));
          }
        }
      }
    }
    return X;
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/svd.js":
/*!***********************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/svd.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingularValueDecomposition; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "../node_modules/ml-matrix/src/dc/util.js");





class SingularValueDecomposition {
  constructor(value, options = {}) {
    value = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(value);

    if (value.isEmpty()) {
      throw new Error('Matrix must be non-empty');
    }

    let m = value.rows;
    let n = value.columns;

    const {
      computeLeftSingularVectors = true,
      computeRightSingularVectors = true,
      autoTranspose = false,
    } = options;

    let wantu = Boolean(computeLeftSingularVectors);
    let wantv = Boolean(computeRightSingularVectors);

    let swapped = false;
    let a;
    if (m < n) {
      if (!autoTranspose) {
        a = value.clone();
        // eslint-disable-next-line no-console
        console.warn(
          'Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose',
        );
      } else {
        a = value.transpose();
        m = a.rows;
        n = a.columns;
        swapped = true;
        let aux = wantu;
        wantu = wantv;
        wantv = aux;
      }
    } else {
      a = value.clone();
    }

    let nu = Math.min(m, n);
    let ni = Math.min(m + 1, n);
    let s = new Float64Array(ni);
    let U = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](m, nu);
    let V = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](n, n);

    let e = new Float64Array(n);
    let work = new Float64Array(m);

    let si = new Float64Array(ni);
    for (let i = 0; i < ni; i++) si[i] = i;

    let nct = Math.min(m - 1, n);
    let nrt = Math.max(0, Math.min(n - 2, m));
    let mrc = Math.max(nct, nrt);

    for (let k = 0; k < mrc; k++) {
      if (k < nct) {
        s[k] = 0;
        for (let i = k; i < m; i++) {
          s[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[k], a.get(i, k));
        }
        if (s[k] !== 0) {
          if (a.get(k, k) < 0) {
            s[k] = -s[k];
          }
          for (let i = k; i < m; i++) {
            a.set(i, k, a.get(i, k) / s[k]);
          }
          a.set(k, k, a.get(k, k) + 1);
        }
        s[k] = -s[k];
      }

      for (let j = k + 1; j < n; j++) {
        if (k < nct && s[k] !== 0) {
          let t = 0;
          for (let i = k; i < m; i++) {
            t += a.get(i, k) * a.get(i, j);
          }
          t = -t / a.get(k, k);
          for (let i = k; i < m; i++) {
            a.set(i, j, a.get(i, j) + t * a.get(i, k));
          }
        }
        e[j] = a.get(k, j);
      }

      if (wantu && k < nct) {
        for (let i = k; i < m; i++) {
          U.set(i, k, a.get(i, k));
        }
      }

      if (k < nrt) {
        e[k] = 0;
        for (let i = k + 1; i < n; i++) {
          e[k] = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(e[k], e[i]);
        }
        if (e[k] !== 0) {
          if (e[k + 1] < 0) {
            e[k] = 0 - e[k];
          }
          for (let i = k + 1; i < n; i++) {
            e[i] /= e[k];
          }
          e[k + 1] += 1;
        }
        e[k] = -e[k];
        if (k + 1 < m && e[k] !== 0) {
          for (let i = k + 1; i < m; i++) {
            work[i] = 0;
          }
          for (let i = k + 1; i < m; i++) {
            for (let j = k + 1; j < n; j++) {
              work[i] += e[j] * a.get(i, j);
            }
          }
          for (let j = k + 1; j < n; j++) {
            let t = -e[j] / e[k + 1];
            for (let i = k + 1; i < m; i++) {
              a.set(i, j, a.get(i, j) + t * work[i]);
            }
          }
        }
        if (wantv) {
          for (let i = k + 1; i < n; i++) {
            V.set(i, k, e[i]);
          }
        }
      }
    }

    let p = Math.min(n, m + 1);
    if (nct < n) {
      s[nct] = a.get(nct, nct);
    }
    if (m < p) {
      s[p - 1] = 0;
    }
    if (nrt + 1 < p) {
      e[nrt] = a.get(nrt, p - 1);
    }
    e[p - 1] = 0;

    if (wantu) {
      for (let j = nct; j < nu; j++) {
        for (let i = 0; i < m; i++) {
          U.set(i, j, 0);
        }
        U.set(j, j, 1);
      }
      for (let k = nct - 1; k >= 0; k--) {
        if (s[k] !== 0) {
          for (let j = k + 1; j < nu; j++) {
            let t = 0;
            for (let i = k; i < m; i++) {
              t += U.get(i, k) * U.get(i, j);
            }
            t = -t / U.get(k, k);
            for (let i = k; i < m; i++) {
              U.set(i, j, U.get(i, j) + t * U.get(i, k));
            }
          }
          for (let i = k; i < m; i++) {
            U.set(i, k, -U.get(i, k));
          }
          U.set(k, k, 1 + U.get(k, k));
          for (let i = 0; i < k - 1; i++) {
            U.set(i, k, 0);
          }
        } else {
          for (let i = 0; i < m; i++) {
            U.set(i, k, 0);
          }
          U.set(k, k, 1);
        }
      }
    }

    if (wantv) {
      for (let k = n - 1; k >= 0; k--) {
        if (k < nrt && e[k] !== 0) {
          for (let j = k + 1; j < n; j++) {
            let t = 0;
            for (let i = k + 1; i < n; i++) {
              t += V.get(i, k) * V.get(i, j);
            }
            t = -t / V.get(k + 1, k);
            for (let i = k + 1; i < n; i++) {
              V.set(i, j, V.get(i, j) + t * V.get(i, k));
            }
          }
        }
        for (let i = 0; i < n; i++) {
          V.set(i, k, 0);
        }
        V.set(k, k, 1);
      }
    }

    let pp = p - 1;
    let iter = 0;
    let eps = Number.EPSILON;
    while (p > 0) {
      let k, kase;
      for (k = p - 2; k >= -1; k--) {
        if (k === -1) {
          break;
        }
        const alpha =
          Number.MIN_VALUE + eps * Math.abs(s[k] + Math.abs(s[k + 1]));
        if (Math.abs(e[k]) <= alpha || Number.isNaN(e[k])) {
          e[k] = 0;
          break;
        }
      }
      if (k === p - 2) {
        kase = 4;
      } else {
        let ks;
        for (ks = p - 1; ks >= k; ks--) {
          if (ks === k) {
            break;
          }
          let t =
            (ks !== p ? Math.abs(e[ks]) : 0) +
            (ks !== k + 1 ? Math.abs(e[ks - 1]) : 0);
          if (Math.abs(s[ks]) <= eps * t) {
            s[ks] = 0;
            break;
          }
        }
        if (ks === k) {
          kase = 3;
        } else if (ks === p - 1) {
          kase = 1;
        } else {
          kase = 2;
          k = ks;
        }
      }

      k++;

      switch (kase) {
        case 1: {
          let f = e[p - 2];
          e[p - 2] = 0;
          for (let j = p - 2; j >= k; j--) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            if (j !== k) {
              f = -sn * e[j - 1];
              e[j - 1] = cs * e[j - 1];
            }
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, p - 1);
                V.set(i, p - 1, -sn * V.get(i, j) + cs * V.get(i, p - 1));
                V.set(i, j, t);
              }
            }
          }
          break;
        }
        case 2: {
          let f = e[k - 1];
          e[k - 1] = 0;
          for (let j = k; j < p; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(s[j], f);
            let cs = s[j] / t;
            let sn = f / t;
            s[j] = t;
            f = -sn * e[j];
            e[j] = cs * e[j];
            if (wantu) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, k - 1);
                U.set(i, k - 1, -sn * U.get(i, j) + cs * U.get(i, k - 1));
                U.set(i, j, t);
              }
            }
          }
          break;
        }
        case 3: {
          const scale = Math.max(
            Math.abs(s[p - 1]),
            Math.abs(s[p - 2]),
            Math.abs(e[p - 2]),
            Math.abs(s[k]),
            Math.abs(e[k]),
          );
          const sp = s[p - 1] / scale;
          const spm1 = s[p - 2] / scale;
          const epm1 = e[p - 2] / scale;
          const sk = s[k] / scale;
          const ek = e[k] / scale;
          const b = ((spm1 + sp) * (spm1 - sp) + epm1 * epm1) / 2;
          const c = sp * epm1 * (sp * epm1);
          let shift = 0;
          if (b !== 0 || c !== 0) {
            if (b < 0) {
              shift = 0 - Math.sqrt(b * b + c);
            } else {
              shift = Math.sqrt(b * b + c);
            }
            shift = c / (b + shift);
          }
          let f = (sk + sp) * (sk - sp) + shift;
          let g = sk * ek;
          for (let j = k; j < p - 1; j++) {
            let t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            let cs = f / t;
            let sn = g / t;
            if (j !== k) {
              e[j - 1] = t;
            }
            f = cs * s[j] + sn * e[j];
            e[j] = cs * e[j] - sn * s[j];
            g = sn * s[j + 1];
            s[j + 1] = cs * s[j + 1];
            if (wantv) {
              for (let i = 0; i < n; i++) {
                t = cs * V.get(i, j) + sn * V.get(i, j + 1);
                V.set(i, j + 1, -sn * V.get(i, j) + cs * V.get(i, j + 1));
                V.set(i, j, t);
              }
            }
            t = Object(_util__WEBPACK_IMPORTED_MODULE_2__["hypotenuse"])(f, g);
            if (t === 0) t = Number.MIN_VALUE;
            cs = f / t;
            sn = g / t;
            s[j] = t;
            f = cs * e[j] + sn * s[j + 1];
            s[j + 1] = -sn * e[j] + cs * s[j + 1];
            g = sn * e[j + 1];
            e[j + 1] = cs * e[j + 1];
            if (wantu && j < m - 1) {
              for (let i = 0; i < m; i++) {
                t = cs * U.get(i, j) + sn * U.get(i, j + 1);
                U.set(i, j + 1, -sn * U.get(i, j) + cs * U.get(i, j + 1));
                U.set(i, j, t);
              }
            }
          }
          e[p - 2] = f;
          iter = iter + 1;
          break;
        }
        case 4: {
          if (s[k] <= 0) {
            s[k] = s[k] < 0 ? -s[k] : 0;
            if (wantv) {
              for (let i = 0; i <= pp; i++) {
                V.set(i, k, -V.get(i, k));
              }
            }
          }
          while (k < pp) {
            if (s[k] >= s[k + 1]) {
              break;
            }
            let t = s[k];
            s[k] = s[k + 1];
            s[k + 1] = t;
            if (wantv && k < n - 1) {
              for (let i = 0; i < n; i++) {
                t = V.get(i, k + 1);
                V.set(i, k + 1, V.get(i, k));
                V.set(i, k, t);
              }
            }
            if (wantu && k < m - 1) {
              for (let i = 0; i < m; i++) {
                t = U.get(i, k + 1);
                U.set(i, k + 1, U.get(i, k));
                U.set(i, k, t);
              }
            }
            k++;
          }
          iter = 0;
          p--;
          break;
        }
        // no default
      }
    }

    if (swapped) {
      let tmp = V;
      V = U;
      U = tmp;
    }

    this.m = m;
    this.n = n;
    this.s = s;
    this.U = U;
    this.V = V;
  }

  solve(value) {
    let Y = value;
    let e = this.threshold;
    let scols = this.s.length;
    let Ls = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(scols, scols);

    for (let i = 0; i < scols; i++) {
      if (Math.abs(this.s[i]) <= e) {
        Ls.set(i, i, 0);
      } else {
        Ls.set(i, i, 1 / this.s[i]);
      }
    }

    let U = this.U;
    let V = this.rightSingularVectors;

    let VL = V.mmul(Ls);
    let vrows = V.rows;
    let urows = U.rows;
    let VLU = _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].zeros(vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < scols; k++) {
          sum += VL.get(i, k) * U.get(j, k);
        }
        VLU.set(i, j, sum);
      }
    }

    return VLU.mmul(Y);
  }

  solveForDiagonal(value) {
    return this.solve(_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(value));
  }

  inverse() {
    let V = this.V;
    let e = this.threshold;
    let vrows = V.rows;
    let vcols = V.columns;
    let X = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, this.s.length);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < vcols; j++) {
        if (Math.abs(this.s[j]) > e) {
          X.set(i, j, V.get(i, j) / this.s[j]);
        }
      }
    }

    let U = this.U;

    let urows = U.rows;
    let ucols = U.columns;
    let Y = new _matrix__WEBPACK_IMPORTED_MODULE_0__["default"](vrows, urows);

    for (let i = 0; i < vrows; i++) {
      for (let j = 0; j < urows; j++) {
        let sum = 0;
        for (let k = 0; k < ucols; k++) {
          sum += X.get(i, k) * U.get(j, k);
        }
        Y.set(i, j, sum);
      }
    }

    return Y;
  }

  get condition() {
    return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
  }

  get norm2() {
    return this.s[0];
  }

  get rank() {
    let tol = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
    let r = 0;
    let s = this.s;
    for (let i = 0, ii = s.length; i < ii; i++) {
      if (s[i] > tol) {
        r++;
      }
    }
    return r;
  }

  get diagonal() {
    return Array.from(this.s);
  }

  get threshold() {
    return (Number.EPSILON / 2) * Math.max(this.m, this.n) * this.s[0];
  }

  get leftSingularVectors() {
    return this.U;
  }

  get rightSingularVectors() {
    return this.V;
  }

  get diagonalMatrix() {
    return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"].diag(this.s);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/dc/util.js":
/*!************************************************!*\
  !*** ../node_modules/ml-matrix/src/dc/util.js ***!
  \************************************************/
/*! exports provided: hypotenuse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hypotenuse", function() { return hypotenuse; });
function hypotenuse(a, b) {
  let r = 0;
  if (Math.abs(a) > Math.abs(b)) {
    r = b / a;
    return Math.abs(a) * Math.sqrt(1 + r * r);
  }
  if (b !== 0) {
    r = a / b;
    return Math.abs(b) * Math.sqrt(1 + r * r);
  }
  return 0;
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/decompositions.js":
/*!*******************************************************!*\
  !*** ../node_modules/ml-matrix/src/decompositions.js ***!
  \*******************************************************/
/*! exports provided: inverse, solve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return solve; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "../node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _dc_qr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dc/qr */ "../node_modules/ml-matrix/src/dc/qr.js");
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dc/svd */ "../node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");






function inverse(matrix, useSVD = false) {
  matrix = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(matrix);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](matrix).inverse();
  } else {
    return solve(matrix, _matrix__WEBPACK_IMPORTED_MODULE_3__["default"].eye(matrix.rows));
  }
}

function solve(leftHandSide, rightHandSide, useSVD = false) {
  leftHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(leftHandSide);
  rightHandSide = _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"].checkMatrix(rightHandSide);
  if (useSVD) {
    return new _dc_svd__WEBPACK_IMPORTED_MODULE_2__["default"](leftHandSide).solve(rightHandSide);
  } else {
    return leftHandSide.isSquare()
      ? new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](leftHandSide).solve(rightHandSide)
      : new _dc_qr__WEBPACK_IMPORTED_MODULE_1__["default"](leftHandSide).solve(rightHandSide);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/determinant.js":
/*!****************************************************!*\
  !*** ../node_modules/ml-matrix/src/determinant.js ***!
  \****************************************************/
/*! exports provided: determinant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return determinant; });
/* harmony import */ var _dc_lu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/lu */ "../node_modules/ml-matrix/src/dc/lu.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony import */ var _views_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/selection */ "../node_modules/ml-matrix/src/views/selection.js");




function determinant(matrix) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  if (matrix.isSquare()) {
    if (matrix.columns === 0) {
      return 1;
    }

    let a, b, c, d;
    if (matrix.columns === 2) {
      // 2 x 2 matrix
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(1, 0);
      d = matrix.get(1, 1);

      return a * d - b * c;
    } else if (matrix.columns === 3) {
      // 3 x 3 matrix
      let subMatrix0, subMatrix1, subMatrix2;
      subMatrix0 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [1, 2]);
      subMatrix1 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 2]);
      subMatrix2 = new _views_selection__WEBPACK_IMPORTED_MODULE_2__["default"](matrix, [1, 2], [0, 1]);
      a = matrix.get(0, 0);
      b = matrix.get(0, 1);
      c = matrix.get(0, 2);

      return (
        a * determinant(subMatrix0) -
        b * determinant(subMatrix1) +
        c * determinant(subMatrix2)
      );
    } else {
      // general purpose determinant using the LU decomposition
      return new _dc_lu__WEBPACK_IMPORTED_MODULE_0__["default"](matrix).determinant;
    }
  } else {
    throw Error('determinant can only be calculated for a square matrix');
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/index.js":
/*!**********************************************!*\
  !*** ../node_modules/ml-matrix/src/index.js ***!
  \**********************************************/
/*! exports provided: AbstractMatrix, default, Matrix, MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView, wrap, WrapperMatrix1D, WrapperMatrix2D, solve, inverse, determinant, linearDependencies, pseudoInverse, covariance, correlation, SingularValueDecomposition, SVD, EigenvalueDecomposition, EVD, CholeskyDecomposition, CHO, LuDecomposition, LU, QrDecomposition, QR, Nipals, NIPALS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _views_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/index */ "../node_modules/ml-matrix/src/views/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixColumnSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipColumnView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixFlipRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixRowSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSelectionView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixSubView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _views_index__WEBPACK_IMPORTED_MODULE_1__["MatrixTransposeView"]; });

/* harmony import */ var _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap/wrap */ "../node_modules/ml-matrix/src/wrap/wrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _wrap_wrap__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony import */ var _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wrap/WrapperMatrix1D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix1D", function() { return _wrap_WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wrap/WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WrapperMatrix2D", function() { return _wrap_WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _decompositions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decompositions */ "../node_modules/ml-matrix/src/decompositions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "solve", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["solve"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inverse", function() { return _decompositions__WEBPACK_IMPORTED_MODULE_5__["inverse"]; });

/* harmony import */ var _determinant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./determinant */ "../node_modules/ml-matrix/src/determinant.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "determinant", function() { return _determinant__WEBPACK_IMPORTED_MODULE_6__["determinant"]; });

/* harmony import */ var _linearDependencies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linearDependencies */ "../node_modules/ml-matrix/src/linearDependencies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return _linearDependencies__WEBPACK_IMPORTED_MODULE_7__["linearDependencies"]; });

/* harmony import */ var _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pseudoInverse */ "../node_modules/ml-matrix/src/pseudoInverse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return _pseudoInverse__WEBPACK_IMPORTED_MODULE_8__["pseudoInverse"]; });

/* harmony import */ var _covariance__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./covariance */ "../node_modules/ml-matrix/src/covariance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "covariance", function() { return _covariance__WEBPACK_IMPORTED_MODULE_9__["covariance"]; });

/* harmony import */ var _correlation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./correlation */ "../node_modules/ml-matrix/src/correlation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "correlation", function() { return _correlation__WEBPACK_IMPORTED_MODULE_10__["correlation"]; });

/* harmony import */ var _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dc/svd.js */ "../node_modules/ml-matrix/src/dc/svd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingularValueDecomposition", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVD", function() { return _dc_svd_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dc/evd.js */ "../node_modules/ml-matrix/src/dc/evd.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EigenvalueDecomposition", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EVD", function() { return _dc_evd_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dc/cholesky.js */ "../node_modules/ml-matrix/src/dc/cholesky.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CholeskyDecomposition", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CHO", function() { return _dc_cholesky_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dc/lu.js */ "../node_modules/ml-matrix/src/dc/lu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LuDecomposition", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LU", function() { return _dc_lu_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dc/qr.js */ "../node_modules/ml-matrix/src/dc/qr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QrDecomposition", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QR", function() { return _dc_qr_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dc/nipals.js */ "../node_modules/ml-matrix/src/dc/nipals.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Nipals", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIPALS", function() { return _dc_nipals_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });























/***/ }),

/***/ "../node_modules/ml-matrix/src/inspect.js":
/*!************************************************!*\
  !*** ../node_modules/ml-matrix/src/inspect.js ***!
  \************************************************/
/*! exports provided: inspectMatrix, inspectMatrixWithOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrix", function() { return inspectMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inspectMatrixWithOptions", function() { return inspectMatrixWithOptions; });
const indent = ' '.repeat(2);
const indentData = ' '.repeat(4);

function inspectMatrix() {
  return inspectMatrixWithOptions(this);
}

function inspectMatrixWithOptions(matrix, options = {}) {
  const { maxRows = 15, maxColumns = 10, maxNumSize = 8 } = options;
  return `${matrix.constructor.name} {
${indent}[
${indentData}${inspectData(matrix, maxRows, maxColumns, maxNumSize)}
${indent}]
${indent}rows: ${matrix.rows}
${indent}columns: ${matrix.columns}
}`;
}

function inspectData(matrix, maxRows, maxColumns, maxNumSize) {
  const { rows, columns } = matrix;
  const maxI = Math.min(rows, maxRows);
  const maxJ = Math.min(columns, maxColumns);
  const result = [];
  for (let i = 0; i < maxI; i++) {
    let line = [];
    for (let j = 0; j < maxJ; j++) {
      line.push(formatNumber(matrix.get(i, j), maxNumSize));
    }
    result.push(`${line.join(' ')}`);
  }
  if (maxJ !== columns) {
    result[result.length - 1] += ` ... ${columns - maxColumns} more columns`;
  }
  if (maxI !== rows) {
    result.push(`... ${rows - maxRows} more rows`);
  }
  return result.join(`\n${indentData}`);
}

function formatNumber(num, maxNumSize) {
  const numStr = String(num);
  if (numStr.length <= maxNumSize) {
    return numStr.padEnd(maxNumSize, ' ');
  }
  const precise = num.toPrecision(maxNumSize - 2);
  if (precise.length <= maxNumSize) {
    return precise;
  }
  const exponential = num.toExponential(maxNumSize - 2);
  const eIndex = exponential.indexOf('e');
  const e = exponential.slice(eIndex);
  return exponential.slice(0, maxNumSize - e.length) + e;
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/linearDependencies.js":
/*!***********************************************************!*\
  !*** ../node_modules/ml-matrix/src/linearDependencies.js ***!
  \***********************************************************/
/*! exports provided: linearDependencies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearDependencies", function() { return linearDependencies; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "../node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");



function xrange(n, exception) {
  let range = [];
  for (let i = 0; i < n; i++) {
    if (i !== exception) {
      range.push(i);
    }
  }
  return range;
}

function dependenciesOneRow(
  error,
  matrix,
  index,
  thresholdValue = 10e-10,
  thresholdError = 10e-10,
) {
  if (error > thresholdError) {
    return new Array(matrix.rows + 1).fill(0);
  } else {
    let returnArray = matrix.addRow(index, [0]);
    for (let i = 0; i < returnArray.rows; i++) {
      if (Math.abs(returnArray.get(i, 0)) < thresholdValue) {
        returnArray.set(i, 0, 0);
      }
    }
    return returnArray.to1DArray();
  }
}

function linearDependencies(matrix, options = {}) {
  const { thresholdValue = 10e-10, thresholdError = 10e-10 } = options;
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);

  let n = matrix.rows;
  let results = new _matrix__WEBPACK_IMPORTED_MODULE_1__["default"](n, n);

  for (let i = 0; i < n; i++) {
    let b = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].columnVector(matrix.getRow(i));
    let Abis = matrix.subMatrixRow(xrange(n, i)).transpose();
    let svd = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](Abis);
    let x = svd.solve(b);
    let error = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].sub(b, Abis.mmul(x)).abs().max();
    results.setRow(
      i,
      dependenciesOneRow(error, x, i, thresholdValue, thresholdError),
    );
  }
  return results;
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/mathOperations.js":
/*!*******************************************************!*\
  !*** ../node_modules/ml-matrix/src/mathOperations.js ***!
  \*******************************************************/
/*! exports provided: installMathOperations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "installMathOperations", function() { return installMathOperations; });
function installMathOperations(AbstractMatrix, Matrix) {
  AbstractMatrix.prototype.add = function add(value) {
    if (typeof value === 'number') return this.addS(value);
    return this.addM(value);
  };

  AbstractMatrix.prototype.addS = function addS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.addM = function addM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.add = function add(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.add(value);
  };

  AbstractMatrix.prototype.sub = function sub(value) {
    if (typeof value === 'number') return this.subS(value);
    return this.subM(value);
  };

  AbstractMatrix.prototype.subS = function subS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.subM = function subM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.sub = function sub(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sub(value);
  };
  AbstractMatrix.prototype.subtract = AbstractMatrix.prototype.sub;
  AbstractMatrix.prototype.subtractS = AbstractMatrix.prototype.subS;
  AbstractMatrix.prototype.subtractM = AbstractMatrix.prototype.subM;
  AbstractMatrix.subtract = AbstractMatrix.sub;

  AbstractMatrix.prototype.mul = function mul(value) {
    if (typeof value === 'number') return this.mulS(value);
    return this.mulM(value);
  };

  AbstractMatrix.prototype.mulS = function mulS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.mulM = function mulM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mul = function mul(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mul(value);
  };
  AbstractMatrix.prototype.multiply = AbstractMatrix.prototype.mul;
  AbstractMatrix.prototype.multiplyS = AbstractMatrix.prototype.mulS;
  AbstractMatrix.prototype.multiplyM = AbstractMatrix.prototype.mulM;
  AbstractMatrix.multiply = AbstractMatrix.mul;

  AbstractMatrix.prototype.div = function div(value) {
    if (typeof value === 'number') return this.divS(value);
    return this.divM(value);
  };

  AbstractMatrix.prototype.divS = function divS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.divM = function divM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.div = function div(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.div(value);
  };
  AbstractMatrix.prototype.divide = AbstractMatrix.prototype.div;
  AbstractMatrix.prototype.divideS = AbstractMatrix.prototype.divS;
  AbstractMatrix.prototype.divideM = AbstractMatrix.prototype.divM;
  AbstractMatrix.divide = AbstractMatrix.div;

  AbstractMatrix.prototype.mod = function mod(value) {
    if (typeof value === 'number') return this.modS(value);
    return this.modM(value);
  };

  AbstractMatrix.prototype.modS = function modS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.modM = function modM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) % matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.mod = function mod(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.mod(value);
  };
  AbstractMatrix.prototype.modulus = AbstractMatrix.prototype.mod;
  AbstractMatrix.prototype.modulusS = AbstractMatrix.prototype.modS;
  AbstractMatrix.prototype.modulusM = AbstractMatrix.prototype.modM;
  AbstractMatrix.modulus = AbstractMatrix.mod;

  AbstractMatrix.prototype.and = function and(value) {
    if (typeof value === 'number') return this.andS(value);
    return this.andM(value);
  };

  AbstractMatrix.prototype.andS = function andS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.andM = function andM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) & matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.and = function and(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.and(value);
  };

  AbstractMatrix.prototype.or = function or(value) {
    if (typeof value === 'number') return this.orS(value);
    return this.orM(value);
  };

  AbstractMatrix.prototype.orS = function orS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.orM = function orM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) | matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.or = function or(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.or(value);
  };

  AbstractMatrix.prototype.xor = function xor(value) {
    if (typeof value === 'number') return this.xorS(value);
    return this.xorM(value);
  };

  AbstractMatrix.prototype.xorS = function xorS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.xorM = function xorM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) ^ matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.xor = function xor(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.xor(value);
  };

  AbstractMatrix.prototype.leftShift = function leftShift(value) {
    if (typeof value === 'number') return this.leftShiftS(value);
    return this.leftShiftM(value);
  };

  AbstractMatrix.prototype.leftShiftS = function leftShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.leftShiftM = function leftShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) << matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.leftShift = function leftShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.leftShift(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShift = function signPropagatingRightShift(value) {
    if (typeof value === 'number') return this.signPropagatingRightShiftS(value);
    return this.signPropagatingRightShiftM(value);
  };

  AbstractMatrix.prototype.signPropagatingRightShiftS = function signPropagatingRightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.signPropagatingRightShiftM = function signPropagatingRightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.signPropagatingRightShift = function signPropagatingRightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.signPropagatingRightShift(value);
  };

  AbstractMatrix.prototype.rightShift = function rightShift(value) {
    if (typeof value === 'number') return this.rightShiftS(value);
    return this.rightShiftM(value);
  };

  AbstractMatrix.prototype.rightShiftS = function rightShiftS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> value);
      }
    }
    return this;
  };

  AbstractMatrix.prototype.rightShiftM = function rightShiftM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) >>> matrix.get(i, j));
      }
    }
    return this;
  };

  AbstractMatrix.rightShift = function rightShift(matrix, value) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.rightShift(value);
  };
  AbstractMatrix.prototype.zeroFillRightShift = AbstractMatrix.prototype.rightShift;
  AbstractMatrix.prototype.zeroFillRightShiftS = AbstractMatrix.prototype.rightShiftS;
  AbstractMatrix.prototype.zeroFillRightShiftM = AbstractMatrix.prototype.rightShiftM;
  AbstractMatrix.zeroFillRightShift = AbstractMatrix.rightShift;

  AbstractMatrix.prototype.not = function not() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, ~(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.not = function not(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.not();
  };

  AbstractMatrix.prototype.abs = function abs() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.abs(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.abs = function abs(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.abs();
  };

  AbstractMatrix.prototype.acos = function acos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acos = function acos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acos();
  };

  AbstractMatrix.prototype.acosh = function acosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.acosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.acosh = function acosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.acosh();
  };

  AbstractMatrix.prototype.asin = function asin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asin = function asin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asin();
  };

  AbstractMatrix.prototype.asinh = function asinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.asinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.asinh = function asinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.asinh();
  };

  AbstractMatrix.prototype.atan = function atan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atan = function atan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atan();
  };

  AbstractMatrix.prototype.atanh = function atanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.atanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.atanh = function atanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.atanh();
  };

  AbstractMatrix.prototype.cbrt = function cbrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cbrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cbrt = function cbrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cbrt();
  };

  AbstractMatrix.prototype.ceil = function ceil() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.ceil(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.ceil = function ceil(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.ceil();
  };

  AbstractMatrix.prototype.clz32 = function clz32() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.clz32(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.clz32 = function clz32(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.clz32();
  };

  AbstractMatrix.prototype.cos = function cos() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cos(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cos = function cos(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cos();
  };

  AbstractMatrix.prototype.cosh = function cosh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.cosh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.cosh = function cosh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.cosh();
  };

  AbstractMatrix.prototype.exp = function exp() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.exp(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.exp = function exp(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.exp();
  };

  AbstractMatrix.prototype.expm1 = function expm1() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.expm1(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.expm1 = function expm1(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.expm1();
  };

  AbstractMatrix.prototype.floor = function floor() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.floor(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.floor = function floor(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.floor();
  };

  AbstractMatrix.prototype.fround = function fround() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.fround(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.fround = function fround(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.fround();
  };

  AbstractMatrix.prototype.log = function log() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log = function log(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log();
  };

  AbstractMatrix.prototype.log1p = function log1p() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log1p(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log1p = function log1p(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log1p();
  };

  AbstractMatrix.prototype.log10 = function log10() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log10(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log10 = function log10(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log10();
  };

  AbstractMatrix.prototype.log2 = function log2() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.log2(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.log2 = function log2(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.log2();
  };

  AbstractMatrix.prototype.round = function round() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.round(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.round = function round(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.round();
  };

  AbstractMatrix.prototype.sign = function sign() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sign(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sign = function sign(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sign();
  };

  AbstractMatrix.prototype.sin = function sin() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sin(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sin = function sin(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sin();
  };

  AbstractMatrix.prototype.sinh = function sinh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sinh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sinh = function sinh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sinh();
  };

  AbstractMatrix.prototype.sqrt = function sqrt() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.sqrt(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.sqrt = function sqrt(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.sqrt();
  };

  AbstractMatrix.prototype.tan = function tan() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tan(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tan = function tan(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tan();
  };

  AbstractMatrix.prototype.tanh = function tanh() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.tanh(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.tanh = function tanh(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.tanh();
  };

  AbstractMatrix.prototype.trunc = function trunc() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.trunc(this.get(i, j)));
      }
    }
    return this;
  };

  AbstractMatrix.trunc = function trunc(matrix) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.trunc();
  };

  AbstractMatrix.pow = function pow(matrix, arg0) {
    const newMatrix = new Matrix(matrix);
    return newMatrix.pow(arg0);
  };

  AbstractMatrix.prototype.pow = function pow(value) {
    if (typeof value === 'number') return this.powS(value);
    return this.powM(value);
  };

  AbstractMatrix.prototype.powS = function powS(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), value));
      }
    }
    return this;
  };

  AbstractMatrix.prototype.powM = function powM(matrix) {
    matrix = Matrix.checkMatrix(matrix);
    if (this.rows !== matrix.rows ||
      this.columns !== matrix.columns) {
      throw new RangeError('Matrices dimensions must be equal');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, Math.pow(this.get(i, j), matrix.get(i, j)));
      }
    }
    return this;
  };
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/matrix.js":
/*!***********************************************!*\
  !*** ../node_modules/ml-matrix/src/matrix.js ***!
  \***********************************************/
/*! exports provided: AbstractMatrix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractMatrix", function() { return AbstractMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Matrix; });
/* harmony import */ var ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-array-rescale */ "../node_modules/ml-array-rescale/lib-es6/index.js");
/* harmony import */ var _inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inspect */ "../node_modules/ml-matrix/src/inspect.js");
/* harmony import */ var _mathOperations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathOperations */ "../node_modules/ml-matrix/src/mathOperations.js");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat */ "../node_modules/ml-matrix/src/stat.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "../node_modules/ml-matrix/src/util.js");







class AbstractMatrix {
  static from1DArray(newRows, newColumns, newData) {
    let length = newRows * newColumns;
    if (length !== newData.length) {
      throw new RangeError('data length does not match given dimensions');
    }
    let newMatrix = new Matrix(newRows, newColumns);
    for (let row = 0; row < newRows; row++) {
      for (let column = 0; column < newColumns; column++) {
        newMatrix.set(row, column, newData[row * newColumns + column]);
      }
    }
    return newMatrix;
  }

  static rowVector(newData) {
    let vector = new Matrix(1, newData.length);
    for (let i = 0; i < newData.length; i++) {
      vector.set(0, i, newData[i]);
    }
    return vector;
  }

  static columnVector(newData) {
    let vector = new Matrix(newData.length, 1);
    for (let i = 0; i < newData.length; i++) {
      vector.set(i, 0, newData[i]);
    }
    return vector;
  }

  static zeros(rows, columns) {
    return new Matrix(rows, columns);
  }

  static ones(rows, columns) {
    return new Matrix(rows, columns).fill(1);
  }

  static rand(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { random = Math.random } = options;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.set(i, j, random());
      }
    }
    return matrix;
  }

  static randInt(rows, columns, options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1000, random = Math.random } = options;
    if (!Number.isInteger(min)) throw new TypeError('min must be an integer');
    if (!Number.isInteger(max)) throw new TypeError('max must be an integer');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let interval = max - min;
    let matrix = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        let value = min + Math.round(random() * interval);
        matrix.set(i, j, value);
      }
    }
    return matrix;
  }

  static eye(rows, columns, value) {
    if (columns === undefined) columns = rows;
    if (value === undefined) value = 1;
    let min = Math.min(rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, value);
    }
    return matrix;
  }

  static diag(data, rows, columns) {
    let l = data.length;
    if (rows === undefined) rows = l;
    if (columns === undefined) columns = rows;
    let min = Math.min(l, rows, columns);
    let matrix = this.zeros(rows, columns);
    for (let i = 0; i < min; i++) {
      matrix.set(i, i, data[i]);
    }
    return matrix;
  }

  static min(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new Matrix(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.min(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static max(matrix1, matrix2) {
    matrix1 = this.checkMatrix(matrix1);
    matrix2 = this.checkMatrix(matrix2);
    let rows = matrix1.rows;
    let columns = matrix1.columns;
    let result = new this(rows, columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        result.set(i, j, Math.max(matrix1.get(i, j), matrix2.get(i, j)));
      }
    }
    return result;
  }

  static checkMatrix(value) {
    return AbstractMatrix.isMatrix(value) ? value : new Matrix(value);
  }

  static isMatrix(value) {
    return value != null && value.klass === 'Matrix';
  }

  get size() {
    return this.rows * this.columns;
  }

  apply(callback) {
    if (typeof callback !== 'function') {
      throw new TypeError('callback must be a function');
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        callback.call(this, i, j);
      }
    }
    return this;
  }

  to1DArray() {
    let array = [];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        array.push(this.get(i, j));
      }
    }
    return array;
  }

  to2DArray() {
    let copy = [];
    for (let i = 0; i < this.rows; i++) {
      copy.push([]);
      for (let j = 0; j < this.columns; j++) {
        copy[i].push(this.get(i, j));
      }
    }
    return copy;
  }

  toJSON() {
    return this.to2DArray();
  }

  isRowVector() {
    return this.rows === 1;
  }

  isColumnVector() {
    return this.columns === 1;
  }

  isVector() {
    return this.rows === 1 || this.columns === 1;
  }

  isSquare() {
    return this.rows === this.columns;
  }

  isEmpty() {
    return this.rows === 0 || this.columns === 0;
  }

  isSymmetric() {
    if (this.isSquare()) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j <= i; j++) {
          if (this.get(i, j) !== this.get(j, i)) {
            return false;
          }
        }
      }
      return true;
    }
    return false;
  }

  isEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isEchelonForm = true;
    let checked = false;
    while (i < this.rows && isEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isEchelonForm = false;
          checked = true;
        }
      }
      i++;
    }
    return isEchelonForm;
  }

  isReducedEchelonForm() {
    let i = 0;
    let j = 0;
    let previousColumn = -1;
    let isReducedEchelonForm = true;
    let checked = false;
    while (i < this.rows && isReducedEchelonForm) {
      j = 0;
      checked = false;
      while (j < this.columns && checked === false) {
        if (this.get(i, j) === 0) {
          j++;
        } else if (this.get(i, j) === 1 && j > previousColumn) {
          checked = true;
          previousColumn = j;
        } else {
          isReducedEchelonForm = false;
          checked = true;
        }
      }
      for (let k = j + 1; k < this.rows; k++) {
        if (this.get(i, k) !== 0) {
          isReducedEchelonForm = false;
        }
      }
      i++;
    }
    return isReducedEchelonForm;
  }

  echelonForm() {
    let result = this.clone();
    let h = 0;
    let k = 0;
    while (h < result.rows && k < result.columns) {
      let iMax = h;
      for (let i = h; i < result.rows; i++) {
        if (result.get(i, k) > result.get(iMax, k)) {
          iMax = i;
        }
      }
      if (result.get(iMax, k) === 0) {
        k++;
      } else {
        result.swapRows(h, iMax);
        let tmp = result.get(h, k);
        for (let j = k; j < result.columns; j++) {
          result.set(h, j, result.get(h, j) / tmp);
        }
        for (let i = h + 1; i < result.rows; i++) {
          let factor = result.get(i, k) / result.get(h, k);
          result.set(i, k, 0);
          for (let j = k + 1; j < result.columns; j++) {
            result.set(i, j, result.get(i, j) - result.get(h, j) * factor);
          }
        }
        h++;
        k++;
      }
    }
    return result;
  }

  reducedEchelonForm() {
    let result = this.echelonForm();
    let m = result.columns;
    let n = result.rows;
    let h = n - 1;
    while (h >= 0) {
      if (result.maxRow(h) === 0) {
        h--;
      } else {
        let p = 0;
        let pivot = false;
        while (p < n && pivot === false) {
          if (result.get(h, p) === 1) {
            pivot = true;
          } else {
            p++;
          }
        }
        for (let i = 0; i < h; i++) {
          let factor = result.get(i, p);
          for (let j = p; j < m; j++) {
            let tmp = result.get(i, j) - factor * result.get(h, j);
            result.set(i, j, tmp);
          }
        }
        h--;
      }
    }
    return result;
  }

  set() {
    throw new Error('set method is unimplemented');
  }

  get() {
    throw new Error('get method is unimplemented');
  }

  repeat(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { rows = 1, columns = 1 } = options;
    if (!Number.isInteger(rows) || rows <= 0) {
      throw new TypeError('rows must be a positive integer');
    }
    if (!Number.isInteger(columns) || columns <= 0) {
      throw new TypeError('columns must be a positive integer');
    }
    let matrix = new Matrix(this.rows * rows, this.columns * columns);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        matrix.setSubMatrix(this, this.rows * i, this.columns * j);
      }
    }
    return matrix;
  }

  fill(value) {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, value);
      }
    }
    return this;
  }

  neg() {
    return this.mulS(-1);
  }

  getRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    let row = [];
    for (let i = 0; i < this.columns; i++) {
      row.push(this.get(index, i));
    }
    return row;
  }

  getRowVector(index) {
    return Matrix.rowVector(this.getRow(index));
  }

  setRow(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, array[i]);
    }
    return this;
  }

  swapRows(row1, row2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row2);
    for (let i = 0; i < this.columns; i++) {
      let temp = this.get(row1, i);
      this.set(row1, i, this.get(row2, i));
      this.set(row2, i, temp);
    }
    return this;
  }

  getColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    let column = [];
    for (let i = 0; i < this.rows; i++) {
      column.push(this.get(i, index));
    }
    return column;
  }

  getColumnVector(index) {
    return Matrix.columnVector(this.getColumn(index));
  }

  setColumn(index, array) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, array[i]);
    }
    return this;
  }

  swapColumns(column1, column2) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column1);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column2);
    for (let i = 0; i < this.rows; i++) {
      let temp = this.get(i, column1);
      this.set(i, column1, this.get(i, column2));
      this.set(i, column2, temp);
    }
    return this;
  }

  addRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[j]);
      }
    }
    return this;
  }

  subRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[j]);
      }
    }
    return this;
  }

  mulRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[j]);
      }
    }
    return this;
  }

  divRowVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[j]);
      }
    }
    return this;
  }

  addColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) + vector[i]);
      }
    }
    return this;
  }

  subColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) - vector[i]);
      }
    }
    return this;
  }

  mulColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) * vector[i]);
      }
    }
    return this;
  }

  divColumnVector(vector) {
    vector = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, vector);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.set(i, j, this.get(i, j) / vector[i]);
      }
    }
    return this;
  }

  mulRow(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    for (let i = 0; i < this.columns; i++) {
      this.set(index, i, this.get(index, i) * value);
    }
    return this;
  }

  mulColumn(index, value) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    for (let i = 0; i < this.rows; i++) {
      this.set(i, index, this.get(i, index) * value);
    }
    return this;
  }

  max() {
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  maxIndex() {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) > v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  min() {
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(0, 0);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
        }
      }
    }
    return v;
  }

  minIndex() {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(0, 0);
    let idx = [0, 0];
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (this.get(i, j) < v) {
          v = this.get(i, j);
          idx[0] = i;
          idx[1] = j;
        }
      }
    }
    return idx;
  }

  maxRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  maxRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) > v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  minRow(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(row, 0);
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
      }
    }
    return v;
  }

  minRowIndex(row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, row);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(row, 0);
    let idx = [row, 0];
    for (let i = 1; i < this.columns; i++) {
      if (this.get(row, i) < v) {
        v = this.get(row, i);
        idx[1] = i;
      }
    }
    return idx;
  }

  maxColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  maxColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) > v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  minColumn(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    if (this.isEmpty()) {
      return NaN;
    }
    let v = this.get(0, column);
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
      }
    }
    return v;
  }

  minColumnIndex(column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, column);
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkNonEmpty"])(this);
    let v = this.get(0, column);
    let idx = [0, column];
    for (let i = 1; i < this.rows; i++) {
      if (this.get(i, column) < v) {
        v = this.get(i, column);
        idx[0] = i;
      }
    }
    return idx;
  }

  diag() {
    let min = Math.min(this.rows, this.columns);
    let diag = [];
    for (let i = 0; i < min; i++) {
      diag.push(this.get(i, i));
    }
    return diag;
  }

  norm(type = 'frobenius') {
    let result = 0;
    if (type === 'max') {
      return this.max();
    } else if (type === 'frobenius') {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          result = result + this.get(i, j) * this.get(i, j);
        }
      }
      return Math.sqrt(result);
    } else {
      throw new RangeError(`unknown norm type: ${type}`);
    }
  }

  cumulativeSum() {
    let sum = 0;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        sum += this.get(i, j);
        this.set(i, j, sum);
      }
    }
    return this;
  }

  dot(vector2) {
    if (AbstractMatrix.isMatrix(vector2)) vector2 = vector2.to1DArray();
    let vector1 = this.to1DArray();
    if (vector1.length !== vector2.length) {
      throw new RangeError('vectors do not have the same size');
    }
    let dot = 0;
    for (let i = 0; i < vector1.length; i++) {
      dot += vector1[i] * vector2[i];
    }
    return dot;
  }

  mmul(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.columns;

    let result = new Matrix(m, p);

    let Bcolj = new Float64Array(n);
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        Bcolj[k] = other.get(k, j);
      }

      for (let i = 0; i < m; i++) {
        let s = 0;
        for (let k = 0; k < n; k++) {
          s += this.get(i, k) * Bcolj[k];
        }

        result.set(i, j, s);
      }
    }
    return result;
  }

  strassen2x2(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(2, 2);
    const a11 = this.get(0, 0);
    const b11 = other.get(0, 0);
    const a12 = this.get(0, 1);
    const b12 = other.get(0, 1);
    const a21 = this.get(1, 0);
    const b21 = other.get(1, 0);
    const a22 = this.get(1, 1);
    const b22 = other.get(1, 1);

    // Compute intermediate values.
    const m1 = (a11 + a22) * (b11 + b22);
    const m2 = (a21 + a22) * b11;
    const m3 = a11 * (b12 - b22);
    const m4 = a22 * (b21 - b11);
    const m5 = (a11 + a12) * b22;
    const m6 = (a21 - a11) * (b11 + b12);
    const m7 = (a12 - a22) * (b21 + b22);

    // Combine intermediate values into the output.
    const c00 = m1 + m4 - m5 + m7;
    const c01 = m3 + m5;
    const c10 = m2 + m4;
    const c11 = m1 - m2 + m3 + m6;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    return result;
  }

  strassen3x3(other) {
    other = Matrix.checkMatrix(other);
    let result = new Matrix(3, 3);

    const a00 = this.get(0, 0);
    const a01 = this.get(0, 1);
    const a02 = this.get(0, 2);
    const a10 = this.get(1, 0);
    const a11 = this.get(1, 1);
    const a12 = this.get(1, 2);
    const a20 = this.get(2, 0);
    const a21 = this.get(2, 1);
    const a22 = this.get(2, 2);

    const b00 = other.get(0, 0);
    const b01 = other.get(0, 1);
    const b02 = other.get(0, 2);
    const b10 = other.get(1, 0);
    const b11 = other.get(1, 1);
    const b12 = other.get(1, 2);
    const b20 = other.get(2, 0);
    const b21 = other.get(2, 1);
    const b22 = other.get(2, 2);

    const m1 = (a00 + a01 + a02 - a10 - a11 - a21 - a22) * b11;
    const m2 = (a00 - a10) * (-b01 + b11);
    const m3 = a11 * (-b00 + b01 + b10 - b11 - b12 - b20 + b22);
    const m4 = (-a00 + a10 + a11) * (b00 - b01 + b11);
    const m5 = (a10 + a11) * (-b00 + b01);
    const m6 = a00 * b00;
    const m7 = (-a00 + a20 + a21) * (b00 - b02 + b12);
    const m8 = (-a00 + a20) * (b02 - b12);
    const m9 = (a20 + a21) * (-b00 + b02);
    const m10 = (a00 + a01 + a02 - a11 - a12 - a20 - a21) * b12;
    const m11 = a21 * (-b00 + b02 + b10 - b11 - b12 - b20 + b21);
    const m12 = (-a02 + a21 + a22) * (b11 + b20 - b21);
    const m13 = (a02 - a22) * (b11 - b21);
    const m14 = a02 * b20;
    const m15 = (a21 + a22) * (-b20 + b21);
    const m16 = (-a02 + a11 + a12) * (b12 + b20 - b22);
    const m17 = (a02 - a12) * (b12 - b22);
    const m18 = (a11 + a12) * (-b20 + b22);
    const m19 = a01 * b10;
    const m20 = a12 * b21;
    const m21 = a10 * b02;
    const m22 = a20 * b01;
    const m23 = a22 * b22;

    const c00 = m6 + m14 + m19;
    const c01 = m1 + m4 + m5 + m6 + m12 + m14 + m15;
    const c02 = m6 + m7 + m9 + m10 + m14 + m16 + m18;
    const c10 = m2 + m3 + m4 + m6 + m14 + m16 + m17;
    const c11 = m2 + m4 + m5 + m6 + m20;
    const c12 = m14 + m16 + m17 + m18 + m21;
    const c20 = m6 + m7 + m8 + m11 + m12 + m13 + m14;
    const c21 = m12 + m13 + m14 + m15 + m22;
    const c22 = m6 + m7 + m8 + m9 + m23;

    result.set(0, 0, c00);
    result.set(0, 1, c01);
    result.set(0, 2, c02);
    result.set(1, 0, c10);
    result.set(1, 1, c11);
    result.set(1, 2, c12);
    result.set(2, 0, c20);
    result.set(2, 1, c21);
    result.set(2, 2, c22);
    return result;
  }

  mmulStrassen(y) {
    y = Matrix.checkMatrix(y);
    let x = this.clone();
    let r1 = x.rows;
    let c1 = x.columns;
    let r2 = y.rows;
    let c2 = y.columns;
    if (c1 !== r2) {
      // eslint-disable-next-line no-console
      console.warn(
        `Multiplying ${r1} x ${c1} and ${r2} x ${c2} matrix: dimensions do not match.`,
      );
    }

    // Put a matrix into the top left of a matrix of zeros.
    // `rows` and `cols` are the dimensions of the output matrix.
    function embed(mat, rows, cols) {
      let r = mat.rows;
      let c = mat.columns;
      if (r === rows && c === cols) {
        return mat;
      } else {
        let resultat = AbstractMatrix.zeros(rows, cols);
        resultat = resultat.setSubMatrix(mat, 0, 0);
        return resultat;
      }
    }

    // Make sure both matrices are the same size.
    // This is exclusively for simplicity:
    // this algorithm can be implemented with matrices of different sizes.

    let r = Math.max(r1, r2);
    let c = Math.max(c1, c2);
    x = embed(x, r, c);
    y = embed(y, r, c);

    // Our recursive multiplication function.
    function blockMult(a, b, rows, cols) {
      // For small matrices, resort to naive multiplication.
      if (rows <= 512 || cols <= 512) {
        return a.mmul(b); // a is equivalent to this
      }

      // Apply dynamic padding.
      if (rows % 2 === 1 && cols % 2 === 1) {
        a = embed(a, rows + 1, cols + 1);
        b = embed(b, rows + 1, cols + 1);
      } else if (rows % 2 === 1) {
        a = embed(a, rows + 1, cols);
        b = embed(b, rows + 1, cols);
      } else if (cols % 2 === 1) {
        a = embed(a, rows, cols + 1);
        b = embed(b, rows, cols + 1);
      }

      let halfRows = parseInt(a.rows / 2, 10);
      let halfCols = parseInt(a.columns / 2, 10);
      // Subdivide input matrices.
      let a11 = a.subMatrix(0, halfRows - 1, 0, halfCols - 1);
      let b11 = b.subMatrix(0, halfRows - 1, 0, halfCols - 1);

      let a12 = a.subMatrix(0, halfRows - 1, halfCols, a.columns - 1);
      let b12 = b.subMatrix(0, halfRows - 1, halfCols, b.columns - 1);

      let a21 = a.subMatrix(halfRows, a.rows - 1, 0, halfCols - 1);
      let b21 = b.subMatrix(halfRows, b.rows - 1, 0, halfCols - 1);

      let a22 = a.subMatrix(halfRows, a.rows - 1, halfCols, a.columns - 1);
      let b22 = b.subMatrix(halfRows, b.rows - 1, halfCols, b.columns - 1);

      // Compute intermediate values.
      let m1 = blockMult(
        AbstractMatrix.add(a11, a22),
        AbstractMatrix.add(b11, b22),
        halfRows,
        halfCols,
      );
      let m2 = blockMult(AbstractMatrix.add(a21, a22), b11, halfRows, halfCols);
      let m3 = blockMult(a11, AbstractMatrix.sub(b12, b22), halfRows, halfCols);
      let m4 = blockMult(a22, AbstractMatrix.sub(b21, b11), halfRows, halfCols);
      let m5 = blockMult(AbstractMatrix.add(a11, a12), b22, halfRows, halfCols);
      let m6 = blockMult(
        AbstractMatrix.sub(a21, a11),
        AbstractMatrix.add(b11, b12),
        halfRows,
        halfCols,
      );
      let m7 = blockMult(
        AbstractMatrix.sub(a12, a22),
        AbstractMatrix.add(b21, b22),
        halfRows,
        halfCols,
      );

      // Combine intermediate values into the output.
      let c11 = AbstractMatrix.add(m1, m4);
      c11.sub(m5);
      c11.add(m7);
      let c12 = AbstractMatrix.add(m3, m5);
      let c21 = AbstractMatrix.add(m2, m4);
      let c22 = AbstractMatrix.sub(m1, m2);
      c22.add(m3);
      c22.add(m6);

      // Crop output to the desired size (undo dynamic padding).
      let resultat = AbstractMatrix.zeros(2 * c11.rows, 2 * c11.columns);
      resultat = resultat.setSubMatrix(c11, 0, 0);
      resultat = resultat.setSubMatrix(c12, c11.rows, 0);
      resultat = resultat.setSubMatrix(c21, 0, c11.columns);
      resultat = resultat.setSubMatrix(c22, c11.rows, c11.columns);
      return resultat.subMatrix(0, rows - 1, 0, cols - 1);
    }

    return blockMult(x, y, r, c);
  }

  scaleRows(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.rows; i++) {
      const row = this.getRow(i);
      if (row.length > 0) {
        Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(row, { min, max, output: row });
      }
      newMatrix.setRow(i, row);
    }
    return newMatrix;
  }

  scaleColumns(options = {}) {
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { min = 0, max = 1 } = options;
    if (!Number.isFinite(min)) throw new TypeError('min must be a number');
    if (!Number.isFinite(max)) throw new TypeError('max must be a number');
    if (min >= max) throw new RangeError('min must be smaller than max');
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let i = 0; i < this.columns; i++) {
      const column = this.getColumn(i);
      if (column.length) {
        Object(ml_array_rescale__WEBPACK_IMPORTED_MODULE_0__["default"])(column, {
          min: min,
          max: max,
          output: column,
        });
      }
      newMatrix.setColumn(i, column);
    }
    return newMatrix;
  }

  flipRows() {
    const middle = Math.ceil(this.columns / 2);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < middle; j++) {
        let first = this.get(i, j);
        let last = this.get(i, this.columns - 1 - j);
        this.set(i, j, last);
        this.set(i, this.columns - 1 - j, first);
      }
    }
    return this;
  }

  flipColumns() {
    const middle = Math.ceil(this.rows / 2);
    for (let j = 0; j < this.columns; j++) {
      for (let i = 0; i < middle; i++) {
        let first = this.get(i, j);
        let last = this.get(this.rows - 1 - i, j);
        this.set(i, j, last);
        this.set(this.rows - 1 - i, j, first);
      }
    }
    return this;
  }

  kroneckerProduct(other) {
    other = Matrix.checkMatrix(other);

    let m = this.rows;
    let n = this.columns;
    let p = other.rows;
    let q = other.columns;

    let result = new Matrix(m * p, n * q);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        for (let k = 0; k < p; k++) {
          for (let l = 0; l < q; l++) {
            result.set(p * i + k, q * j + l, this.get(i, j) * other.get(k, l));
          }
        }
      }
    }
    return result;
  }

  kroneckerSum(other) {
    other = Matrix.checkMatrix(other);
    if (!this.isSquare() || !other.isSquare()) {
      throw new Error('Kronecker Sum needs two Square Matrices');
    }
    let m = this.rows;
    let n = other.rows;
    let AxI = this.kroneckerProduct(Matrix.eye(n, n));
    let IxB = Matrix.eye(m, m).kroneckerProduct(other);
    return AxI.add(IxB);
  }

  transpose() {
    let result = new Matrix(this.columns, this.rows);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        result.set(j, i, this.get(i, j));
      }
    }
    return result;
  }

  sortRows(compareFunction = compareNumbers) {
    for (let i = 0; i < this.rows; i++) {
      this.setRow(i, this.getRow(i).sort(compareFunction));
    }
    return this;
  }

  sortColumns(compareFunction = compareNumbers) {
    for (let i = 0; i < this.columns; i++) {
      this.setColumn(i, this.getColumn(i).sort(compareFunction));
    }
    return this;
  }

  subMatrix(startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    let newMatrix = new Matrix(
      endRow - startRow + 1,
      endColumn - startColumn + 1,
    );
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        newMatrix.set(i - startRow, j - startColumn, this.get(i, j));
      }
    }
    return newMatrix;
  }

  subMatrixRow(indices, startColumn, endColumn) {
    if (startColumn === undefined) startColumn = 0;
    if (endColumn === undefined) endColumn = this.columns - 1;
    if (
      startColumn > endColumn ||
      startColumn < 0 ||
      startColumn >= this.columns ||
      endColumn < 0 ||
      endColumn >= this.columns
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(indices.length, endColumn - startColumn + 1);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startColumn; j <= endColumn; j++) {
        if (indices[i] < 0 || indices[i] >= this.rows) {
          throw new RangeError(`Row index out of range: ${indices[i]}`);
        }
        newMatrix.set(i, j - startColumn, this.get(indices[i], j));
      }
    }
    return newMatrix;
  }

  subMatrixColumn(indices, startRow, endRow) {
    if (startRow === undefined) startRow = 0;
    if (endRow === undefined) endRow = this.rows - 1;
    if (
      startRow > endRow ||
      startRow < 0 ||
      startRow >= this.rows ||
      endRow < 0 ||
      endRow >= this.rows
    ) {
      throw new RangeError('Argument out of range');
    }

    let newMatrix = new Matrix(endRow - startRow + 1, indices.length);
    for (let i = 0; i < indices.length; i++) {
      for (let j = startRow; j <= endRow; j++) {
        if (indices[i] < 0 || indices[i] >= this.columns) {
          throw new RangeError(`Column index out of range: ${indices[i]}`);
        }
        newMatrix.set(j - startRow, i, this.get(j, indices[i]));
      }
    }
    return newMatrix;
  }

  setSubMatrix(matrix, startRow, startColumn) {
    matrix = Matrix.checkMatrix(matrix);
    if (matrix.isEmpty()) {
      return this;
    }
    let endRow = startRow + matrix.rows - 1;
    let endColumn = startColumn + matrix.columns - 1;
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRange"])(this, startRow, endRow, startColumn, endColumn);
    for (let i = 0; i < matrix.rows; i++) {
      for (let j = 0; j < matrix.columns; j++) {
        this.set(startRow + i, startColumn + j, matrix.get(i, j));
      }
    }
    return this;
  }

  selection(rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkIndices"])(this, rowIndices, columnIndices);
    let newMatrix = new Matrix(rowIndices.length, columnIndices.length);
    for (let i = 0; i < indices.row.length; i++) {
      let rowIndex = indices.row[i];
      for (let j = 0; j < indices.column.length; j++) {
        let columnIndex = indices.column[j];
        newMatrix.set(i, j, this.get(rowIndex, columnIndex));
      }
    }
    return newMatrix;
  }

  trace() {
    let min = Math.min(this.rows, this.columns);
    let trace = 0;
    for (let i = 0; i < min; i++) {
      trace += this.get(i, i);
    }
    return trace;
  }

  clone() {
    let newMatrix = new Matrix(this.rows, this.columns);
    for (let row = 0; row < this.rows; row++) {
      for (let column = 0; column < this.columns; column++) {
        newMatrix.set(row, column, this.get(row, column));
      }
    }
    return newMatrix;
  }

  sum(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["sumAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  product(by) {
    switch (by) {
      case 'row':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByRow"])(this);
      case 'column':
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productByColumn"])(this);
      case undefined:
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["productAll"])(this);
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  mean(by) {
    const sum = this.sum(by);
    switch (by) {
      case 'row': {
        for (let i = 0; i < this.rows; i++) {
          sum[i] /= this.columns;
        }
        return sum;
      }
      case 'column': {
        for (let i = 0; i < this.columns; i++) {
          sum[i] /= this.rows;
        }
        return sum;
      }
      case undefined:
        return sum / this.size;
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  variance(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { unbiased = true, mean = this.mean(by) } = options;
    if (typeof unbiased !== 'boolean') {
      throw new TypeError('unbiased must be a boolean');
    }
    switch (by) {
      case 'row': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByRow"])(this, unbiased, mean);
      }
      case 'column': {
        if (!Array.isArray(mean)) {
          throw new TypeError('mean must be an array');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceByColumn"])(this, unbiased, mean);
      }
      case undefined: {
        if (typeof mean !== 'number') {
          throw new TypeError('mean must be a number');
        }
        return Object(_stat__WEBPACK_IMPORTED_MODULE_3__["varianceAll"])(this, unbiased, mean);
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  standardDeviation(by, options) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    const variance = this.variance(by, options);
    if (by === undefined) {
      return Math.sqrt(variance);
    } else {
      for (let i = 0; i < variance.length; i++) {
        variance[i] = Math.sqrt(variance[i]);
      }
      return variance;
    }
  }

  center(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    const { center = this.mean(by) } = options;
    switch (by) {
      case 'row': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByRow"])(this, center);
        return this;
      }
      case 'column': {
        if (!Array.isArray(center)) {
          throw new TypeError('center must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerByColumn"])(this, center);
        return this;
      }
      case undefined: {
        if (typeof center !== 'number') {
          throw new TypeError('center must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["centerAll"])(this, center);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  scale(by, options = {}) {
    if (typeof by === 'object') {
      options = by;
      by = undefined;
    }
    if (typeof options !== 'object') {
      throw new TypeError('options must be an object');
    }
    let scale = options.scale;
    switch (by) {
      case 'row': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByRow"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByRow"])(this, scale);
        return this;
      }
      case 'column': {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleByColumn"])(this);
        } else if (!Array.isArray(scale)) {
          throw new TypeError('scale must be an array');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleByColumn"])(this, scale);
        return this;
      }
      case undefined: {
        if (scale === undefined) {
          scale = Object(_stat__WEBPACK_IMPORTED_MODULE_3__["getScaleAll"])(this);
        } else if (typeof scale !== 'number') {
          throw new TypeError('scale must be a number');
        }
        Object(_stat__WEBPACK_IMPORTED_MODULE_3__["scaleAll"])(this, scale);
        return this;
      }
      default:
        throw new Error(`invalid option: ${by}`);
    }
  }

  toString(options) {
    return Object(_inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrixWithOptions"])(this, options);
  }
}

AbstractMatrix.prototype.klass = 'Matrix';
if (typeof Symbol !== 'undefined') {
  AbstractMatrix.prototype[Symbol.for('nodejs.util.inspect.custom')] =
    _inspect__WEBPACK_IMPORTED_MODULE_1__["inspectMatrix"];
}

function compareNumbers(a, b) {
  return a - b;
}

// Synonyms
AbstractMatrix.random = AbstractMatrix.rand;
AbstractMatrix.randomInt = AbstractMatrix.randInt;
AbstractMatrix.diagonal = AbstractMatrix.diag;
AbstractMatrix.prototype.diagonal = AbstractMatrix.prototype.diag;
AbstractMatrix.identity = AbstractMatrix.eye;
AbstractMatrix.prototype.negate = AbstractMatrix.prototype.neg;
AbstractMatrix.prototype.tensorProduct =
  AbstractMatrix.prototype.kroneckerProduct;

class Matrix extends AbstractMatrix {
  constructor(nRows, nColumns) {
    super();
    if (Matrix.isMatrix(nRows)) {
      // eslint-disable-next-line no-constructor-return
      return nRows.clone();
    } else if (Number.isInteger(nRows) && nRows >= 0) {
      // Create an empty matrix
      this.data = [];
      if (Number.isInteger(nColumns) && nColumns >= 0) {
        for (let i = 0; i < nRows; i++) {
          this.data.push(new Float64Array(nColumns));
        }
      } else {
        throw new TypeError('nColumns must be a positive integer');
      }
    } else if (Array.isArray(nRows)) {
      // Copy the values from the 2D array
      const arrayData = nRows;
      nRows = arrayData.length;
      nColumns = nRows ? arrayData[0].length : 0;
      if (typeof nColumns !== 'number') {
        throw new TypeError(
          'Data must be a 2D array with at least one element',
        );
      }
      this.data = [];
      for (let i = 0; i < nRows; i++) {
        if (arrayData[i].length !== nColumns) {
          throw new RangeError('Inconsistent array dimensions');
        }
        this.data.push(Float64Array.from(arrayData[i]));
      }
    } else {
      throw new TypeError(
        'First argument must be a positive number or an array',
      );
    }
    this.rows = nRows;
    this.columns = nColumns;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }

  removeRow(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index);
    this.data.splice(index, 1);
    this.rows -= 1;
    return this;
  }

  addRow(index, array) {
    if (array === undefined) {
      array = index;
      index = this.rows;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowIndex"])(this, index, true);
    array = Float64Array.from(Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkRowVector"])(this, array));
    this.data.splice(index, 0, array);
    this.rows += 1;
    return this;
  }

  removeColumn(index) {
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index);
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns - 1);
      for (let j = 0; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      for (let j = index + 1; j < this.columns; j++) {
        newRow[j - 1] = this.data[i][j];
      }
      this.data[i] = newRow;
    }
    this.columns -= 1;
    return this;
  }

  addColumn(index, array) {
    if (typeof array === 'undefined') {
      array = index;
      index = this.columns;
    }
    Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnIndex"])(this, index, true);
    array = Object(_util__WEBPACK_IMPORTED_MODULE_4__["checkColumnVector"])(this, array);
    for (let i = 0; i < this.rows; i++) {
      const newRow = new Float64Array(this.columns + 1);
      let j = 0;
      for (; j < index; j++) {
        newRow[j] = this.data[i][j];
      }
      newRow[j++] = array[i];
      for (; j < this.columns + 1; j++) {
        newRow[j] = this.data[i][j - 1];
      }
      this.data[i] = newRow;
    }
    this.columns += 1;
    return this;
  }
}

Object(_mathOperations__WEBPACK_IMPORTED_MODULE_2__["installMathOperations"])(AbstractMatrix, Matrix);


/***/ }),

/***/ "../node_modules/ml-matrix/src/pseudoInverse.js":
/*!******************************************************!*\
  !*** ../node_modules/ml-matrix/src/pseudoInverse.js ***!
  \******************************************************/
/*! exports provided: pseudoInverse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pseudoInverse", function() { return pseudoInverse; });
/* harmony import */ var _dc_svd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dc/svd */ "../node_modules/ml-matrix/src/dc/svd.js");
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./matrix */ "../node_modules/ml-matrix/src/matrix.js");



function pseudoInverse(matrix, threshold = Number.EPSILON) {
  matrix = _matrix__WEBPACK_IMPORTED_MODULE_1__["default"].checkMatrix(matrix);
  if (matrix.isEmpty()) {
    // with a zero dimension, the pseudo-inverse is the transpose, since all 0xn and nx0 matrices are singular
    // (0xn)*(nx0)*(0xn) = 0xn
    // (nx0)*(0xn)*(nx0) = nx0
    return matrix.transpose();
  }
  let svdSolution = new _dc_svd__WEBPACK_IMPORTED_MODULE_0__["default"](matrix, { autoTranspose: true });

  let U = svdSolution.leftSingularVectors;
  let V = svdSolution.rightSingularVectors;
  let s = svdSolution.diagonal;

  for (let i = 0; i < s.length; i++) {
    if (Math.abs(s[i]) > threshold) {
      s[i] = 1.0 / s[i];
    } else {
      s[i] = 0.0;
    }
  }

  return V.mmul(_matrix__WEBPACK_IMPORTED_MODULE_1__["default"].diag(s).mmul(U.transpose()));
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/stat.js":
/*!*********************************************!*\
  !*** ../node_modules/ml-matrix/src/stat.js ***!
  \*********************************************/
/*! exports provided: sumByRow, sumByColumn, sumAll, productByRow, productByColumn, productAll, varianceByRow, varianceByColumn, varianceAll, centerByRow, centerByColumn, centerAll, getScaleByRow, scaleByRow, getScaleByColumn, scaleByColumn, getScaleAll, scaleAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByRow", function() { return sumByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumByColumn", function() { return sumByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sumAll", function() { return sumAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByRow", function() { return productByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByColumn", function() { return productByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productAll", function() { return productAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByRow", function() { return varianceByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceByColumn", function() { return varianceByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "varianceAll", function() { return varianceAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByRow", function() { return centerByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerByColumn", function() { return centerByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerAll", function() { return centerAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByRow", function() { return getScaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByRow", function() { return scaleByRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleByColumn", function() { return getScaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleByColumn", function() { return scaleByColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getScaleAll", function() { return getScaleAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleAll", function() { return scaleAll; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "../node_modules/ml-matrix/src/util.js");


function sumByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] += matrix.get(i, j);
    }
  }
  return sum;
}

function sumAll(matrix) {
  let v = 0;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v += matrix.get(i, j);
    }
  }
  return v;
}

function productByRow(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.rows, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[i] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productByColumn(matrix) {
  let sum = Object(_util__WEBPACK_IMPORTED_MODULE_0__["newArray"])(matrix.columns, 1);
  for (let i = 0; i < matrix.rows; ++i) {
    for (let j = 0; j < matrix.columns; ++j) {
      sum[j] *= matrix.get(i, j);
    }
  }
  return sum;
}

function productAll(matrix) {
  let v = 1;
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      v *= matrix.get(i, j);
    }
  }
  return v;
}

function varianceByRow(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let i = 0; i < rows; i++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean[i];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / cols) / (cols - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / cols) / cols);
    }
  }
  return variance;
}

function varianceByColumn(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const variance = [];

  for (let j = 0; j < cols; j++) {
    let sum1 = 0;
    let sum2 = 0;
    let x = 0;
    for (let i = 0; i < rows; i++) {
      x = matrix.get(i, j) - mean[j];
      sum1 += x;
      sum2 += x * x;
    }
    if (unbiased) {
      variance.push((sum2 - (sum1 * sum1) / rows) / (rows - 1));
    } else {
      variance.push((sum2 - (sum1 * sum1) / rows) / rows);
    }
  }
  return variance;
}

function varianceAll(matrix, unbiased, mean) {
  const rows = matrix.rows;
  const cols = matrix.columns;
  const size = rows * cols;

  let sum1 = 0;
  let sum2 = 0;
  let x = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      x = matrix.get(i, j) - mean;
      sum1 += x;
      sum2 += x * x;
    }
  }
  if (unbiased) {
    return (sum2 - (sum1 * sum1) / size) / (size - 1);
  } else {
    return (sum2 - (sum1 * sum1) / size) / size;
  }
}

function centerByRow(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[i]);
    }
  }
}

function centerByColumn(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean[j]);
    }
  }
}

function centerAll(matrix, mean) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) - mean);
    }
  }
}

function getScaleByRow(matrix) {
  const scale = [];
  for (let i = 0; i < matrix.rows; i++) {
    let sum = 0;
    for (let j = 0; j < matrix.columns; j++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.columns - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByRow(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[i]);
    }
  }
}

function getScaleByColumn(matrix) {
  const scale = [];
  for (let j = 0; j < matrix.columns; j++) {
    let sum = 0;
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / (matrix.rows - 1);
    }
    scale.push(Math.sqrt(sum));
  }
  return scale;
}

function scaleByColumn(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale[j]);
    }
  }
}

function getScaleAll(matrix) {
  const divider = matrix.size - 1;
  let sum = 0;
  for (let j = 0; j < matrix.columns; j++) {
    for (let i = 0; i < matrix.rows; i++) {
      sum += Math.pow(matrix.get(i, j), 2) / divider;
    }
  }
  return Math.sqrt(sum);
}

function scaleAll(matrix, scale) {
  for (let i = 0; i < matrix.rows; i++) {
    for (let j = 0; j < matrix.columns; j++) {
      matrix.set(i, j, matrix.get(i, j) / scale);
    }
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/util.js":
/*!*********************************************!*\
  !*** ../node_modules/ml-matrix/src/util.js ***!
  \*********************************************/
/*! exports provided: checkRowIndex, checkColumnIndex, checkRowVector, checkColumnVector, checkIndices, checkRowIndices, checkColumnIndices, checkRange, newArray, checkNonEmpty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndex", function() { return checkRowIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndex", function() { return checkColumnIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowVector", function() { return checkRowVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnVector", function() { return checkColumnVector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIndices", function() { return checkIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRowIndices", function() { return checkRowIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkColumnIndices", function() { return checkColumnIndices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRange", function() { return checkRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newArray", function() { return newArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkNonEmpty", function() { return checkNonEmpty; });
/**
 * @private
 * Check that a row index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkRowIndex(matrix, index, outer) {
  let max = outer ? matrix.rows : matrix.rows - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Row index out of range');
  }
}

/**
 * @private
 * Check that a column index is not out of bounds
 * @param {Matrix} matrix
 * @param {number} index
 * @param {boolean} [outer]
 */
function checkColumnIndex(matrix, index, outer) {
  let max = outer ? matrix.columns : matrix.columns - 1;
  if (index < 0 || index > max) {
    throw new RangeError('Column index out of range');
  }
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkRowVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.columns) {
    throw new RangeError(
      'vector size must be the same as the number of columns',
    );
  }
  return vector;
}

/**
 * @private
 * Check that the provided vector is an array with the right length
 * @param {Matrix} matrix
 * @param {Array|Matrix} vector
 * @return {Array}
 * @throws {RangeError}
 */
function checkColumnVector(matrix, vector) {
  if (vector.to1DArray) {
    vector = vector.to1DArray();
  }
  if (vector.length !== matrix.rows) {
    throw new RangeError('vector size must be the same as the number of rows');
  }
  return vector;
}

function checkIndices(matrix, rowIndices, columnIndices) {
  return {
    row: checkRowIndices(matrix, rowIndices),
    column: checkColumnIndices(matrix, columnIndices),
  };
}

function checkRowIndices(matrix, rowIndices) {
  if (typeof rowIndices !== 'object') {
    throw new TypeError('unexpected type for row indices');
  }

  let rowOut = rowIndices.some((r) => {
    return r < 0 || r >= matrix.rows;
  });

  if (rowOut) {
    throw new RangeError('row indices are out of range');
  }

  if (!Array.isArray(rowIndices)) rowIndices = Array.from(rowIndices);

  return rowIndices;
}

function checkColumnIndices(matrix, columnIndices) {
  if (typeof columnIndices !== 'object') {
    throw new TypeError('unexpected type for column indices');
  }

  let columnOut = columnIndices.some((c) => {
    return c < 0 || c >= matrix.columns;
  });

  if (columnOut) {
    throw new RangeError('column indices are out of range');
  }
  if (!Array.isArray(columnIndices)) columnIndices = Array.from(columnIndices);

  return columnIndices;
}

function checkRange(matrix, startRow, endRow, startColumn, endColumn) {
  if (arguments.length !== 5) {
    throw new RangeError('expected 4 arguments');
  }
  checkNumber('startRow', startRow);
  checkNumber('endRow', endRow);
  checkNumber('startColumn', startColumn);
  checkNumber('endColumn', endColumn);
  if (
    startRow > endRow ||
    startColumn > endColumn ||
    startRow < 0 ||
    startRow >= matrix.rows ||
    endRow < 0 ||
    endRow >= matrix.rows ||
    startColumn < 0 ||
    startColumn >= matrix.columns ||
    endColumn < 0 ||
    endColumn >= matrix.columns
  ) {
    throw new RangeError('Submatrix indices are out of range');
  }
}

function newArray(length, value = 0) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array.push(value);
  }
  return array;
}

function checkNumber(name, value) {
  if (typeof value !== 'number') {
    throw new TypeError(`${name} must be a number`);
  }
}

function checkNonEmpty(matrix) {
  if (matrix.isEmpty()) {
    throw new Error('Empty matrix has no elements to index');
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/base.js":
/*!***************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/base.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseView; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");


class BaseView extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(matrix, rows, columns) {
    super();
    this.matrix = matrix;
    this.rows = rows;
    this.columns = columns;
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/column.js":
/*!*****************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/column.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixColumnView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, column) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndex"])(matrix, column);
    super(matrix, matrix.rows, 1);
    this.column = column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.column, value);
    return this;
  }

  get(rowIndex) {
    return this.matrix.get(rowIndex, this.column);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/columnSelection.js":
/*!**************************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/columnSelection.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixColumnSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixColumnSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, columnIndices) {
    columnIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkColumnIndices"])(matrix, columnIndices);
    super(matrix, matrix.rows, columnIndices.length);
    this.columnIndices = columnIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columnIndices[columnIndex], value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columnIndices[columnIndex]);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/flipColumn.js":
/*!*********************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/flipColumn.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipColumnView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");


class MatrixFlipColumnView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(rowIndex, this.columns - columnIndex - 1, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(rowIndex, this.columns - columnIndex - 1);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/flipRow.js":
/*!******************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/flipRow.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixFlipRowView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");


class MatrixFlipRowView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.rows, matrix.columns);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rows - rowIndex - 1, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rows - rowIndex - 1, columnIndex);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/index.js":
/*!****************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/index.js ***!
  \****************************************************/
/*! exports provided: MatrixColumnView, MatrixColumnSelectionView, MatrixFlipColumnView, MatrixFlipRowView, MatrixRowView, MatrixRowSelectionView, MatrixSelectionView, MatrixSubView, MatrixTransposeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./column */ "../node_modules/ml-matrix/src/views/column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnView", function() { return _column__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _columnSelection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./columnSelection */ "../node_modules/ml-matrix/src/views/columnSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixColumnSelectionView", function() { return _columnSelection__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _flipColumn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flipColumn */ "../node_modules/ml-matrix/src/views/flipColumn.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipColumnView", function() { return _flipColumn__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _flipRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flipRow */ "../node_modules/ml-matrix/src/views/flipRow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixFlipRowView", function() { return _flipRow__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./row */ "../node_modules/ml-matrix/src/views/row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowView", function() { return _row__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _rowSelection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rowSelection */ "../node_modules/ml-matrix/src/views/rowSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixRowSelectionView", function() { return _rowSelection__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _selection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection */ "../node_modules/ml-matrix/src/views/selection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSelectionView", function() { return _selection__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub */ "../node_modules/ml-matrix/src/views/sub.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixSubView", function() { return _sub__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _transpose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transpose */ "../node_modules/ml-matrix/src/views/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatrixTransposeView", function() { return _transpose__WEBPACK_IMPORTED_MODULE_8__["default"]; });












/***/ }),

/***/ "../node_modules/ml-matrix/src/views/row.js":
/*!**************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/row.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixRowView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, row) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndex"])(matrix, row);
    super(matrix, 1, matrix.columns);
    this.row = row;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.row, columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.row, columnIndex);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/rowSelection.js":
/*!***********************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/rowSelection.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixRowSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixRowSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices) {
    rowIndices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRowIndices"])(matrix, rowIndices);
    super(matrix, rowIndices.length, matrix.columns);
    this.rowIndices = rowIndices;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(this.rowIndices[rowIndex], columnIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(this.rowIndices[rowIndex], columnIndex);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/selection.js":
/*!********************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/selection.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSelectionView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixSelectionView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, rowIndices, columnIndices) {
    let indices = Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkIndices"])(matrix, rowIndices, columnIndices);
    super(matrix, indices.row.length, indices.column.length);
    this.rowIndices = indices.row;
    this.columnIndices = indices.column;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.rowIndices[rowIndex],
      this.columnIndices[columnIndex],
    );
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/sub.js":
/*!**************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/sub.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixSubView; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "../node_modules/ml-matrix/src/util.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");




class MatrixSubView extends _base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(matrix, startRow, endRow, startColumn, endColumn) {
    Object(_util__WEBPACK_IMPORTED_MODULE_0__["checkRange"])(matrix, startRow, endRow, startColumn, endColumn);
    super(matrix, endRow - startRow + 1, endColumn - startColumn + 1);
    this.startRow = startRow;
    this.startColumn = startColumn;
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
      value,
    );
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(
      this.startRow + rowIndex,
      this.startColumn + columnIndex,
    );
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/views/transpose.js":
/*!********************************************************!*\
  !*** ../node_modules/ml-matrix/src/views/transpose.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MatrixTransposeView; });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ "../node_modules/ml-matrix/src/views/base.js");


class MatrixTransposeView extends _base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(matrix) {
    super(matrix, matrix.columns, matrix.rows);
  }

  set(rowIndex, columnIndex, value) {
    this.matrix.set(columnIndex, rowIndex, value);
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.matrix.get(columnIndex, rowIndex);
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js":
/*!*************************************************************!*\
  !*** ../node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix1D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix1D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data, options = {}) {
    const { rows = 1 } = options;

    if (data.length % rows !== 0) {
      throw new Error('the data length is not divisible by the number of rows');
    }
    super();
    this.rows = rows;
    this.columns = data.length / rows;
    this.data = data;
  }

  set(rowIndex, columnIndex, value) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    this.data[index] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    let index = this._calculateIndex(rowIndex, columnIndex);
    return this.data[index];
  }

  _calculateIndex(row, column) {
    return row * this.columns + column;
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js":
/*!*************************************************************!*\
  !*** ../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WrapperMatrix2D; });
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../matrix */ "../node_modules/ml-matrix/src/matrix.js");


class WrapperMatrix2D extends _matrix__WEBPACK_IMPORTED_MODULE_0__["AbstractMatrix"] {
  constructor(data) {
    super();
    this.data = data;
    this.rows = data.length;
    this.columns = data[0].length;
  }

  set(rowIndex, columnIndex, value) {
    this.data[rowIndex][columnIndex] = value;
    return this;
  }

  get(rowIndex, columnIndex) {
    return this.data[rowIndex][columnIndex];
  }
}


/***/ }),

/***/ "../node_modules/ml-matrix/src/wrap/wrap.js":
/*!**************************************************!*\
  !*** ../node_modules/ml-matrix/src/wrap/wrap.js ***!
  \**************************************************/
/*! exports provided: wrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony import */ var _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WrapperMatrix1D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix1D.js");
/* harmony import */ var _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WrapperMatrix2D */ "../node_modules/ml-matrix/src/wrap/WrapperMatrix2D.js");



function wrap(array, options) {
  if (Array.isArray(array)) {
    if (array[0] && Array.isArray(array[0])) {
      return new _WrapperMatrix2D__WEBPACK_IMPORTED_MODULE_1__["default"](array);
    } else {
      return new _WrapperMatrix1D__WEBPACK_IMPORTED_MODULE_0__["default"](array, options);
    }
  } else {
    throw new Error('the argument is not an array');
  }
}


/***/ }),

/***/ "../node_modules/ml-regression-base/src/checkArrayLength.js":
/*!******************************************************************!*\
  !*** ../node_modules/ml-regression-base/src/checkArrayLength.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkArraySize; });
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");


function checkArraySize(x, y) {
  if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(x) || !Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(y)) {
    throw new TypeError('x and y must be arrays');
  }
  if (x.length !== y.length) {
    throw new RangeError('x and y arrays must have the same length');
  }
}


/***/ }),

/***/ "../node_modules/ml-regression-base/src/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/ml-regression-base/src/index.js ***!
  \*******************************************************/
/*! exports provided: maybeToPrecision, checkArrayLength, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseRegression; });
/* harmony import */ var is_any_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-any-array */ "../node_modules/is-any-array/src/index.js");
/* harmony import */ var _maybeToPrecision__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybeToPrecision */ "../node_modules/ml-regression-base/src/maybeToPrecision.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeToPrecision", function() { return _maybeToPrecision__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _checkArrayLength__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkArrayLength */ "../node_modules/ml-regression-base/src/checkArrayLength.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkArrayLength", function() { return _checkArrayLength__WEBPACK_IMPORTED_MODULE_2__["default"]; });






class BaseRegression {
  constructor() {
    if (new.target === BaseRegression) {
      throw new Error('BaseRegression must be subclassed');
    }
  }

  predict(x) {
    if (typeof x === 'number') {
      return this._predict(x);
    } else if (Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(x)) {
      const y = [];
      for (let i = 0; i < x.length; i++) {
        y.push(this._predict(x[i]));
      }
      return y;
    } else {
      throw new TypeError('x must be a number or array');
    }
  }

  _predict() {
    throw new Error('_predict must be implemented');
  }

  train() {
    // Do nothing for this package
  }

  toString() {
    return '';
  }

  toLaTeX() {
    return '';
  }

  /**
   * Return the correlation coefficient of determination (r) and chi-square.
   * @param {Array<number>} x
   * @param {Array<number>} y
   * @return {object}
   */
  score(x, y) {
    if (!Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(x) || !Object(is_any_array__WEBPACK_IMPORTED_MODULE_0__["default"])(y) || x.length !== y.length) {
      throw new Error('x and y must be arrays of the same length');
    }

    const n = x.length;
    const y2 = new Array(n);
    for (let i = 0; i < n; i++) {
      y2[i] = this._predict(x[i]);
    }

    let xSum = 0;
    let ySum = 0;
    let chi2 = 0;
    let rmsd = 0;
    let xSquared = 0;
    let ySquared = 0;
    let xY = 0;
    for (let i = 0; i < n; i++) {
      xSum += y2[i];
      ySum += y[i];
      xSquared += y2[i] * y2[i];
      ySquared += y[i] * y[i];
      xY += y2[i] * y[i];
      if (y[i] !== 0) {
        chi2 += ((y[i] - y2[i]) * (y[i] - y2[i])) / y[i];
      }
      rmsd += (y[i] - y2[i]) * (y[i] - y2[i]);
    }

    const r =
      (n * xY - xSum * ySum) /
      Math.sqrt((n * xSquared - xSum * xSum) * (n * ySquared - ySum * ySum));

    return {
      r: r,
      r2: r * r,
      chi2: chi2,
      rmsd: Math.sqrt(rmsd / n),
    };
  }
}


/***/ }),

/***/ "../node_modules/ml-regression-base/src/maybeToPrecision.js":
/*!******************************************************************!*\
  !*** ../node_modules/ml-regression-base/src/maybeToPrecision.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maybeToPrecision; });
function maybeToPrecision(value, digits) {
  if (value < 0) {
    value = 0 - value;
    if (typeof digits === 'number') {
      return `- ${value.toPrecision(digits)}`;
    } else {
      return `- ${value.toString()}`;
    }
  } else {
    if (typeof digits === 'number') {
      return value.toPrecision(digits);
    } else {
      return value.toString();
    }
  }
}


/***/ }),

/***/ "../node_modules/ml-regression-exponential/src/index.js":
/*!**************************************************************!*\
  !*** ../node_modules/ml-regression-exponential/src/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExponentialRegression; });
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");
/* harmony import */ var ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-simple-linear */ "../node_modules/ml-regression-simple-linear/src/index.js");



class ExponentialRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y) {
    super();
    if (x === true) {
      this.A = y.A;
      this.B = y.B;
    } else {
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["checkArrayLength"])(x, y);
      regress(this, x, y);
    }
  }

  _predict(input) {
    return this.B * Math.exp(input * this.A);
  }

  toJSON() {
    return {
      name: 'exponentialRegression',
      A: this.A,
      B: this.B,
    };
  }

  toString(precision) {
    return `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
      this.B,
      precision,
    )} * e^(${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.A, precision)} * x)`;
  }

  toLaTeX(precision) {
    if (this.A >= 0) {
      return `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
        this.B,
        precision,
      )}e^{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.A, precision)}x}`;
    } else {
      return `f(x) = \\frac{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
        this.B,
        precision,
      )}}{e^{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(-this.A, precision)}x}}`;
    }
  }

  static load(json) {
    if (json.name !== 'exponentialRegression') {
      throw new TypeError('not a exponential regression model');
    }
    return new ExponentialRegression(true, json);
  }
}

function regress(er, x, y) {
  const n = x.length;
  const yl = new Array(n);
  for (let i = 0; i < n; i++) {
    yl[i] = Math.log(y[i]);
  }

  const linear = new ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__["default"](x, yl);
  er.A = linear.slope;
  er.B = Math.exp(linear.intercept);
}


/***/ }),

/***/ "../node_modules/ml-regression-multivariate-linear/src/index.js":
/*!**********************************************************************!*\
  !*** ../node_modules/ml-regression-multivariate-linear/src/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultivariateLinearRegression; });
/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");


class MultivariateLinearRegression {
  constructor(x, y, options = {}) {
    const { intercept = true, statistics = true } = options;
    this.statistics = statistics;
    if (x === true) {
      this.weights = y.weights;
      this.inputs = y.inputs;
      this.outputs = y.outputs;
      this.intercept = y.intercept;
    } else {
      x = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["default"](x);
      y = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["default"](y);
      if (intercept) {
        x.addColumn(new Array(x.rows).fill(1));
      }
      let xt = x.transpose();
      const xx = xt.mmul(x);
      const xy = xt.mmul(y);
      const invxx = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["SVD"](xx).inverse();
      const beta = xy
        .transpose()
        .mmul(invxx)
        .transpose();
      this.weights = beta.to2DArray();
      this.inputs = x.columns;
      this.outputs = y.columns;
      if (intercept) this.inputs--;
      this.intercept = intercept;
      if (statistics) {
        /*
         * Let's add some basic statistics about the beta's to be able to interpret them.
         * source: http://dept.stat.lsa.umich.edu/~kshedden/Courses/Stat401/Notes/401-multreg.pdf
         * validated against Excel Regression AddIn
         * test: "datamining statistics test"
         */
        const fittedValues = x.mmul(beta);
        const residuals = y.clone().addM(fittedValues.neg());
        const variance =
          residuals
            .to2DArray()
            .map((ri) => Math.pow(ri[0], 2))
            .reduce((a, b) => a + b) /
          (y.rows - x.columns);
        this.stdError = Math.sqrt(variance);
        this.stdErrorMatrix = Object(ml_matrix__WEBPACK_IMPORTED_MODULE_0__["pseudoInverse"])(xx).mul(variance);
        this.stdErrors = this.stdErrorMatrix
          .diagonal()
          .map((d) => Math.sqrt(d));
        this.tStats = this.weights.map((d, i) =>
          this.stdErrors[i] === 0 ? 0 : d[0] / this.stdErrors[i],
        );
      }
    }
  }

  predict(x) {
    if (Array.isArray(x)) {
      if (typeof x[0] === 'number') {
        return this._predict(x);
      } else if (Array.isArray(x[0])) {
        const y = new Array(x.length);
        for (let i = 0; i < x.length; i++) {
          y[i] = this._predict(x[i]);
        }
        return y;
      }
    } else if (ml_matrix__WEBPACK_IMPORTED_MODULE_0__["default"].isMatrix(x)) {
      const y = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["default"](x.rows, this.outputs);
      for (let i = 0; i < x.rows; i++) {
        y.setRow(i, this._predict(x.getRow(i)));
      }
      return y;
    }
    throw new TypeError('x must be a matrix or array of numbers');
  }

  _predict(x) {
    const result = new Array(this.outputs);
    if (this.intercept) {
      for (let i = 0; i < this.outputs; i++) {
        result[i] = this.weights[this.inputs][i];
      }
    } else {
      result.fill(0);
    }
    for (let i = 0; i < this.inputs; i++) {
      for (let j = 0; j < this.outputs; j++) {
        result[j] += this.weights[i][j] * x[i];
      }
    }
    return result;
  }

  score() {
    throw new Error('score method is not implemented yet');
  }

  toJSON() {
    return {
      name: 'multivariateLinearRegression',
      weights: this.weights,
      inputs: this.inputs,
      outputs: this.outputs,
      intercept: this.intercept,
      summary: this.statistics
        ? {
            regressionStatistics: {
              standardError: this.stdError,
              observations: this.outputs,
            },
            variables: this.weights.map((d, i) => {
              return {
                label:
                  i === this.weights.length - 1
                    ? 'Intercept'
                    : `X Variable ${i + 1}`,
                coefficients: d,
                standardError: this.stdErrors[i],
                tStat: this.tStats[i],
              };
            }),
          }
        : undefined,
    };
  }

  static load(model) {
    if (model.name !== 'multivariateLinearRegression') {
      throw new Error('not a MLR model');
    }
    return new MultivariateLinearRegression(true, model);
  }
}


/***/ }),

/***/ "../node_modules/ml-regression-polynomial/src/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/ml-regression-polynomial/src/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolynomialRegression; });
/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");



class PolynomialRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, degree) {
    super();
    if (x === true) {
      this.degree = y.degree;
      this.powers = y.powers;
      this.coefficients = y.coefficients;
    } else {
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["checkArrayLength"])(x, y);
      regress(this, x, y, degree);
    }
  }

  _predict(x) {
    let y = 0;
    for (let k = 0; k < this.powers.length; k++) {
      y += this.coefficients[k] * Math.pow(x, this.powers[k]);
    }
    return y;
  }

  toJSON() {
    return {
      name: 'polynomialRegression',
      degree: this.degree,
      powers: this.powers,
      coefficients: this.coefficients,
    };
  }

  toString(precision) {
    return this._toFormula(precision, false);
  }

  toLaTeX(precision) {
    return this._toFormula(precision, true);
  }

  _toFormula(precision, isLaTeX) {
    let sup = '^';
    let closeSup = '';
    let times = ' * ';
    if (isLaTeX) {
      sup = '^{';
      closeSup = '}';
      times = '';
    }

    let fn = '';
    let str = '';
    for (let k = 0; k < this.coefficients.length; k++) {
      str = '';
      if (this.coefficients[k] !== 0) {
        if (this.powers[k] === 0) {
          str = Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision);
        } else {
          if (this.powers[k] === 1) {
            str = `${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision) +
              times}x`;
          } else {
            str = `${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision) +
              times}x${sup}${this.powers[k]}${closeSup}`;
          }
        }

        if (this.coefficients[k] > 0 && k !== this.coefficients.length - 1) {
          str = ` + ${str}`;
        } else if (k !== this.coefficients.length - 1) {
          str = ` ${str}`;
        }
      }
      fn = str + fn;
    }
    if (fn.charAt(0) === '+') {
      fn = fn.slice(1);
    }

    return `f(x) = ${fn}`;
  }

  static load(json) {
    if (json.name !== 'polynomialRegression') {
      throw new TypeError('not a polynomial regression model');
    }
    return new PolynomialRegression(true, json);
  }
}

function regress(pr, x, y, degree) {
  const n = x.length;
  let powers;
  if (Array.isArray(degree)) {
    powers = degree;
    degree = powers.length;
  } else {
    degree++;
    powers = new Array(degree);
    for (let k = 0; k < degree; k++) {
      powers[k] = k;
    }
  }
  const F = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](n, degree);
  const Y = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"]([y]);
  for (let k = 0; k < degree; k++) {
    for (let i = 0; i < n; i++) {
      if (powers[k] === 0) {
        F.set(i, k, 1);
      } else {
        F.set(i, k, Math.pow(x[i], powers[k]));
      }
    }
  }

  const FT = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["MatrixTransposeView"](F);
  const A = FT.mmul(F);
  const B = FT.mmul(new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["MatrixTransposeView"](Y));

  pr.degree = degree - 1;
  pr.powers = powers;
  pr.coefficients = Object(ml_matrix__WEBPACK_IMPORTED_MODULE_0__["solve"])(A, B).to1DArray();
}


/***/ }),

/***/ "../node_modules/ml-regression-power/src/index.js":
/*!********************************************************!*\
  !*** ../node_modules/ml-regression-power/src/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PowerRegression; });
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");
/* harmony import */ var ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-simple-linear */ "../node_modules/ml-regression-simple-linear/src/index.js");



class PowerRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y) {
    super();
    if (x === true) {
      // reloading model
      this.A = y.A;
      this.B = y.B;
    } else {
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["checkArrayLength"])(x, y);
      regress(this, x, y);
    }
  }

  _predict(newInputs) {
    return this.A * Math.pow(newInputs, this.B);
  }

  toJSON() {
    return {
      name: 'powerRegression',
      A: this.A,
      B: this.B
    };
  }

  toString(precision) {
    return `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
      this.A,
      precision
    )} * x^${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.B, precision)}`;
  }

  toLaTeX(precision) {
    let latex = '';
    if (this.B >= 0) {
      latex = `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
        this.A,
        precision
      )}x^{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.B, precision)}}`;
    } else {
      latex = `f(x) = \\frac{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(
        this.A,
        precision
      )}}{x^{${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(-this.B, precision)}}}`;
    }
    latex = latex.replace(/e([+-]?[0-9]+)/g, 'e^{$1}');
    return latex;
  }

  static load(json) {
    if (json.name !== 'powerRegression') {
      throw new TypeError('not a power regression model');
    }
    return new PowerRegression(true, json);
  }
}

function regress(pr, x, y) {
  const n = x.length;
  const xl = new Array(n);
  const yl = new Array(n);
  for (let i = 0; i < n; i++) {
    xl[i] = Math.log(x[i]);
    yl[i] = Math.log(y[i]);
  }

  const linear = new ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__["default"](xl, yl);
  pr.A = Math.exp(linear.intercept);
  pr.B = linear.slope;
}


/***/ }),

/***/ "../node_modules/ml-regression-robust-polynomial/src/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/ml-regression-robust-polynomial/src/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RobustPolynomialRegression; });
/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");



/**
 * @class RobustPolynomialRegression
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} degree - polynomial degree
 */
class RobustPolynomialRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(x, y, degree) {
    super();
    if (x === true) {
      this.degree = y.degree;
      this.powers = y.powers;
      this.coefficients = y.coefficients;
    } else {
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["checkArrayLength"])(x, y);
      robustPolynomial(this, x, y, degree);
    }
  }

  toJSON() {
    return {
      name: 'robustPolynomialRegression',
      degree: this.degree,
      powers: this.powers,
      coefficients: this.coefficients
    };
  }

  _predict(x) {
    return predict(x, this.powers, this.coefficients);
  }

  /**
   * Display the formula
   * @param {number} precision - precision for the numbers
   * @return {string}
   */
  toString(precision) {
    return this._toFormula(precision, false);
  }

  /**
   * Display the formula in LaTeX format
   * @param {number} precision - precision for the numbers
   * @return {string}
   */
  toLaTeX(precision) {
    return this._toFormula(precision, true);
  }

  _toFormula(precision, isLaTeX) {
    let sup = '^';
    let closeSup = '';
    let times = ' * ';
    if (isLaTeX) {
      sup = '^{';
      closeSup = '}';
      times = '';
    }

    let fn = '';
    let str = '';
    for (let k = 0; k < this.coefficients.length; k++) {
      str = '';
      if (this.coefficients[k] !== 0) {
        if (this.powers[k] === 0) {
          str = Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision);
        } else {
          if (this.powers[k] === 1) {
            str = `${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision) +
              times}x`;
          } else {
            str = `${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["maybeToPrecision"])(this.coefficients[k], precision) +
              times}x${sup}${this.powers[k]}${closeSup}`;
          }
        }

        if (this.coefficients[k] > 0 && k !== this.coefficients.length - 1) {
          str = ` + ${str}`;
        } else if (k !== this.coefficients.length - 1) {
          str = ` ${str}`;
        }
      }
      fn = str + fn;
    }
    if (fn.charAt(0) === '+') {
      fn = fn.slice(1);
    }

    return `f(x) = ${fn}`;
  }

  static load(json) {
    if (json.name !== 'robustPolynomialRegression') {
      throw new TypeError('not a RobustPolynomialRegression model');
    }
    return new RobustPolynomialRegression(true, json);
  }
}

function robustPolynomial(regression, x, y, degree) {
  let powers = Array(degree)
    .fill(0)
    .map((_, index) => index);

  const tuples = getRandomTuples(x, y, degree);

  let min;
  for (let i = 0; i < tuples.length; i++) {
    let tuple = tuples[i];
    let coefficients = calcCoefficients(tuple, powers);

    let residuals = x.slice();
    for (let j = 0; j < x.length; j++) {
      residuals[j] = y[j] - predict(x[j], powers, coefficients);
      residuals[j] = {
        residual: residuals[j] * residuals[j],
        coefficients
      };
    }

    let median = residualsMedian(residuals);
    if (!min || median.residual < min.residual) {
      min = median;
    }
  }

  regression.degree = degree;
  regression.powers = powers;
  regression.coefficients = min.coefficients;
}

/**
 * @ignore
 * @param {Array<number>} x
 * @param {Array<number>} y
 * @param {number} degree
 * @return {Array<{x:number,y:number}>}
 */
function getRandomTuples(x, y, degree) {
  let len = Math.floor(x.length / degree);
  let tuples = new Array(len);

  for (let i = 0; i < x.length; i++) {
    let pos = Math.floor(Math.random() * len);

    let counter = 0;
    while (counter < x.length) {
      if (!tuples[pos]) {
        tuples[pos] = [
          {
            x: x[i],
            y: y[i]
          }
        ];
        break;
      } else if (tuples[pos].length < degree) {
        tuples[pos].push({
          x: x[i],
          y: y[i]
        });
        break;
      } else {
        counter++;
        pos = (pos + 1) % len;
      }
    }

    if (counter === x.length) {
      return tuples;
    }
  }
  return tuples;
}

/**
 * @ignore
 * @param {{x:number,y:number}} tuple
 * @param {Array<number>} powers
 * @return {Array<number>}
 */
function calcCoefficients(tuple, powers) {
  let X = tuple.slice();
  let Y = tuple.slice();
  for (let i = 0; i < X.length; i++) {
    Y[i] = [tuple[i].y];
    X[i] = new Array(powers.length);
    for (let j = 0; j < powers.length; j++) {
      X[i][j] = Math.pow(tuple[i].x, powers[j]);
    }
  }

  return Object(ml_matrix__WEBPACK_IMPORTED_MODULE_0__["solve"])(X, Y).to1DArray();
}

function predict(x, powers, coefficients) {
  let y = 0;
  for (let k = 0; k < powers.length; k++) {
    y += coefficients[k] * Math.pow(x, powers[k]);
  }
  return y;
}

function residualsMedian(residuals) {
  residuals.sort((a, b) => a.residual - b.residual);

  let l = residuals.length;
  let half = Math.floor(l / 2);
  return l % 2 === 0 ? residuals[half - 1] : residuals[half];
}


/***/ }),

/***/ "../node_modules/ml-regression-simple-linear/src/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/ml-regression-simple-linear/src/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleLinearRegression; });
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");


class SimpleLinearRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(x, y) {
    super();
    if (x === true) {
      this.slope = y.slope;
      this.intercept = y.intercept;
      this.coefficients = [y.intercept, y.slope];
    } else {
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["checkArrayLength"])(x, y);
      regress(this, x, y);
    }
  }

  toJSON() {
    return {
      name: 'simpleLinearRegression',
      slope: this.slope,
      intercept: this.intercept,
    };
  }

  _predict(x) {
    return this.slope * x + this.intercept;
  }

  computeX(y) {
    return (y - this.intercept) / this.slope;
  }

  toString(precision) {
    let result = 'f(x) = ';
    if (this.slope !== 0) {
      const xFactor = Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.slope, precision);
      result += `${xFactor === '1' ? '' : `${xFactor} * `}x`;
      if (this.intercept !== 0) {
        const absIntercept = Math.abs(this.intercept);
        const operator = absIntercept === this.intercept ? '+' : '-';
        result += ` ${operator} ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(absIntercept, precision)}`;
      }
    } else {
      result += Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.intercept, precision);
    }
    return result;
  }

  toLaTeX(precision) {
    return this.toString(precision);
  }

  static load(json) {
    if (json.name !== 'simpleLinearRegression') {
      throw new TypeError('not a SLR model');
    }
    return new SimpleLinearRegression(true, json);
  }
}

function regress(slr, x, y) {
  const n = x.length;
  let xSum = 0;
  let ySum = 0;

  let xSquared = 0;
  let xY = 0;

  for (let i = 0; i < n; i++) {
    xSum += x[i];
    ySum += y[i];
    xSquared += x[i] * x[i];
    xY += x[i] * y[i];
  }

  const numerator = n * xY - xSum * ySum;
  slr.slope = numerator / (n * xSquared - xSum * xSum);
  slr.intercept = (1 / n) * ySum - slr.slope * (1 / n) * xSum;
  slr.coefficients = [slr.intercept, slr.slope];
}


/***/ }),

/***/ "../node_modules/ml-regression-theil-sen/src/index.js":
/*!************************************************************!*\
  !*** ../node_modules/ml-regression-theil-sen/src/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TheilSenRegression; });
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");
/* harmony import */ var ml_array_median__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-array-median */ "../node_modules/ml-array-median/lib-es6/index.js");



class TheilSenRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Theil–Sen estimator
   * https://en.wikipedia.org/wiki/Theil%E2%80%93Sen_estimator
   * @param {Array<number>|boolean} x
   * @param {Array<number>|object} y
   * @constructor
   */
  constructor(x, y) {
    super();
    if (x === true) {
      // loads the model
      this.slope = y.slope;
      this.intercept = y.intercept;
      this.coefficients = y.coefficients;
    } else {
      // creates the model
      Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["checkArrayLength"])(x, y);
      theilSen(this, x, y);
    }
  }

  toJSON() {
    return {
      name: 'TheilSenRegression',
      slope: this.slope,
      intercept: this.intercept
    };
  }

  _predict(input) {
    return this.slope * input + this.intercept;
  }

  computeX(input) {
    return (input - this.intercept) / this.slope;
  }

  toString(precision) {
    var result = 'f(x) = ';
    if (this.slope) {
      var xFactor = Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.slope, precision);
      result += `${Math.abs(xFactor - 1) < 1e-5 ? '' : `${xFactor} * `}x`;
      if (this.intercept) {
        var absIntercept = Math.abs(this.intercept);
        var operator = absIntercept === this.intercept ? '+' : '-';
        result +=
          ` ${operator} ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(absIntercept, precision)}`;
      }
    } else {
      result += Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.intercept, precision);
    }
    return result;
  }

  toLaTeX(precision) {
    return this.toString(precision);
  }

  static load(json) {
    if (json.name !== 'TheilSenRegression') {
      throw new TypeError('not a Theil-Sen model');
    }
    return new TheilSenRegression(true, json);
  }
}

function theilSen(regression, x, y) {
  let len = x.length;
  let slopes = new Array(len * len);
  let count = 0;
  for (let i = 0; i < len; ++i) {
    for (let j = i + 1; j < len; ++j) {
      if (x[i] !== x[j]) {
        slopes[count++] = (y[j] - y[i]) / (x[j] - x[i]);
      }
    }
  }
  slopes.length = count;
  let medianSlope = Object(ml_array_median__WEBPACK_IMPORTED_MODULE_1__["default"])(slopes);

  let cuts = new Array(len);
  for (let i = 0; i < len; ++i) {
    cuts[i] = y[i] - medianSlope * x[i];
  }

  regression.slope = medianSlope;
  regression.intercept = Object(ml_array_median__WEBPACK_IMPORTED_MODULE_1__["default"])(cuts);
  regression.coefficients = [regression.intercept, regression.slope];
}


/***/ }),

/***/ "../node_modules/ml-regression/src/index.js":
/*!**************************************************!*\
  !*** ../node_modules/ml-regression/src/index.js ***!
  \**************************************************/
/*! exports provided: SimpleLinearRegression, SLR, PolynomialRegression, ExponentialRegression, PowerRegression, MultivariateLinearRegression, NLR, NonLinearRegression, KernelRidgeRegression, KRR, PolinomialFitting2D, TheilSenRegression, RobustPolynomialRegression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NLR", function() { return NLR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonLinearRegression", function() { return NLR; });
/* harmony import */ var _regression_potential_regression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regression/potential-regression */ "../node_modules/ml-regression/src/regression/potential-regression.js");
/* harmony import */ var ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-simple-linear */ "../node_modules/ml-regression-simple-linear/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleLinearRegression", function() { return ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SLR", function() { return ml_regression_simple_linear__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var ml_regression_polynomial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml-regression-polynomial */ "../node_modules/ml-regression-polynomial/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolynomialRegression", function() { return ml_regression_polynomial__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ml-regression-exponential */ "../node_modules/ml-regression-exponential/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExponentialRegression", function() { return ml_regression_exponential__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var ml_regression_power__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ml-regression-power */ "../node_modules/ml-regression-power/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PowerRegression", function() { return ml_regression_power__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var ml_regression_multivariate_linear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ml-regression-multivariate-linear */ "../node_modules/ml-regression-multivariate-linear/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MultivariateLinearRegression", function() { return ml_regression_multivariate_linear__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _regression_kernel_ridge_regression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./regression/kernel-ridge-regression */ "../node_modules/ml-regression/src/regression/kernel-ridge-regression.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KernelRidgeRegression", function() { return _regression_kernel_ridge_regression__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KRR", function() { return _regression_kernel_ridge_regression__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _regression_poly_fit_regression2d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regression/poly-fit-regression2d */ "../node_modules/ml-regression/src/regression/poly-fit-regression2d.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolinomialFitting2D", function() { return _regression_poly_fit_regression2d__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var ml_regression_theil_sen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ml-regression-theil-sen */ "../node_modules/ml-regression-theil-sen/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheilSenRegression", function() { return ml_regression_theil_sen__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var ml_regression_robust_polynomial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ml-regression-robust-polynomial */ "../node_modules/ml-regression-robust-polynomial/src/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RobustPolynomialRegression", function() { return ml_regression_robust_polynomial__WEBPACK_IMPORTED_MODULE_9__["default"]; });








const NLR = {
  PotentialRegression: _regression_potential_regression__WEBPACK_IMPORTED_MODULE_0__["default"]
};





// robust regressions




/***/ }),

/***/ "../node_modules/ml-regression/src/regression/kernel-ridge-regression.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/ml-regression/src/regression/kernel-ridge-regression.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return KernelRidgeRegression; });
/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");
/* harmony import */ var ml_kernel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-kernel */ "../node_modules/ml-kernel/src/kernel.js");
/* harmony import */ var ml_kernel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ml_kernel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");




const defaultOptions = {
  lambda: 0.1,
  kernelType: 'gaussian',
  kernelOptions: {},
  computeCoefficient: false
};

// Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf
class KernelRidgeRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(inputs, outputs, options) {
    super();
    if (inputs === true) {
      // reloading model
      this.alpha = outputs.alpha;
      this.inputs = outputs.inputs;
      this.kernelType = outputs.kernelType;
      this.kernelOptions = outputs.kernelOptions;
      this.kernel = new ml_kernel__WEBPACK_IMPORTED_MODULE_1___default.a(outputs.kernelType, outputs.kernelOptions);
    } else {
      inputs = ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].checkMatrix(inputs);
      options = Object.assign({}, defaultOptions, options);

      const kernelFunction = new ml_kernel__WEBPACK_IMPORTED_MODULE_1___default.a(
        options.kernelType,
        options.kernelOptions
      );
      const K = kernelFunction.compute(inputs);
      const n = inputs.rows;
      K.add(ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].eye(n, n).mul(options.lambda));

      this.alpha = Object(ml_matrix__WEBPACK_IMPORTED_MODULE_0__["solve"])(K, outputs);
      this.inputs = inputs;
      this.kernelType = options.kernelType;
      this.kernelOptions = options.kernelOptions;
      this.kernel = kernelFunction;
    }
  }

  _predict(newInputs) {
    return this.kernel
      .compute([newInputs], this.inputs)
      .mmul(this.alpha)
      .getRow(0);
  }

  toJSON() {
    return {
      name: 'kernelRidgeRegression',
      alpha: this.alpha,
      inputs: this.inputs,
      kernelType: this.kernelType,
      kernelOptions: this.kernelOptions
    };
  }

  static load(json) {
    if (json.name !== 'kernelRidgeRegression') {
      throw new TypeError('not a KRR model');
    }
    return new KernelRidgeRegression(true, json);
  }
}


/***/ }),

/***/ "../node_modules/ml-regression/src/regression/poly-fit-regression2d.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/ml-regression/src/regression/poly-fit-regression2d.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PolynomialFitRegression2D; });
/* harmony import */ var ml_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-matrix */ "../node_modules/ml-matrix/src/index.js");
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");



const defaultOptions = {
  order: 2
};
// Implements the Kernel ridge regression algorithm.
// http://www.ics.uci.edu/~welling/classnotes/papers_class/Kernel-Ridge.pdf
class PolynomialFitRegression2D extends ml_regression_base__WEBPACK_IMPORTED_MODULE_1__["default"] {
  /**
   * Constructor for the 2D polynomial fitting
   *
   * @param inputs
   * @param outputs
   * @param options
   * @constructor
   */
  constructor(inputs, outputs, options) {
    super();
    if (inputs === true) {
      // reloading model
      this.coefficients = ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].columnVector(outputs.coefficients);
      this.order = outputs.order;
      if (outputs.r) {
        this.r = outputs.r;
        this.r2 = outputs.r2;
      }
      if (outputs.chi2) {
        this.chi2 = outputs.chi2;
      }
    } else {
      options = Object.assign({}, defaultOptions, options);
      this.order = options.order;
      this.coefficients = [];
      this.X = inputs;
      this.y = outputs;

      this.train(this.X, this.y, options);
    }
  }

  /**
   * Function that fits the model given the data(X) and predictions(y).
   * The third argument is an object with the following options:
   * * order: order of the polynomial to fit.
   *
   * @param {Matrix} X - A matrix with n rows and 2 columns.
   * @param {Matrix} y - A vector of the prediction values.
   */
  train(X, y) {
    if (!ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].isMatrix(X)) X = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](X);
    if (!ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].isMatrix(y)) y = ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].columnVector(y);

    if (y.rows !== X.rows) {
      y = y.transpose();
    }

    if (X.columns !== 2) {
      throw new RangeError(
        `You give X with ${X.columns} columns and it must be 2`
      );
    }
    if (X.rows !== y.rows) {
      throw new RangeError('X and y must have the same rows');
    }

    var examples = X.rows;
    var coefficients = ((this.order + 2) * (this.order + 1)) / 2;
    this.coefficients = new Array(coefficients);

    var x1 = X.getColumnVector(0);
    var x2 = X.getColumnVector(1);

    var scaleX1 =
      1.0 /
      x1
        .clone()
        .abs()
        .max();
    var scaleX2 =
      1.0 /
      x2
        .clone()
        .abs()
        .max();
    var scaleY =
      1.0 /
      y
        .clone()
        .abs()
        .max();

    x1.mulColumn(0, scaleX1);
    x2.mulColumn(0, scaleX2);
    y.mulColumn(0, scaleY);

    var A = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"](examples, coefficients);
    var col = 0;

    for (var i = 0; i <= this.order; ++i) {
      var limit = this.order - i;
      for (var j = 0; j <= limit; ++j) {
        var result = powColVector(x1, i).mulColumnVector(powColVector(x2, j));
        A.setColumn(col, result);
        col++;
      }
    }

    var svd = new ml_matrix__WEBPACK_IMPORTED_MODULE_0__["SVD"](A.transpose(), {
      computeLeftSingularVectors: true,
      computeRightSingularVectors: true,
      autoTranspose: false
    });

    var qqs = ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].rowVector(svd.diagonal);
    qqs = qqs.apply(function (i, j) {
      if (this.get(i, j) >= 1e-15) this.set(i, j, 1 / this.get(i, j));
      else this.set(i, j, 0);
    });

    var qqs1 = ml_matrix__WEBPACK_IMPORTED_MODULE_0__["Matrix"].zeros(examples, coefficients);
    for (i = 0; i < coefficients; ++i) {
      qqs1.set(i, i, qqs.get(0, i));
    }

    qqs = qqs1;

    var U = svd.rightSingularVectors;
    var V = svd.leftSingularVectors;

    this.coefficients = V.mmul(qqs.transpose())
      .mmul(U.transpose())
      .mmul(y);

    col = 0;

    for (i = 0; i <= coefficients; ++i) {
      limit = this.order - i;
      for (j = 0; j <= limit; ++j) {
        this.coefficients.set(
          col,
          0,
          (this.coefficients.get(col, 0) *
            Math.pow(scaleX1, i) *
            Math.pow(scaleX2, j)) /
            scaleY
        );
        col++;
      }
    }
  }

  _predict(newInputs) {
    var x1 = newInputs[0];
    var x2 = newInputs[1];

    var y = 0;
    var column = 0;

    for (var i = 0; i <= this.order; i++) {
      for (var j = 0; j <= this.order - i; j++) {
        y +=
          Math.pow(x1, i) * Math.pow(x2, j) * this.coefficients.get(column, 0);
        column++;
      }
    }

    return y;
  }

  toJSON() {
    return {
      name: 'polyfit2D',
      order: this.order,
      coefficients: this.coefficients
    };
  }

  static load(json) {
    if (json.name !== 'polyfit2D') {
      throw new TypeError('not a polyfit2D model');
    }
    return new PolynomialFitRegression2D(true, json);
  }
}

/**
 * Function that given a column vector return this: vector^power
 *
 * @param x - Column vector.
 * @param power - Pow number.
 * @return {Suite|Matrix}
 */
function powColVector(x, power) {
  var result = x.clone();
  for (var i = 0; i < x.rows; ++i) {
    result.set(i, 0, Math.pow(result.get(i, 0), power));
  }
  return result;
}


/***/ }),

/***/ "../node_modules/ml-regression/src/regression/potential-regression.js":
/*!****************************************************************************!*\
  !*** ../node_modules/ml-regression/src/regression/potential-regression.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PotentialRegression; });
/* harmony import */ var ml_regression_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ml-regression-base */ "../node_modules/ml-regression-base/src/index.js");
/* harmony import */ var ml_regression_polynomial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ml-regression-polynomial */ "../node_modules/ml-regression-polynomial/src/index.js");




/*
 * Function that calculate the potential fit in the form f(x) = A*x^M
 * with a given M and return de A coefficient.
 *
 * @param {Vector} X - Vector of the x positions of the points.
 * @param {Vector} Y - Vector of the x positions of the points.
 * @param {Number} M - The exponent of the potential fit.
 * @return {Number} A - The A coefficient of the potential fit.
 */
class PotentialRegression extends ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @constructor
   * @param x: Independent variable
   * @param y: Dependent variable
   * @param M
   */
  constructor(x, y, M) {
    super();
    if (x === true) {
      // reloading model
      this.A = y.A;
      this.M = y.M;
    } else {
      var n = x.length;
      if (n !== y.length) {
        throw new RangeError('input and output array have a different length');
      }

      var linear = new ml_regression_polynomial__WEBPACK_IMPORTED_MODULE_1__["default"](x, y, [M]);
      this.A = linear.coefficients[0];
      this.M = M;
    }
  }

  _predict(x) {
    return this.A * Math.pow(x, this.M);
  }

  toJSON() {
    return {
      name: 'potentialRegression',
      A: this.A,
      M: this.M
    };
  }

  toString(precision) {
    return `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.A, precision)} * x^${this.M}`;
  }

  toLaTeX(precision) {
    if (this.M >= 0) {
      return (
        `f(x) = ${Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.A, precision)}x^{${this.M}}`
      );
    } else {
      return (
        `f(x) = \\frac{${
          Object(ml_regression_base__WEBPACK_IMPORTED_MODULE_0__["maybeToPrecision"])(this.A, precision)
        }}{x^{${
          -this.M
        }}}`
      );
    }
  }

  static load(json) {
    if (json.name !== 'potentialRegression') {
      throw new TypeError('not a potential regression model');
    }
    return new PotentialRegression(true, json);
  }
}


/***/ }),

/***/ "../node_modules/randomcolor/randomColor.js":
/*!**************************************************!*\
  !*** ../node_modules/randomcolor/randomColor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        var color = randomColor(options);

        if (seed !== null) {
          options.seed = seed;
        }

        colors.push(color);
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [18,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [46,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [62,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [178, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [257, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [282, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./ScatterPanel.css":
/*!**************************!*\
  !*** ./ScatterPanel.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/dist/cjs.js!./ScatterPanel.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/dist/cjs.js!./ScatterPanel.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./ScatterPanel.tsx":
/*!**************************!*\
  !*** ./ScatterPanel.tsx ***!
  \**************************/
/*! exports provided: ScatterPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScatterPanel", function() { return ScatterPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ml_regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ml-regression */ "../node_modules/ml-regression/src/index.js");
/* harmony import */ var types_ColData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! types/ColData */ "./types/ColData.ts");
/* harmony import */ var types_MarginPair__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! types/MarginPair */ "./types/MarginPair.ts");
/* harmony import */ var types_XAxis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! types/XAxis */ "./types/XAxis.ts");
/* harmony import */ var types_FieldSet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! types/FieldSet */ "./types/FieldSet.ts");
/* harmony import */ var types_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! types/Title */ "./types/Title.ts");
/* harmony import */ var _ScatterPanel_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ScatterPanel.css */ "./ScatterPanel.css");
/* harmony import */ var _ScatterPanel_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ScatterPanel_css__WEBPACK_IMPORTED_MODULE_9__);











var randomColor = __webpack_require__(/*! randomcolor */ "../node_modules/randomcolor/randomColor.js");

function autoConfigure(options, colData) {
  if (options.xAxis.col === -1 || options.xAxis.col >= colData.length) {
    options.xAxis = new types_XAxis__WEBPACK_IMPORTED_MODULE_6__["XAxis"](0, false);
  }

  if (options.xAxisTitle.text.length === 0) {
    options.xAxisTitle = new types_Title__WEBPACK_IMPORTED_MODULE_8__["Title"](colData[0].displayName, 'white', 2);
  }

  options.fieldSets = options.fieldSets.filter(function (f) {
    return f.col >= 0 && f.col < colData.length && f.col !== options.xAxis.col;
  });

  if (options.fieldSets.length === 0) {
    var fieldSets = colData.map(function (f, i) {
      return new types_FieldSet__WEBPACK_IMPORTED_MODULE_7__["FieldSet"](i, -1, randomColor(), 3, 1, 'none', false);
    });
    options.fieldSets = fieldSets.filter(function (c) {
      return c.col !== options.xAxis.col;
    });
  }

  options.xMargins.lower = 30;
  options.xMargins.upper = 10;
  options.yMargins.lower = 20;
  options.yMargins.upper = 20;
}

function drawLines(options, fieldSets, xValues, yValues, xScale, yScale, xExtent, yExtent) {
  var lines = new Array(0); // as JSX.Element[];

  fieldSets.forEach(function (fieldSet, index) {
    if (fieldSet.lineType !== 'none' && fieldSet.lineSize > 0) {
      var path = '';
      var xyData = xValues.map(function (d, i) {
        return [d, yValues[index][i]];
      }).filter(function (xy) {
        return xy[1] != null;
      });

      if (fieldSet.lineType === 'simple') {
        path = "\n        " + xyData.map(function (xy, i) {
          return (i === 0 ? 'M' : 'L') + " " + xScale(xy[0]) + " " + yScale(xy[1]);
        }).join(' ') + "\n      ";
      } else if (fieldSet.lineType === 'linear') {
        var x = xyData.map(function (xy) {
          return xy[0];
        });
        var y = xyData.map(function (xy) {
          return xy[1];
        });
        var SLR = new ml_regression__WEBPACK_IMPORTED_MODULE_3__["SimpleLinearRegression"](x, y); // check for start and end points inside the plotted area

        var x0 = xExtent[0];
        var y0 = SLR.predict(x0);

        if (y0 < yExtent[0]) {
          y0 = yExtent[0];
          x0 = SLR.computeX(y0);
        }

        if (y0 > yExtent[1]) {
          y0 = yExtent[1];
          x0 = SLR.computeX(y0);
        }

        var x1 = xExtent[1];
        var y1 = SLR.predict(x1);

        if (y1 < yExtent[0]) {
          y1 = yExtent[0];
          x1 = SLR.computeX(y1);
        }

        if (y1 > yExtent[1]) {
          y1 = yExtent[1];
          x1 = SLR.computeX(y1);
        }

        path = "M " + xScale(x0) + " " + yScale(y0) + " L " + xScale(x1) + " " + yScale(y1);
      } else if (fieldSet.lineType === 'exponential') {
        var ex = xyData.map(function (xy) {
          return xy[0];
        });
        var ey = xyData.map(function (xy) {
          return xy[1];
        });
        var ER = new ml_regression__WEBPACK_IMPORTED_MODULE_3__["ExponentialRegression"](ex, ey);
        var x0 = xExtent[0];
        var x1 = xExtent[1];
        var steps = 100;
        var dx = (x1 - x0) / (steps - 1);
        var xys = new Array(0);

        for (var i = 0; i < steps; i++) {
          var x = x0 + i * dx;
          var y = ER.predict(x);
          xys.push([x, y]);
        }

        path = "\n        " + xys.map(function (d, i) {
          return (i === 0 ? 'M' : 'L') + " " + xScale(d[0]) + " " + yScale(d[1]);
        }).join(' ') + "\n      ";
      } else if (fieldSet.lineType === 'power') {
        xyData = xyData.filter(function (d) {
          return d[0] > 0;
        });
        var px = xyData.map(function (xy) {
          return xy[0];
        });
        var py = xyData.map(function (xy) {
          return xy[1];
        });
        var PR = new ml_regression__WEBPACK_IMPORTED_MODULE_3__["PowerRegression"](px, py);
        var x0 = xExtent[0];
        var x1 = xExtent[1];
        var steps = 100;
        var dx = (x1 - x0) / (steps - 1);
        var xys = new Array(0);

        for (var i = 0; i < steps; i++) {
          var x = x0 + i * dx;
          var y = PR.predict(x);
          xys.push([x, y]);
        }

        path = "\n        " + xys.map(function (d, i) {
          return (i === 0 ? 'M' : 'L') + " " + xScale(d[0]) + " " + yScale(d[1]);
        }).join(' ') + "\n      ";
      }

      if (path.length) {
        var className = "ScatterLine ScatterLine-" + index;

        if (options.legend.size && fieldSet.hidden) {
          className += ' ScatterLineHidden';
        }

        lines.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
          key: "line-[" + index + "]",
          className: className,
          d: path,
          stroke: fieldSet.color,
          strokeWidth: fieldSet.lineSize,
          fill: "none"
        }));
      }
    }
  });
  return lines;
}

function drawDots(options, fieldSets, xValues, yValues, colValues, xScale, yScale) {
  return fieldSets.map(function (y, i) {
    return xValues.map(function (x, j) {
      var dotSize = y.sizeCol >= 0 ? colValues[y.sizeCol][j] : -y.sizeCol;
      var yValue = yValues[i][j];

      if (dotSize > 0 && yValue != null) {
        var className = "ScatterSet-" + i;

        if (options.legend.size && y.hidden) {
          className += ' ScatterSetHidden';
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
          key: "circle-[" + y + "][" + i + "]",
          cx: xScale(x),
          cy: yScale(yValue),
          r: dotSize,
          className: className,
          fill: y.color
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "circle-[" + y + "][" + i + "]"
      });
    });
  });
}

function drawLabels(options, labels, xValues, xScale) {
  return xValues.map(function (x, i) {
    if (Array.isArray(labels) && i < labels.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        key: "label-[" + i + "]",
        x: xScale(x),
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        fill: options.label.color,
        fontSize: options.label.textSize * 4,
        fontWeight: "100"
      }, labels[i]);
    }

    return null;
  });
}

function applySetFieldSetHidden(fieldSet, index, hidden, panelId) {
  fieldSet.hidden = hidden;
  var panelGroup = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".ScatterPanel-" + panelId);
  var markers = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".ScatterSet-" + index, panelGroup);

  if (hidden) {
    markers.addClass('ScatterSetHidden');
  } else {
    markers.removeClass('ScatterSetHidden');
  }

  var lines = jquery__WEBPACK_IMPORTED_MODULE_1___default()(".ScatterLine-" + index, panelGroup);

  if (hidden) {
    lines.addClass('ScatterLineHidden');
  } else {
    lines.removeClass('ScatterLineHidden');
  }
}

function onLegendClick(e, index, fieldSets, panelId) {
  var thisLegendTextElement = jquery__WEBPACK_IMPORTED_MODULE_1___default()(e.currentTarget);
  var legendGroup = thisLegendTextElement.parent();
  var legendTextElements = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.ScatterLegendText', legendGroup);
  var hiddenLegendTextElements = legendTextElements.filter('.ScatterLegendTextHidden');

  if (e.ctrlKey) {
    // toggle the state of the current item
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    applySetFieldSetHidden(fieldSets[index], index, !fieldSets[index].hidden, panelId);
  } else if (hiddenLegendTextElements.length === 0) {
    // if none are hidden, hide everything else
    legendTextElements.addClass('ScatterLegendTextHidden');
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    fieldSets.forEach(function (f, i) {
      applySetFieldSetHidden(f, i, index !== i, panelId);
    });
  } else if (!thisLegendTextElement.hasClass('ScatterLegendTextHidden')) {
    // if this item is visible, unhide everything
    legendTextElements.removeClass('ScatterLegendTextHidden');
    fieldSets.forEach(function (f, i) {
      applySetFieldSetHidden(f, i, false, panelId);
    });
  } else {
    // hide everything but this one
    legendTextElements.addClass('ScatterLegendTextHidden');
    thisLegendTextElement.toggleClass('ScatterLegendTextHidden');
    fieldSets.forEach(function (f, i) {
      applySetFieldSetHidden(f, i, index !== i, panelId);
    });
  }
}

function drawLegend(options, width, height, xMargins, yMargins, colNames, panelId) {
  if (options.legend.size) {
    var scale_1 = options.legend.size / 3;
    var fieldSets_1 = options.fieldSets.filter(function (x) {
      return x.col >= 0 && x.col < colNames.length;
    });
    var maxLength = d3__WEBPACK_IMPORTED_MODULE_2__["max"](fieldSets_1.map(function (f) {
      return colNames[f.col].length;
    }));

    if (fieldSets_1.length > 0) {
      var offset_1 = 20;
      var dx = offset_1 + 8.6 * scale_1 * maxLength;
      xMargins.upper += dx;
      var legends_1 = new Array(0);
      fieldSets_1.forEach(function (f, i) {
        var className = f.hidden ? 'ScatterLegendText ScatterLegendTextHidden' : 'ScatterLegendText';
        legends_1.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
          transform: "translate(" + offset_1 + ", " + 30 * scale_1 * i + ") scale(" + scale_1 + ")",
          className: className,
          alignmentBaseline: "hanging",
          textAnchor: "left",
          fill: f.color,
          onClick: function onClick(e) {
            onLegendClick(e, i, fieldSets_1, panelId);
          }
        }, colNames[f.col]));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "legend",
        transform: "translate(" + (width - dx) + ", " + yMargins.upper + ")"
      }, legends_1);
    }
  }

  return null;
}

function drawXTitle(options, width, height, xMargins, yMargins) {
  var title = options.xAxisTitle;

  if (title.text) {
    var scale = title.textSize;
    var dx = 8.2 * scale * title.text.length;
    var dy = 14;
    yMargins.lower += dy * scale;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "XTitle",
      transform: "translate(" + (width + xMargins.lower - xMargins.upper) / 2.0 + ", " + (height - dy * scale) + ") scale(" + scale + ")"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      className: "ScatterXTitleRect",
      alignmentBaseline: "hanging",
      textAnchor: "middle",
      width: dx,
      height: dy,
      fill: title.color
    }, title.text));
  }

  return null;
}

function drawYTitle(options, width, height, xMargins, yMargins) {
  var title = options.yAxisTitle;

  if (title.text) {
    var scale = title.textSize;
    var dx = 8.2 * title.text.length;
    var dy = 14;

    if (options.rotateYAxisTitle) {
      xMargins.lower += dy * scale;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        id: "YTitle",
        transform: "translate(0, " + (height - yMargins.upper - yMargins.lower) / 2.0 + ") rotate(-90) scale(" + scale + ")"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        className: "ScatterYTitleRect",
        alignmentBaseline: "hanging",
        textAnchor: "middle",
        width: dx,
        height: dy,
        fill: title.color
      }, title.text));
    }

    xMargins.lower += dx * scale;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
      id: "YTitle",
      transform: "translate(0, " + (height - yMargins.upper - yMargins.lower) / 2.0 + ") scale(" + scale + ")"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
      className: "ScatterYTitleRect",
      textAnchor: "left",
      width: dx,
      height: dy,
      fill: title.color
    }, title.text));
  }

  return null;
}

function isXAxisLabelValid(options, colData) {
  return options.label.col >= 0 && colData[options.label.col].type === 'string';
}

function generateContent(options, width, height, fieldSets, colData, panelId) {
  //  const visibleFieldSets = fieldSets;
  var colValues = colData.map(function (c) {
    return c.values;
  });
  var colNames = colData.map(function (c) {
    return c.displayName || c.name;
  });
  var xValues = colData[options.xAxis.col].type !== 'string' ? colValues[options.xAxis.col] : Array.from(colValues[0], function (x, i) {
    return i;
  });
  var xExtent = [options.xAxisExtents.min === 0 ? 0 : options.xAxisExtents.min || d3__WEBPACK_IMPORTED_MODULE_2__["min"](xValues), options.xAxisExtents.max === 0 ? 0 : options.xAxisExtents.max || d3__WEBPACK_IMPORTED_MODULE_2__["max"](xValues)];
  var yValues = fieldSets.map(function (f) {
    return colValues[f.col];
  });
  var yExtents = yValues.map(function (c) {
    return d3__WEBPACK_IMPORTED_MODULE_2__["extent"](c);
  });
  var yExtent = [options.yAxisExtents.min === 0 ? 0 : options.yAxisExtents.min || d3__WEBPACK_IMPORTED_MODULE_2__["min"](yExtents.map(function (c) {
    return c[0];
  })), options.yAxisExtents.max === 0 ? 0 : options.yAxisExtents.max || d3__WEBPACK_IMPORTED_MODULE_2__["max"](yExtents.map(function (c) {
    return c[1];
  }))];
  var labels = isXAxisLabelValid(options, colData) ? colValues[options.label.col] : [];
  var xMargins = new types_MarginPair__WEBPACK_IMPORTED_MODULE_5__["MarginPair"](options.xMargins.lower || 0, options.xMargins.upper || 0);
  var yMargins = new types_MarginPair__WEBPACK_IMPORTED_MODULE_5__["MarginPair"](options.yMargins.lower || 0, options.yMargins.upper || 0);
  var legend = drawLegend(options, width, height, xMargins, yMargins, colNames, panelId);
  var yTitle = drawYTitle(options, width, height, xMargins, yMargins);
  var xTitle = drawXTitle(options, width, height, xMargins, yMargins);
  var border = options.border.size > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "border",
    transform: "translate(" + xMargins.lower + ", " + yMargins.upper + ")",
    width: width - xMargins.lower - xMargins.upper,
    height: height - yMargins.upper - yMargins.lower,
    stroke: options.border.color,
    strokeWidth: options.border.size,
    fill: "none"
  }) : null;
  var clippath = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("clipPath", {
    id: "grid-" + panelId + "." + width
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    transform: "translate(" + xMargins.lower + ", " + yMargins.upper + ")",
    width: width - xMargins.lower - xMargins.upper,
    height: height - yMargins.upper - yMargins.lower
  })));
  var xScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().nice().domain(xExtent).range([options.xAxis.inverted ? width - xMargins.upper : xMargins.lower, options.xAxis.inverted ? xMargins.lower : width - xMargins.upper]);
  var xAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"](xScale);
  if (labels.length > 0) xAxis = xAxis.ticks(0);else xAxis = xAxis.tickSize(yMargins.upper + yMargins.lower - height);
  var yScale = d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().nice().domain(yExtent).range([height - yMargins.lower, yMargins.upper]);
  var yAxis = d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"](yScale).tickSize(xMargins.lower + xMargins.upper - width);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: height
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "ScatterPanel-" + panelId
  }, legend, xTitle, yTitle, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "YGrid",
    transform: "translate(0, " + (height - yMargins.lower) + ")",
    ref: function ref(node) {
      d3__WEBPACK_IMPORTED_MODULE_2__["select"](node).call(xAxis).selectAll('line').attr('stroke', options.grid.color);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "HGrid",
    transform: "translate(" + xMargins.lower + ", 0)",
    ref: function ref(node) {
      d3__WEBPACK_IMPORTED_MODULE_2__["select"](node).call(yAxis).selectAll('line').attr('stroke', options.grid.color);
    }
  }), clippath, border, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "lines",
    clipPath: "url(#grid-" + panelId + "." + width + ")"
  }, drawLines(options, fieldSets, xValues, yValues, xScale, yScale, xExtent, yExtent)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "dots"
  }, drawDots(options, fieldSets, xValues, yValues, colValues, xScale, yScale)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "labels",
    transform: "translate(0, " + (height - yMargins.lower + options.label.textSize + 3) + ")"
  }, drawLabels(options, labels, xValues, xScale))));
}

var ScatterPanel = function ScatterPanel(_a) {
  var _b, _c;

  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;

  if (((_b = data.series) === null || _b === void 0 ? void 0 : _b.length) > 0) {
    var frame = data.series[0];
    var panelId = (_c = data.request) === null || _c === void 0 ? void 0 : _c.panelId;
    var colData_1 = new Array(0);
    frame.fields.forEach(function (field) {
      var _a;

      colData_1.push(new types_ColData__WEBPACK_IMPORTED_MODULE_4__["ColData"](field.name, ((_a = field.config) === null || _a === void 0 ? void 0 : _a.displayName) || field.name, field.type, field.values.toArray().map(function (v) {
        return v;
      })));
    });

    if (colData_1.length < 2) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To get started, create a table query that returns 2 or more numeric columns"));
    }

    if (options.xAxis.col === -1 || options.fieldSets.length === 0) {
      // Nothing has been setup - call auto-config
      autoConfigure(options, colData_1);
    }

    if (options.xAxis.col >= colData_1.length) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "X Axis field setting not found in current query"));
    }

    var fieldSets = options.fieldSets.filter(function (x) {
      return x != null && (x === null || x === void 0 ? void 0 : x.col) >= 0 && (x === null || x === void 0 ? void 0 : x.col) < colData_1.length;
    });

    if (fieldSets.length === 0) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          overflow: 'hidden',
          height: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No Y Axis(s) data found in current query"));
    }

    return generateContent(options, width, height, fieldSets, colData_1, panelId);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      overflow: 'hidden',
      height: '100%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To get started, create a table query that returns 2 or more numeric columns"));
};

/***/ }),

/***/ "./editors/BorderEditor.tsx":
/*!**********************************!*\
  !*** ./editors/BorderEditor.tsx ***!
  \**********************************/
/*! exports provided: BorderEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorderEditor", function() { return BorderEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var BorderEditor = function BorderEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  var color = value.size > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterDotColor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: value.color,
    enableNamedColors: false,
    onChange: function onChange(e) {
      value.color = e;

      _onChange(value);
    }
  })) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    min: 0,
    max: 10,
    title: "Border Line width",
    value: value.size,
    onChange: function onChange(e) {
      value.size = e.target.valueAsNumber;

      _onChange(value);
    }
  })), color);
};

/***/ }),

/***/ "./editors/ExtentsEditor.tsx":
/*!***********************************!*\
  !*** ./editors/ExtentsEditor.tsx ***!
  \***********************************/
/*! exports provided: ExtentsEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtentsEditor", function() { return ExtentsEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var ExtentsEditor = function ExtentsEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterExtents"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterExtentLimit"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    value: value.min,
    title: "Axis Min (leave blank for auto)",
    onChange: function onChange(e) {
      value.min = e.target.valueAsNumber;

      _onChange(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterExtentLimit"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "ScatterExtentLimit",
    type: "number",
    value: value.max,
    title: "Axis Max (leave blank for auto)",
    onChange: function onChange(e) {
      value.max = e.target.valueAsNumber;

      _onChange(value);
    }
  })));
};

/***/ }),

/***/ "./editors/FieldSetEditor.tsx":
/*!************************************!*\
  !*** ./editors/FieldSetEditor.tsx ***!
  \************************************/
/*! exports provided: FieldSetEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSetEditor", function() { return FieldSetEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _types_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/FieldSet */ "./types/FieldSet.ts");




var randomColor = __webpack_require__(/*! randomcolor */ "../node_modules/randomcolor/randomColor.js");

var FieldSetEditor = function FieldSetEditor(_a) {
  var item = _a.item,
      _onChange = _a.onChange,
      context = _a.context;

  if (context.data && context.data.length > 0) {
    var options_1 = context.data.flatMap(function (frame) {
      return frame.fields;
    }).map(function (field, index) {
      var _a;

      return {
        label: ((_a = field.config) === null || _a === void 0 ? void 0 : _a.displayName) ? field.config.displayName : field.name,
        value: index,
        valid: field.type !== 'string'
      };
    }).filter(function (o) {
      return o.valid;
    });
    var sizeOptions_1 = Array(0);

    for (var i = 1; i < 11; i += 2) {
      sizeOptions_1.push({
        label: i,
        value: -i
      });
    }

    options_1.forEach(function (o) {
      sizeOptions_1.push(o);
    });
    var selects_1 = new Array(0);
    var values_1 = context.options.fieldSets.filter(function (x) {
      return x.col != null;
    });

    if (values_1) {
      values_1.forEach(function (val, index) {
        var lineSize = values_1[index].lineType === 'none' ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterFlex ScatterSize"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterLabel"
        }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
          type: "number",
          label: "Line Size",
          value: values_1[index].lineSize,
          min: 1,
          max: 10,
          title: "Set size of line",
          onChange: function onChange(e) {
            values_1[index].lineSize = e.target.valueAsNumber;

            _onChange(values_1);
          }
        }));
        selects_1.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "FieldSetEditor"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterFlex"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterSelect"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          isLoading: false,
          value: values_1[index].col,
          isClearable: values_1.length > 1,
          onChange: function onChange(e) {
            if (e) {
              values_1[index].col = e.value;
            } else {
              values_1.splice(index, 1);
            }

            _onChange(values_1);
          },
          options: options_1
        })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterFlex ScatterDotSize"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterLabel"
        }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterSelect"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          isLoading: false,
          value: values_1[index].sizeCol,
          isClearable: true,
          onChange: function onChange(e) {
            values_1[index].sizeCol = e ? e.value : -1;

            _onChange(values_1);
          },
          options: sizeOptions_1
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterDotColor"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
          color: values_1[index].color,
          enableNamedColors: false,
          onChange: function onChange(e) {
            values_1[index].color = e;

            _onChange(values_1);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterFlex"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterFlex ScatterLineType"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ScatterLabel"
        }, "Line"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          isLoading: false,
          value: values_1[index].lineType,
          onChange: function onChange(e) {
            values_1[index].lineType = e.value;

            _onChange(values_1);
          },
          options: [{
            label: 'None',
            value: 'none'
          }, {
            label: 'Simple',
            value: 'simple'
          }, {
            label: 'Linear',
            value: 'linear'
          }, {
            label: 'Exponential',
            value: 'exponential'
          }, {
            label: 'Power',
            value: 'power'
          }]
        })), lineSize), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)));
      });
    }

    var addButton = values_1.some(function (x) {
      return x.col === -1;
    }) ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "secondary",
      size: "sm",
      onClick: function onClick() {
        values_1.push(new _types_FieldSet__WEBPACK_IMPORTED_MODULE_2__["FieldSet"](-1, -1, randomColor(), 2, 0, 'none', false));

        _onChange(values_1);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "fa fa-plus"
    }), ' ', "Add", item.name.replace('(s)', '')), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, selects_1, addButton);
  }

  return null;
};

/***/ }),

/***/ "./editors/GridEditor.tsx":
/*!********************************!*\
  !*** ./editors/GridEditor.tsx ***!
  \********************************/
/*! exports provided: GridEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridEditor", function() { return GridEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var GridEditor = function GridEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterBorder ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterCheckbox"
  }, "Color"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterDotColor"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: value.color,
    enableNamedColors: false,
    onChange: function onChange(e) {
      value.color = e;

      _onChange(value);
    }
  }))));
};

/***/ }),

/***/ "./editors/LabelEditor.tsx":
/*!*********************************!*\
  !*** ./editors/LabelEditor.tsx ***!
  \*********************************/
/*! exports provided: LabelEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelEditor", function() { return LabelEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var LabelEditor = function LabelEditor(_a) {
  var _onChange = _a.onChange,
      context = _a.context;

  if (context.data && context.data.length > 0) {
    var label_1 = context.options.label;
    var options = context.data.flatMap(function (frame) {
      return frame.fields;
    }).map(function (field, index) {
      var _a;

      return {
        label: ((_a = field.config) === null || _a === void 0 ? void 0 : _a.displayName) ? field.config.displayName : field.name,
        value: index,
        valid: field.type === 'string'
      };
    }).filter(function (o) {
      return o.valid;
    });
    var color = label_1.col >= 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterFlex ScatterSize"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterLabel"
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "number",
      min: 1,
      max: 10,
      title: "Set size of text",
      value: label_1.textSize,
      onChange: function onChange(e) {
        label_1.textSize = e.target.valueAsNumber;

        _onChange(label_1);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "LabelColor"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      color: label_1.color,
      enableNamedColors: false,
      onChange: function onChange(e) {
        label_1.color = e;

        _onChange(label_1);
      }
    }))) : null;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "LabelEditor"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterSelect"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      isLoading: false,
      isClearable: true,
      value: label_1.col,
      onChange: function onChange(e) {
        label_1.col = e ? e.value : -1;

        _onChange(label_1);
      },
      options: options
    }))), color);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange() {},
    disabled: true
  });
};

/***/ }),

/***/ "./editors/LegendEditor.tsx":
/*!**********************************!*\
  !*** ./editors/LegendEditor.tsx ***!
  \**********************************/
/*! exports provided: LegendEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegendEditor", function() { return LegendEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var LegendEditor = function LegendEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "ScatterLegendSize",
    type: "number",
    value: value.size,
    min: 0,
    max: 10,
    title: "Legend Text Size",
    onChange: function onChange(e) {
      value.size = e.target.valueAsNumber;

      _onChange(value);
    }
  })));
};

/***/ }),

/***/ "./editors/MarginPairEditor.tsx":
/*!**************************************!*\
  !*** ./editors/MarginPairEditor.tsx ***!
  \**************************************/
/*! exports provided: MarginPairEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginPairEditor", function() { return MarginPairEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var MarginPairEditor = function MarginPairEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterMargins"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterMargin"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    value: value.lower,
    //        title="Left Margin"
    onChange: function onChange(e) {
      value.lower = e.target.valueAsNumber;

      _onChange(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterExtentLimit"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "ScatterExtentLimit",
    type: "number",
    value: value.upper,
    //        title="Right Margin"
    onChange: function onChange(e) {
      value.upper = e.target.valueAsNumber;

      _onChange(value);
    }
  })));
};

/***/ }),

/***/ "./editors/TitleEditor.tsx":
/*!*********************************!*\
  !*** ./editors/TitleEditor.tsx ***!
  \*********************************/
/*! exports provided: TitleEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleEditor", function() { return TitleEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var TitleEditor = function TitleEditor(_a) {
  var value = _a.value,
      _onChange = _a.onChange;
  var color = value.textSize > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TitleColor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: value.color,
    enableNamedColors: false,
    onChange: function onChange(e) {
      value.color = e;

      _onChange(value);
    }
  })) : null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TitleEditor"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TitleText"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "string",
    value: value.text,
    onChange: function onChange(e) {
      value.text = e.target.value;

      _onChange(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "number",
    min: 0,
    max: 10,
    title: "Set size of text",
    value: value.textSize,
    onChange: function onChange(e) {
      value.textSize = e.target.valueAsNumber;

      _onChange(value);
    }
  })), color);
};

/***/ }),

/***/ "./editors/XAxisEditor.tsx":
/*!*********************************!*\
  !*** ./editors/XAxisEditor.tsx ***!
  \*********************************/
/*! exports provided: XAxisEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XAxisEditor", function() { return XAxisEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__);


var XAxisEditor = function XAxisEditor(_a) {
  var _onChange = _a.onChange,
      context = _a.context;

  if (context.data && context.data.length > 0) {
    var xAxis_1 = context.options.xAxis;
    var options = context.data.flatMap(function (frame) {
      return frame.fields;
    }).map(function (field, index) {
      var _a;

      return {
        label: ((_a = field.config) === null || _a === void 0 ? void 0 : _a.displayName) ? field.config.displayName : field.name,
        value: index,
        valid: field.type !== 'string'
      };
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "XAxisEditor"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterSelect"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      isLoading: false,
      value: xAxis_1.col,
      onChange: function onChange(e) {
        xAxis_1.col = e.value;

        _onChange(xAxis_1);
      },
      options: options
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ScatterCheckbox",
      title: "Draw X axis right to left"
    }, "Inverted"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: xAxis_1.inverted,
      onChange: function onChange(e) {
        xAxis_1.inverted = e.currentTarget.checked;

        _onChange(xAxis_1);
      }
    }))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    onChange: function onChange() {},
    disabled: true
  });
};

/***/ }),

/***/ "./module.tsx":
/*!********************!*\
  !*** ./module.tsx ***!
  \********************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var editors_ExtentsEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! editors/ExtentsEditor */ "./editors/ExtentsEditor.tsx");
/* harmony import */ var editors_MarginPairEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! editors/MarginPairEditor */ "./editors/MarginPairEditor.tsx");
/* harmony import */ var editors_TitleEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! editors/TitleEditor */ "./editors/TitleEditor.tsx");
/* harmony import */ var editors_LabelEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! editors/LabelEditor */ "./editors/LabelEditor.tsx");
/* harmony import */ var editors_LegendEditor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! editors/LegendEditor */ "./editors/LegendEditor.tsx");
/* harmony import */ var editors_BorderEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! editors/BorderEditor */ "./editors/BorderEditor.tsx");
/* harmony import */ var editors_GridEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! editors/GridEditor */ "./editors/GridEditor.tsx");
/* harmony import */ var types_Border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! types/Border */ "./types/Border.ts");
/* harmony import */ var types_XAxis__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! types/XAxis */ "./types/XAxis.ts");
/* harmony import */ var types_MarginPair__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! types/MarginPair */ "./types/MarginPair.ts");
/* harmony import */ var types_Label__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! types/Label */ "./types/Label.ts");
/* harmony import */ var types_Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! types/Title */ "./types/Title.ts");
/* harmony import */ var types_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! types/Grid */ "./types/Grid.ts");
/* harmony import */ var types_Legend__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! types/Legend */ "./types/Legend.ts");
/* harmony import */ var types_Extents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! types/Extents */ "./types/Extents.ts");
/* harmony import */ var ScatterPanel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ScatterPanel */ "./ScatterPanel.tsx");
/* harmony import */ var editors_XAxisEditor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! editors/XAxisEditor */ "./editors/XAxisEditor.tsx");
/* harmony import */ var editors_FieldSetEditor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! editors/FieldSetEditor */ "./editors/FieldSetEditor.tsx");



















var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](ScatterPanel__WEBPACK_IMPORTED_MODULE_16__["ScatterPanel"]).setPanelOptions(function (builder) {
  builder.addCustomEditor({
    id: 'xAxis',
    path: 'xAxis',
    name: 'X Axis Field',
    category: ['X Axis'],
    editor: editors_XAxisEditor__WEBPACK_IMPORTED_MODULE_17__["XAxisEditor"],
    defaultValue: new types_XAxis__WEBPACK_IMPORTED_MODULE_9__["XAxis"](-1, false)
  });
  builder.addCustomEditor({
    id: 'xAxisExtents',
    path: 'xAxisExtents',
    name: 'X Axis Extent (Min & Max)',
    category: ['X Axis'],
    editor: editors_ExtentsEditor__WEBPACK_IMPORTED_MODULE_1__["ExtentsEditor"],
    defaultValue: new types_Extents__WEBPACK_IMPORTED_MODULE_15__["Extents"](NaN, NaN)
  });
  builder.addCustomEditor({
    id: 'xMargins',
    path: 'xMargins',
    name: 'Margins (Left & Right)',
    category: ['X Axis'],
    editor: editors_MarginPairEditor__WEBPACK_IMPORTED_MODULE_2__["MarginPairEditor"],
    defaultValue: new types_MarginPair__WEBPACK_IMPORTED_MODULE_10__["MarginPair"](30, 10)
  });
  builder.addCustomEditor({
    id: 'xAxisTitle',
    path: 'xAxisTitle',
    name: 'X Axis Title',
    category: ['X Axis'],
    editor: editors_TitleEditor__WEBPACK_IMPORTED_MODULE_3__["TitleEditor"],
    defaultValue: new types_Title__WEBPACK_IMPORTED_MODULE_12__["Title"]('', '#777', 1)
  });
  builder.addCustomEditor({
    id: 'label',
    path: 'label',
    name: 'X Axis Labels',
    category: ['X Axis'],
    editor: editors_LabelEditor__WEBPACK_IMPORTED_MODULE_4__["LabelEditor"],
    defaultValue: new types_Label__WEBPACK_IMPORTED_MODULE_11__["Label"](-1, '#CCC', 2)
  });
  builder.addCustomEditor({
    id: 'fieldSets',
    path: 'fieldSets',
    name: 'Field(s)',
    category: ['Y Axis'],
    editor: editors_FieldSetEditor__WEBPACK_IMPORTED_MODULE_18__["FieldSetEditor"],
    defaultValue: []
  });
  builder.addCustomEditor({
    id: 'yAxisExtents',
    path: 'yAxisExtents',
    name: 'Y Axis Extent (Min & Max)',
    category: ['Y Axis'],
    editor: editors_ExtentsEditor__WEBPACK_IMPORTED_MODULE_1__["ExtentsEditor"],
    defaultValue: new types_Extents__WEBPACK_IMPORTED_MODULE_15__["Extents"](NaN, NaN)
  });
  builder.addCustomEditor({
    id: 'yMargins',
    path: 'yMargins',
    name: 'Margins (Bottom & Top)',
    category: ['Y Axis'],
    editor: editors_MarginPairEditor__WEBPACK_IMPORTED_MODULE_2__["MarginPairEditor"],
    defaultValue: new types_MarginPair__WEBPACK_IMPORTED_MODULE_10__["MarginPair"](20, 20)
  });
  builder.addCustomEditor({
    id: 'yAxisTitle',
    path: 'yAxisTitle',
    name: 'Y Axis Title',
    category: ['Y Axis'],
    editor: editors_TitleEditor__WEBPACK_IMPORTED_MODULE_3__["TitleEditor"],
    defaultValue: new types_Title__WEBPACK_IMPORTED_MODULE_12__["Title"]('', '#777', 1)
  });
  builder.addBooleanSwitch({
    path: 'rotateYAxisTitle',
    name: 'Rotate Y Axis Title',
    category: ['Y Axis'],
    defaultValue: false,
    showIf: function showIf(config) {
      var _a;

      return ((_a = config.yAxisTitle.text) === null || _a === void 0 ? void 0 : _a.length) > 0;
    }
  });
  builder.addCustomEditor({
    id: 'legend',
    path: 'legend',
    name: 'Legend',
    category: ['Display'],
    editor: editors_LegendEditor__WEBPACK_IMPORTED_MODULE_5__["LegendEditor"],
    defaultValue: new types_Legend__WEBPACK_IMPORTED_MODULE_14__["Legend"](false, 3)
  });
  builder.addCustomEditor({
    id: 'grid',
    path: 'grid',
    name: 'Grid',
    category: ['Display'],
    editor: editors_GridEditor__WEBPACK_IMPORTED_MODULE_7__["GridEditor"],
    defaultValue: new types_Grid__WEBPACK_IMPORTED_MODULE_13__["Grid"]('gray')
  });
  builder.addCustomEditor({
    id: 'border',
    path: 'border',
    name: 'Border',
    category: ['Display'],
    editor: editors_BorderEditor__WEBPACK_IMPORTED_MODULE_6__["BorderEditor"],
    defaultValue: new types_Border__WEBPACK_IMPORTED_MODULE_8__["Border"]('yellow', 0)
  });
  return builder;
});

/***/ }),

/***/ "./types/Border.ts":
/*!*************************!*\
  !*** ./types/Border.ts ***!
  \*************************/
/*! exports provided: Border */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Border", function() { return Border; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Border =
/** @class */
function () {
  function Border(color, size) {
    this.color = color;
    this.size = size;
  }

  return Border;
}();



/***/ }),

/***/ "./types/ColData.ts":
/*!**************************!*\
  !*** ./types/ColData.ts ***!
  \**************************/
/*! exports provided: ColData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColData", function() { return ColData; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var ColData =
/** @class */
function () {
  function ColData(name, displayName, type, values) {
    this.name = name;
    this.displayName = displayName;
    this.type = type;
    this.values = values;
  }

  return ColData;
}();



/***/ }),

/***/ "./types/Extents.ts":
/*!**************************!*\
  !*** ./types/Extents.ts ***!
  \**************************/
/*! exports provided: Extents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extents", function() { return Extents; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Extents =
/** @class */
function () {
  function Extents(min, max) {
    this.min = min;
    this.max = max;
  }

  return Extents;
}();



/***/ }),

/***/ "./types/FieldSet.ts":
/*!***************************!*\
  !*** ./types/FieldSet.ts ***!
  \***************************/
/*! exports provided: FieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldSet", function() { return FieldSet; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var FieldSet =
/** @class */
function () {
  function FieldSet(col, sizeCol, color, dotSize, lineSize, lineType, hidden) {
    this.col = col;
    this.sizeCol = sizeCol;
    this.color = color;
    this.dotSize = dotSize;
    this.lineSize = lineSize;
    this.lineType = lineType;
    this.hidden = hidden;
  }

  return FieldSet;
}();



/***/ }),

/***/ "./types/Grid.ts":
/*!***********************!*\
  !*** ./types/Grid.ts ***!
  \***********************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Grid =
/** @class */
function () {
  function Grid(color) {
    this.color = color;
  }

  return Grid;
}();



/***/ }),

/***/ "./types/Label.ts":
/*!************************!*\
  !*** ./types/Label.ts ***!
  \************************/
/*! exports provided: Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Label =
/** @class */
function () {
  function Label(col, color, textSize) {
    this.col = col;
    this.color = color;
    this.textSize = textSize;
  }

  return Label;
}();



/***/ }),

/***/ "./types/Legend.ts":
/*!*************************!*\
  !*** ./types/Legend.ts ***!
  \*************************/
/*! exports provided: Legend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Legend", function() { return Legend; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Legend =
/** @class */
function () {
  function Legend(show, size) {
    this.show = show;
    this.size = size;
  }

  return Legend;
}();



/***/ }),

/***/ "./types/MarginPair.ts":
/*!*****************************!*\
  !*** ./types/MarginPair.ts ***!
  \*****************************/
/*! exports provided: MarginPair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarginPair", function() { return MarginPair; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var MarginPair =
/** @class */
function () {
  function MarginPair(lower, upper) {
    this.lower = lower;
    this.upper = upper;
  }

  return MarginPair;
}();



/***/ }),

/***/ "./types/Title.ts":
/*!************************!*\
  !*** ./types/Title.ts ***!
  \************************/
/*! exports provided: Title */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var Title =
/** @class */
function () {
  function Title(text, color, textSize) {
    this.text = text;
    this.color = color;
    this.textSize = textSize;
  }

  return Title;
}();



/***/ }),

/***/ "./types/XAxis.ts":
/*!************************!*\
  !*** ./types/XAxis.ts ***!
  \************************/
/*! exports provided: XAxis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XAxis", function() { return XAxis; });
/* eslint no-useless-constructor:off, no-unused-vars:off, no-empty-function:off */
var XAxis =
/** @class */
function () {
  function XAxis(col, inverted) {
    this.col = col;
    this.inverted = inverted;
  }

  return XAxis;
}();



/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map