/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/common/dashboard-pointercard/pointercard.module.css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/common/dashboard-pointercard/pointercard.module.css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* .maincontainer {\\r\\n  \\r\\n  background: linear-gradient(209.26deg, #509cef 9.08%, #236fc1 105.68%);\\r\\n\\r\\n  border-radius: 10px;\\r\\n  padding: 25px 20px 24px 24px;\\r\\n  margin: 0;\\r\\n}\\r\\n.iconmain {\\r\\n  float: inline-end;\\r\\n} */\\r\\n\\r\\n/* pointercard.module.css */\\r\\n\\r\\n/* pointercard.module.css */\\r\\n\\r\\n.pointercard_skeletonContainer__w_VM9 {\\r\\n  background-color: #ccc;\\r\\n  border-radius: 10px;\\r\\n  padding: 25px 20px 24px 24px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.pointercard_skeletonText__Pn5WV,\\r\\n.pointercard_skeletonIcon__HYSym {\\r\\n  height: 20px;\\r\\n  width: 80%;\\r\\n  background-color: #f0f0f0;\\r\\n  margin-bottom: 10px;\\r\\n  animation: pointercard_shimmerAnimation__GH9wa 1.5s infinite; /* Add animation to both text and icon */\\r\\n}\\r\\n\\r\\n@keyframes pointercard_shimmerAnimation__GH9wa {\\r\\n  0% {\\r\\n    background-position: -200% 0;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 200% 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.pointercard_skeletonIcon__HYSym {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  background-color: #f0f0f0;\\r\\n  margin-bottom: 10px;\\r\\n  animation: pointercard_shimmerAnimation__GH9wa 1.5s infinite; /* Add animation to the icon */\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/lib/design-system/component/common/dashboard-pointercard/pointercard.module.css\"],\"names\":[],\"mappings\":\"AAAA;;;;;;;;;;GAUG;;AAEH,2BAA2B;;AAE3B,2BAA2B;;AAE3B;EACE,sBAAsB;EACtB,mBAAmB;EACnB,4BAA4B;EAC5B,SAAS;AACX;;AAEA;;EAEE,YAAY;EACZ,UAAU;EACV,yBAAyB;EACzB,mBAAmB;EACnB,4DAAyC,EAAE,wCAAwC;AACrF;;AAEA;EACE;IACE,4BAA4B;EAC9B;EACA;IACE,2BAA2B;EAC7B;AACF;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,yBAAyB;EACzB,mBAAmB;EACnB,4DAAyC,EAAE,8BAA8B;AAC3E\",\"sourcesContent\":[\"/* .maincontainer {\\r\\n  \\r\\n  background: linear-gradient(209.26deg, #509cef 9.08%, #236fc1 105.68%);\\r\\n\\r\\n  border-radius: 10px;\\r\\n  padding: 25px 20px 24px 24px;\\r\\n  margin: 0;\\r\\n}\\r\\n.iconmain {\\r\\n  float: inline-end;\\r\\n} */\\r\\n\\r\\n/* pointercard.module.css */\\r\\n\\r\\n/* pointercard.module.css */\\r\\n\\r\\n.skeletonContainer {\\r\\n  background-color: #ccc;\\r\\n  border-radius: 10px;\\r\\n  padding: 25px 20px 24px 24px;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.skeletonText,\\r\\n.skeletonIcon {\\r\\n  height: 20px;\\r\\n  width: 80%;\\r\\n  background-color: #f0f0f0;\\r\\n  margin-bottom: 10px;\\r\\n  animation: shimmerAnimation 1.5s infinite; /* Add animation to both text and icon */\\r\\n}\\r\\n\\r\\n@keyframes shimmerAnimation {\\r\\n  0% {\\r\\n    background-position: -200% 0;\\r\\n  }\\r\\n  100% {\\r\\n    background-position: 200% 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n.skeletonIcon {\\r\\n  height: 40px;\\r\\n  width: 40px;\\r\\n  background-color: #f0f0f0;\\r\\n  margin-bottom: 10px;\\r\\n  animation: shimmerAnimation 1.5s infinite; /* Add animation to the icon */\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"skeletonContainer\": \"pointercard_skeletonContainer__w_VM9\",\n\t\"skeletonText\": \"pointercard_skeletonText__Pn5WV\",\n\t\"skeletonIcon\": \"pointercard_skeletonIcon__HYSym\",\n\t\"shimmerAnimation\": \"pointercard_shimmerAnimation__GH9wa\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vc3JjL2xpYi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC9jb21tb24vZGFzaGJvYXJkLXBvaW50ZXJjYXJkL3BvaW50ZXJjYXJkLm1vZHVsZS5jc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxrTEFBOEY7QUFDeEk7QUFDQTtBQUNBLDZEQUE2RCxtRkFBbUYsOEJBQThCLG1DQUFtQyxnQkFBZ0IsS0FBSyxlQUFlLHdCQUF3QixNQUFNLHlIQUF5SCw2QkFBNkIsMEJBQTBCLG1DQUFtQyxnQkFBZ0IsS0FBSywrRUFBK0UsbUJBQW1CLGlCQUFpQixnQ0FBZ0MsMEJBQTBCLG9FQUFvRSw4Q0FBOEMsd0RBQXdELFVBQVUscUNBQXFDLE9BQU8sWUFBWSxvQ0FBb0MsT0FBTyxLQUFLLDBDQUEwQyxtQkFBbUIsa0JBQWtCLGdDQUFnQywwQkFBMEIsb0VBQW9FLG9DQUFvQyxXQUFXLDZKQUE2SixNQUFNLGFBQWEsY0FBYyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEseUJBQXlCLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSx5QkFBeUIsNkNBQTZDLG1GQUFtRiw4QkFBOEIsbUNBQW1DLGdCQUFnQixLQUFLLGVBQWUsd0JBQXdCLE1BQU0sc0dBQXNHLDZCQUE2QiwwQkFBMEIsbUNBQW1DLGdCQUFnQixLQUFLLHlDQUF5QyxtQkFBbUIsaUJBQWlCLGdDQUFnQywwQkFBMEIsaURBQWlELDhDQUE4QyxxQ0FBcUMsVUFBVSxxQ0FBcUMsT0FBTyxZQUFZLG9DQUFvQyxPQUFPLEtBQUssdUJBQXVCLG1CQUFtQixrQkFBa0IsZ0NBQWdDLDBCQUEwQixpREFBaUQsb0NBQW9DLHVCQUF1QjtBQUN6c0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGliL2Rlc2lnbi1zeXN0ZW0vY29tcG9uZW50L2NvbW1vbi9kYXNoYm9hcmQtcG9pbnRlcmNhcmQvcG9pbnRlcmNhcmQubW9kdWxlLmNzcz84ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiAubWFpbmNvbnRhaW5lciB7XFxyXFxuICBcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMDkuMjZkZWcsICM1MDljZWYgOS4wOCUsICMyMzZmYzEgMTA1LjY4JSk7XFxyXFxuXFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMjVweCAyMHB4IDI0cHggMjRweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmljb25tYWluIHtcXHJcXG4gIGZsb2F0OiBpbmxpbmUtZW5kO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4vKiBwb2ludGVyY2FyZC5tb2R1bGUuY3NzICovXFxyXFxuXFxyXFxuLyogcG9pbnRlcmNhcmQubW9kdWxlLmNzcyAqL1xcclxcblxcclxcbi5wb2ludGVyY2FyZF9za2VsZXRvbkNvbnRhaW5lcl9fd19WTTkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDIwcHggMjRweCAyNHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9pbnRlcmNhcmRfc2tlbGV0b25UZXh0X19QbjVXVixcXHJcXG4ucG9pbnRlcmNhcmRfc2tlbGV0b25JY29uX19IWVN5bSB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICB3aWR0aDogODAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBhbmltYXRpb246IHBvaW50ZXJjYXJkX3NoaW1tZXJBbmltYXRpb25fX0dIOXdhIDEuNXMgaW5maW5pdGU7IC8qIEFkZCBhbmltYXRpb24gdG8gYm90aCB0ZXh0IGFuZCBpY29uICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgcG9pbnRlcmNhcmRfc2hpbW1lckFuaW1hdGlvbl9fR0g5d2Ege1xcclxcbiAgMCUge1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnBvaW50ZXJjYXJkX3NrZWxldG9uSWNvbl9fSFlTeW0ge1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIGFuaW1hdGlvbjogcG9pbnRlcmNhcmRfc2hpbW1lckFuaW1hdGlvbl9fR0g5d2EgMS41cyBpbmZpbml0ZTsgLyogQWRkIGFuaW1hdGlvbiB0byB0aGUgaWNvbiAqL1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2xpYi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC9jb21tb24vZGFzaGJvYXJkLXBvaW50ZXJjYXJkL3BvaW50ZXJjYXJkLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7Ozs7Ozs7R0FVRzs7QUFFSCwyQkFBMkI7O0FBRTNCLDJCQUEyQjs7QUFFM0I7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDREQUF5QyxFQUFFLHdDQUF3QztBQUNyRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7QUFDRjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQiw0REFBeUMsRUFBRSw4QkFBOEI7QUFDM0VcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLm1haW5jb250YWluZXIge1xcclxcbiAgXFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjA5LjI2ZGVnLCAjNTA5Y2VmIDkuMDglLCAjMjM2ZmMxIDEwNS42OCUpO1xcclxcblxcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDI1cHggMjBweCAyNHB4IDI0cHg7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5pY29ubWFpbiB7XFxyXFxuICBmbG9hdDogaW5saW5lLWVuZDtcXHJcXG59ICovXFxyXFxuXFxyXFxuLyogcG9pbnRlcmNhcmQubW9kdWxlLmNzcyAqL1xcclxcblxcclxcbi8qIHBvaW50ZXJjYXJkLm1vZHVsZS5jc3MgKi9cXHJcXG5cXHJcXG4uc2tlbGV0b25Db250YWluZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAyNXB4IDIwcHggMjRweCAyNHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2tlbGV0b25UZXh0LFxcclxcbi5za2VsZXRvbkljb24ge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgYW5pbWF0aW9uOiBzaGltbWVyQW5pbWF0aW9uIDEuNXMgaW5maW5pdGU7IC8qIEFkZCBhbmltYXRpb24gdG8gYm90aCB0ZXh0IGFuZCBpY29uICovXFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2hpbW1lckFuaW1hdGlvbiB7XFxyXFxuICAwJSB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc2tlbGV0b25JY29uIHtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBhbmltYXRpb246IHNoaW1tZXJBbmltYXRpb24gMS41cyBpbmZpbml0ZTsgLyogQWRkIGFuaW1hdGlvbiB0byB0aGUgaWNvbiAqL1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJza2VsZXRvbkNvbnRhaW5lclwiOiBcInBvaW50ZXJjYXJkX3NrZWxldG9uQ29udGFpbmVyX193X1ZNOVwiLFxuXHRcInNrZWxldG9uVGV4dFwiOiBcInBvaW50ZXJjYXJkX3NrZWxldG9uVGV4dF9fUG41V1ZcIixcblx0XCJza2VsZXRvbkljb25cIjogXCJwb2ludGVyY2FyZF9za2VsZXRvbkljb25fX0hZU3ltXCIsXG5cdFwic2hpbW1lckFuaW1hdGlvblwiOiBcInBvaW50ZXJjYXJkX3NoaW1tZXJBbmltYXRpb25fX0dIOXdhXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/common/dashboard-pointercard/pointercard.module.css\n"));

/***/ })

});