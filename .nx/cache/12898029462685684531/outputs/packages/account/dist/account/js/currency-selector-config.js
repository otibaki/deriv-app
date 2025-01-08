/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/shared"), require("@deriv/translations"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/shared", "@deriv/translations"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/shared"), require("@deriv/translations"));
	else
		root["@deriv/account"] = factory(root["@deriv/shared"], root["@deriv/translations"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/currency-selector-config.ts":
/*!*********************************************!*\
  !*** ./Configs/currency-selector-config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst currency_selector_config = {\n  currency: {\n    supported_in: ['maltainvest', 'svg'],\n    default_value: '',\n    rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Select an item')]]\n  }\n};\nconst currencySelectorConfig = (_ref, CurrencySelector) => {\n  let {\n    real_account_signup_target\n  } = _ref;\n  return {\n    header: {\n      active_title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Select your preferred currency'),\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Account currency')\n    },\n    body: CurrencySelector,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, currency_selector_config),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.generateValidationFunction)(real_account_signup_target, currency_selector_config)\n    },\n    passthrough: ['legal_allowed_currencies'],\n    icon: 'IcDashboardCurrency'\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currencySelectorConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLWNvbmZpZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFGQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL2N1cnJlbmN5LXNlbGVjdG9yLWNvbmZpZy50cz8xNWE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbiwgZ2V0RGVmYXVsdEZpZWxkcywgVFNjaGVtYSB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcblxuY29uc3QgY3VycmVuY3lfc2VsZWN0b3JfY29uZmlnOiBUU2NoZW1hID0ge1xuICAgIGN1cnJlbmN5OiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCcsICdzdmcnXSxcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogJycsXG4gICAgICAgIHJ1bGVzOiBbWydyZXEnLCBsb2NhbGl6ZSgnU2VsZWN0IGFuIGl0ZW0nKV1dLFxuICAgIH0sXG59O1xuXG5jb25zdCBjdXJyZW5jeVNlbGVjdG9yQ29uZmlnID0gKFxuICAgIHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQgfTogeyByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldDogc3RyaW5nIH0sXG4gICAgQ3VycmVuY3lTZWxlY3RvcjogUmVhY3QuQ29tcG9uZW50XG4pID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogbG9jYWxpemUoJ1NlbGVjdCB5b3VyIHByZWZlcnJlZCBjdXJyZW5jeScpLFxuICAgICAgICAgICAgdGl0bGU6IGxvY2FsaXplKCdBY2NvdW50IGN1cnJlbmN5JyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEN1cnJlbmN5U2VsZWN0b3IsXG4gICAgICAgIGZvcm1fdmFsdWU6IGdldERlZmF1bHRGaWVsZHMocmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsIGN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICB2YWxpZGF0ZTogZ2VuZXJhdGVWYWxpZGF0aW9uRnVuY3Rpb24ocmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsIGN1cnJlbmN5X3NlbGVjdG9yX2NvbmZpZyksXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N0aHJvdWdoOiBbJ2xlZ2FsX2FsbG93ZWRfY3VycmVuY2llcyddLFxuICAgICAgICBpY29uOiAnSWNEYXNoYm9hcmRDdXJyZW5jeScsXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGN1cnJlbmN5U2VsZWN0b3JDb25maWc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/currency-selector-config.ts\n");

/***/ }),

/***/ "@deriv/shared":
/*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/currency-selector-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});