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
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/stores"), require("@deriv/translations"), require("classnames"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/stores", "@deriv/translations", "classnames", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/cfd"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/stores"), require("@deriv/translations"), require("classnames"), require("react"));
	else
		root["@deriv/cfd"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/stores"], root["@deriv/translations"], root["classnames"], root["react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_stores__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_classnames__, __WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/success-dialog/index.tsx":
/*!*************************************************!*\
  !*** ./src/Components/success-dialog/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _success_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-dialog */ \"./src/Components/success-dialog/success-dialog.tsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_success_dialog__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9zdWNjZXNzLWRpYWxvZy9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbXBvbmVudHMvc3VjY2Vzcy1kaWFsb2cvaW5kZXgudHN4PzZlYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN1Y2Nlc3NEaWFsb2cgZnJvbSAnLi9zdWNjZXNzLWRpYWxvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NEaWFsb2c7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Components/success-dialog/index.tsx\n");

/***/ }),

/***/ "./src/Components/success-dialog/success-dialog.tsx":
/*!**********************************************************!*\
  !*** ./src/Components/success-dialog/success-dialog.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__);\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n\n\n\n\nvar SuccessDialog = function SuccessDialog(_ref) {\n  var _ref$classNameMessage = _ref.classNameMessage,\n    classNameMessage = _ref$classNameMessage === void 0 ? '' : _ref$classNameMessage,\n    _ref$has_cancel = _ref.has_cancel,\n    has_cancel = _ref$has_cancel === void 0 ? false : _ref$has_cancel,\n    _ref$has_submit = _ref.has_submit,\n    has_submit = _ref$has_submit === void 0 ? true : _ref$has_submit,\n    icon = _ref.icon,\n    message = _ref.message,\n    onCancel = _ref.onCancel,\n    onSubmit = _ref.onSubmit,\n    heading = _ref.heading,\n    _ref$icon_size = _ref.icon_size,\n    icon_size = _ref$icon_size === void 0 ? 'large' : _ref$icon_size,\n    text_submit = _ref.text_submit,\n    text_cancel = _ref.text_cancel,\n    is_open = _ref.is_open,\n    toggleModal = _ref.toggleModal,\n    title = _ref.title,\n    has_close_icon = _ref.has_close_icon,\n    _ref$width = _ref.width,\n    width = _ref$width === void 0 ? '' : _ref$width,\n    is_medium_button = _ref.is_medium_button;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {\n    className: \"cfd-success-dialog\",\n    is_open: is_open,\n    toggleModal: toggleModal,\n    has_close_icon: has_close_icon,\n    small: !title,\n    title: title,\n    width: width\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('success-change__icon-area', {\n      'success-change__icon-area--large': icon_size === 'large',\n      'success-change__icon-area--xlarge': icon_size === 'xlarge'\n    }),\n    \"data-testid\": \"dt_cfd_success_modal_icon_wrapper\"\n  }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n    className: \"bottom-right-overlay\",\n    icon: \"IcCheckmarkCircle\",\n    custom_color: \"var(--status-success)\",\n    size: 24\n  })), !heading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n    as: \"h2\",\n    weight: \"bold\",\n    size: \"s\",\n    className: \"dc-modal-header__title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.Localize, {\n    i18n_default_text: \"Success!\"\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(message) && message, ! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().isValidElement(message) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: classNameMessage\n  }, message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Modal.Footer, null, has_cancel && onCancel && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, _extends({\n    onClick: onCancel,\n    has_effect: true,\n    text: text_cancel || (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_3__.localize)('Maybe later'),\n    secondary: true\n  }, is_medium_button ? {\n    medium: true\n  } : {\n    large: true\n  })), has_submit && onSubmit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_2__.Button, _extends({\n    has_effect: true,\n    onClick: onSubmit,\n    text: text_submit,\n    primary: true\n  }, is_medium_button ? {\n    medium: true\n  } : {\n    large: true\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuccessDialog);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29tcG9uZW50cy9zdWNjZXNzLWRpYWxvZy9zdWNjZXNzLWRpYWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7QUFrQkE7QUFqQkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBT0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvY2ZkLy4vc3JjL0NvbXBvbmVudHMvc3VjY2Vzcy1kaWFsb2cvc3VjY2Vzcy1kaWFsb2cudHN4P2E0ODMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uLCBNb2RhbCwgVGV4dCB9IGZyb20gJ0BkZXJpdi9jb21wb25lbnRzJztcbmltcG9ydCB7IGxvY2FsaXplLCBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuXG50eXBlIFRTdWNjZXNzRGlhbG9nUHJvcHMgPSB7XG4gICAgaXNfb3BlbjogYm9vbGVhbjtcbiAgICB0b2dnbGVNb2RhbDogKCkgPT4gdm9pZDtcbiAgICBvbkNhbmNlbD86ICgpID0+IHZvaWQ7XG4gICAgb25TdWJtaXQ/OiAoKSA9PiB2b2lkO1xuICAgIGNsYXNzTmFtZU1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nIHwgUmVhY3QuUmVhY3RFbGVtZW50O1xuICAgIGljb246IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICBpY29uX3NpemU/OiBzdHJpbmc7XG4gICAgdGV4dF9zdWJtaXQ/OiBzdHJpbmc7XG4gICAgdGV4dF9jYW5jZWw/OiBzdHJpbmc7XG4gICAgaGVhZGluZz86IHN0cmluZyB8IFJlYWN0LlJlYWN0RWxlbWVudDtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICBpY29uX3R5cGU/OiBzdHJpbmc7XG4gICAgaXNfbWVkaXVtX2J1dHRvbj86IGJvb2xlYW47XG4gICAgaGFzX2Nsb3NlX2ljb246IGJvb2xlYW47XG4gICAgd2lkdGg/OiBzdHJpbmc7XG4gICAgaGFzX2NhbmNlbD86IGJvb2xlYW47XG4gICAgaGFzX3N1Ym1pdD86IGJvb2xlYW47XG59O1xuXG5jb25zdCBTdWNjZXNzRGlhbG9nID0gKHtcbiAgICBjbGFzc05hbWVNZXNzYWdlID0gJycsXG4gICAgaGFzX2NhbmNlbCA9IGZhbHNlLFxuICAgIGhhc19zdWJtaXQgPSB0cnVlLFxuICAgIGljb24sXG4gICAgbWVzc2FnZSxcbiAgICBvbkNhbmNlbCxcbiAgICBvblN1Ym1pdCxcbiAgICBoZWFkaW5nLFxuICAgIGljb25fc2l6ZSA9ICdsYXJnZScsXG4gICAgdGV4dF9zdWJtaXQsXG4gICAgdGV4dF9jYW5jZWwsXG4gICAgaXNfb3BlbixcbiAgICB0b2dnbGVNb2RhbCxcbiAgICB0aXRsZSxcbiAgICBoYXNfY2xvc2VfaWNvbixcbiAgICB3aWR0aCA9ICcnLFxuICAgIGlzX21lZGl1bV9idXR0b24sXG59OiBUU3VjY2Vzc0RpYWxvZ1Byb3BzKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICBjbGFzc05hbWU9J2NmZC1zdWNjZXNzLWRpYWxvZydcbiAgICAgICAgICAgIGlzX29wZW49e2lzX29wZW59XG4gICAgICAgICAgICB0b2dnbGVNb2RhbD17dG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICBoYXNfY2xvc2VfaWNvbj17aGFzX2Nsb3NlX2ljb259XG4gICAgICAgICAgICBzbWFsbD17IXRpdGxlfVxuICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICA+XG4gICAgICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnc3VjY2Vzcy1jaGFuZ2VfX2ljb24tYXJlYScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzLWNoYW5nZV9faWNvbi1hcmVhLS1sYXJnZSc6IGljb25fc2l6ZSA9PT0gJ2xhcmdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdzdWNjZXNzLWNoYW5nZV9faWNvbi1hcmVhLS14bGFyZ2UnOiBpY29uX3NpemUgPT09ICd4bGFyZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YS10ZXN0aWQ9J2R0X2NmZF9zdWNjZXNzX21vZGFsX2ljb25fd3JhcHBlcidcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdib3R0b20tcmlnaHQtb3ZlcmxheSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249J0ljQ2hlY2ttYXJrQ2lyY2xlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tX2NvbG9yPSd2YXIoLS1zdGF0dXMtc3VjY2VzcyknXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPXsyNH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7IWhlYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdoMicgd2VpZ2h0PSdib2xkJyBzaXplPSdzJyBjbGFzc05hbWU9J2RjLW1vZGFsLWhlYWRlcl9fdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdTdWNjZXNzIScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD57aGVhZGluZ308L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICB7UmVhY3QuaXNWYWxpZEVsZW1lbnQobWVzc2FnZSkgJiYgbWVzc2FnZX1cbiAgICAgICAgICAgICAgICB7IVJlYWN0LmlzVmFsaWRFbGVtZW50KG1lc3NhZ2UpICYmIDxwIGNsYXNzTmFtZT17Y2xhc3NOYW1lTWVzc2FnZX0+e21lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAge2hhc19jYW5jZWwgJiYgb25DYW5jZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNhbmNlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc19lZmZlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3RleHRfY2FuY2VsIHx8IGxvY2FsaXplKCdNYXliZSBsYXRlcicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uKGlzX21lZGl1bV9idXR0b24gPyB7IG1lZGl1bTogdHJ1ZSB9IDogeyBsYXJnZTogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHtoYXNfc3VibWl0ICYmIG9uU3VibWl0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFzX2VmZmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXt0ZXh0X3N1Ym1pdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIHsuLi4oaXNfbWVkaXVtX2J1dHRvbiA/IHsgbWVkaXVtOiB0cnVlIH0gOiB7IGxhcmdlOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3VjY2Vzc0RpYWxvZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Components/success-dialog/success-dialog.tsx\n");

/***/ }),

