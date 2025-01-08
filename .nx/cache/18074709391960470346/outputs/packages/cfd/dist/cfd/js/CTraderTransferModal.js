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
		module.exports = factory(require("@deriv/components"), require("@deriv/stores"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/stores", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/cfd"] = factory(require("@deriv/components"), require("@deriv/stores"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/cfd"] = factory(root["@deriv/components"], root["@deriv/stores"], root["@deriv/translations"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_stores__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx":
/*!**************************************************************************!*\
  !*** ./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/stores */ \"@deriv/stores\");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar CTraderTransferModal = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.observer)(function () {\n  var _useStore = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_2__.useStore)(),\n    cfd = _useStore.modules.cfd,\n    client = _useStore.client,\n    traders_hub = _useStore.traders_hub;\n  var ctrader_accounts_list = client.ctrader_accounts_list;\n  var toggleAccountTransferModal = traders_hub.toggleAccountTransferModal,\n    setSelectedAccount = traders_hub.setSelectedAccount;\n  var is_ctrader_transfer_modal_visible = cfd.is_ctrader_transfer_modal_visible,\n    toggleCTraderTransferModal = cfd.toggleCTraderTransferModal;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n    width: \"408px\",\n    should_header_stick_body: false,\n    exit_classname: \"cfd-modal--custom-exit\",\n    toggleModal: toggleCTraderTransferModal,\n    is_open: is_ctrader_transfer_modal_visible,\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Choose a cTrader account to transfer')\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"ctrader-transfer-modal\"\n  }, ctrader_accounts_list.filter(function (ctrader_account) {\n    return ctrader_account.account_type === 'real';\n  }).map(function (ctrader_account) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n      key: ctrader_account.login,\n      className: \"ctrader-transfer-modal__accounts-list\",\n      onClick: function onClick() {\n        toggleCTraderTransferModal();\n        toggleAccountTransferModal();\n        setSelectedAccount(ctrader_account);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      size: \"xs\"\n    }, ctrader_account.login), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      size: \"xs\",\n      weight: \"bold\",\n      className: \"ctrader-transfer-modal__accounts-list--balance\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n      amount: ctrader_account.balance,\n      currency: ctrader_account.currency,\n      has_sign: !!ctrader_account.balance && ctrader_account.balance < 0,\n      show_currency: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n      icon: \"IcChevronRight\"\n    })));\n  })));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTraderTransferModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2N0cmFkZXItdHJhbnNmZXItbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBSUE7QUFJQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2NmZC8uL3NyYy9Db250YWluZXJzL2N0cmFkZXItdHJhbnNmZXItbW9kYWwvY3RyYWRlci10cmFuc2Zlci1tb2RhbC50c3g/MDFjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IG9ic2VydmVyLCB1c2VTdG9yZSB9IGZyb20gJ0BkZXJpdi9zdG9yZXMnO1xuaW1wb3J0IHsgTW9kYWwsIFRleHQsIE1vbmV5LCBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuXG5jb25zdCBDVHJhZGVyVHJhbnNmZXJNb2RhbCA9IG9ic2VydmVyKCgpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIG1vZHVsZXM6IHsgY2ZkIH0sXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgdHJhZGVyc19odWIsXG4gICAgfSA9IHVzZVN0b3JlKCk7XG5cbiAgICBjb25zdCB7IGN0cmFkZXJfYWNjb3VudHNfbGlzdCB9ID0gY2xpZW50O1xuICAgIGNvbnN0IHsgdG9nZ2xlQWNjb3VudFRyYW5zZmVyTW9kYWwsIHNldFNlbGVjdGVkQWNjb3VudCB9ID0gdHJhZGVyc19odWI7XG4gICAgY29uc3QgeyBpc19jdHJhZGVyX3RyYW5zZmVyX21vZGFsX3Zpc2libGUsIHRvZ2dsZUNUcmFkZXJUcmFuc2Zlck1vZGFsIH0gPSBjZmQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgIHdpZHRoPSc0MDhweCdcbiAgICAgICAgICAgIHNob3VsZF9oZWFkZXJfc3RpY2tfYm9keT17ZmFsc2V9XG4gICAgICAgICAgICBleGl0X2NsYXNzbmFtZT0nY2ZkLW1vZGFsLS1jdXN0b20tZXhpdCdcbiAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXt0b2dnbGVDVHJhZGVyVHJhbnNmZXJNb2RhbH1cbiAgICAgICAgICAgIGlzX29wZW49e2lzX2N0cmFkZXJfdHJhbnNmZXJfbW9kYWxfdmlzaWJsZX1cbiAgICAgICAgICAgIHRpdGxlPXtsb2NhbGl6ZSgnQ2hvb3NlIGEgY1RyYWRlciBhY2NvdW50IHRvIHRyYW5zZmVyJyl9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjdHJhZGVyLXRyYW5zZmVyLW1vZGFsJz5cbiAgICAgICAgICAgICAgICB7Y3RyYWRlcl9hY2NvdW50c19saXN0XG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoY3RyYWRlcl9hY2NvdW50ID0+IGN0cmFkZXJfYWNjb3VudC5hY2NvdW50X3R5cGUgPT09ICdyZWFsJylcbiAgICAgICAgICAgICAgICAgICAgLm1hcChjdHJhZGVyX2FjY291bnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y3RyYWRlcl9hY2NvdW50LmxvZ2lufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2N0cmFkZXItdHJhbnNmZXItbW9kYWxfX2FjY291bnRzLWxpc3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNUcmFkZXJUcmFuc2Zlck1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVBY2NvdW50VHJhbnNmZXJNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRBY2NvdW50KGN0cmFkZXJfYWNjb3VudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzaXplPSd4cyc+e2N0cmFkZXJfYWNjb3VudC5sb2dpbn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodD0nYm9sZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3RyYWRlci10cmFuc2Zlci1tb2RhbF9fYWNjb3VudHMtbGlzdC0tYmFsYW5jZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXtjdHJhZGVyX2FjY291bnQuYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Y3RyYWRlcl9hY2NvdW50LmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc19zaWduPXshIWN0cmFkZXJfYWNjb3VudC5iYWxhbmNlICYmIGN0cmFkZXJfYWNjb3VudC5iYWxhbmNlIDwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj0nSWNDaGV2cm9uUmlnaHQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDVHJhZGVyVHJhbnNmZXJNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx\n");

/***/ }),

/***/ "./src/Containers/ctrader-transfer-modal/index.tsx":
/*!*********************************************************!*\
  !*** ./src/Containers/ctrader-transfer-modal/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ctrader_transfer_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ctrader-transfer-modal */ \"./src/Containers/ctrader-transfer-modal/ctrader-transfer-modal.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ctrader_transfer_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9jZmQvLi9zcmMvQ29udGFpbmVycy9jdHJhZGVyLXRyYW5zZmVyLW1vZGFsL2luZGV4LnRzeD83OGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDVHJhZGVyVHJhbnNmZXJNb2RhbCBmcm9tICcuL2N0cmFkZXItdHJhbnNmZXItbW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBDVHJhZGVyVHJhbnNmZXJNb2RhbDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/ctrader-transfer-modal/index.tsx\n");

/***/ }),

/***/ "@deriv/components":
/*!************************************!*\
  !*** external "@deriv/components" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/stores":
/*!********************************!*\
  !*** external "@deriv/stores" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_stores__;

/***/ }),

/***/ "@deriv/translations":
/*!**************************************!*\
  !*** external "@deriv/translations" ***!
  \**************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/Containers/ctrader-transfer-modal/index.tsx");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});