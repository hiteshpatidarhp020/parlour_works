"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/otp",{

/***/ "./src/lib/design-system/component/pw-slider/slider.js":
/*!*************************************************************!*\
  !*** ./src/lib/design-system/component/pw-slider/slider.js ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pw-slider.module.css */ \"./src/lib/design-system/component/pw-slider/pw-slider.module.css\");\n/* harmony import */ var _pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar PwSlider = function(param) {\n    var tabs = param.tabs;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), activeTab = _useState[0], setActiveTab = _useState[1];\n    var handleTabClick = function(index1) {\n        setActiveTab(index1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().customTabContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabList),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"\".concat((_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().tabItem), \" \").concat(activeTab === index ? (_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().activeTab) : (_pw_slider_module_css__WEBPACK_IMPORTED_MODULE_3___default().inactiveTab)),\n                onClick: function() {\n                    return handleTabClick(index);\n                },\n                children: \"sdfsaf\"\n            }, index, false, {\n                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\pw-slider\\\\slider.js\",\n                lineNumber: 14,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\pw-slider\\\\slider.js\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\pw-slider\\\\slider.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(PwSlider, \"9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=\");\n_c = PwSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PwSlider);\nvar _c;\n$RefreshReg$(_c, \"PwSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50L3B3LXNsaWRlci9zbGlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0k7QUFFNUMsSUFBTUcsV0FBVztRQUFHQyxhQUFBQTs7SUFDbEIsSUFBa0NILFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxRQUFwQ0ksWUFBMkJKLGNBQWhCSyxlQUFnQkw7SUFFbEMsSUFBTU0saUJBQWlCLFNBQUNDO1FBQ3RCRixhQUFhRTtJQUNmO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdSLGlGQUF5QjtrQkFDdkMsNEVBQUNVO1lBQUdGLFdBQVdSLHNFQUFjO3NCQUMzQiw0RUFBQ1k7Z0JBRUNKLFdBQVcsR0FDVEwsT0FEWUgsc0VBQWMsRUFBQyxLQUU1QixPQURDRyxjQUFjRyxRQUFRTix3RUFBZ0IsR0FBR0EsMEVBQWtCO2dCQUU3RGUsU0FBUzsyQkFBTVYsZUFBZUM7OzBCQUMvQjtlQUxNQTs7Ozs7Ozs7Ozs7Ozs7O0FBV2Y7R0F0Qk1MO0tBQUFBO0FBd0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZGVzaWduLXN5c3RlbS9jb21wb25lbnQvcHctc2xpZGVyL3NsaWRlci5qcz8yNDU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3B3LXNsaWRlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBQd1NsaWRlciA9ICh7IHRhYnMgfSkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVGFiQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYihpbmRleCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY3VzdG9tVGFiQ29udGFpbmVyfT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRhYkxpc3R9PlxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhYkl0ZW19ICR7XHJcbiAgICAgICAgICAgIGFjdGl2ZVRhYiA9PT0gaW5kZXggPyBzdHlsZXMuYWN0aXZlVGFiIDogc3R5bGVzLmluYWN0aXZlVGFiXHJcbiAgICAgICAgICB9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVRhYkNsaWNrKGluZGV4KX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBzZGZzYWZcclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFB3U2xpZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIlB3U2xpZGVyIiwidGFicyIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsImhhbmRsZVRhYkNsaWNrIiwiaW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJjdXN0b21UYWJDb250YWluZXIiLCJ1bCIsInRhYkxpc3QiLCJsaSIsInRhYkl0ZW0iLCJpbmFjdGl2ZVRhYiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/design-system/component/pw-slider/slider.js\n"));

/***/ })

});