/***/ "./src/Containers/cfd-top-up-demo-modal.tsx":
/*!**************************************************!*\
  !*** ./src/Containers/cfd-top-up-demo-modal.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_success_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/success-dialog */ \"./src/Components/success-dialog/index.tsx\");\n/* harmony import */ var _Helpers_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helpers/constants */ \"./src/Helpers/constants.ts\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deriv/components */ \"@deriv/components\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/stores */ \"@deriv/stores\");\n/* harmony import */ var _deriv_stores__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_deriv_stores__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/cfd-config */ \"./src/Stores/Modules/CFD/Helpers/cfd-config.ts\");\n/* harmony import */ var _Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Stores/Modules/CFD/Helpers/useCfdStores */ \"./src/Stores/Modules/CFD/Helpers/useCfdStores.tsx\");\n/* harmony import */ var _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Helpers/cfd-config */ \"./src/Helpers/cfd-config.ts\");\n\n\n\n\n\n\n\n\n\n\nvar CFDTopUpDemoModal = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_5__.observer)(function (_ref) {\n  var platform = _ref.platform;\n  var _useStore = (0,_deriv_stores__WEBPACK_IMPORTED_MODULE_5__.useStore)(),\n    ui = _useStore.ui;\n  var is_top_up_virtual_open = ui.is_top_up_virtual_open,\n    is_top_up_virtual_in_progress = ui.is_top_up_virtual_in_progress,\n    is_top_up_virtual_success = ui.is_top_up_virtual_success,\n    closeTopUpModal = ui.closeTopUpModal,\n    closeSuccessTopUpModal = ui.closeSuccessTopUpModal;\n  var _useCfdStore = (0,_Stores_Modules_CFD_Helpers_useCfdStores__WEBPACK_IMPORTED_MODULE_8__.useCfdStore)(),\n    current_account = _useCfdStore.current_account,\n    dxtrade_companies = _useCfdStore.dxtrade_companies,\n    mt5_companies = _useCfdStore.mt5_companies,\n    topUpVirtual = _useCfdStore.topUpVirtual;\n  var ctrader_companies = (0,_Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_7__.getCTraderCompanies)();\n  var getAccountTitle = react__WEBPACK_IMPORTED_MODULE_0___default().useCallback(function () {\n    var title = '';\n    if (!mt5_companies && !dxtrade_companies || !current_account) return '';\n    switch (platform) {\n      case _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_9__.CFD_PLATFORMS.MT5:\n        title = mt5_companies[current_account.category][current_account.type].title;\n        break;\n      case _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_9__.CFD_PLATFORMS.CTRADER:\n        title = ctrader_companies[current_account.category][current_account.type].title;\n        break;\n      case _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_9__.CFD_PLATFORMS.DXTRADE:\n        title = dxtrade_companies[current_account.category][current_account.type].title;\n        break;\n      default:\n        break;\n    }\n    return title;\n  }, [mt5_companies, dxtrade_companies, current_account, ctrader_companies, platform]);\n  var onCloseSuccess = function onCloseSuccess() {\n    closeSuccessTopUpModal();\n  };\n  var has_sub_title = platform === _Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_9__.CFD_PLATFORMS.CTRADER;\n  var platform_title = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_4__.getCFDPlatformLabel)(platform, has_sub_title);\n  if (!mt5_companies && !dxtrade_companies && !(0,_Stores_Modules_CFD_Helpers_cfd_config__WEBPACK_IMPORTED_MODULE_7__.getCTraderCompanies)() || !current_account) return null;\n  var _getTopUpConfig = (0,_Helpers_constants__WEBPACK_IMPORTED_MODULE_2__.getTopUpConfig)(),\n    minimum_amount = _getTopUpConfig.minimum_amount,\n    additional_amount = _getTopUpConfig.additional_amount;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Modal, {\n    toggleModal: closeTopUpModal,\n    is_open: is_top_up_virtual_open,\n    className: \"top-up-virtual\",\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('Fund top up'),\n    width: \"384px\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dc-modal__container_top-up-virtual__body\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    align: \"center\",\n    size: \"xxs\",\n    line_height: \"xs\",\n    className: \"dc-modal__container_top-up-virtual__description\",\n    \"data-testid\": \"dt_top_up_virtual_description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n    i18n_default_text: \"You can top up your demo account with an additional <0></0> if your balance is <1></1> or less.\",\n    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n      key: 0,\n      amount: additional_amount,\n      currency: current_account.currency,\n      show_currency: true\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n      key: 1,\n      amount: minimum_amount,\n      currency: current_account.currency,\n      show_currency: true\n    })]\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", {\n    className: \"dc-modal__container_top-up-virtual--h4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n    i18n_default_text: \"{{ platform }} {{ account_title }} account\",\n    values: {\n      platform: platform_title,\n      account_title: getAccountTitle()\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Text, {\n    as: \"p\",\n    align: \"center\",\n    size: \"xxs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n    i18n_default_text: \"Current balance\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dc-modal__container_top-up-virtual--balance\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n    amount: current_account.display_balance,\n    currency: current_account.currency,\n    has_sign: current_account.balance < 0\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"dc-modal__container_top-up-virtual--button\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Button, {\n    is_disabled: current_account.balance > 1000 || is_top_up_virtual_in_progress,\n    type: \"button\",\n    is_loading: is_top_up_virtual_in_progress,\n    onClick: function onClick() {\n      return topUpVirtual(platform);\n    },\n    primary: true,\n    large: true\n  }, !is_top_up_virtual_in_progress && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n    i18n_default_text: \"Top up \\xA0<0></0>\",\n    components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n      key: 0,\n      amount: additional_amount,\n      currency: current_account.currency,\n      show_currency: true\n    })]\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_success_dialog__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    is_open: is_top_up_virtual_success,\n    toggleModal: onCloseSuccess,\n    has_close_icon: true,\n    title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('Fund top up'),\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n      icon: \"IcCashierWallet\",\n      size: 128\n    }),\n    heading: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n      className: \"cfd-success-topup__heading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"<0></0> has been credited into your {{platform}} {{title}} account.\",\n      values: {\n        platform: platform_title,\n        title: getAccountTitle()\n      },\n      components: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n        key: 0,\n        amount: additional_amount,\n        currency: current_account.currency,\n        show_currency: true\n      })]\n    })),\n    message: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"cfd-success-topup__description\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"New current balance\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"dc-modal__container_top-up-virtual--balance\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_3__.Money, {\n      amount: current_account.balance,\n      currency: current_account.currency\n    }))),\n    icon_size: \"large\",\n    has_cancel: false,\n    has_submit: false,\n    width: \"384px\"\n  }));\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CFDTopUpDemoModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ29udGFpbmVycy9jZmQtdG9wLXVwLWRlbW8tbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBTUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2NmZC8uL3NyYy9Db250YWluZXJzL2NmZC10b3AtdXAtZGVtby1tb2RhbC50c3g/NDZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFN1Y2Nlc3NEaWFsb2cgZnJvbSAnLi4vQ29tcG9uZW50cy9zdWNjZXNzLWRpYWxvZyc7XG5pbXBvcnQgeyBnZXRUb3BVcENvbmZpZyB9IGZyb20gJy4uL0hlbHBlcnMvY29uc3RhbnRzJztcbmltcG9ydCB7IEljb24sIE1vZGFsLCBCdXR0b24sIE1vbmV5LCBUZXh0IH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0Q0ZEUGxhdGZvcm1MYWJlbCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgb2JzZXJ2ZXIsIHVzZVN0b3JlIH0gZnJvbSAnQGRlcml2L3N0b3Jlcyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSwgTG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7XG4gICAgZ2V0Q1RyYWRlckNvbXBhbmllcyxcbiAgICBUQ1RyYWRlckNvbXBhbmllcyxcbiAgICBURHhDb21wYW5pZXMsXG4gICAgVE10Q29tcGFuaWVzLFxufSBmcm9tICcuLi9TdG9yZXMvTW9kdWxlcy9DRkQvSGVscGVycy9jZmQtY29uZmlnJztcbmltcG9ydCB7IHVzZUNmZFN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL01vZHVsZXMvQ0ZEL0hlbHBlcnMvdXNlQ2ZkU3RvcmVzJztcbmltcG9ydCB7IENGRF9QTEFURk9STVMgfSBmcm9tICcuLi9IZWxwZXJzL2NmZC1jb25maWcnO1xuXG50eXBlIFRDRkRUb3BVcERlbW9Nb2RhbFByb3BzID0ge1xuICAgIHBsYXRmb3JtOiBzdHJpbmc7XG59O1xuXG5jb25zdCBDRkRUb3BVcERlbW9Nb2RhbCA9IG9ic2VydmVyKCh7IHBsYXRmb3JtIH06IFRDRkRUb3BVcERlbW9Nb2RhbFByb3BzKSA9PiB7XG4gICAgY29uc3QgeyB1aSB9ID0gdXNlU3RvcmUoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgICAgaXNfdG9wX3VwX3ZpcnR1YWxfb3BlbixcbiAgICAgICAgaXNfdG9wX3VwX3ZpcnR1YWxfaW5fcHJvZ3Jlc3MsXG4gICAgICAgIGlzX3RvcF91cF92aXJ0dWFsX3N1Y2Nlc3MsXG4gICAgICAgIGNsb3NlVG9wVXBNb2RhbCxcbiAgICAgICAgY2xvc2VTdWNjZXNzVG9wVXBNb2RhbCxcbiAgICB9ID0gdWk7XG5cbiAgICBjb25zdCB7IGN1cnJlbnRfYWNjb3VudCwgZHh0cmFkZV9jb21wYW5pZXMsIG10NV9jb21wYW5pZXMsIHRvcFVwVmlydHVhbCB9ID0gdXNlQ2ZkU3RvcmUoKTtcblxuICAgIGNvbnN0IGN0cmFkZXJfY29tcGFuaWVzID0gZ2V0Q1RyYWRlckNvbXBhbmllcygpO1xuXG4gICAgY29uc3QgZ2V0QWNjb3VudFRpdGxlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBsZXQgdGl0bGUgPSAnJztcbiAgICAgICAgaWYgKCghbXQ1X2NvbXBhbmllcyAmJiAhZHh0cmFkZV9jb21wYW5pZXMpIHx8ICFjdXJyZW50X2FjY291bnQpIHJldHVybiAnJztcblxuICAgICAgICBzd2l0Y2ggKHBsYXRmb3JtKSB7XG4gICAgICAgICAgICBjYXNlIENGRF9QTEFURk9STVMuTVQ1OlxuICAgICAgICAgICAgICAgIHRpdGxlID1cbiAgICAgICAgICAgICAgICAgICAgbXQ1X2NvbXBhbmllc1tjdXJyZW50X2FjY291bnQuY2F0ZWdvcnkgYXMga2V5b2YgVE10Q29tcGFuaWVzXVtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfYWNjb3VudC50eXBlIGFzIGtleW9mIFRNdENvbXBhbmllc1snZGVtbycgfCAncmVhbCddXG4gICAgICAgICAgICAgICAgICAgIF0udGl0bGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENGRF9QTEFURk9STVMuQ1RSQURFUjpcbiAgICAgICAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICAgICAgICAgIGN0cmFkZXJfY29tcGFuaWVzW2N1cnJlbnRfYWNjb3VudC5jYXRlZ29yeSBhcyBrZXlvZiBUQ1RyYWRlckNvbXBhbmllc11bXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2FjY291bnQudHlwZSBhcyBrZXlvZiBUQ1RyYWRlckNvbXBhbmllc1snZGVtbycgfCAncmVhbCddXG4gICAgICAgICAgICAgICAgICAgIF0udGl0bGU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENGRF9QTEFURk9STVMuRFhUUkFERTpcbiAgICAgICAgICAgICAgICB0aXRsZSA9XG4gICAgICAgICAgICAgICAgICAgIGR4dHJhZGVfY29tcGFuaWVzW2N1cnJlbnRfYWNjb3VudC5jYXRlZ29yeSBhcyBrZXlvZiBURHhDb21wYW5pZXNdW1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudF9hY2NvdW50LnR5cGUgYXMga2V5b2YgVER4Q29tcGFuaWVzWydkZW1vJyB8ICdyZWFsJ11cbiAgICAgICAgICAgICAgICAgICAgXS50aXRsZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGl0bGU7XG4gICAgfSwgW210NV9jb21wYW5pZXMsIGR4dHJhZGVfY29tcGFuaWVzLCBjdXJyZW50X2FjY291bnQsIGN0cmFkZXJfY29tcGFuaWVzLCBwbGF0Zm9ybV0pO1xuXG4gICAgY29uc3Qgb25DbG9zZVN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICAgIGNsb3NlU3VjY2Vzc1RvcFVwTW9kYWwoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFzX3N1Yl90aXRsZSA9IHBsYXRmb3JtID09PSBDRkRfUExBVEZPUk1TLkNUUkFERVI7XG5cbiAgICBjb25zdCBwbGF0Zm9ybV90aXRsZSA9IGdldENGRFBsYXRmb3JtTGFiZWwocGxhdGZvcm0sIGhhc19zdWJfdGl0bGUpO1xuXG4gICAgaWYgKCghbXQ1X2NvbXBhbmllcyAmJiAhZHh0cmFkZV9jb21wYW5pZXMgJiYgIWdldENUcmFkZXJDb21wYW5pZXMoKSkgfHwgIWN1cnJlbnRfYWNjb3VudCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgeyBtaW5pbXVtX2Ftb3VudCwgYWRkaXRpb25hbF9hbW91bnQgfSA9IGdldFRvcFVwQ29uZmlnKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICB0b2dnbGVNb2RhbD17Y2xvc2VUb3BVcE1vZGFsfVxuICAgICAgICAgICAgICAgIGlzX29wZW49e2lzX3RvcF91cF92aXJ0dWFsX29wZW59XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b3AtdXAtdmlydHVhbCdcbiAgICAgICAgICAgICAgICB0aXRsZT17bG9jYWxpemUoJ0Z1bmQgdG9wIHVwJyl9XG4gICAgICAgICAgICAgICAgd2lkdGg9JzM4NHB4J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYy1tb2RhbF9fY29udGFpbmVyX3RvcC11cC12aXJ0dWFsX19ib2R5Jz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzPSdwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249J2NlbnRlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3h4cydcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVfaGVpZ2h0PSd4cydcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZGMtbW9kYWxfX2NvbnRhaW5lcl90b3AtdXAtdmlydHVhbF9fZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRlc3RpZD0nZHRfdG9wX3VwX3ZpcnR1YWxfZGVzY3JpcHRpb24nXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdZb3UgY2FuIHRvcCB1cCB5b3VyIGRlbW8gYWNjb3VudCB3aXRoIGFuIGFkZGl0aW9uYWwgPDA+PC8wPiBpZiB5b3VyIGJhbGFuY2UgaXMgPDE+PC8xPiBvciBsZXNzLidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNb25leVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW1vdW50PXthZGRpdGlvbmFsX2Ftb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5PXtjdXJyZW50X2FjY291bnQuY3VycmVuY3l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17bWluaW11bV9hbW91bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Y3VycmVudF9hY2NvdW50LmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd19jdXJyZW5jeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdkYy1tb2RhbF9fY29udGFpbmVyX3RvcC11cC12aXJ0dWFsLS1oNCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0ne3sgcGxhdGZvcm0gfX0ge3sgYWNjb3VudF90aXRsZSB9fSBhY2NvdW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF0Zm9ybTogcGxhdGZvcm1fdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY291bnRfdGl0bGU6IGdldEFjY291bnRUaXRsZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgYXM9J3AnIGFsaWduPSdjZW50ZXInIHNpemU9J3h4cyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdDdXJyZW50IGJhbGFuY2UnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGMtbW9kYWxfX2NvbnRhaW5lcl90b3AtdXAtdmlydHVhbC0tYmFsYW5jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtb3VudD17Y3VycmVudF9hY2NvdW50LmRpc3BsYXlfYmFsYW5jZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k9e2N1cnJlbnRfYWNjb3VudC5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzX3NpZ249eyhjdXJyZW50X2FjY291bnQuYmFsYW5jZSBhcyBudW1iZXIpIDwgMH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGMtbW9kYWxfX2NvbnRhaW5lcl90b3AtdXAtdmlydHVhbC0tYnV0dG9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19kaXNhYmxlZD17KGN1cnJlbnRfYWNjb3VudC5iYWxhbmNlIGFzIG51bWJlcikgPiAxMDAwIHx8IGlzX3RvcF91cF92aXJ0dWFsX2luX3Byb2dyZXNzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19sb2FkaW5nPXtpc190b3BfdXBfdmlydHVhbF9pbl9wcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b3BVcFZpcnR1YWwocGxhdGZvcm0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXJnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNfdG9wX3VwX3ZpcnR1YWxfaW5fcHJvZ3Jlc3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSdUb3AgdXAgJm5ic3A7PDA+PC8wPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9uZXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2FkZGl0aW9uYWxfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeT17Y3VycmVudF9hY2NvdW50LmN1cnJlbmN5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93X2N1cnJlbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICAgICAgPFN1Y2Nlc3NEaWFsb2dcbiAgICAgICAgICAgICAgICBpc19vcGVuPXtpc190b3BfdXBfdmlydHVhbF9zdWNjZXNzfVxuICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXtvbkNsb3NlU3VjY2Vzc31cbiAgICAgICAgICAgICAgICBoYXNfY2xvc2VfaWNvblxuICAgICAgICAgICAgICAgIHRpdGxlPXtsb2NhbGl6ZSgnRnVuZCB0b3AgdXAnKX1cbiAgICAgICAgICAgICAgICBpY29uPXs8SWNvbiBpY29uPSdJY0Nhc2hpZXJXYWxsZXQnIHNpemU9ezEyOH0gLz59XG4gICAgICAgICAgICAgICAgaGVhZGluZz17XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2NmZC1zdWNjZXNzLXRvcHVwX19oZWFkaW5nJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PSc8MD48LzA+IGhhcyBiZWVuIGNyZWRpdGVkIGludG8geW91ciB7e3BsYXRmb3JtfX0ge3t0aXRsZX19IGFjY291bnQuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17eyBwbGF0Zm9ybTogcGxhdGZvcm1fdGl0bGUsIHRpdGxlOiBnZXRBY2NvdW50VGl0bGUoKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vbmV5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9ezB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbW91bnQ9e2FkZGl0aW9uYWxfYW1vdW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k9e2N1cnJlbnRfYWNjb3VudC5jdXJyZW5jeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dfY3VycmVuY3lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9e1xuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2ZkLXN1Y2Nlc3MtdG9wdXBfX2Rlc2NyaXB0aW9uJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nTmV3IGN1cnJlbnQgYmFsYW5jZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYy1tb2RhbF9fY29udGFpbmVyX3RvcC11cC12aXJ0dWFsLS1iYWxhbmNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TW9uZXkgYW1vdW50PXtjdXJyZW50X2FjY291bnQuYmFsYW5jZX0gY3VycmVuY3k9e2N1cnJlbnRfYWNjb3VudC5jdXJyZW5jeX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWNvbl9zaXplPSdsYXJnZSdcbiAgICAgICAgICAgICAgICBoYXNfY2FuY2VsPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBoYXNfc3VibWl0PXtmYWxzZX1cbiAgICAgICAgICAgICAgICB3aWR0aD0nMzg0cHgnXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ0ZEVG9wVXBEZW1vTW9kYWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Containers/cfd-top-up-demo-modal.tsx\n");

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

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_classnames__;

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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
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
/******/ 			"CFDTopUpDemoModal": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["internalCFDStoreUsage","utilities"], () => (__webpack_require__("./src/Containers/cfd-top-up-demo-modal.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});