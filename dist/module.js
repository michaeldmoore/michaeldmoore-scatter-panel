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

/***/ "../node_modules/regression/dist/regression.js":
/*!*****************************************************!*\
  !*** ../node_modules/regression/dist/regression.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (module) {
  'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var DEFAULT_OPTIONS = { order: 2, precision: 2, period: null };

  /**
  * Determine the coefficient of determination (r^2) of a fit from the observations
  * and predictions.
  *
  * @param {Array<Array<number>>} data - Pairs of observed x-y values
  * @param {Array<Array<number>>} results - Pairs of observed predicted x-y values
  *
  * @return {number} - The r^2 value, or NaN if one cannot be calculated.
  */
  function determinationCoefficient(data, results) {
    var predictions = [];
    var observations = [];

    data.forEach(function (d, i) {
      if (d[1] !== null) {
        observations.push(d);
        predictions.push(results[i]);
      }
    });

    var sum = observations.reduce(function (a, observation) {
      return a + observation[1];
    }, 0);
    var mean = sum / observations.length;

    var ssyy = observations.reduce(function (a, observation) {
      var difference = observation[1] - mean;
      return a + difference * difference;
    }, 0);

    var sse = observations.reduce(function (accum, observation, index) {
      var prediction = predictions[index];
      var residual = observation[1] - prediction[1];
      return accum + residual * residual;
    }, 0);

    return 1 - sse / ssyy;
  }

  /**
  * Determine the solution of a system of linear equations A * x = b using
  * Gaussian elimination.
  *
  * @param {Array<Array<number>>} input - A 2-d matrix of data in row-major form [ A | b ]
  * @param {number} order - How many degrees to solve for
  *
  * @return {Array<number>} - Vector of normalized solution coefficients matrix (x)
  */
  function gaussianElimination(input, order) {
    var matrix = input;
    var n = input.length - 1;
    var coefficients = [order];

    for (var i = 0; i < n; i++) {
      var maxrow = i;
      for (var j = i + 1; j < n; j++) {
        if (Math.abs(matrix[i][j]) > Math.abs(matrix[i][maxrow])) {
          maxrow = j;
        }
      }

      for (var k = i; k < n + 1; k++) {
        var tmp = matrix[k][i];
        matrix[k][i] = matrix[k][maxrow];
        matrix[k][maxrow] = tmp;
      }

      for (var _j = i + 1; _j < n; _j++) {
        for (var _k = n; _k >= i; _k--) {
          matrix[_k][_j] -= matrix[_k][i] * matrix[i][_j] / matrix[i][i];
        }
      }
    }

    for (var _j2 = n - 1; _j2 >= 0; _j2--) {
      var total = 0;
      for (var _k2 = _j2 + 1; _k2 < n; _k2++) {
        total += matrix[_k2][_j2] * coefficients[_k2];
      }

      coefficients[_j2] = (matrix[n][_j2] - total) / matrix[_j2][_j2];
    }

    return coefficients;
  }

  /**
  * Round a number to a precision, specificed in number of decimal places
  *
  * @param {number} number - The number to round
  * @param {number} precision - The number of decimal places to round to:
  *                             > 0 means decimals, < 0 means powers of 10
  *
  *
  * @return {numbr} - The number, rounded
  */
  function round(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  /**
  * The set of all fitting methods
  *
  * @namespace
  */
  var methods = {
    linear: function linear(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = 0;

      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          len++;
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0];
          sum[3] += data[n][0] * data[n][1];
          sum[4] += data[n][1] * data[n][1];
        }
      }

      var run = len * sum[2] - sum[0] * sum[0];
      var rise = len * sum[3] - sum[0] * sum[1];
      var gradient = run === 0 ? 0 : round(rise / run, options.precision);
      var intercept = round(sum[1] / len - gradient * sum[0] / len, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(gradient * x + intercept, options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [gradient, intercept],
        r2: round(determinationCoefficient(data, points), options.precision),
        string: intercept === 0 ? 'y = ' + gradient + 'x' : 'y = ' + gradient + 'x + ' + intercept
      };
    },
    exponential: function exponential(data, options) {
      var sum = [0, 0, 0, 0, 0, 0];

      for (var n = 0; n < data.length; n++) {
        if (data[n][1] !== null) {
          sum[0] += data[n][0];
          sum[1] += data[n][1];
          sum[2] += data[n][0] * data[n][0] * data[n][1];
          sum[3] += data[n][1] * Math.log(data[n][1]);
          sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
          sum[5] += data[n][0] * data[n][1];
        }
      }

      var denominator = sum[1] * sum[2] - sum[5] * sum[5];
      var a = Math.exp((sum[2] * sum[3] - sum[5] * sum[4]) / denominator);
      var b = (sum[1] * sum[4] - sum[5] * sum[3]) / denominator;
      var coeffA = round(a, options.precision);
      var coeffB = round(b, options.precision);
      var predict = function predict(x) {
        return [round(x, options.precision), round(coeffA * Math.exp(coeffB * x), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'e^(' + coeffB + 'x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    logarithmic: function logarithmic(data, options) {
      var sum = [0, 0, 0, 0];
      var len = data.length;

      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += data[n][1] * Math.log(data[n][0]);
          sum[2] += data[n][1];
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }

      var a = (len * sum[1] - sum[2] * sum[0]) / (len * sum[3] - sum[0] * sum[0]);
      var coeffB = round(a, options.precision);
      var coeffA = round((sum[2] - coeffB * sum[0]) / len, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA + coeffB * Math.log(x), options.precision), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + ' + ' + coeffB + ' ln(x)',
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    power: function power(data, options) {
      var sum = [0, 0, 0, 0, 0];
      var len = data.length;

      for (var n = 0; n < len; n++) {
        if (data[n][1] !== null) {
          sum[0] += Math.log(data[n][0]);
          sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
          sum[2] += Math.log(data[n][1]);
          sum[3] += Math.pow(Math.log(data[n][0]), 2);
        }
      }

      var b = (len * sum[1] - sum[0] * sum[2]) / (len * sum[3] - Math.pow(sum[0], 2));
      var a = (sum[2] - b * sum[0]) / len;
      var coeffA = round(Math.exp(a), options.precision);
      var coeffB = round(b, options.precision);

      var predict = function predict(x) {
        return [round(x, options.precision), round(round(coeffA * Math.pow(x, coeffB), options.precision), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      return {
        points: points,
        predict: predict,
        equation: [coeffA, coeffB],
        string: 'y = ' + coeffA + 'x^' + coeffB,
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    },
    polynomial: function polynomial(data, options) {
      var lhs = [];
      var rhs = [];
      var a = 0;
      var b = 0;
      var len = data.length;
      var k = options.order + 1;

      for (var i = 0; i < k; i++) {
        for (var l = 0; l < len; l++) {
          if (data[l][1] !== null) {
            a += Math.pow(data[l][0], i) * data[l][1];
          }
        }

        lhs.push(a);
        a = 0;

        var c = [];
        for (var j = 0; j < k; j++) {
          for (var _l = 0; _l < len; _l++) {
            if (data[_l][1] !== null) {
              b += Math.pow(data[_l][0], i + j);
            }
          }
          c.push(b);
          b = 0;
        }
        rhs.push(c);
      }
      rhs.push(lhs);

      var coefficients = gaussianElimination(rhs, k).map(function (v) {
        return round(v, options.precision);
      });

      var predict = function predict(x) {
        return [round(x, options.precision), round(coefficients.reduce(function (sum, coeff, power) {
          return sum + coeff * Math.pow(x, power);
        }, 0), options.precision)];
      };

      var points = data.map(function (point) {
        return predict(point[0]);
      });

      var string = 'y = ';
      for (var _i = coefficients.length - 1; _i >= 0; _i--) {
        if (_i > 1) {
          string += coefficients[_i] + 'x^' + _i + ' + ';
        } else if (_i === 1) {
          string += coefficients[_i] + 'x + ';
        } else {
          string += coefficients[_i];
        }
      }

      return {
        string: string,
        points: points,
        predict: predict,
        equation: [].concat(_toConsumableArray(coefficients)).reverse(),
        r2: round(determinationCoefficient(data, points), options.precision)
      };
    }
  };

  function createWrapper() {
    var reduce = function reduce(accumulator, name) {
      return _extends({
        _round: round
      }, accumulator, _defineProperty({}, name, function (data, supplied) {
        return methods[name](data, _extends({}, DEFAULT_OPTIONS, supplied));
      }));
    };

    return Object.keys(methods).reduce(reduce, {});
  }

  module.exports = createWrapper();
});


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
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regression */ "../node_modules/regression/dist/regression.js");
/* harmony import */ var regression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regression__WEBPACK_IMPORTED_MODULE_3__);
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
/*
function evaluateYLinear(reg: regression.Result, x: number) {
  return (reg.equation[0] * x) + reg.equation[1];
}

function evaluateXLinear(reg: regression.Result, y: number) {
  return (y - reg.equation[1]) / reg.equation[0];
}

function evaluateYExponential(reg: regression.Result, x: number) {
  return reg.equation[0] * Math.exp(reg.equation[1] * x);
}

function evaluateYPower(reg: regression.Result, x: number) {
  return reg.equation[0] * (x ** reg.equation[1]);
}
*/


function getRegression(method, xyData) {
  if (method === 'exponential') {
    return regression__WEBPACK_IMPORTED_MODULE_3___default.a.exponential(xyData);
  }

  if (method === 'power') {
    return regression__WEBPACK_IMPORTED_MODULE_3___default.a.power(xyData);
  }

  return regression__WEBPACK_IMPORTED_MODULE_3___default.a.linear(xyData);
}

function evaluate(method, reg, val) {
  if (method === 'exponential') {
    return reg.equation[0] * Math.exp(reg.equation[1] * val);
  }

  if (method === 'power') {
    return reg.equation[0] * Math.pow(val, reg.equation[1]);
  }

  if (method === 'XLinear') {
    return (val - reg.equation[1]) / reg.equation[0];
  } // must be "YLinear":


  return reg.equation[0] * val + reg.equation[1];
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
        var reg = getRegression(fieldSet.lineType, xyData); // check for start and end points inside the plotted area

        var x0 = xExtent[0];
        var y0 = evaluate('YLinear', reg, x0);

        if (y0 < yExtent[0]) {
          y0 = yExtent[0];
          x0 = evaluate('XLinear', reg, y0);
        }

        if (y0 > yExtent[1]) {
          y0 = yExtent[1];
          x0 = evaluate('XLinear', reg, y0);
        }

        var x1 = xExtent[1];
        var y1 = evaluate('YLinear', reg, x1);

        if (y1 < yExtent[0]) {
          y1 = yExtent[0];
          x1 = evaluate('XLinear', reg, y1);
        }

        if (y1 > yExtent[1]) {
          y1 = yExtent[1];
          x1 = evaluate('XLinear', reg, y1);
        }

        path = "M " + xScale(x0) + " " + yScale(y0) + " L " + xScale(x1) + " " + yScale(y1);
      } else {
        if (fieldSet.lineType === 'power') xyData = xyData.filter(function (d) {
          return d[0] > 0;
        });
        var reg = getRegression(fieldSet.lineType, xyData);
        var x0 = xExtent[0];
        var x1 = xExtent[1];
        var steps = 100;
        var dx = (x1 - x0) / (steps - 1);
        var xys = new Array(0);

        for (var i = 0; i < steps; i++) {
          var x = x0 + i * dx;

          if (fieldSet.lineType !== 'power' || x > 0) {
            var y = evaluate(fieldSet.lineType, reg, x);
            xys.push([x, y]);
          }
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
      var dotSize = y.sizeCol >= 0 ? colValues[y.sizeCol][j] : -y.sizeCol; // y.dotSize;

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
    if (i < labels.length) {
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
  var labels = options.label.col >= 0 ? colValues[options.label.col] : [];
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
  if (options.label.col >= 0) xAxis = xAxis.ticks(0);else xAxis = xAxis.tickSize(yMargins.upper + yMargins.lower - height);
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
  var color = value.size > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterDotColor"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: value.color,
    enableNamedColors: false,
    onChange: function onChange(e) {
      value.color = e;

      _onChange(value);
    }
  })) : null;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
        valid: field.type !== "string"
      };
    }).filter(function (o) {
      return o.valid;
    });
    var sizeOptions = Array(0);

    for (var i = 1; i < 11; i += 2) {
      sizeOptions.push({
        label: i,
        value: -i
      });
    }

    options_1.forEach(function (o) {
      sizeOptions.push(o);
    });
    var selects_1 = new Array(0);
    var values_1 = context.options.fieldSets.filter(function (x) {
      return x.col != null;
    });

    if (values_1) {
      values_1.forEach(function (val, index) {
        var lineSize = values_1[index].lineType === 'none' ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterFlex ScatterSize"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterLabel"
        }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
        selects_1.push(react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "FieldSetEditor"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterFlex"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterSelect"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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
        })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterFlex ScatterDotSize"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterLabel"
        }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterSelect"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
          isLoading: false,
          value: values_1[index].sizeCol,
          isClearable: true,
          onChange: function onChange(e) {
            values_1[index].sizeCol = e ? e.value : -1;

            _onChange(values_1);
          },
          options: sizeOptions
        }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterDotColor"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
          color: values_1[index].color,
          enableNamedColors: false,
          onChange: function onChange(e) {
            values_1[index].color = e;

            _onChange(values_1);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterFlex"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterFlex ScatterLineType"
        }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: "ScatterLabel"
        }, "Line"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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
        })), lineSize), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null)));
      });
    }

    var addButton = values_1.some(function (x) {
      return x.col === -1;
    }) ? null : react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "secondary",
      size: "sm",
      onClick: function onClick() {
        values_1.push(new _types_FieldSet__WEBPACK_IMPORTED_MODULE_2__["FieldSet"](-1, -1, randomColor(), 2, 0, 'none', false));

        _onChange(values_1);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("i", {
      className: "fa fa-plus"
    }), ' ', "Add", item.name.replace('(s)', '')), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", null));
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, selects_1, addButton);
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
        valid: field.type === "string"
      };
    }).filter(function (o) {
      return o.valid;
    });
    var color = label_1.col >= 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterFlex ScatterSize"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterLabel"
    }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "number",
      min: 1,
      max: 10,
      title: "Set size of text",
      value: label_1.textSize,
      onChange: function onChange(e) {
        label_1.textSize = e.target.valueAsNumber;

        _onChange(label_1);
      }
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "LabelColor"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      color: label_1.color,
      enableNamedColors: false,
      onChange: function onChange(e) {
        label_1.color = e;

        _onChange(label_1);
      }
    }))) : null;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "LabelEditor"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterSelect"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
  var color = value.textSize > 0 ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "TitleColor"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: value.color,
    enableNamedColors: false,
    onChange: function onChange(e) {
      value.color = e;

      _onChange(value);
    }
  })) : null;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "TitleEditor"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "TitleText"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "string",
    value: value.text,
    onChange: function onChange(e) {
      value.text = e.target.value;

      _onChange(value);
    }
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterFlex ScatterSize"
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "ScatterLabel"
  }, "Size"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
        valid: field.type !== "string"
      };
    }); //      .filter(o => o.valid);

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "XAxisEditor"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterSelect"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      isLoading: false,
      value: xAxis_1.col,
      onChange: function onChange(e) {
        xAxis_1.col = e.value;

        _onChange(xAxis_1);
      },
      options: options
    })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterFlex"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      className: "ScatterCheckbox",
      title: "Draw X axis right to left"
    }, "Inverted"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      value: xAxis_1.inverted,
      onChange: function onChange(e) {
        xAxis_1.inverted = e.currentTarget.checked;

        _onChange(xAxis_1);
      }
    }))));
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Select"], {
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