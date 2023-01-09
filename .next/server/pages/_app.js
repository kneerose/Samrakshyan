/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/ui/nprocess.tsx":
/*!****************************************!*\
  !*** ./src/components/ui/nprocess.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_4___default().configure({\n    showSpinner: false\n});\n/* eslint-disable react/prefer-stateless-function */ class NextNProgress extends (react__WEBPACK_IMPORTED_MODULE_2___default().Component) {\n    static defaultProps = {\n        color: \"#29D\",\n        startPosition: 0.3,\n        stopDelayMs: 200,\n        height: 3\n    };\n    timer = null;\n    routeChangeStart = ()=>{\n        nprogress__WEBPACK_IMPORTED_MODULE_4___default().set(this.props.startPosition);\n        nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();\n    };\n    routeChangeEnd = ()=>{\n        clearTimeout(this.timer);\n        this.timer = setTimeout(()=>{\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().done(true);\n        }, this.props.stopDelayMs);\n    };\n    render() {\n        const { color , height  } = this.props;\n        return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n            id: \"8814135757668fb6\",\n            dynamic: [\n                color,\n                height,\n                color,\n                color,\n                color,\n                color\n            ],\n            children: `#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:1031;top:0;left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;-webkit-box-shadow:0 0 10px ${color},0 0 5px ${color};-moz-box-shadow:0 0 10px ${color},0 0 5px ${color};box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg)translate(0px,-4px);-ms-transform:rotate(3deg)translate(0px,-4px);-moz-transform:rotate(3deg)translate(0px,-4px);-o-transform:rotate(3deg)translate(0px,-4px);transform:rotate(3deg)translate(0px,-4px)}#nprogress .spinner{display:\"block\";position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:solid 2px transparent;border-top-color:${color};border-left-color:${color};-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:nprogresss-spinner 400ms linear infinite;-moz-animation:nprogress-spinner 400ms linear infinite;-o-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes nprogress-spinner{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes nprogress-spinner{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}`\n        }, void 0, false, void 0, this);\n    }\n    componentDidMount() {\n        const { options  } = this.props;\n        if (options) {\n            nprogress__WEBPACK_IMPORTED_MODULE_4___default().configure(options);\n        }\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeStart\", this.routeChangeStart);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeComplete\", this.routeChangeEnd);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on(\"routeChangeError\", this.routeChangeEnd);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextNProgress);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9ucHJvY2Vzcy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFFTztBQUVDO0FBVWxDRSwwREFBbUIsQ0FBQztJQUFFRSxhQUFhLEtBQUs7QUFBQztBQUV6QyxrREFBa0QsR0FDbEQsTUFBTUMsc0JBQXNCTCx3REFBZTtJQUN6QyxPQUFPTyxlQUFlO1FBQ3BCQyxPQUFPO1FBQ1BDLGVBQWU7UUFDZkMsYUFBYTtRQUNiQyxRQUFRO0lBQ1YsRUFBRTtJQUVGQyxRQUFhLElBQUksQ0FBQztJQUVsQkMsbUJBQW1CLElBQU07UUFDdkJYLG9EQUFhLENBQUMsSUFBSSxDQUFDYSxLQUFLLENBQUNOLGFBQWE7UUFDdENQLHNEQUFlO0lBQ2pCLEVBQUU7SUFFRmUsaUJBQWlCLElBQU07UUFDckJDLGFBQWEsSUFBSSxDQUFDTixLQUFLO1FBQ3ZCLElBQUksQ0FBQ0EsS0FBSyxHQUFHTyxXQUFXLElBQU07WUFDNUJqQixxREFBYyxDQUFDLElBQUk7UUFDckIsR0FBRyxJQUFJLENBQUNhLEtBQUssQ0FBQ0wsV0FBVztJQUMzQixFQUFFO0lBRUZXLFNBQVM7UUFDUCxNQUFNLEVBQUViLE1BQUssRUFBRUcsT0FBTSxFQUFFLEdBQUcsSUFBSSxDQUFDSSxLQUFLO1FBRXBDLE9BQU8sOERBQUM7OztnQkFNWVA7Z0JBTUpHO2dCQVFhSDtnQkFBa0JBO2dCQWtCckJBO2dCQUNDQTs7bUZBakNQQSxvRUFNSkcsMEhBUWFILGlCQUFrQkEsa0NBQWxCQSxpQkFBa0JBLDZCQUFsQkEsaUJBQWtCQSwwZkFrQnJCQSwyQkFDQ0E7O0lBK0I3QjtJQUVBYyxvQkFBb0I7UUFDbEIsTUFBTSxFQUFFQyxRQUFPLEVBQUUsR0FBRyxJQUFJLENBQUNSLEtBQUs7UUFFOUIsSUFBSVEsU0FBUztZQUNYckIsMERBQW1CLENBQUNxQjtRQUN0QixDQUFDO1FBRUR0Qiw0REFBZ0IsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDWSxnQkFBZ0I7UUFDMURaLDREQUFnQixDQUFDLHVCQUF1QixJQUFJLENBQUNnQixjQUFjO1FBQzNEaEIsNERBQWdCLENBQUMsb0JBQW9CLElBQUksQ0FBQ2dCLGNBQWM7SUFDMUQ7QUFDRjtBQUVBLGlFQUFlWixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdWkvbnByb2Nlc3MudHN4PzNhMjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcblxuaW50ZXJmYWNlIElOZXh0TlByb2dyZXNzUHJvcHMge1xuICBjb2xvcjogc3RyaW5nO1xuICBzdGFydFBvc2l0aW9uOiBudW1iZXI7XG4gIHN0b3BEZWxheU1zOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBvcHRpb25zOiBhbnk7XG59XG5cbk5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3ByZWZlci1zdGF0ZWxlc3MtZnVuY3Rpb24gKi9cbmNsYXNzIE5leHROUHJvZ3Jlc3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8SU5leHROUHJvZ3Jlc3NQcm9wcywgYW55PiB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY29sb3I6IFwiIzI5RFwiLFxuICAgIHN0YXJ0UG9zaXRpb246IDAuMyxcbiAgICBzdG9wRGVsYXlNczogMjAwLFxuICAgIGhlaWdodDogMyxcbiAgfTtcblxuICB0aW1lcjogYW55ID0gbnVsbDtcblxuICByb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zZXQodGhpcy5wcm9wcy5zdGFydFBvc2l0aW9uKTtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgfTtcblxuICByb3V0ZUNoYW5nZUVuZCA9ICgpID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgTlByb2dyZXNzLmRvbmUodHJ1ZSk7XG4gICAgfSwgdGhpcy5wcm9wcy5zdG9wRGVsYXlNcyk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY29sb3IsIGhlaWdodCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAjbnByb2dyZXNzIHtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAjbnByb2dyZXNzIC5iYXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Y29sb3J9O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogJHtoZWlnaHR9cHg7XG4gICAgICAgIH1cbiAgICAgICAgI25wcm9ncmVzcyAucGVnIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICR7Y29sb3J9LCAwIDAgNXB4ICR7Y29sb3J9O1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgIH1cbiAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lciB7XG4gICAgICAgICAgZGlzcGxheTogXCJibG9ja1wiO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMDMxO1xuICAgICAgICAgIHRvcDogMTVweDtcbiAgICAgICAgICByaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyLWljb24ge1xuICAgICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICR7Y29sb3J9O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAke2NvbG9yfTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgYW5pbWF0aW9uOiBucHJvZ3Jlc3Mtc3Bpbm5lciA0MDBtcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIH1cbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAubnByb2dyZXNzLWN1c3RvbS1wYXJlbnQgI25wcm9ncmVzcyAuc3Bpbm5lcixcbiAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucyB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIHRoaXMucm91dGVDaGFuZ2VTdGFydCk7XG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgdGhpcy5yb3V0ZUNoYW5nZUVuZCk7XG4gICAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlRXJyb3JcIiwgdGhpcy5yb3V0ZUNoYW5nZUVuZCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV4dE5Qcm9ncmVzcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiTmV4dE5Qcm9ncmVzcyIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImNvbG9yIiwic3RhcnRQb3NpdGlvbiIsInN0b3BEZWxheU1zIiwiaGVpZ2h0IiwidGltZXIiLCJyb3V0ZUNoYW5nZVN0YXJ0Iiwic2V0IiwicHJvcHMiLCJzdGFydCIsInJvdXRlQ2hhbmdlRW5kIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImRvbmUiLCJyZW5kZXIiLCJjb21wb25lbnREaWRNb3VudCIsIm9wdGlvbnMiLCJldmVudHMiLCJvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/nprocess.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ \"./src/store/store.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_ui_nprocess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ui/nprocess */ \"./src/components/ui/nprocess.tsx\");\n\n\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>{\n        nprogress__WEBPACK_IMPORTED_MODULE_3___default().start();\n    });\n    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>{\n        nprogress__WEBPACK_IMPORTED_MODULE_3___default().done();\n    });\n    const getLayout = Component.getLayout ?? ((page)=>page);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"संरक्षण\"\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"shortcut icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_nprocess__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                color: \"#f04444\",\n                startPosition: 0,\n                stopDelayMs: 400,\n                height: 5,\n                options: {\n                    easing: \"ease\"\n                }\n            }, void 0, false, {\n                fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n                store: _store_store__WEBPACK_IMPORTED_MODULE_5__.store,\n                children: getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 20\n                }, this))\n            }, void 0, false, {\n                fileName: \"/home/niraj/project/samrachhen/src/pages/_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDRDtBQUNDO0FBQ0s7QUFDQTtBQUlWO0FBQ3lCO0FBSXRELFNBQVNNLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQXNCLEVBQUU7SUFDM0RSLDREQUFnQixDQUFDLG9CQUFvQixJQUFNO1FBQ3pDQyxzREFBZTtJQUNqQjtJQUNBRCw0REFBZ0IsQ0FBQyx1QkFBdUIsSUFBTTtRQUM1Q0MscURBQWM7SUFDaEI7SUFDQSxNQUFNWSxZQUFZTixVQUFVTSxTQUFTLElBQUssRUFBQ0MsT0FBU0EsSUFBRztJQUN2RCxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNXO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFnQkMsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUVqQyw4REFBQ2IsK0RBQWFBO2dCQUNaYyxPQUFNO2dCQUNOQyxlQUFlO2dCQUNmQyxhQUFhO2dCQUNiQyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFQyxRQUFRO2dCQUFPOzs7Ozs7MEJBRTVCLDhEQUFDdEIsaURBQVFBO2dCQUFDQyxPQUFPQSwrQ0FBS0E7MEJBQ25CVSx3QkFBVSw4REFBQ047b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUkzQztBQUNBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tIFwiLi4vc3RvcmUvc3RvcmVcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCI7XG5pbXBvcnQgeyBOZXh0UGFnZVdpdGhMYXlvdXQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTmV4dE5Qcm9ncmVzcyBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9ucHJvY2Vzc1wiO1xudHlwZSBBcHBQcm9wc1dpdGhMYXlvdXQgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59O1xuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4ge1xuICAgIG5Qcm9ncmVzcy5zdGFydCgpO1xuICB9KTtcbiAgUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4ge1xuICAgIG5Qcm9ncmVzcy5kb25lKCk7XG4gIH0pO1xuICBjb25zdCBnZXRMYXlvdXQgPSBDb21wb25lbnQuZ2V0TGF5b3V0ID8/ICgocGFnZSkgPT4gcGFnZSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+4KS44KSC4KSw4KSV4KWN4KS34KSjPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5leHROUHJvZ3Jlc3NcbiAgICAgICAgY29sb3I9XCIjZjA0NDQ0XCJcbiAgICAgICAgc3RhcnRQb3NpdGlvbj17MH1cbiAgICAgICAgc3RvcERlbGF5TXM9ezQwMH1cbiAgICAgICAgaGVpZ2h0PXs1fVxuICAgICAgICBvcHRpb25zPXt7IGVhc2luZzogXCJlYXNlXCIgfX1cbiAgICAgIC8+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAge2dldExheW91dCg8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+KX1cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJuUHJvZ3Jlc3MiLCJQcm92aWRlciIsInN0b3JlIiwiSGVhZCIsIk5leHROUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImV2ZW50cyIsIm9uIiwic3RhcnQiLCJkb25lIiwiZ2V0TGF5b3V0IiwicGFnZSIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJjb2xvciIsInN0YXJ0UG9zaXRpb24iLCJzdG9wRGVsYXlNcyIsImhlaWdodCIsIm9wdGlvbnMiLCJlYXNpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/store/actions/resetState.ts":
/*!*****************************************!*\
  !*** ./src/store/actions/resetState.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RESET_STATE_ACTION_TYPE\": () => (/* binding */ RESET_STATE_ACTION_TYPE),\n/* harmony export */   \"resetStateAction\": () => (/* binding */ resetStateAction)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RESET_STATE_ACTION_TYPE = \"resetState\";\nconst resetStateAction = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAction)(RESET_STATE_ACTION_TYPE, ()=>{\n    return {\n        payload: null\n    };\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvYWN0aW9ucy9yZXNldFN0YXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0Q7QUFFekMsTUFBTUMsMEJBQTBCLGFBQWE7QUFDN0MsTUFBTUMsbUJBQW1CRiw4REFBWUEsQ0FBQ0MseUJBQXlCLElBQU07SUFDeEUsT0FBTztRQUFFRSxTQUFTLElBQUk7SUFBQztBQUMzQixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbnMvcmVzZXRTdGF0ZS50cz80ZTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xuXG5leHBvcnQgY29uc3QgUkVTRVRfU1RBVEVfQUNUSU9OX1RZUEUgPSAncmVzZXRTdGF0ZSc7XG5leHBvcnQgY29uc3QgcmVzZXRTdGF0ZUFjdGlvbiA9IGNyZWF0ZUFjdGlvbihSRVNFVF9TVEFURV9BQ1RJT05fVFlQRSwgKCkgPT4ge1xuICAgIHJldHVybiB7IHBheWxvYWQ6IG51bGwgfTtcbn0pO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUFjdGlvbiIsIlJFU0VUX1NUQVRFX0FDVElPTl9UWVBFIiwicmVzZXRTdGF0ZUFjdGlvbiIsInBheWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/store/actions/resetState.ts\n");

