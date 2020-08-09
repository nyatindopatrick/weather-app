/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Mitr:wght@200;300;400;500;600;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@charset \\\"UTF-8\\\";\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box; }\\n\\n#city-form {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 5px 1rem; }\\n  #city-form button {\\n    width: 100%;\\n    height: 2rem;\\n    border: none;\\n    background-color: rgba(0, 0, 0, 0.329);\\n    color: white;\\n    font-size: 1.2rem;\\n    border-radius: 4px; }\\n    #city-form button:focus {\\n      outline: none; }\\n  #city-form input[type='text'] {\\n    width: 75%;\\n    background-color: transparent;\\n    padding: 0 3px;\\n    border: none;\\n    border-bottom: 1px solid rgba(255, 255, 255, 0.342);\\n    color: white; }\\n    #city-form input[type='text']::-webkit-input-placeholder {\\n      color: white; }\\n    #city-form input[type='text']:focus {\\n      outline: none; }\\n\\n#content {\\n  background-repeat: no-repeat !important;\\n  background-color: black;\\n  background-size: cover !important;\\n  min-height: 100vh;\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  font-family: 'Mitr', sans-serif; }\\n  #content .right {\\n    backdrop-filter: blur(7px);\\n    background-color: rgba(0, 0, 0, 0.212);\\n    color: white;\\n    display: grid;\\n    align-items: center;\\n    padding: 10px; }\\n    #content .right > div {\\n      margin: 1rem; }\\n      #content .right > div button {\\n        width: 100%;\\n        margin: 5px 0;\\n        padding: 10px;\\n        border: none;\\n        background-color: rgba(0, 0, 0, 0.089);\\n        color: white;\\n        font-size: 1.2rem;\\n        border-radius: 4px; }\\n        #content .right > div button:focus {\\n          outline: none; }\\n    #content .right hr {\\n      border: 0.5px solid rgba(192, 192, 192, 0.342); }\\n    #content .right .w-details p {\\n      display: flex;\\n      justify-content: space-between;\\n      padding: 10px; }\\n    #content .right .w-details h2 {\\n      font-size: 1.3rem;\\n      text-align: center; }\\n  #content .left {\\n    padding: 1rem 4rem;\\n    color: white;\\n    position: relative; }\\n    #content .left .tempdata {\\n      position: absolute;\\n      bottom: 5rem;\\n      display: flex;\\n      align-items: center;\\n      font-size: 2rem; }\\n      #content .left .tempdata > div {\\n        margin: 0 1rem; }\\n      #content .left .tempdata h1 {\\n        font-size: 5rem;\\n        font-weight: 700; }\\n      #content .left .tempdata small {\\n        font-size: 1rem; }\\n      #content .left .tempdata .citydate {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: center;\\n        align-items: center; }\\n\\n.switch {\\n  position: relative;\\n  display: inline-block;\\n  width: 50px;\\n  height: 28px; }\\n\\n/* Hide default HTML checkbox */\\n.switch input {\\n  opacity: 0;\\n  width: 0;\\n  height: 0; }\\n\\n/* The slider */\\n.slider {\\n  position: absolute;\\n  cursor: pointer;\\n  top: 0;\\n  left: 0;\\n  right: -3px;\\n  bottom: 0;\\n  background-color: #ccc;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s; }\\n  .slider::after {\\n    content: \\\"°C\\\";\\n    position: absolute;\\n    display: flex;\\n    align-items: center;\\n    right: 5px; }\\n\\n.slider::before {\\n  position: absolute;\\n  content: '';\\n  height: 20px;\\n  width: 20px;\\n  left: 4px;\\n  bottom: 4px;\\n  background-color: white;\\n  -webkit-transition: 0.4s;\\n  transition: 0.4s; }\\n\\ninput:checked + .slider {\\n  background-color: #2196f3; }\\n  input:checked + .slider::after {\\n    content: \\\"°F\\\";\\n    display: flex;\\n    align-items: center;\\n    position: absolute;\\n    left: 5px; }\\n\\ninput:focus + .slider {\\n  box-shadow: 0 0 1px #2196f3; }\\n\\ninput:checked + .slider::before {\\n  -webkit-transform: translateX(26px);\\n  -ms-transform: translateX(26px);\\n  transform: translateX(26px); }\\n\\n.slider.round {\\n  border-radius: 34px; }\\n  .slider.round::before {\\n    border-radius: 50%; }\\n\\n.input-group {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  margin: 10px 0; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: init, dateUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateUpdate\", function() { return dateUpdate; });\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\nconst dateUpdate = () => {\n  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];\n  const d = new Date(new Date().toString());\n  const dayName = days[d.getDay()];\n  const dateTimeFormat = new Intl.DateTimeFormat('en', {\n    year: 'numeric',\n    month: 'short',\n    day: '2-digit'\n  });\n  const [{\n    value: month\n  },, {\n    value: day\n  },, {\n    value: year\n  }] = dateTimeFormat.formatToParts(d);\n  return `${dayName}, ${month} ${day} '${year.substring(2)}`;\n};\n\nconst init = (input, unit) => {\n  const measurement = unit === 'metric' ? 'C' : 'F';\n  const {\n    main,\n    weather,\n    name,\n    clouds,\n    wind\n  } = input;\n  const temperature = `${Math.round(main.temp)}\\xB0${measurement}`;\n  Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"leftDiv\"])(temperature, name, dateUpdate(), weather[0].main, weather[0].icon);\n  Object(_view__WEBPACK_IMPORTED_MODULE_0__[\"wDetails\"])(clouds.all, wind.speed, main.humidity);\n};\n\n\n\n//# sourceURL=webpack:///./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\n\n\n\n\nconst checkWeather = (item = 'Kisumu', units = 'metric') => new _weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](item, units);\n\nconst getTown = () => {\n  fetch('https://ipapi.co/json/').then(res => res.json()).then(res => checkWeather(res.city).getWeather());\n};\n\ngetTown();\n[_view__WEBPACK_IMPORTED_MODULE_2__[\"left\"], _view__WEBPACK_IMPORTED_MODULE_2__[\"right\"]].forEach(item => _view__WEBPACK_IMPORTED_MODULE_2__[\"content\"].appendChild(item));\n_util__WEBPACK_IMPORTED_MODULE_3__[\"form\"].addEventListener('submit', e => {\n  e.preventDefault();\n  const tempUnit = _util__WEBPACK_IMPORTED_MODULE_3__[\"unit\"].checked ? 'imperial' : 'metric';\n  checkWeather(_util__WEBPACK_IMPORTED_MODULE_3__[\"cityInput\"].value, tempUnit).getWeather();\n  _util__WEBPACK_IMPORTED_MODULE_3__[\"form\"].reset();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: content, left, right, tcity, tempData, cityDateDiv, dateTag, weatherDiv, iconTag, weatherText, hr, weatherDetails, detailsHead, humidity, humidSpan, wind, windSpan, cloud, cloudSpan, deg, form, cityInput, submit, unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"left\", function() { return left; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"right\", function() { return right; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tcity\", function() { return tcity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tempData\", function() { return tempData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityDateDiv\", function() { return cityDateDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dateTag\", function() { return dateTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherDiv\", function() { return weatherDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iconTag\", function() { return iconTag; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherText\", function() { return weatherText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hr\", function() { return hr; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weatherDetails\", function() { return weatherDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detailsHead\", function() { return detailsHead; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humidity\", function() { return humidity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"humidSpan\", function() { return humidSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wind\", function() { return wind; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"windSpan\", function() { return windSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloud\", function() { return cloud; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloudSpan\", function() { return cloudSpan; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deg\", function() { return deg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"form\", function() { return form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cityInput\", function() { return cityInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"submit\", function() { return submit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"unit\", function() { return unit; });\nconst tags = tag => document.createElement(tag);\n\nconst content = document.getElementById('content');\nconst left = tags('div');\nconst right = tags('div');\nconst tcity = tags('div');\nconst tempData = tags('div');\nconst cityDateDiv = tags('div');\nconst dateTag = tags('small');\nconst weatherDiv = tags('div');\nconst iconTag = tags('img');\nconst weatherText = tags('small');\nconst hr = tags('hr');\nconst weatherDetails = tags('div');\nconst detailsHead = tags('h2');\nconst humidity = tags('p');\nconst humidSpan = tags('span');\nconst wind = tags('p');\nconst windSpan = tags('span');\nconst cloud = tags('p');\nconst cloudSpan = tags('span');\nconst deg = tags('h1');\nconst form = tags('form');\nconst cityInput = tags('input');\nconst unit = tags('input');\nconst label = tags('label');\nconst slider = tags('span');\nconst submit = tags('button');\nconst inputGroup = tags('div');\ntempData.className = 'tempdata';\nleft.className = 'left';\nright.className = 'right';\ncityDateDiv.className = 'citydate';\nweatherDiv.className = 'citydate';\nright.id = 'right';\nlabel.className = 'switch';\nunit.type = 'checkbox';\nslider.className = 'slider round';\ninputGroup.className = 'input-group';\n[unit, slider].forEach(item => label.appendChild(item));\n[cityInput, label].forEach(item => inputGroup.appendChild(item));\n[inputGroup, submit].forEach(item => form.appendChild(item));\nform.id = 'city-form';\ncityInput.id = 'city';\ncityInput.type = 'text';\ncityInput.placeholder = 'Enter city';\nsubmit.type = 'submit';\nsubmit.innerText = 'Search';\nweatherDetails.className = 'w-details';\ndetailsHead.innerText = 'Weather Details';\nhumidity.innerText = 'Humidity';\nwind.innerText = 'Wind';\ncloud.innerText = 'Cloud';\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: leftDiv, left, right, wDetails, content */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftDiv\", function() { return leftDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wDetails\", function() { return wDetails; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"left\", function() { return _util__WEBPACK_IMPORTED_MODULE_0__[\"left\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"right\", function() { return _util__WEBPACK_IMPORTED_MODULE_0__[\"right\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"content\", function() { return _util__WEBPACK_IMPORTED_MODULE_0__[\"content\"]; });\n\n\n_util__WEBPACK_IMPORTED_MODULE_0__[\"right\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"form\"]);\n_util__WEBPACK_IMPORTED_MODULE_0__[\"right\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"hr\"]);\n\nconst wDetails = (clouds, winds, humids) => {\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"humidSpan\"].innerText = `${humids}%`;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"cloudSpan\"].innerText = `${clouds}%`;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"windSpan\"].innerText = `${winds}km/h`;\n};\n\n_util__WEBPACK_IMPORTED_MODULE_0__[\"humidity\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"humidSpan\"]);\n_util__WEBPACK_IMPORTED_MODULE_0__[\"wind\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"windSpan\"]);\n_util__WEBPACK_IMPORTED_MODULE_0__[\"cloud\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"cloudSpan\"]);\n[_util__WEBPACK_IMPORTED_MODULE_0__[\"detailsHead\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"cloud\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"humidity\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"wind\"]].forEach(item => _util__WEBPACK_IMPORTED_MODULE_0__[\"weatherDetails\"].appendChild(item));\n_util__WEBPACK_IMPORTED_MODULE_0__[\"right\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"weatherDetails\"]);\n\nconst changeBackground = climate => {\n  const gradient = 'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.35))';\n  const images = ['https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1595884589048-639ac0efef99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1506588345361-5e12b7840845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80', 'https://images.unsplash.com/photo-1532178910-7815d6919875?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80'];\n\n  switch (climate.toLowerCase()) {\n    case 'clouds':\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"content\"].style = `background-image: ${gradient},url(${images[3]})`;\n      break;\n\n    case 'rain':\n    case 'drizzle':\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"content\"].style = `background-image: ${gradient},url(${images[0]})`;\n      break;\n\n    case 'clear':\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"content\"].style = `background-image: ${gradient},url(${images[2]})`;\n      break;\n\n    default:\n      _util__WEBPACK_IMPORTED_MODULE_0__[\"content\"].style = `background-image: ${gradient},url(${images[1]})`;\n  }\n};\n\nconst leftDiv = (temperature, city, date, climate, icon) => {\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"deg\"].innerText = temperature;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"tcity\"].innerText = city;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"dateTag\"].innerText = date;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"iconTag\"].src = `http://openweathermap.org/img/w/${icon}.png`;\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"weatherText\"].innerText = climate;\n  [_util__WEBPACK_IMPORTED_MODULE_0__[\"tcity\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"dateTag\"]].forEach(item => _util__WEBPACK_IMPORTED_MODULE_0__[\"cityDateDiv\"].appendChild(item));\n  [_util__WEBPACK_IMPORTED_MODULE_0__[\"iconTag\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"weatherText\"]].forEach(item => _util__WEBPACK_IMPORTED_MODULE_0__[\"weatherDiv\"].appendChild(item));\n  [_util__WEBPACK_IMPORTED_MODULE_0__[\"deg\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"cityDateDiv\"], _util__WEBPACK_IMPORTED_MODULE_0__[\"weatherDiv\"]].forEach(item => _util__WEBPACK_IMPORTED_MODULE_0__[\"tempData\"].appendChild(item));\n  _util__WEBPACK_IMPORTED_MODULE_0__[\"left\"].appendChild(_util__WEBPACK_IMPORTED_MODULE_0__[\"tempData\"]);\n  changeBackground(climate);\n};\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\n\nclass Weather {\n  constructor(location, unit) {\n    this.location = location;\n    this.unit = unit;\n  }\n\n  getWeather() {\n    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.location}&units=${this.unit}&appid=b8bb1a362f05a8f7c8e8175617da6b69`).then(res => res.json()).then(res => Object(_data__WEBPACK_IMPORTED_MODULE_0__[\"init\"])(res, this.unit)).catch(err => err.message);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/weather.js?");

/***/ })

/******/ });