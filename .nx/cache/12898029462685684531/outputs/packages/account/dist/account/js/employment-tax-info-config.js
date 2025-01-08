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
		module.exports = factory(require("@deriv-com/translations"), require("@deriv/shared"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv-com/translations", "@deriv/shared"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv-com/translations"), require("@deriv/shared"));
	else
		root["@deriv/account"] = factory(root["@deriv-com/translations"], root["@deriv/shared"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_com_translations__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Configs/employment-tax-info-config.ts":
/*!***********************************************!*\
  !*** ./Configs/employment-tax-info-config.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deriv_com_translations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv-com/translations */ \"@deriv-com/translations\");\n/* harmony import */ var _deriv_com_translations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_com_translations__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst generateEmploymentTaxInfoFormValues = _ref => {\n  let {\n    account_settings,\n    residence_list\n  } = _ref;\n  return {\n    employment_status: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.employment_status ?? ''\n    },\n    tax_residence: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: (account_settings?.tax_residence ? residence_list.find(item => item.value === account_settings?.tax_residence)?.text : account_settings?.residence) || ''\n    },\n    tax_identification_number: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.tax_identification_number ?? ''\n    },\n    tax_identification_confirm: {\n      default_value: false,\n      supported_in: ['svg', 'maltainvest']\n    },\n    tin_skipped: {\n      default_value: 0,\n      supported_in: ['svg', 'maltainvest']\n    }\n  };\n};\nconst getEmploymentTaxInfoConfig = (_ref2, component) => {\n  let {\n    account_settings,\n    residence_list,\n    real_account_signup_target\n  } = _ref2;\n  const config = generateEmploymentTaxInfoFormValues({\n    account_settings,\n    residence_list\n  });\n  return {\n    header: {\n      active_title: (0,_deriv_com_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Complete your employment and tax information details'),\n      title: (0,_deriv_com_translations__WEBPACK_IMPORTED_MODULE_0__.localize)('Employment and tax information')\n    },\n    body: component,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_1__.getDefaultFields)(real_account_signup_target, config),\n    props: {\n      disabled_items: account_settings?.immutable_fields,\n      real_account_signup_target\n    },\n    passthrough: ['residence_list']\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEmploymentTaxInfoConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2VtcGxveW1lbnQtdGF4LWluZm8tY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTtBQU9BO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbmZpZ3MvZW1wbG95bWVudC10YXgtaW5mby1jb25maWcudHM/NDQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi1jb20vdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IEdldFNldHRpbmdzLCBSZXNpZGVuY2VMaXN0IH0gZnJvbSAnQGRlcml2L2FwaS10eXBlcyc7XG5pbXBvcnQgeyBUU2NoZW1hLCBnZXREZWZhdWx0RmllbGRzIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5cbnR5cGUgVEVtcGxveW1lbnRUYXhJbmZvQ29uZmlnUHJvcHMgPSB7XG4gICAgYWNjb3VudF9zZXR0aW5nczogR2V0U2V0dGluZ3M7XG4gICAgcmVzaWRlbmNlX2xpc3Q6IFJlc2lkZW5jZUxpc3Q7XG59O1xuXG5jb25zdCBnZW5lcmF0ZUVtcGxveW1lbnRUYXhJbmZvRm9ybVZhbHVlcyA9ICh7XG4gICAgYWNjb3VudF9zZXR0aW5ncyxcbiAgICByZXNpZGVuY2VfbGlzdCxcbn06IFRFbXBsb3ltZW50VGF4SW5mb0NvbmZpZ1Byb3BzKTogVFNjaGVtYSA9PiAoe1xuICAgIGVtcGxveW1lbnRfc3RhdHVzOiB7XG4gICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5lbXBsb3ltZW50X3N0YXR1cyA/PyAnJyxcbiAgICB9LFxuICAgIHRheF9yZXNpZGVuY2U6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOlxuICAgICAgICAgICAgKGFjY291bnRfc2V0dGluZ3M/LnRheF9yZXNpZGVuY2VcbiAgICAgICAgICAgICAgICA/IHJlc2lkZW5jZV9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBhY2NvdW50X3NldHRpbmdzPy50YXhfcmVzaWRlbmNlKT8udGV4dFxuICAgICAgICAgICAgICAgIDogYWNjb3VudF9zZXR0aW5ncz8ucmVzaWRlbmNlKSB8fCAnJyxcbiAgICB9LFxuICAgIHRheF9pZGVudGlmaWNhdGlvbl9udW1iZXI6IHtcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLnRheF9pZGVudGlmaWNhdGlvbl9udW1iZXIgPz8gJycsXG4gICAgfSxcbiAgICB0YXhfaWRlbnRpZmljYXRpb25fY29uZmlybToge1xuICAgICAgICBkZWZhdWx0X3ZhbHVlOiBmYWxzZSxcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgIH0sXG4gICAgdGluX3NraXBwZWQ6IHtcbiAgICAgICAgZGVmYXVsdF92YWx1ZTogMCxcbiAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgIH0sXG59KTtcblxuY29uc3QgZ2V0RW1wbG95bWVudFRheEluZm9Db25maWcgPSAoXG4gICAge1xuICAgICAgICBhY2NvdW50X3NldHRpbmdzLFxuICAgICAgICByZXNpZGVuY2VfbGlzdCxcbiAgICAgICAgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsXG4gICAgfTogVEVtcGxveW1lbnRUYXhJbmZvQ29uZmlnUHJvcHMgJiB7IHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0OiBzdHJpbmcgfSxcbiAgICBjb21wb25lbnQ6IFJlYWN0LkNvbXBvbmVudFxuKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gZ2VuZXJhdGVFbXBsb3ltZW50VGF4SW5mb0Zvcm1WYWx1ZXMoeyBhY2NvdW50X3NldHRpbmdzLCByZXNpZGVuY2VfbGlzdCB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogbG9jYWxpemUoJ0NvbXBsZXRlIHlvdXIgZW1wbG95bWVudCBhbmQgdGF4IGluZm9ybWF0aW9uIGRldGFpbHMnKSxcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhbGl6ZSgnRW1wbG95bWVudCBhbmQgdGF4IGluZm9ybWF0aW9uJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IGNvbXBvbmVudCxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRpc2FibGVkX2l0ZW1zOiBhY2NvdW50X3NldHRpbmdzPy5pbW11dGFibGVfZmllbGRzLFxuICAgICAgICAgICAgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N0aHJvdWdoOiBbJ3Jlc2lkZW5jZV9saXN0J10sXG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEVtcGxveW1lbnRUYXhJbmZvQ29uZmlnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/employment-tax-info-config.ts\n");

/***/ }),

/***/ "@deriv-com/translations":
/*!******************************************!*\
  !*** external "@deriv-com/translations" ***!
  \******************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_com_translations__;

/***/ }),

/***/ "@deriv/shared":
/*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/employment-tax-info-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});