/***/ }),

/***/ "./src/store/detail/api.ts":
/*!*********************************!*\
  !*** ./src/store/detail/api.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"responseApi\": () => (/* binding */ responseApi),\n/* harmony export */   \"usePostPredictionResponseMutation\": () => (/* binding */ usePostPredictionResponseMutation),\n/* harmony export */   \"usePrefetch\": () => (/* binding */ usePrefetch)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./src/store/detail/types.ts\");\n\n\nconst responseApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: _types__WEBPACK_IMPORTED_MODULE_1__.PREDICTION_RESPONSE_REDUCER_KEY,\n    tagTypes: [\n        \"RESPONSE\"\n    ],\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: \"http://ec2-3-17-77-8.us-east-2.compute.amazonaws.com:8000\"\n    }),\n    endpoints: (builder)=>({\n            postPredictionResponse: builder.mutation({\n                query: (requestFileString)=>({\n                        url: \"/files/\",\n                        method: \"POST\",\n                        credentials: \"omit\",\n                        body: requestFileString\n                    })\n            })\n        })\n});\nconst { usePrefetch , usePostPredictionResponseMutation  } = responseApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGV0YWlsL2FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUU7QUFFZjtBQUVuRCxNQUFNRyxjQUFjSCx1RUFBU0EsQ0FBQztJQUNuQ0ksYUFBYUYsbUVBQStCQTtJQUM1Q0csVUFBVTtRQUFDO0tBQVc7SUFDdEJDLFdBQVdMLDRFQUFjQSxDQUFDO1FBQ3hCTSxTQUFTO0lBQ1g7SUFDQUMsV0FBVyxDQUFDQyxVQUFhO1lBQ3ZCQyx3QkFBd0JELFFBQVFFLFFBQVEsQ0FBMEI7Z0JBQ2hFQyxPQUFPLENBQUNDLG9CQUF1Qjt3QkFDN0JDLEtBQUs7d0JBQ0xDLFFBQVE7d0JBQ1JDLGFBQWE7d0JBQ2JDLE1BQU1KO29CQUNSO1lBQ0Y7UUFDRjtBQUNGLEdBQUc7QUFFSSxNQUFNLEVBQUVLLFlBQVcsRUFBRUMsa0NBQWlDLEVBQUUsR0FBR2hCLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZGV0YWlsL2FwaS50cz8zMTUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwaSwgZmV0Y2hCYXNlUXVlcnkgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdFwiO1xuaW1wb3J0IHsgcHJlZGljdGlvbkR0byB9IGZyb20gXCIuLi8uLi9tb2RlbHMvZHRvcy9wcmVkaWN0aW9uXCI7XG5pbXBvcnQgeyBQUkVESUNUSU9OX1JFU1BPTlNFX1JFRFVDRVJfS0VZIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNlQXBpID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6IFBSRURJQ1RJT05fUkVTUE9OU0VfUkVEVUNFUl9LRVksXG4gIHRhZ1R5cGVzOiBbXCJSRVNQT05TRVwiXSwgLy9hdXRvZmV0Y2hpbmdcbiAgYmFzZVF1ZXJ5OiBmZXRjaEJhc2VRdWVyeSh7XG4gICAgYmFzZVVybDogXCJodHRwOi8vZWMyLTMtMTctNzctOC51cy1lYXN0LTIuY29tcHV0ZS5hbWF6b25hd3MuY29tOjgwMDBcIixcbiAgfSksXG4gIGVuZHBvaW50czogKGJ1aWxkZXIpID0+ICh7XG4gICAgcG9zdFByZWRpY3Rpb25SZXNwb25zZTogYnVpbGRlci5tdXRhdGlvbjxwcmVkaWN0aW9uRHRvLCBGb3JtRGF0YT4oe1xuICAgICAgcXVlcnk6IChyZXF1ZXN0RmlsZVN0cmluZykgPT4gKHtcbiAgICAgICAgdXJsOiBcIi9maWxlcy9cIixcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgY3JlZGVudGlhbHM6IFwib21pdFwiLFxuICAgICAgICBib2R5OiByZXF1ZXN0RmlsZVN0cmluZyxcbiAgICAgIH0pLFxuICAgIH0pLFxuICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgeyB1c2VQcmVmZXRjaCwgdXNlUG9zdFByZWRpY3Rpb25SZXNwb25zZU11dGF0aW9uIH0gPSByZXNwb25zZUFwaTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVBcGkiLCJmZXRjaEJhc2VRdWVyeSIsIlBSRURJQ1RJT05fUkVTUE9OU0VfUkVEVUNFUl9LRVkiLCJyZXNwb25zZUFwaSIsInJlZHVjZXJQYXRoIiwidGFnVHlwZXMiLCJiYXNlUXVlcnkiLCJiYXNlVXJsIiwiZW5kcG9pbnRzIiwiYnVpbGRlciIsInBvc3RQcmVkaWN0aW9uUmVzcG9uc2UiLCJtdXRhdGlvbiIsInF1ZXJ5IiwicmVxdWVzdEZpbGVTdHJpbmciLCJ1cmwiLCJtZXRob2QiLCJjcmVkZW50aWFscyIsImJvZHkiLCJ1c2VQcmVmZXRjaCIsInVzZVBvc3RQcmVkaWN0aW9uUmVzcG9uc2VNdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/detail/api.ts\n");

