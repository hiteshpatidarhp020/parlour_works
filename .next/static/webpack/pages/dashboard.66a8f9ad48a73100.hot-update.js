/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/side-bar/side-bar.module.css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/side-bar/side-bar.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* side-bar.module.css */\\r\\n.side-bar_tabBar__iyIdX {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0;\\r\\n  position: relative;\\r\\n  z-index: 99999;\\r\\n  background: #2c303f;\\r\\n}\\r\\n\\r\\n.side-bar_mainsection__DhfYA {\\r\\n  position: fixed;\\r\\n  height: 100vh;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.side-bar_tab__o_T1K {\\r\\n  margin: 8px 17px;\\r\\n  padding: 12px 0 12px 20px;\\r\\n  cursor: pointer;\\r\\n  font-family: DM Sans;\\r\\n  font-size: 16px;\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.side-bar_active__nBj9L {\\r\\n  border-radius: 10px;\\r\\n  background: #ccaa6d;\\r\\n  color: #2c303f;\\r\\n}\\r\\n.side-bar_tab__o_T1K:hover:not(.side-bar_active__nBj9L) {\\r\\n  border-radius: 10px;\\r\\n  background: #20242e;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.side-bar_tabContent__sv_eQ {\\r\\n  padding-top: 40px !important;\\r\\n  padding: 80px 60px 28px 60px !important;\\r\\n  /* background-color: aqua; */\\r\\n  background: #191921;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .side-bar_tabBar__iyIdX {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .side-bar_tabContent__sv_eQ {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n@media (max-width: 769px) {\\r\\n  .side-bar_tabContent__sv_eQ {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/lib/design-system/component/side-bar/side-bar.module.css\"],\"names\":[],\"mappings\":\"AAAA,wBAAwB;AACxB;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,kBAAkB;EAClB,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,MAAM;EACN,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;AAChB;AACA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,4BAA4B;EAC5B,uCAAuC;EACvC,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,WAAW;EACb;AACF;AACA;EACE;IACE,aAAa;EACf;AACF\",\"sourcesContent\":[\"/* side-bar.module.css */\\r\\n.tabBar {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  padding: 0;\\r\\n  position: relative;\\r\\n  z-index: 99999;\\r\\n  background: #2c303f;\\r\\n}\\r\\n\\r\\n.mainsection {\\r\\n  position: fixed;\\r\\n  height: 100vh;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.tab {\\r\\n  margin: 8px 17px;\\r\\n  padding: 12px 0 12px 20px;\\r\\n  cursor: pointer;\\r\\n  font-family: DM Sans;\\r\\n  font-size: 16px;\\r\\n  font-style: normal;\\r\\n  font-weight: 400;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  border-radius: 10px;\\r\\n  background: #ccaa6d;\\r\\n  color: #2c303f;\\r\\n}\\r\\n.tab:hover:not(.active) {\\r\\n  border-radius: 10px;\\r\\n  background: #20242e;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.tabContent {\\r\\n  padding-top: 40px !important;\\r\\n  padding: 80px 60px 28px 60px !important;\\r\\n  /* background-color: aqua; */\\r\\n  background: #191921;\\r\\n}\\r\\n\\r\\n@media (max-width: 768px) {\\r\\n  .tabBar {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .tabContent {\\r\\n    width: 100%;\\r\\n  }\\r\\n}\\r\\n@media (max-width: 769px) {\\r\\n  .tabContent {\\r\\n    display: none;\\r\\n  }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"tabBar\": \"side-bar_tabBar__iyIdX\",\n\t\"mainsection\": \"side-bar_mainsection__DhfYA\",\n\t\"tab\": \"side-bar_tab__o_T1K\",\n\t\"active\": \"side-bar_active__nBj9L\",\n\t\"tabContent\": \"side-bar_tabContent__sv_eQ\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s3XS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbN10ub25lT2ZbOF0udXNlWzJdIS4vc3JjL2xpYi9kZXNpZ24tc3lzdGVtL2NvbXBvbmVudC9zaWRlLWJhci9zaWRlLWJhci5tb2R1bGUuY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsK0tBQTJGO0FBQ3JJO0FBQ0E7QUFDQSxnR0FBZ0csb0JBQW9CLDZCQUE2QixpQkFBaUIseUJBQXlCLHFCQUFxQiwwQkFBMEIsS0FBSyxzQ0FBc0Msc0JBQXNCLG9CQUFvQixhQUFhLGtCQUFrQixLQUFLLDhCQUE4Qix1QkFBdUIsZ0NBQWdDLHNCQUFzQiwyQkFBMkIsc0JBQXNCLHlCQUF5Qix1QkFBdUIsbUJBQW1CLEtBQUssaUNBQWlDLDBCQUEwQiwwQkFBMEIscUJBQXFCLEtBQUssNkRBQTZELDBCQUEwQiwwQkFBMEIsbUJBQW1CLEtBQUsscUNBQXFDLG1DQUFtQyw4Q0FBOEMsaUNBQWlDLDRCQUE0QixLQUFLLG1DQUFtQywrQkFBK0Isc0JBQXNCLE9BQU8sdUNBQXVDLG9CQUFvQixPQUFPLEtBQUssK0JBQStCLG1DQUFtQyxzQkFBc0IsT0FBTyxLQUFLLFdBQVcsb0lBQW9JLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssK0RBQStELG9CQUFvQiw2QkFBNkIsaUJBQWlCLHlCQUF5QixxQkFBcUIsMEJBQTBCLEtBQUssc0JBQXNCLHNCQUFzQixvQkFBb0IsYUFBYSxrQkFBa0IsS0FBSyxjQUFjLHVCQUF1QixnQ0FBZ0Msc0JBQXNCLDJCQUEyQixzQkFBc0IseUJBQXlCLHVCQUF1QixtQkFBbUIsS0FBSyxpQkFBaUIsMEJBQTBCLDBCQUEwQixxQkFBcUIsS0FBSyw2QkFBNkIsMEJBQTBCLDBCQUEwQixtQkFBbUIsS0FBSyxxQkFBcUIsbUNBQW1DLDhDQUE4QyxpQ0FBaUMsNEJBQTRCLEtBQUssbUNBQW1DLGVBQWUsc0JBQXNCLE9BQU8sdUJBQXVCLG9CQUFvQixPQUFPLEtBQUssK0JBQStCLG1CQUFtQixzQkFBc0IsT0FBTyxLQUFLLHVCQUF1QjtBQUM5OEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZGVzaWduLXN5c3RlbS9jb21wb25lbnQvc2lkZS1iYXIvc2lkZS1iYXIubW9kdWxlLmNzcz8wNzA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzaWRlLWJhci5tb2R1bGUuY3NzICovXFxyXFxuLnNpZGUtYmFyX3RhYkJhcl9faXlJZFgge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgei1pbmRleDogOTk5OTk7XFxyXFxuICBiYWNrZ3JvdW5kOiAjMmMzMDNmO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lkZS1iYXJfbWFpbnNlY3Rpb25fX0RoZllBIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZGUtYmFyX3RhYl9fb19UMUsge1xcclxcbiAgbWFyZ2luOiA4cHggMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogRE0gU2FucztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhcl9hY3RpdmVfX25CajlMIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjY2NhYTZkO1xcclxcbiAgY29sb3I6ICMyYzMwM2Y7XFxyXFxufVxcclxcbi5zaWRlLWJhcl90YWJfX29fVDFLOmhvdmVyOm5vdCguc2lkZS1iYXJfYWN0aXZlX19uQmo5TCkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMDI0MmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhcl90YWJDb250ZW50X19zdl9lUSB7XFxyXFxuICBwYWRkaW5nLXRvcDogNDBweCAhaW1wb3J0YW50O1xcclxcbiAgcGFkZGluZzogODBweCA2MHB4IDI4cHggNjBweCAhaW1wb3J0YW50O1xcclxcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YTsgKi9cXHJcXG4gIGJhY2tncm91bmQ6ICMxOTE5MjE7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgLnNpZGUtYmFyX3RhYkJhcl9faXlJZFgge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNpZGUtYmFyX3RhYkNvbnRlbnRfX3N2X2VRIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xcclxcbiAgLnNpZGUtYmFyX3RhYkNvbnRlbnRfX3N2X2VRIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9saWIvZGVzaWduLXN5c3RlbS9jb21wb25lbnQvc2lkZS1iYXIvc2lkZS1iYXIubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx3QkFBd0I7QUFDeEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLHVDQUF1QztFQUN2Qyw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBzaWRlLWJhci5tb2R1bGUuY3NzICovXFxyXFxuLnRhYkJhciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiA5OTk5OTtcXHJcXG4gIGJhY2tncm91bmQ6ICMyYzMwM2Y7XFxyXFxufVxcclxcblxcclxcbi5tYWluc2VjdGlvbiB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50YWIge1xcclxcbiAgbWFyZ2luOiA4cHggMTdweDtcXHJcXG4gIHBhZGRpbmc6IDEycHggMCAxMnB4IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogRE0gU2FucztcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5hY3RpdmUge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNjY2FhNmQ7XFxyXFxuICBjb2xvcjogIzJjMzAzZjtcXHJcXG59XFxyXFxuLnRhYjpob3Zlcjpub3QoLmFjdGl2ZSkge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIGJhY2tncm91bmQ6ICMyMDI0MmU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi50YWJDb250ZW50IHtcXHJcXG4gIHBhZGRpbmctdG9wOiA0MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICBwYWRkaW5nOiA4MHB4IDYwcHggMjhweCA2MHB4ICFpbXBvcnRhbnQ7XFxyXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhOyAqL1xcclxcbiAgYmFja2dyb3VuZDogIzE5MTkyMTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAudGFiQmFyIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC50YWJDb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxufVxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjlweCkge1xcclxcbiAgLnRhYkNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0YWJCYXJcIjogXCJzaWRlLWJhcl90YWJCYXJfX2l5SWRYXCIsXG5cdFwibWFpbnNlY3Rpb25cIjogXCJzaWRlLWJhcl9tYWluc2VjdGlvbl9fRGhmWUFcIixcblx0XCJ0YWJcIjogXCJzaWRlLWJhcl90YWJfX29fVDFLXCIsXG5cdFwiYWN0aXZlXCI6IFwic2lkZS1iYXJfYWN0aXZlX19uQmo5TFwiLFxuXHRcInRhYkNvbnRlbnRcIjogXCJzaWRlLWJhcl90YWJDb250ZW50X19zdl9lUVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[7].oneOf[8].use[2]!./src/lib/design-system/component/side-bar/side-bar.module.css\n"));

/***/ })

});