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

/***/ "./Configs/terms-of-use-config.ts":
/*!****************************************!*\
  !*** ./Configs/terms-of-use-config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst getTermsOfUseConfig = account_settings => ({\n  agreed_tos: {\n    supported_in: ['svg', 'maltainvest'],\n    default_value: false\n  },\n  tnc_acceptance: {\n    supported_in: ['svg', 'maltainvest'],\n    default_value: false\n  },\n  resident_self_declaration: {\n    supported_in: ['maltainvest'],\n    default_value: false\n  },\n  fatca_declaration: {\n    supported_in: ['svg', 'maltainvest'],\n    default_value: String(account_settings?.fatca_declaration ?? '0')\n  }\n});\nconst termsOfUseConfig = (_ref, TermsOfUse) => {\n  let {\n    real_account_signup_target,\n    account_settings,\n    residence\n  } = _ref;\n  const active_title = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Terms of use');\n  return {\n    header: {\n      active_title: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.isDesktop)() ? active_title : null,\n      title: active_title\n    },\n    body: TermsOfUse,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, getTermsOfUseConfig(account_settings)),\n    props: {\n      real_account_signup_target,\n      is_multi_account: Boolean(String(account_settings?.fatca_declaration ?? '')),\n      residence\n    },\n    icon: 'IcDashboardTermsOfUse'\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (termsOfUseConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3Rlcm1zLW9mLXVzZS1jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29uZmlncy90ZXJtcy1vZi11c2UtY29uZmlnLnRzPzE4OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERlZmF1bHRGaWVsZHMsIGlzRGVza3RvcCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IEdldFNldHRpbmdzIH0gZnJvbSAnQGRlcml2L2FwaS10eXBlcyc7XG5cbnR5cGUgVFRlcm1zT2ZDb25maWdTZXR0aW5ncyA9IEdldFNldHRpbmdzICYgeyBmYXRjYV9kZWNsYXJhdGlvbj86IG51bWJlciB9O1xuXG5jb25zdCBnZXRUZXJtc09mVXNlQ29uZmlnID0gKGFjY291bnRfc2V0dGluZ3M6IFRUZXJtc09mQ29uZmlnU2V0dGluZ3MpID0+ICh7XG4gICAgYWdyZWVkX3Rvczoge1xuICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgdG5jX2FjY2VwdGFuY2U6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOiBmYWxzZSxcbiAgICB9LFxuICAgIHJlc2lkZW50X3NlbGZfZGVjbGFyYXRpb246IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgIGRlZmF1bHRfdmFsdWU6IGZhbHNlLFxuICAgIH0sXG4gICAgZmF0Y2FfZGVjbGFyYXRpb246IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOiBTdHJpbmcoYWNjb3VudF9zZXR0aW5ncz8uZmF0Y2FfZGVjbGFyYXRpb24gPz8gJzAnKSxcbiAgICB9LFxufSk7XG5cbmNvbnN0IHRlcm1zT2ZVc2VDb25maWcgPSAoXG4gICAge1xuICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgYWNjb3VudF9zZXR0aW5ncyxcbiAgICAgICAgcmVzaWRlbmNlLFxuICAgIH06IHsgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQ6IHN0cmluZzsgYWNjb3VudF9zZXR0aW5nczogVFRlcm1zT2ZDb25maWdTZXR0aW5nczsgcmVzaWRlbmNlPzogc3RyaW5nIH0sXG4gICAgVGVybXNPZlVzZTogUmVhY3QuQ29tcG9uZW50XG4pID0+IHtcbiAgICBjb25zdCBhY3RpdmVfdGl0bGUgPSBsb2NhbGl6ZSgnVGVybXMgb2YgdXNlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogaXNEZXNrdG9wKCkgPyBhY3RpdmVfdGl0bGUgOiBudWxsLFxuICAgICAgICAgICAgdGl0bGU6IGFjdGl2ZV90aXRsZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogVGVybXNPZlVzZSxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgZ2V0VGVybXNPZlVzZUNvbmZpZyhhY2NvdW50X3NldHRpbmdzKSksXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgICAgIGlzX211bHRpX2FjY291bnQ6IEJvb2xlYW4oU3RyaW5nKGFjY291bnRfc2V0dGluZ3M/LmZhdGNhX2RlY2xhcmF0aW9uID8/ICcnKSksXG4gICAgICAgICAgICByZXNpZGVuY2UsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246ICdJY0Rhc2hib2FyZFRlcm1zT2ZVc2UnLFxuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0ZXJtc09mVXNlQ29uZmlnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/terms-of-use-config.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/terms-of-use-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});