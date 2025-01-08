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

/***/ "./Configs/personal-details-config.ts":
/*!********************************************!*\
  !*** ./Configs/personal-details-config.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   personal_details_config: () => (/* binding */ personal_details_config)\n/* harmony export */ });\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @deriv/shared */ \"@deriv/shared\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deriv/translations */ \"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst personal_details_config = _ref => {\n  let {\n    residence_list,\n    account_settings,\n    real_account_signup_target\n  } = _ref;\n  if (!residence_list || !account_settings) {\n    return {};\n  }\n  const config = {\n    account_opening_reason: {\n      supported_in: ['maltainvest'],\n      default_value: account_settings.account_opening_reason ?? ''\n    },\n    salutation: {\n      supported_in: ['maltainvest'],\n      default_value: account_settings.salutation ?? ''\n    },\n    first_name: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.first_name ?? ''\n    },\n    last_name: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.last_name ?? ''\n    },\n    date_of_birth: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.date_of_birth ? (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.toMoment)(account_settings.date_of_birth).format('YYYY-MM-DD') : ''\n    },\n    place_of_birth: {\n      supported_in: ['maltainvest'],\n      default_value: account_settings.place_of_birth && residence_list.find(item => item.value === account_settings.place_of_birth)?.text || ''\n    },\n    citizen: {\n      supported_in: ['maltainvest'],\n      default_value: account_settings.citizen && residence_list.find(item => item.value === account_settings.citizen)?.text || ''\n    },\n    phone: {\n      supported_in: ['svg', 'maltainvest'],\n      default_value: account_settings.phone ?? ''\n    },\n    document_type: {\n      default_value: account_settings.document_type ?? {\n        id: '',\n        text: '',\n        value: '',\n        example_format: ''\n      },\n      supported_in: ['svg']\n    },\n    document_number: {\n      default_value: account_settings.document_number ?? '',\n      supported_in: ['svg']\n    },\n    confirmation_checkbox: {\n      default_value: false,\n      supported_in: ['svg']\n    }\n  };\n  if (real_account_signup_target !== 'maltainvest') {\n    const properties_to_update = ['place_of_birth', 'account_opening_reason'];\n    properties_to_update.forEach(key => {\n      config[key].supported_in.push('svg');\n    });\n  }\n  return config;\n};\nconst personalDetailsConfig = (_ref2, PersonalDetails) => {\n  let {\n    upgrade_info,\n    real_account_signup_target,\n    residence_list,\n    account_settings,\n    account_status,\n    residence\n  } = _ref2;\n  const config = personal_details_config({\n    residence_list,\n    account_settings,\n    real_account_signup_target,\n    residence,\n    account_status\n  });\n  const disabled_items = account_settings.immutable_fields;\n  return {\n    header: {\n      active_title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Complete your personal details'),\n      title: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Personal details')\n    },\n    body: PersonalDetails,\n    form_value: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_0__.getDefaultFields)(real_account_signup_target, config),\n    props: {\n      is_svg: upgrade_info?.can_upgrade_to === 'svg',\n      account_opening_reason_list: [{\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Hedging'),\n        value: 'Hedging'\n      }, {\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Income Earning'),\n        value: 'Income Earning'\n      }, {\n        text: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Speculative'),\n        value: 'Speculative'\n      }],\n      salutation_list: [{\n        label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Mr'),\n        value: 'Mr'\n      }, {\n        label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_1__.localize)('Ms'),\n        value: 'Ms'\n      }],\n      disabled_items,\n      account_status,\n      residence,\n      account_settings,\n      real_account_signup_target\n    },\n    passthrough: ['residence_list', 'is_fully_authenticated', 'has_real_account'],\n    icon: 'IcDashboardPersonalDetails'\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (personalDetailsConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db25maWdzL3BlcnNvbmFsLWRldGFpbHMtY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFlQTtBQUlBO0FBSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFVQTtBQVJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db25maWdzL3BlcnNvbmFsLWRldGFpbHMtY29uZmlnLnRzPzQ2NWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2V0QWNjb3VudFN0YXR1cywgR2V0U2V0dGluZ3MsIFJlc2lkZW5jZUxpc3QgfSBmcm9tICdAZGVyaXYvYXBpLXR5cGVzJztcbmltcG9ydCB7IFRTY2hlbWEsIGdldERlZmF1bHRGaWVsZHMsIHRvTW9tZW50IH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgVFVwZ3JhZGVJbmZvIH0gZnJvbSAnVHlwZXMnO1xuXG50eXBlIFRQZXJzb25hbERldGFpbHNDb25maWcgPSB7XG4gICAgdXBncmFkZV9pbmZvPzogVFVwZ3JhZGVJbmZvO1xuICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0OiBzdHJpbmc7XG4gICAgcmVzaWRlbmNlX2xpc3Q6IFJlc2lkZW5jZUxpc3Q7XG4gICAgYWNjb3VudF9zZXR0aW5nczogR2V0U2V0dGluZ3MgJiB7XG4gICAgICAgIGRvY3VtZW50X3R5cGU6IHN0cmluZztcbiAgICAgICAgZG9jdW1lbnRfbnVtYmVyOiBzdHJpbmc7XG4gICAgfTtcbiAgICByZXNpZGVuY2U6IHN0cmluZztcbiAgICBhY2NvdW50X3N0YXR1czogR2V0QWNjb3VudFN0YXR1cztcbn07XG5cbmV4cG9ydCBjb25zdCBwZXJzb25hbF9kZXRhaWxzX2NvbmZpZyA9ICh7XG4gICAgcmVzaWRlbmNlX2xpc3QsXG4gICAgYWNjb3VudF9zZXR0aW5ncyxcbiAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbn06IFRQZXJzb25hbERldGFpbHNDb25maWcpOiBUU2NoZW1hID0+IHtcbiAgICBpZiAoIXJlc2lkZW5jZV9saXN0IHx8ICFhY2NvdW50X3NldHRpbmdzKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgIGFjY291bnRfb3BlbmluZ19yZWFzb246IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5hY2NvdW50X29wZW5pbmdfcmVhc29uID8/ICcnLFxuICAgICAgICB9LFxuICAgICAgICBzYWx1dGF0aW9uOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3Muc2FsdXRhdGlvbiA/PyAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgZmlyc3RfbmFtZToge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ3N2ZycsICdtYWx0YWludmVzdCddLFxuICAgICAgICAgICAgZGVmYXVsdF92YWx1ZTogYWNjb3VudF9zZXR0aW5ncy5maXJzdF9uYW1lID8/ICcnLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnLCAnbWFsdGFpbnZlc3QnXSxcbiAgICAgICAgICAgIGRlZmF1bHRfdmFsdWU6IGFjY291bnRfc2V0dGluZ3MubGFzdF9uYW1lID8/ICcnLFxuICAgICAgICB9LFxuICAgICAgICBkYXRlX29mX2JpcnRoOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmRhdGVfb2ZfYmlydGhcbiAgICAgICAgICAgICAgICA/IHRvTW9tZW50KGFjY291bnRfc2V0dGluZ3MuZGF0ZV9vZl9iaXJ0aCkuZm9ybWF0KCdZWVlZLU1NLUREJylcbiAgICAgICAgICAgICAgICA6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBwbGFjZV9vZl9iaXJ0aDoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOlxuICAgICAgICAgICAgICAgIChhY2NvdW50X3NldHRpbmdzLnBsYWNlX29mX2JpcnRoICYmXG4gICAgICAgICAgICAgICAgICAgIHJlc2lkZW5jZV9saXN0LmZpbmQoaXRlbSA9PiBpdGVtLnZhbHVlID09PSBhY2NvdW50X3NldHRpbmdzLnBsYWNlX29mX2JpcnRoKT8udGV4dCkgfHxcbiAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2l0aXplbjoge1xuICAgICAgICAgICAgc3VwcG9ydGVkX2luOiBbJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOlxuICAgICAgICAgICAgICAgIChhY2NvdW50X3NldHRpbmdzLmNpdGl6ZW4gJiZcbiAgICAgICAgICAgICAgICAgICAgcmVzaWRlbmNlX2xpc3QuZmluZChpdGVtID0+IGl0ZW0udmFsdWUgPT09IGFjY291bnRfc2V0dGluZ3MuY2l0aXplbik/LnRleHQpIHx8XG4gICAgICAgICAgICAgICAgJycsXG4gICAgICAgIH0sXG4gICAgICAgIHBob25lOiB7XG4gICAgICAgICAgICBzdXBwb3J0ZWRfaW46IFsnc3ZnJywgJ21hbHRhaW52ZXN0J10sXG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLnBob25lID8/ICcnLFxuICAgICAgICB9LFxuICAgICAgICBkb2N1bWVudF90eXBlOiB7XG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmRvY3VtZW50X3R5cGUgPz8ge1xuICAgICAgICAgICAgICAgIGlkOiAnJyxcbiAgICAgICAgICAgICAgICB0ZXh0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICAgICAgZXhhbXBsZV9mb3JtYXQ6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnXSxcbiAgICAgICAgfSxcbiAgICAgICAgZG9jdW1lbnRfbnVtYmVyOiB7XG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBhY2NvdW50X3NldHRpbmdzLmRvY3VtZW50X251bWJlciA/PyAnJyxcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnXSxcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlybWF0aW9uX2NoZWNrYm94OiB7XG4gICAgICAgICAgICBkZWZhdWx0X3ZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIHN1cHBvcnRlZF9pbjogWydzdmcnXSxcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgaWYgKHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0ICE9PSAnbWFsdGFpbnZlc3QnKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXNfdG9fdXBkYXRlOiAoa2V5b2YgdHlwZW9mIGNvbmZpZylbXSA9IFsncGxhY2Vfb2ZfYmlydGgnLCAnYWNjb3VudF9vcGVuaW5nX3JlYXNvbiddO1xuXG4gICAgICAgIHByb3BlcnRpZXNfdG9fdXBkYXRlLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGNvbmZpZ1trZXldLnN1cHBvcnRlZF9pbi5wdXNoKCdzdmcnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmZpZztcbn07XG5cbmNvbnN0IHBlcnNvbmFsRGV0YWlsc0NvbmZpZyA9IDxUPihcbiAgICB7XG4gICAgICAgIHVwZ3JhZGVfaW5mbyxcbiAgICAgICAgcmVhbF9hY2NvdW50X3NpZ251cF90YXJnZXQsXG4gICAgICAgIHJlc2lkZW5jZV9saXN0LFxuICAgICAgICBhY2NvdW50X3NldHRpbmdzLFxuICAgICAgICBhY2NvdW50X3N0YXR1cyxcbiAgICAgICAgcmVzaWRlbmNlLFxuICAgIH06IFRQZXJzb25hbERldGFpbHNDb25maWcsXG4gICAgUGVyc29uYWxEZXRhaWxzOiBUXG4pID0+IHtcbiAgICBjb25zdCBjb25maWcgPSBwZXJzb25hbF9kZXRhaWxzX2NvbmZpZyh7XG4gICAgICAgIHJlc2lkZW5jZV9saXN0LFxuICAgICAgICBhY2NvdW50X3NldHRpbmdzLFxuICAgICAgICByZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCxcbiAgICAgICAgcmVzaWRlbmNlLFxuICAgICAgICBhY2NvdW50X3N0YXR1cyxcbiAgICB9KTtcbiAgICBjb25zdCBkaXNhYmxlZF9pdGVtcyA9IGFjY291bnRfc2V0dGluZ3MuaW1tdXRhYmxlX2ZpZWxkcztcbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV90aXRsZTogbG9jYWxpemUoJ0NvbXBsZXRlIHlvdXIgcGVyc29uYWwgZGV0YWlscycpLFxuICAgICAgICAgICAgdGl0bGU6IGxvY2FsaXplKCdQZXJzb25hbCBkZXRhaWxzJyksXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IFBlcnNvbmFsRGV0YWlscyxcbiAgICAgICAgZm9ybV92YWx1ZTogZ2V0RGVmYXVsdEZpZWxkcyhyZWFsX2FjY291bnRfc2lnbnVwX3RhcmdldCwgY29uZmlnKSxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGlzX3N2ZzogdXBncmFkZV9pbmZvPy5jYW5fdXBncmFkZV90byA9PT0gJ3N2ZycsXG4gICAgICAgICAgICBhY2NvdW50X29wZW5pbmdfcmVhc29uX2xpc3Q6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdIZWRnaW5nJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSGVkZ2luZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGxvY2FsaXplKCdJbmNvbWUgRWFybmluZycpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0luY29tZSBFYXJuaW5nJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogbG9jYWxpemUoJ1NwZWN1bGF0aXZlJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnU3BlY3VsYXRpdmUnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2FsdXRhdGlvbl9saXN0OiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbG9jYWxpemUoJ01yJyksXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTXInLFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBsb2NhbGl6ZSgnTXMnKSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkaXNhYmxlZF9pdGVtcyxcbiAgICAgICAgICAgIGFjY291bnRfc3RhdHVzLFxuICAgICAgICAgICAgcmVzaWRlbmNlLFxuICAgICAgICAgICAgYWNjb3VudF9zZXR0aW5ncyxcbiAgICAgICAgICAgIHJlYWxfYWNjb3VudF9zaWdudXBfdGFyZ2V0LFxuICAgICAgICB9LFxuICAgICAgICBwYXNzdGhyb3VnaDogWydyZXNpZGVuY2VfbGlzdCcsICdpc19mdWxseV9hdXRoZW50aWNhdGVkJywgJ2hhc19yZWFsX2FjY291bnQnXSxcbiAgICAgICAgaWNvbjogJ0ljRGFzaGJvYXJkUGVyc29uYWxEZXRhaWxzJyxcbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGVyc29uYWxEZXRhaWxzQ29uZmlnO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Configs/personal-details-config.ts\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./Configs/personal-details-config.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});