"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/lib/design-system/component/common/top-selling-items/top-selling-card/index.js":
/*!********************************************************************************************!*\
  !*** ./src/lib/design-system/component/common/top-selling-items/top-selling-card/index.js ***!
  \********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Col */ \"./node_modules/react-bootstrap/esm/Col.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Row */ \"./node_modules/react-bootstrap/esm/Row.js\");\n/* harmony import */ var _top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-selling-card.module.css */ \"./src/lib/design-system/component/common/top-selling-items/top-selling-card/top-selling-card.module.css\");\n/* harmony import */ var _top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\n\n// Define the generateSpanContent function\nvar generateSpanContent = function(item) {\n    // Customize the content based on the item\n    return \"YourCustomContent \".concat(item.name);\n};\n// Define the TopSellingCard component\nvar TopSellingCard = function(param) {\n    var items = param.items;\n    if (!items) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        className: \"m-0 p-0 mt-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    className: \"\".concat((_top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().sellingCardMain), \" m-0\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"p-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"Services\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            className: \"p-0\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-end\",\n                                children: \"Drop\"\n                            }, void 0, false, {\n                                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemsMain),\n                children: items.map(function(item, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemsSection),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                lineNumber: 31,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_top_selling_card_module_css__WEBPACK_IMPORTED_MODULE_3___default().qpgSection),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Qty: \",\n                                            item.qty\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: generateSpanContent(item)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"₹ \",\n                                            item.price\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: generateSpanContent(item)\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: item.type\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, index, true, {\n                        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\parlour_works\\\\parlour_works\\\\src\\\\lib\\\\design-system\\\\component\\\\common\\\\top-selling-items\\\\top-selling-card\\\\index.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = TopSellingCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TopSellingCard);\nvar _c;\n$RefreshReg$(_c, \"TopSellingCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50L2NvbW1vbi90b3Atc2VsbGluZy1pdGVtcy90b3Atc2VsbGluZy1jYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBc0Q7QUFBQTtBQUFBO0FBQ0g7QUFFbkQsMENBQTBDO0FBQzFDLElBQU1JLHNCQUFzQixTQUFDQztJQUMzQiwwQ0FBMEM7SUFDMUMsT0FBTyxxQkFBK0IsT0FBVkEsS0FBS0MsSUFBSTtBQUN2QztBQUVBLHNDQUFzQztBQUN0QyxJQUFNQyxpQkFBaUI7UUFBR0MsY0FBQUE7SUFDeEIsSUFBSSxDQUFDQSxPQUFPO1FBQ1YsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNQLGlFQUFTQTtRQUFDUSxXQUFVOzswQkFDbkIsOERBQUNDO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDUCwyREFBR0E7b0JBQUNPLFdBQVcsR0FBMEIsT0FBdkJOLHFGQUFzQixFQUFDOztzQ0FDeEMsOERBQUNILDJEQUFHQTs0QkFBQ1MsV0FBVTtzQ0FDYiw0RUFBQ0M7MENBQUk7Ozs7Ozs7Ozs7O3NDQUVQLDhEQUFDViwyREFBR0E7NEJBQUNTLFdBQVU7c0NBQ2IsNEVBQUNDO2dDQUFJRCxXQUFVOzBDQUE2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJbEQsOERBQUNDO2dCQUFJRCxXQUFXTiwrRUFBZ0I7MEJBQzdCSyxNQUFNSyxHQUFHLENBQUMsU0FBQ1IsTUFBTVM7eUNBQ2hCLDhEQUFDSjt3QkFBZ0JELFdBQVdOLGtGQUFtQjs7MENBQzdDLDhEQUFDTzswQ0FBS0wsS0FBS0MsSUFBSTs7Ozs7OzBDQUNmLDhEQUFDSTtnQ0FBSUQsV0FBV04sZ0ZBQWlCOztrREFDL0IsOERBQUNPOzs0Q0FBSTs0Q0FBTUwsS0FBS1ksR0FBRzs7Ozs7OztrREFDbkIsOERBQUNDO2tEQUFNZCxvQkFBb0JDOzs7Ozs7a0RBQzNCLDhEQUFDSzs7NENBQUk7NENBQUdMLEtBQUtjLEtBQUs7Ozs7Ozs7a0RBQ2xCLDhEQUFDRDtrREFBTWQsb0JBQW9CQzs7Ozs7O2tEQUMzQiw4REFBQ0s7a0RBQUtMLEtBQUtlLElBQUk7Ozs7Ozs7Ozs7Ozs7dUJBUFROOzs7Ozs7Ozs7Ozs7Ozs7OztBQWNwQjtLQWpDTVA7QUFtQ04sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC9jb21tb24vdG9wLXNlbGxpbmctaXRlbXMvdG9wLXNlbGxpbmctY2FyZC9pbmRleC5qcz8zYzg0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbCwgQ29udGFpbmVyLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vdG9wLXNlbGxpbmctY2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBEZWZpbmUgdGhlIGdlbmVyYXRlU3BhbkNvbnRlbnQgZnVuY3Rpb25cclxuY29uc3QgZ2VuZXJhdGVTcGFuQ29udGVudCA9IChpdGVtKSA9PiB7XHJcbiAgLy8gQ3VzdG9taXplIHRoZSBjb250ZW50IGJhc2VkIG9uIHRoZSBpdGVtXHJcbiAgcmV0dXJuIGBZb3VyQ3VzdG9tQ29udGVudCAke2l0ZW0ubmFtZX1gO1xyXG59O1xyXG5cclxuLy8gRGVmaW5lIHRoZSBUb3BTZWxsaW5nQ2FyZCBjb21wb25lbnRcclxuY29uc3QgVG9wU2VsbGluZ0NhcmQgPSAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgaWYgKCFpdGVtcykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJtLTAgcC0wIG10LTNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICA8Um93IGNsYXNzTmFtZT17YCR7c3R5bGVzLnNlbGxpbmdDYXJkTWFpbn0gbS0wYH0+XHJcbiAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cInAtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2PlNlcnZpY2VzPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwicC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5Ecm9wPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbXNNYWlufT5cclxuICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtc1NlY3Rpb259PlxyXG4gICAgICAgICAgICA8ZGl2PntpdGVtLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucXBnU2VjdGlvbn0+XHJcbiAgICAgICAgICAgICAgPGRpdj5RdHk6IHtpdGVtLnF0eX08L2Rpdj5cclxuICAgICAgICAgICAgICA8c3Bhbj57Z2VuZXJhdGVTcGFuQ29udGVudChpdGVtKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGRpdj7igrkge2l0ZW0ucHJpY2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2dlbmVyYXRlU3BhbkNvbnRlbnQoaXRlbSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxkaXY+e2l0ZW0udHlwZX08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wU2VsbGluZ0NhcmQ7XHJcbiJdLCJuYW1lcyI6WyJDb2wiLCJDb250YWluZXIiLCJSb3ciLCJzdHlsZXMiLCJnZW5lcmF0ZVNwYW5Db250ZW50IiwiaXRlbSIsIm5hbWUiLCJUb3BTZWxsaW5nQ2FyZCIsIml0ZW1zIiwiY2xhc3NOYW1lIiwiZGl2Iiwic2VsbGluZ0NhcmRNYWluIiwiaXRlbXNNYWluIiwibWFwIiwiaW5kZXgiLCJpdGVtc1NlY3Rpb24iLCJxcGdTZWN0aW9uIiwicXR5Iiwic3BhbiIsInByaWNlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/design-system/component/common/top-selling-items/top-selling-card/index.js\n"));

/***/ })

});