/***/ }),

/***/ "./src/store/detail/types.ts":
/*!***********************************!*\
  !*** ./src/store/detail/types.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PREDICTION_RESPONSE_REDUCER_KEY\": () => (/* binding */ PREDICTION_RESPONSE_REDUCER_KEY)\n/* harmony export */ });\nconst PREDICTION_RESPONSE_REDUCER_KEY = \"responseApi\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGV0YWlsL3R5cGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxrQ0FBa0MsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdG9yZS9kZXRhaWwvdHlwZXMudHM/ZjQxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUFJFRElDVElPTl9SRVNQT05TRV9SRURVQ0VSX0tFWSA9ICdyZXNwb25zZUFwaSc7XG4iXSwibmFtZXMiOlsiUFJFRElDVElPTl9SRVNQT05TRV9SRURVQ0VSX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/detail/types.ts\n");

/***/ }),

/***/ "./src/store/enchancers.ts":
/*!*********************************!*\
  !*** ./src/store/enchancers.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"monitorReducerEnhancer\": () => (/* binding */ monitorReducerEnhancer)\n/* harmony export */ });\nconst round = (number)=>Math.round(number * 100) / 100;\nconst consoleStyle = [\n    \"color: #ffffff\",\n    \"background: #6366f1\",\n    \"font-size: 12px\",\n    \"padding: 10px\",\n    \"width: 100%\",\n    \"font-weight: bold\"\n].join(\";\");\nconst monitorReducerEnhancer = (createStore)=>(reducer, initialState, enhancer)=>{\n        const monitoredReducer = (state, action)=>{\n            const start = performance.now();\n            const newState = reducer(state, action);\n            const end = performance.now();\n            const diff = round(end - start);\n            console.log(`%c${action.type} Reducer process time ${diff} seconds`, consoleStyle);\n            return newState;\n        };\n        return createStore(monitoredReducer, initialState, enhancer);\n    };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZW5jaGFuY2Vycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxDQUFDQyxTQUFtQkMsS0FBS0YsS0FBSyxDQUFDQyxTQUFTLE9BQU87QUFFN0QsTUFBTUUsZUFBZTtJQUFDO0lBQWtCO0lBQXVCO0lBQW1CO0lBQWlCO0lBQWU7Q0FBb0IsQ0FBQ0MsSUFBSSxDQUFDO0FBRXJJLE1BQU1DLHlCQUNULENBQUNDLGNBQ0QsQ0FBQ0MsU0FBY0MsY0FBbUJDLFdBQXVCO1FBQ3JELE1BQU1DLG1CQUFtQixDQUFDQyxPQUFZQyxTQUFnQjtZQUNsRCxNQUFNQyxRQUFRQyxZQUFZQyxHQUFHO1lBQzdCLE1BQU1DLFdBQVdULFFBQVFJLE9BQU9DO1lBQ2hDLE1BQU1LLE1BQU1ILFlBQVlDLEdBQUc7WUFDM0IsTUFBTUcsT0FBT2xCLE1BQU1pQixNQUFNSjtZQUV6Qk0sUUFBUUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFUixPQUFPUyxJQUFJLENBQUMsc0JBQXNCLEVBQUVILEtBQUssUUFBUSxDQUFDLEVBQUVmO1lBRXJFLE9BQU9hO1FBQ1g7UUFFQSxPQUFPVixZQUFZSSxrQkFBa0JGLGNBQWNDO0lBQ3ZELEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvZW5jaGFuY2Vycy50cz8wNzVhIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJvdW5kID0gKG51bWJlcjogbnVtYmVyKSA9PiBNYXRoLnJvdW5kKG51bWJlciAqIDEwMCkgLyAxMDA7XG5cbmNvbnN0IGNvbnNvbGVTdHlsZSA9IFsnY29sb3I6ICNmZmZmZmYnLCAnYmFja2dyb3VuZDogIzYzNjZmMScsICdmb250LXNpemU6IDEycHgnLCAncGFkZGluZzogMTBweCcsICd3aWR0aDogMTAwJScsICdmb250LXdlaWdodDogYm9sZCddLmpvaW4oJzsnKTtcblxuZXhwb3J0IGNvbnN0IG1vbml0b3JSZWR1Y2VyRW5oYW5jZXI6IGFueSA9XG4gICAgKGNyZWF0ZVN0b3JlOiBhbnkpOiBhbnkgPT5cbiAgICAocmVkdWNlcjogYW55LCBpbml0aWFsU3RhdGU6IGFueSwgZW5oYW5jZXI6IGFueSk6IGFueSA9PiB7XG4gICAgICAgIGNvbnN0IG1vbml0b3JlZFJlZHVjZXIgPSAoc3RhdGU6IGFueSwgYWN0aW9uOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICAgICAgICBjb25zdCBlbmQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGRpZmYgPSByb3VuZChlbmQgLSBzdGFydCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7YWN0aW9uLnR5cGV9IFJlZHVjZXIgcHJvY2VzcyB0aW1lICR7ZGlmZn0gc2Vjb25kc2AsIGNvbnNvbGVTdHlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlU3RvcmUobW9uaXRvcmVkUmVkdWNlciwgaW5pdGlhbFN0YXRlLCBlbmhhbmNlcik7XG4gICAgfTtcbiJdLCJuYW1lcyI6WyJyb3VuZCIsIm51bWJlciIsIk1hdGgiLCJjb25zb2xlU3R5bGUiLCJqb2luIiwibW9uaXRvclJlZHVjZXJFbmhhbmNlciIsImNyZWF0ZVN0b3JlIiwicmVkdWNlciIsImluaXRpYWxTdGF0ZSIsImVuaGFuY2VyIiwibW9uaXRvcmVkUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsIm5ld1N0YXRlIiwiZW5kIiwiZGlmZiIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/enchancers.ts\n");

