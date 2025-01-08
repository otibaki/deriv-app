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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/stores"), require("@deriv/translations"), require("react"), require("react-router"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/stores", "@deriv/translations", "react", "react-router"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/cfd"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/stores"), require("@deriv/translations"), require("react"), require("react-router"));
	else
		root["@deriv/cfd"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/stores"], root["@deriv/translations"], root["react"], root["react-router"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_stores__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_router__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Containers/cfd-server-error-dialog.tsx":
/*!****************************************************!*\
  !*** ./src/Containers/cfd-server-error-dialog.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/stores */ \"@deriv/stores\");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/useCfdStores */ \"./src/Stores/Modules/CFD/Helpers/useCfdStores.tsx\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar CFDServerErrorDialog = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_3__.observer)(function () {\n  var _useStore = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_3__.useStore)(),\n    ui = _useStore.ui;\n  var enableApp = ui.enableApp,\n    disableApp = ui.disableApp;\n  var _useCfdStore = (0,_Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_4__.useCfdStore)(),\n    clearCFDError = _useCfdStore.clearCFDError,\n    error_message = _useCfdStore.error_message,\n    error_type = _useCfdStore.error_type,\n    has_cfd_error = _useCfdStore.has_cfd_error,\n    is_cfd_success_dialog_enabled = _useCfdStore.is_cfd_success_dialog_enabled;\n  var history = (0,react_router__WEBPACK_IMPORTED_MODULE_6__.useHistory)();\n  var should_show_error = has_cfd_error && !is_cfd_success_dialog_enabled && error_type && error_type !== 'PasswordReset' && error_type !== 'PasswordError' && error_type !== 'IncorrectMT5PasswordFormat' && error_type !== 'InvalidTradingPlatformPasswordFormat';\n  var getRedirection = function getRedirection() {\n    clearCFDError();\n    history.push(_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.routes.personal_details);\n  };\n  if (should_show_error && error_type === 'ASK_FIX_DETAILS') {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('Complete your profile'),\n      confirm_button_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('Update profile'),\n      onConfirm: getRedirection,\n      disableApp: disableApp,\n      enableApp: enableApp,\n      is_visible: should_show_error\n    }, (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('To continue, provide the required information in the Personal details section.'));\n  }\n  if (should_show_error) {\n    return error_message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.Dialog, {\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('Something’s not right'),\n      confirm_button_text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_2__.localize)('OK'),\n      onConfirm: clearCFDError,\n      disableApp: disableApp,\n      enableApp: enableApp,\n      is_visible: should_show_error\n    }, error_message) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_1__.UnhandledErrorModal, null);\n  }\n  return null;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CFDServerErrorDialog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtc2VydmVyLWVycm9yLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbnRhaW5lcnMvY2ZkLXNlcnZlci1lcnJvci1kaWFsb2cudHN4PzMzNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpYWxvZywgVW5oYW5kbGVkRXJyb3JNb2RhbCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBvYnNlcnZlciwgdXNlU3RvcmUgfSBmcm9tICdAZGVyaXYvc3RvcmVzJztcbmltcG9ydCB7IHVzZUNmZFN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL01vZHVsZXMvQ0ZEL0hlbHBlcnMvdXNlQ2ZkU3RvcmVzJztcbmltcG9ydCB7IHJvdXRlcyB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbmNvbnN0IENGRFNlcnZlckVycm9yRGlhbG9nID0gb2JzZXJ2ZXIoKCkgPT4ge1xuICAgIGNvbnN0IHsgdWkgfSA9IHVzZVN0b3JlKCk7XG4gICAgY29uc3QgeyBlbmFibGVBcHAsIGRpc2FibGVBcHAgfSA9IHVpO1xuICAgIGNvbnN0IHsgY2xlYXJDRkRFcnJvciwgZXJyb3JfbWVzc2FnZSwgZXJyb3JfdHlwZSwgaGFzX2NmZF9lcnJvciwgaXNfY2ZkX3N1Y2Nlc3NfZGlhbG9nX2VuYWJsZWQgfSA9IHVzZUNmZFN0b3JlKCk7XG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcbiAgICBjb25zdCBzaG91bGRfc2hvd19lcnJvciA9XG4gICAgICAgIGhhc19jZmRfZXJyb3IgJiZcbiAgICAgICAgIWlzX2NmZF9zdWNjZXNzX2RpYWxvZ19lbmFibGVkICYmXG4gICAgICAgIGVycm9yX3R5cGUgJiZcbiAgICAgICAgZXJyb3JfdHlwZSAhPT0gJ1Bhc3N3b3JkUmVzZXQnICYmXG4gICAgICAgIGVycm9yX3R5cGUgIT09ICdQYXNzd29yZEVycm9yJyAmJlxuICAgICAgICBlcnJvcl90eXBlICE9PSAnSW5jb3JyZWN0TVQ1UGFzc3dvcmRGb3JtYXQnICYmXG4gICAgICAgIGVycm9yX3R5cGUgIT09ICdJbnZhbGlkVHJhZGluZ1BsYXRmb3JtUGFzc3dvcmRGb3JtYXQnO1xuXG4gICAgY29uc3QgZ2V0UmVkaXJlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIGNsZWFyQ0ZERXJyb3IoKTtcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJvdXRlcy5wZXJzb25hbF9kZXRhaWxzKTtcbiAgICB9O1xuXG4gICAgaWYgKHNob3VsZF9zaG93X2Vycm9yICYmIGVycm9yX3R5cGUgPT09ICdBU0tfRklYX0RFVEFJTFMnKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdDb21wbGV0ZSB5b3VyIHByb2ZpbGUnKX1cbiAgICAgICAgICAgICAgICBjb25maXJtX2J1dHRvbl90ZXh0PXtsb2NhbGl6ZSgnVXBkYXRlIHByb2ZpbGUnKX1cbiAgICAgICAgICAgICAgICBvbkNvbmZpcm09e2dldFJlZGlyZWN0aW9ufVxuICAgICAgICAgICAgICAgIGRpc2FibGVBcHA9e2Rpc2FibGVBcHB9XG4gICAgICAgICAgICAgICAgZW5hYmxlQXBwPXtlbmFibGVBcHB9XG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZT17c2hvdWxkX3Nob3dfZXJyb3J9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2xvY2FsaXplKCdUbyBjb250aW51ZSwgcHJvdmlkZSB0aGUgcmVxdWlyZWQgaW5mb3JtYXRpb24gaW4gdGhlIFBlcnNvbmFsIGRldGFpbHMgc2VjdGlvbi4nKX1cbiAgICAgICAgICAgIDwvRGlhbG9nPlxuICAgICAgICApO1xuICAgIH1cbiAgICBpZiAoc2hvdWxkX3Nob3dfZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yX21lc3NhZ2UgPyAoXG4gICAgICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdTb21ldGhpbmfigJlzIG5vdCByaWdodCcpfVxuICAgICAgICAgICAgICAgIGNvbmZpcm1fYnV0dG9uX3RleHQ9e2xvY2FsaXplKCdPSycpfVxuICAgICAgICAgICAgICAgIG9uQ29uZmlybT17Y2xlYXJDRkRFcnJvcn1cbiAgICAgICAgICAgICAgICBkaXNhYmxlQXBwPXtkaXNhYmxlQXBwfVxuICAgICAgICAgICAgICAgIGVuYWJsZUFwcD17ZW5hYmxlQXBwfVxuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU9e3Nob3VsZF9zaG93X2Vycm9yfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtlcnJvcl9tZXNzYWdlfVxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VW5oYW5kbGVkRXJyb3JNb2RhbCAvPlxuICAgICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDRkRTZXJ2ZXJFcnJvckRpYWxvZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Containers/cfd-server-error-dialog.tsx\n");

/***/ }),

/***/ "@deriv/components":
/*!************************************!*\
  !*** external "@deriv/components" ***!
  \************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/*!********************************!*\
  !*** external "@deriv/shared" ***!
  \********************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

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

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_router__;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"CFDServerErrorDialog": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_deriv_cfd"] = self["webpackChunk_deriv_cfd"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["internalCFDStoreUsage"], () => (__webpack_require__("./src/Containers/cfd-server-error-dialog.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});