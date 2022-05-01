/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Styles/navbar.css":
/*!***************************!*\
  !*** ./Styles/navbar.css ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> #navbar{\\n|     display:flex;\\n|     justify-content: space-between;\");\n\n//# sourceURL=webpack://day-14rewatch/./Styles/navbar.css?");

/***/ }),

/***/ "./components/fetch.js":
/*!*****************************!*\
  !*** ./components/fetch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"append\": () => (/* binding */ append),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\nconst getData = async(url)=>{\r\n    let res = await fetch(url);\r\n    let data = await res.json()\r\n    return data\r\n}\r\n\r\nlet append = (data,container)=>{\r\n    console.log(data)\r\n    data.forEach((el)=>{\r\n        let p = document.createElement('p')\r\n        p.innerText = el.title\r\n        container.append(p)\r\n    })\r\n}\r\n\r\n\n\n//# sourceURL=webpack://day-14rewatch/./components/fetch.js?");

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navbar (){\r\n\r\n    return `\r\n    <h3><a href=\"index.html\">Home</a></h3>\r\n    <div id=\"options\">\r\n        <h3>\r\n            <a href=\"jewellery.html\">Jewellery</a>\r\n        </h3>\r\n        <h3>\r\n            <a href=\"./electronic.html\">Electronic</a>\r\n        </h3>\r\n        <h3>\r\n            <a href=\"login.html\">Login</a>\r\n        </h3>\r\n        <h3>\r\n            <a href=\"signup.html\">Signup</a>\r\n        </h3>\r\n    </div>`\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://day-14rewatch/./components/navbar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _Styles_navbar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Styles/navbar.css */ \"./Styles/navbar.css\");\n/* harmony import */ var _Styles_navbar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Styles_navbar_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_fetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fetch.js */ \"./components/fetch.js\");\n\r\n// console.log(navbar)\r\n\r\nlet navbar_div = document.getElementById(\"navbar\")\r\nnavbar_div.innerHTML= (0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\nlet url = \"https://fakestoreapi.com/products/category/electronics\";\r\nlet container = document.getElementById(\"products\")\r\n\r\n;\r\n\r\n(0,_components_fetch_js__WEBPACK_IMPORTED_MODULE_2__.getData)(url).then((res)=>{\r\n    (0,_components_fetch_js__WEBPACK_IMPORTED_MODULE_2__.append)(res,container)\r\n})\n\n//# sourceURL=webpack://day-14rewatch/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;