/***/ }),

/***/ "./src/store/store.ts":
/*!****************************!*\
  !*** ./src/store/store.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query */ \"@reduxjs/toolkit/query\");\n/* harmony import */ var _reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _actions_resetState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/resetState */ \"./src/store/actions/resetState.ts\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _enchancers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enchancers */ \"./src/store/enchancers.ts\");\n/* harmony import */ var _detail_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/api */ \"./src/store/detail/api.ts\");\n\n\n\n\n\n\nconst loggerMiddleware = (0,redux_logger__WEBPACK_IMPORTED_MODULE_3__.createLogger)();\nconst middlewares = [\n    loggerMiddleware,\n    _detail_api__WEBPACK_IMPORTED_MODULE_5__.responseApi.middleware\n];\nconst reducers = {\n    [_detail_api__WEBPACK_IMPORTED_MODULE_5__.responseApi.reducerPath]: _detail_api__WEBPACK_IMPORTED_MODULE_5__.responseApi.reducer\n};\nconst combinedReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)(reducers);\nconst rootReducer = (state, action)=>{\n    if (action.type === _actions_resetState__WEBPACK_IMPORTED_MODULE_2__.RESET_STATE_ACTION_TYPE) {\n        state = {};\n    }\n    return combinedReducer(state, action);\n};\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: rootReducer,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n            serializableCheck: false\n        }).concat(middlewares),\n    preloadedState: {},\n    enhancers: [\n        _enchancers__WEBPACK_IMPORTED_MODULE_4__.monitorReducerEnhancer\n    ]\n});\n(0,_reduxjs_toolkit_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvc3RvcmUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMkU7QUFDbkI7QUFDTztBQUNuQjtBQUNVO0FBQ1g7QUFDM0MsTUFBTU8sbUJBQW1CSCwwREFBWUE7QUFDckMsTUFBTUksY0FBYztJQUFDRDtJQUFpQkQsK0RBQXNCO0NBQUM7QUFDN0QsTUFBTUksV0FBVztJQUNiLENBQUNKLGdFQUF1QixDQUFDLEVBQUNBLDREQUFtQjtBQUNqRDtBQUNBLE1BQU1PLGtCQUFrQmIsaUVBQWVBLENBQWtCVTtBQUVsRCxNQUFNSSxjQUFrQyxDQUFDQyxPQUFNQyxTQUFTO0lBQzNELElBQUdBLE9BQU9DLElBQUksS0FBS2Qsd0VBQXVCQSxFQUFDO1FBQ3ZDWSxRQUFRLENBQUM7SUFDYixDQUFDO0lBQ0QsT0FBT0YsZ0JBQWdCRSxPQUFPQztBQUNsQyxFQUFDO0FBRU0sTUFBTUUsUUFBUWpCLGdFQUFjQSxDQUFDO0lBQ2hDVyxTQUFTRTtJQUNUTCxZQUFZLENBQUNVLHVCQUNiQSxxQkFBcUI7WUFDakJDLG1CQUFtQixLQUFLO1FBYTVCLEdBQUdDLE1BQU0sQ0FBQ2I7SUFDZGMsZ0JBQWdCLENBQUM7SUFDakJDLFdBQVU7UUFBQ2xCLCtEQUFzQkE7S0FBQztBQUNsQyxHQUFFO0FBS0ZILHNFQUFjQSxDQUFDZ0IsTUFBTU0sUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdG9yZS50cz81MDJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY29uZmlndXJlU3RvcmUsUmVkdWNlciB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5pbXBvcnQgeyBzZXR1cExpc3RlbmVycyB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQvcXVlcnknO1xuaW1wb3J0IHsgUkVTRVRfU1RBVEVfQUNUSU9OX1RZUEUgfSBmcm9tIFwiLi9hY3Rpb25zL3Jlc2V0U3RhdGVcIjtcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcic7XG5pbXBvcnQgeyBtb25pdG9yUmVkdWNlckVuaGFuY2VyIH0gZnJvbSBcIi4vZW5jaGFuY2Vyc1wiO1xuaW1wb3J0IHsgcmVzcG9uc2VBcGkgfSBmcm9tIFwiLi9kZXRhaWwvYXBpXCI7XG5jb25zdCBsb2dnZXJNaWRkbGV3YXJlID0gY3JlYXRlTG9nZ2VyKCk7XG5jb25zdCBtaWRkbGV3YXJlcyA9IFtsb2dnZXJNaWRkbGV3YXJlLHJlc3BvbnNlQXBpLm1pZGRsZXdhcmVdO1xuY29uc3QgcmVkdWNlcnMgPSB7XG4gICAgW3Jlc3BvbnNlQXBpLnJlZHVjZXJQYXRoXTpyZXNwb25zZUFwaS5yZWR1Y2VyLFxufTtcbmNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vyczx0eXBlb2YgcmVkdWNlcnM+KHJlZHVjZXJzKTtcblxuZXhwb3J0IGNvbnN0IHJvb3RSZWR1Y2VyOiBSZWR1Y2VyPFJvb3RTdGF0ZT4gPSAoc3RhdGUsYWN0aW9uKT0+e1xuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRVNFVF9TVEFURV9BQ1RJT05fVFlQRSl7XG4gICAgICAgIHN0YXRlID0ge30gYXMgUm9vdFN0YXRlO1xuICAgIH1cbiAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xufVxuXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gICAgbWlkZGxld2FyZTogKGdldERlZmF1bHRNaWRkbGV3YXJlKSA9PlxuICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHtcbiAgICAgICAgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlXG4gICAgICAgIC8vIHNlcmlhbGl6YWJsZUNoZWNrOiB7XG4gICAgICAgIC8vICAgICBpZ25vcmVkQWN0aW9uczogW1xuICAgICAgICAvLyAgICAgICAgIEZMVVNILFxuICAgICAgICAvLyAgICAgICAgIFJFSFlEUkFURSxcbiAgICAgICAgLy8gICAgICAgICBQQVVTRSxcbiAgICAgICAgLy8gICAgICAgICBQRVJTSVNULFxuICAgICAgICAvLyAgICAgICAgIFBVUkdFLFxuICAgICAgICAvLyAgICAgICAgIFJFR0lTVEVSLFxuICAgICAgICAvLyAgICAgICAgIC8vIFRoaXMgYWN0aW9uIGhhcyBmdW5jdGlvbnMgc2V0IGluIHN0b3JlIG9iamVjdCBzbyB0byBhdm9pZCBzZXJpYWxpemFibGUgY2hlY2sgaXRzIGJlZW4gYWRkZWQgaGVyZVxuICAgICAgICAvLyAgICAgICAgICdydGtXYWxsZXRQcm92aWRlci9zZXRSdGtXYWxsZXRQcm92aWRlcidcbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gfVxuICAgIH0pLmNvbmNhdChtaWRkbGV3YXJlcyksXG5wcmVsb2FkZWRTdGF0ZToge30sXG5lbmhhbmNlcnM6W21vbml0b3JSZWR1Y2VyRW5oYW5jZXJdXG59KVxuXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDtcbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIGNvbWJpbmVkUmVkdWNlcj47XG5cbnNldHVwTGlzdGVuZXJzKHN0b3JlLmRpc3BhdGNoKTtcblxuIl0sIm5hbWVzIjpbImNvbWJpbmVSZWR1Y2VycyIsImNvbmZpZ3VyZVN0b3JlIiwic2V0dXBMaXN0ZW5lcnMiLCJSRVNFVF9TVEFURV9BQ1RJT05fVFlQRSIsImNyZWF0ZUxvZ2dlciIsIm1vbml0b3JSZWR1Y2VyRW5oYW5jZXIiLCJyZXNwb25zZUFwaSIsImxvZ2dlck1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsIm1pZGRsZXdhcmUiLCJyZWR1Y2VycyIsInJlZHVjZXJQYXRoIiwicmVkdWNlciIsImNvbWJpbmVkUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwic3RvcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIiwiY29uY2F0IiwicHJlbG9hZGVkU3RhdGUiLCJlbmhhbmNlcnMiLCJkaXNwYXRjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/query":
/*!*****************************************!*\
  !*** external "@reduxjs/toolkit/query" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-logger");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();