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

/***/ "./Configs/address-details-config.ts":
/*!*******************************************!*\
  !*** ./Configs/address-details-config.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   transformConfig: () => (/* binding */ transformConfig)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst address_details_config = _ref => {\n  let {\n    states_list,\n    account_settings,\n    is_svg\n  } = _ref;\n  if (!account_settings) {\n    return {};\n  }\n  const base_case = {\n    address_line_1: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.address_line_1 ?? '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('First line of address is required')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Only {{max}} characters, please.', {\n        max: 70\n      }), {\n        max: 70\n      }], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Use only the following special characters: {{permitted_characters}}', {\n        permitted_characters: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.address_permitted_special_characters_message,\n        interpolation: {\n          escapeValue: false\n        }\n      }), {\n        regex: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.regex_checks.address_details.address_line_1\n      }], ['po_box', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getErrorMessages)().po_box()]].filter(x => is_svg ? x.indexOf('po_box') !== 0 : x)\n    },\n    address_line_2: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.address_line_2 ?? '',\n      rules: [['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Only {{max}} characters, please.', {\n        max: 70\n      }), {\n        max: 70\n      }], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Use only the following special characters: {{permitted_characters}}', {\n        permitted_characters: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.address_permitted_special_characters_message,\n        interpolation: {\n          escapeValue: false\n        }\n      }), {\n        regex: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.regex_checks.address_details.address_line_2\n      }], ['po_box', (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getErrorMessages)().po_box()]].filter(x => is_svg ? x.indexOf('po_box') !== 0 : x)\n    },\n    address_city: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.address_city ?? '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('City is required')], ['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Only {{max}} characters, please.', {\n        max: 99\n      }), {\n        max: 99\n      }], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Only letters, periods, hyphens, apostrophes, and spaces, please.'), {\n        regex: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.regex_checks.address_details.address_city\n      }]]\n    },\n    address_state: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: states_list.find(state => state.value === account_settings.address_state)?.text ?? '',\n      rules: [['req', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('State is required')], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('State is not in a proper format'), {\n        regex: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.regex_checks.address_details.address_state\n      }]]\n    },\n    address_postcode: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.address_postcode ?? '',\n      rules: [['length', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Please enter a {{field_name}} under {{max_number}} characters.', {\n        field_name: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('postal/ZIP code'),\n        max_number: 20,\n        interpolation: {\n          escapeValue: false\n        }\n      }), {\n        min: 0,\n        max: 20\n      }], ['regular', (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Only letters, numbers, space and hyphen are allowed.'), {\n        regex: _deriv_shared__WEBPACK_IMPORTED_MODULE_0__.regex_checks.address_details.address_postcode\n      }]]\n    }\n  };\n  return base_case;\n};\nconst addressDetailsConfig = (_ref2, AddressDetails) => {\n  let {\n    states_list,\n    upgrade_info,\n    real_account_signup_target,\n    account_settings\n  } = _ref2;\n  const is_svg = upgrade_info?.can_upgrade_to === 'svg';\n  const config = address_details_config({\n    states_list,\n    account_settings,\n    is_svg\n  });\n  const disabled_items = account_settings.immutable_fields;\n  return {\n    header: {\n      active_title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Complete your address details'),\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Address')\n    },\n    body: AddressDetails,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, config),\n    props: {\n      validate: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.generateValidationFunction)(real_account_signup_target, transformConfig(config, real_account_signup_target)),\n      disabled_items\n    },\n    passthrough: ['residence_list', 'is_fully_authenticated', 'has_real_account'],\n    icon: 'IcDashboardAddress'\n  };\n};\nconst transformConfig = (config, real_account_signup_target) => {\n  // Remove required rule for svg clients and maltainvest clients\n  if (!real_account_signup_target || real_account_signup_target === 'svg' || real_account_signup_target === 'maltainvest') {\n    config.address_state.rules?.shift();\n  }\n  return config;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addressDetailsConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL2FkZHJlc3MtZGV0YWlscy1jb25maWcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUE7QUFRQTtBQVdBO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbmZpZ3MvYWRkcmVzcy1kZXRhaWxzLWNvbmZpZy50cz8zN2Q0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHZXRTZXR0aW5ncywgU3RhdGVzTGlzdCB9IGZyb20gJ0BkZXJpdi9hcGktdHlwZXMnO1xuaW1wb3J0IHtcbiAgICBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbixcbiAgICBnZXREZWZhdWx0RmllbGRzLFxuICAgIGdldEVycm9yTWVzc2FnZXMsXG4gICAgcmVnZXhfY2hlY2tzLFxuICAgIGFkZHJlc3NfcGVybWl0dGVkX3NwZWNpYWxfY2hhcmFjdGVyc19tZXNzYWdlLFxuICAgIFRTY2hlbWEsXG59IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCB7IFRVcGdyYWRlSW5mbyB9IGZyb20gJ1R5cGVzJztcblxudHlwZSBUQWRkcmVzc0RldGFpbHNDb25maWdQcm9wcyA9IHtcbiAgICB1cGdyYWRlX2luZm86IFRVcGdyYWRlSW5mbztcbiAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldDogc3RyaW5nO1xuICAgIHJlc2lkZW5jZTogc3RyaW5nO1xuICAgIGFjY291bnRfc2V0dGluZ3M6IEdldFNldHRpbmdzO1xuICAgIHN0YXRlc19saXN0OiBTdGF0ZXNMaXN0O1xufTtcblxuY29uc3QgYWRkcmVzc19kZXRhaWxzX2NvbmZpZzogKHtcbiAgICBzdGF0ZXNfbGlzdCxcbiAgICBhY2NvdW50X3NldHRpbmdzLFxuICAgIGlzX3N2Zyxcbn06IHtcbiAgICBzdGF0ZXNfbGlzdDogU3RhdGVzTGlzdDtcbiAgICBhY2NvdW50X3NldHRpbmdzOiBHZXRTZXR0aW5ncztcbiAgICBpc19zdmc6IGJvb2xlYW47XG59KSA9PiBUU2NoZW1hID0gKHsgc3RhdGVzX2xpc3QsIGFjY291bnRfc2V0dGluZ3MsIGlzX3N2ZyB9KSA9PiB7XG4gICAgaWYgKCFhY2NvdW50X3NldHRpbmdzKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBiYXNlX2Nhc2UgPSB7XG4gICAgICAgIGFkZHJlc3NfbGluZV8xOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmFkZHJlc3NfbGluZV8xID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdGaXJzdCBsaW5lIG9mIGFkZHJlc3MgaXMgcmVxdWlyZWQnKV0sXG4gICAgICAgICAgICAgICAgWydsZW5ndGgnLCBsb2NhbGl6ZSgnT25seSB7e21heH19IGNoYXJhY3RlcnMsIHBsZWFzZS4nLCB7IG1heDogNzAgfSksIHsgbWF4OiA3MCB9XSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdyZWd1bGFyJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpemUoJ1VzZSBvbmx5IHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzOiB7e3Blcm1pdHRlZF9jaGFyYWN0ZXJzfX0nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXR0ZWRfY2hhcmFjdGVyczogYWRkcmVzc19wZXJtaXR0ZWRfc3BlY2lhbF9jaGFyYWN0ZXJzX21lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IHJlZ2V4X2NoZWNrcy5hZGRyZXNzX2RldGFpbHMuYWRkcmVzc19saW5lXzEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbJ3BvX2JveCcsIGdldEVycm9yTWVzc2FnZXMoKS5wb19ib3goKV0sXG4gICAgICAgICAgICBdLmZpbHRlcih4ID0+IChpc19zdmcgPyB4LmluZGV4T2YoJ3BvX2JveCcpICE9PSAwIDogeCkpLFxuICAgICAgICB9LFxuICAgICAgICBhZGRyZXNzX2xpbmVfMjoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5hZGRyZXNzX2xpbmVfMiA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydsZW5ndGgnLCBsb2NhbGl6ZSgnT25seSB7e21heH19IGNoYXJhY3RlcnMsIHBsZWFzZS4nLCB7IG1heDogNzAgfSksIHsgbWF4OiA3MCB9XSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICdyZWd1bGFyJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpemUoJ1VzZSBvbmx5IHRoZSBmb2xsb3dpbmcgc3BlY2lhbCBjaGFyYWN0ZXJzOiB7e3Blcm1pdHRlZF9jaGFyYWN0ZXJzfX0nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaXR0ZWRfY2hhcmFjdGVyczogYWRkcmVzc19wZXJtaXR0ZWRfc3BlY2lhbF9jaGFyYWN0ZXJzX21lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVnZXg6IHJlZ2V4X2NoZWNrcy5hZGRyZXNzX2RldGFpbHMuYWRkcmVzc19saW5lXzIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbJ3BvX2JveCcsIGdldEVycm9yTWVzc2FnZXMoKS5wb19ib3goKV0sXG4gICAgICAgICAgICBdLmZpbHRlcih4ID0+IChpc19zdmcgPyB4LmluZGV4T2YoJ3BvX2JveCcpICE9PSAwIDogeCkpLFxuICAgICAgICB9LFxuICAgICAgICBhZGRyZXNzX2NpdHk6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MuYWRkcmVzc19jaXR5ID8/ICcnLFxuICAgICAgICAgICAgcnVsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ3JlcScsIGxvY2FsaXplKCdDaXR5IGlzIHJlcXVpcmVkJyldLFxuICAgICAgICAgICAgICAgIFsnbGVuZ3RoJywgbG9jYWxpemUoJ09ubHkge3ttYXh9fSBjaGFyYWN0ZXJzLCBwbGVhc2UuJywgeyBtYXg6IDk5IH0pLCB7IG1heDogOTkgfV0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAncmVndWxhcicsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdPbmx5IGxldHRlcnMsIHBlcmlvZHMsIGh5cGhlbnMsIGFwb3N0cm9waGVzLCBhbmQgc3BhY2VzLCBwbGVhc2UuJyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiByZWdleF9jaGVja3MuYWRkcmVzc19kZXRhaWxzLmFkZHJlc3NfY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkcmVzc19zdGF0ZToge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogc3RhdGVzX2xpc3QuZmluZChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSA9PT0gYWNjb3VudF9zZXR0aW5ncy5hZGRyZXNzX3N0YXRlKT8udGV4dCA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgWydyZXEnLCBsb2NhbGl6ZSgnU3RhdGUgaXMgcmVxdWlyZWQnKV0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAncmVndWxhcicsXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCdTdGF0ZSBpcyBub3QgaW4gYSBwcm9wZXIgZm9ybWF0JyksXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4OiByZWdleF9jaGVja3MuYWRkcmVzc19kZXRhaWxzLmFkZHJlc3Nfc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZHJlc3NfcG9zdGNvZGU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MuYWRkcmVzc19wb3N0Y29kZSA/PyAnJyxcbiAgICAgICAgICAgIHJ1bGVzOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAnbGVuZ3RoJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxpemUoJ1BsZWFzZSBlbnRlciBhIHt7ZmllbGRfbmFtZX19IHVuZGVyIHt7bWF4X251bWJlcn19IGNoYXJhY3RlcnMuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRfbmFtZTogbG9jYWxpemUoJ3Bvc3RhbC9aSVAgY29kZScpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4X251bWJlcjogMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgeyBtaW46IDAsIG1heDogMjAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgJ3JlZ3VsYXInLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGl6ZSgnT25seSBsZXR0ZXJzLCBudW1iZXJzLCBzcGFjZSBhbmQgaHlwaGVuIGFyZSBhbGxvd2VkLicpLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleDogcmVnZXhfY2hlY2tzLmFkZHJlc3NfZGV0YWlscy5hZGRyZXNzX3Bvc3Rjb2RlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gYmFzZV9jYXNlO1xufTtcblxuY29uc3QgYWRkcmVzc0RldGFpbHNDb25maWcgPSAoXG4gICAgeyBzdGF0ZXNfbGlzdCwgdXBncmFkZV9pbmZvLCByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgYWNjb3VudF9zZXR0aW5ncyB9OiBUQWRkcmVzc0RldGFpbHNDb25maWdQcm9wcyxcbiAgICBBZGRyZXNzRGV0YWlsczogUmVhY3QuQ29tcG9uZW50XG4pID0+IHtcbiAgICBjb25zdCBpc19zdmcgPSB1cGdyYWRlX2luZm8/LmNhbl91cGdyYWRlX3RvID09PSAnc3ZnJztcbiAgICBjb25zdCBjb25maWcgPSBhZGRyZXNzX2RldGFpbHNfY29uZmlnKHsgc3RhdGVzX2xpc3QsIGFjY291bnRfc2V0dGluZ3MsIGlzX3N2ZyB9KTtcbiAgICBjb25zdCBkaXNhYmxlZF9pdGVtcyA9IGFjY291bnRfc2V0dGluZ3MuaW1tdXRhYmxlX2ZpZWxkcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgYWN0aXZlX3RpdGxlOiBsb2NhbGl6ZSgnQ29tcGxldGUgeW91ciBhZGRyZXNzIGRldGFpbHMnKSxcbiAgICAgICAgICAgIHRpdGxlOiBsb2NhbGl6ZSgnQWRkcmVzcycpLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBBZGRyZXNzRGV0YWlscyxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHZhbGlkYXRlOiBnZW5lcmF0ZVZhbGlkYXRpb25GdW5jdGlvbihcbiAgICAgICAgICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1Db25maWcoY29uZmlnLCByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldClcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBkaXNhYmxlZF9pdGVtcyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3Rocm91Z2g6IFsncmVzaWRlbmNlX2xpc3QnLCAnaXNfZnVsbHlfYXV0aGVudGljYXRlZCcsICdoYXNfcmVhbF9hY2NvdW50J10sXG4gICAgICAgIGljb246ICdJY0Rhc2hib2FyZEFkZHJlc3MnLFxuICAgIH07XG59O1xuXG5leHBvcnQgY29uc3QgdHJhbnNmb3JtQ29uZmlnID0gKGNvbmZpZzogVFNjaGVtYSwgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQ6IHN0cmluZykgPT4ge1xuICAgIC8vIFJlbW92ZSByZXF1aXJlZCBydWxlIGZvciBzdmcgY2xpZW50cyBhbmQgbWFsdGFpbnZlc3QgY2xpZW50c1xuICAgIGlmIChcbiAgICAgICAgIXJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0IHx8XG4gICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0ID09PSAnc3ZnJyB8fFxuICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCA9PT0gJ21hbHRhaW52ZXN0J1xuICAgICkge1xuICAgICAgICBjb25maWcuYWRkcmVzc19zdGF0ZS5ydWxlcz8uc2hpZnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uZmlnO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkcmVzc0RldGFpbHNDb25maWc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Configs/address-details-config.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/address-details-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});