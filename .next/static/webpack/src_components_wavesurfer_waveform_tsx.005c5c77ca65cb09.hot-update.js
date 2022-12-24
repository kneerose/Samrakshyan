"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_wavesurfer_waveform_tsx",{

/***/ "./src/components/wavesurfer/waveform.tsx":
/*!************************************************!*\
  !*** ./src/components/wavesurfer/waveform.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button/button */ \"./src/components/ui/button/button.tsx\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hooks/use-is-mounted */ \"./src/lib/hooks/use-is-mounted.ts\");\n/* harmony import */ var _playercard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playercard */ \"./src/components/playercard/index.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { Flex, Button } from \"@chakar-ui/react\";\nvar Waveform = function() {\n    _s();\n    var waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isAudio = ref[0], setAudio = ref[1];\n    var isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();\n    var file;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), currentPosition = ref1[0], setPosition = ref1[1];\n    var fileInput;\n    var createWaveform = function(e) {\n        setAudio(true);\n        file = e.target.files[0];\n        if (file) {\n            waveform.current.load(URL.createObjectURL(file));\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    var getWaveformComponent = function() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"waveform\",\n            className: isAudio ? \"visible\" : \"hidden\"\n        }, void 0, false, {\n            fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, _this);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Check if wavesurfer object is already created.\n        if (!waveform.current) {\n            // Create a wavesurfer object\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default().create({\n                barWidth: 3,\n                barRadius: 3,\n                barGap: 2,\n                barMinHeight: 1,\n                barHeight: 20,\n                cursorWidth: 1,\n                container: \"#waveform\",\n                backend: \"MediaElement\",\n                height: 200,\n                progressColor: \"#4353FF\",\n                responsive: true,\n                waveColor: \"#567FFF\",\n                cursorColor: \"#567FFF\"\n            });\n        // waveform.current.load(\"/spinybabbler.mp3\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full pt-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"audio/*\",\n                        className: \"opacity-0 w-0 h-2\",\n                        ref: function(fileinput) {\n                            return fileInput = fileinput;\n                        },\n                        onChange: createWaveform\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Import Sound\",\n                        onClickHandler: function() {\n                            return fileInput.click();\n                        },\n                        className: \"bg-buttonColor text-white\",\n                        icon: undefined\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_playercard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                waveform: waveform,\n                setPosition: setPosition,\n                currentPosition: currentPosition,\n                setAudio: setAudio,\n                isAudio: isAudio,\n                waveformComponent: getWaveformComponent()\n            }, void 0, false, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, _this);\n};\n_s(Waveform, \"Gv68E70b3wk0B3Z0NsaD1x2Grp4=\", false, function() {\n    return [\n        _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted\n    ];\n});\n_c = Waveform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waveform);\nvar _c;\n$RefreshReg$(_c, \"Waveform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93YXZlc3VyZmVyL3dhdmVmb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUF5QztBQUNGO0FBQ2E7QUFDVTtBQUN2QjtBQUN2QyxtREFBbUQ7QUFFbkQsSUFBTU8sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQU1DLFFBQVEsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBNEJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE9BQU8sR0FBY0wsR0FBZSxHQUE3QixFQUFFTSxRQUFRLEdBQUlOLEdBQWUsR0FBbkI7SUFDeEIsSUFBTU8sU0FBUyxHQUFHTix1RUFBWSxFQUFFO0lBQ2hDLElBQUlPLElBQUk7SUFDUixJQUF1Q1IsSUFBa0IsR0FBbEJBLCtDQUFRLEVBQVUsRUFBbERTLGVBQWUsR0FBaUJULElBQWtCLEdBQW5DLEVBQUVVLFdBQVcsR0FBSVYsSUFBa0IsR0FBdEI7SUFDbkMsSUFBSVcsU0FBUztJQUNiLElBQU1DLGNBQWMsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDNUJQLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNmRSxJQUFJLEdBQUdLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSVAsSUFBSSxFQUFFO1lBQ1JKLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2pESixRQUFRLENBQUNZLE9BQU8sQ0FBQ0ksSUFBSSxFQUFFLENBQUM7WUFDeEJWLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNyQjtLQUNGO0lBQ0QsSUFBTVcsb0JBQW9CLEdBQUUsV0FBSTtRQUMvQixxQkFBTyw4REFBQ0MsS0FBRztZQUFDQyxFQUFFLEVBQUMsVUFBVTtZQUFDQyxTQUFTLEVBQUVuQixPQUFPLEdBQUMsU0FBUyxHQUFDLFFBQVE7Ozs7O2lCQUFHLENBQUM7S0FDbkU7SUFDRFAsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsaURBQWlEO1FBQ2pELElBQUksQ0FBQ00sUUFBUSxDQUFDWSxPQUFPLEVBQUU7WUFDckIsNkJBQTZCO1lBQzdCWixRQUFRLENBQUNZLE9BQU8sR0FBR25CLDJEQUFpQixDQUFDO2dCQUNuQzZCLFFBQVEsRUFBRSxDQUFDO2dCQUNYQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLFlBQVksRUFBRSxDQUFDO2dCQUNmQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsV0FBVyxFQUFFLENBQUM7Z0JBQ2RDLFNBQVMsRUFBRSxXQUFXO2dCQUN0QkMsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCQyxNQUFNLEVBQUUsR0FBRztnQkFDWEMsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQkMsV0FBVyxFQUFFLFNBQVM7YUFDdkIsQ0FBQyxDQUFDO1FBQ0gsOENBQThDO1NBQy9DO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDaEIsS0FBRztRQUFDRSxTQUFTLEVBQUMsY0FBYzs7MEJBQzNCLDhEQUFDRixLQUFHO2dCQUFDRSxTQUFTLEVBQUMscUJBQXFCOztrQ0FDbEMsOERBQUNlLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxNQUFNO3dCQUNYQyxNQUFNLEVBQUMsU0FBUzt3QkFDaEJqQixTQUFTLEVBQUMsbUJBQW1CO3dCQUM3QmtCLEdBQUcsRUFBRSxTQUFDQyxTQUFTO21DQUFNaEMsU0FBUyxHQUFHZ0MsU0FBUzt5QkFBQzt3QkFDM0NDLFFBQVEsRUFBRWhDLGNBQWM7Ozs7OzZCQUN4QjtrQ0FDQSw4REFBQ2hCLHlEQUFNO3dCQUNMaUQsSUFBSSxFQUFDLGNBQWM7d0JBQ25CQyxjQUFjLEVBQUU7bUNBQU1uQyxTQUFTLENBQUNvQyxLQUFLLEVBQUU7eUJBQUE7d0JBQ3ZDdkIsU0FBUyxFQUFDLDJCQUEyQjt3QkFDckN3QixJQUFJLEVBQUVDLFNBQVM7Ozs7OzZCQUNmOzs7Ozs7cUJBQ0E7MEJBQ04sOERBQUMvQyxtREFBVTtnQkFDVEUsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQk0sV0FBVyxFQUFFQSxXQUFXO2dCQUN4QkQsZUFBZSxFQUFFQSxlQUFlO2dCQUNoQ0gsUUFBUSxFQUFFQSxRQUFRO2dCQUNsQkQsT0FBTyxFQUFFQSxPQUFPO2dCQUNoQjZDLGlCQUFpQixFQUFFN0Isb0JBQW9CLEVBQUU7Ozs7O3FCQUN6Qzs7Ozs7O2FBRUUsQ0FDTjtDQUNIO0dBckVLbEIsUUFBUTs7UUFHTUYsbUVBQVk7OztBQUgxQkUsS0FBQUEsUUFBUTtBQXVFZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dhdmVzdXJmZXIvd2F2ZWZvcm0udHN4PzdhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IFdhdmVzdXJmZXIgZnJvbSBcIndhdmVzdXJmZXIuanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4uLy4uL2xpYi9ob29rcy91c2UtaXMtbW91bnRlZFwiO1xuaW1wb3J0IFBsYXllckNhcmQgZnJvbSBcIi4uL3BsYXllcmNhcmRcIjtcbi8vIGltcG9ydCB7IEZsZXgsIEJ1dHRvbiB9IGZyb20gXCJAY2hha2FyLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFdhdmVmb3JtID0gKCkgPT4ge1xuICBjb25zdCB3YXZlZm9ybSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzQXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XG4gIHZhciBmaWxlO1xuICBjb25zdCBbY3VycmVudFBvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGxldCBmaWxlSW5wdXQ7XG4gIGNvbnN0IGNyZWF0ZVdhdmVmb3JtID0gKGUpID0+IHtcbiAgICBzZXRBdWRpbyh0cnVlKTtcbiAgICBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQubG9hZChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGxheSgpO1xuICAgICAgc2V0UG9zaXRpb24oXCJQbGF5XCIpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgZ2V0V2F2ZWZvcm1Db21wb25lbnQ9ICgpPT57XG4gICByZXR1cm4gPGRpdiBpZD1cIndhdmVmb3JtXCIgY2xhc3NOYW1lPXtpc0F1ZGlvP1widmlzaWJsZVwiOlwiaGlkZGVuXCJ9Lz47XG4gIH1cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayBpZiB3YXZlc3VyZmVyIG9iamVjdCBpcyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgaWYgKCF3YXZlZm9ybS5jdXJyZW50KSB7XG4gICAgICAvLyBDcmVhdGUgYSB3YXZlc3VyZmVyIG9iamVjdFxuICAgICAgd2F2ZWZvcm0uY3VycmVudCA9IFdhdmVzdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgYmFyV2lkdGg6IDMsXG4gICAgICAgIGJhclJhZGl1czogMyxcbiAgICAgICAgYmFyR2FwOiAyLFxuICAgICAgICBiYXJNaW5IZWlnaHQ6IDEsXG4gICAgICAgIGJhckhlaWdodDogMjAsXG4gICAgICAgIGN1cnNvcldpZHRoOiAxLFxuICAgICAgICBjb250YWluZXI6IFwiI3dhdmVmb3JtXCIsXG4gICAgICAgIGJhY2tlbmQ6IFwiTWVkaWFFbGVtZW50XCIsXG4gICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiBcIiM0MzUzRkZcIixcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgd2F2ZUNvbG9yOiBcIiM1NjdGRkZcIixcbiAgICAgICAgY3Vyc29yQ29sb3I6IFwiIzU2N0ZGRlwiLFxuICAgICAgfSk7XG4gICAgICAvLyB3YXZlZm9ybS5jdXJyZW50LmxvYWQoXCIvc3BpbnliYWJibGVyLm1wM1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBwdC0xMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJhdWRpby8qXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTAgdy0wIGgtMlwiXG4gICAgICAgICAgcmVmPXsoZmlsZWlucHV0KSA9PiAoZmlsZUlucHV0ID0gZmlsZWlucHV0KX1cbiAgICAgICAgICBvbkNoYW5nZT17Y3JlYXRlV2F2ZWZvcm19XG4gICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGV4dD1cIkltcG9ydCBTb3VuZFwiXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17KCkgPT4gZmlsZUlucHV0LmNsaWNrKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1idXR0b25Db2xvciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGljb249e3VuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UGxheWVyQ2FyZFxuICAgICAgICB3YXZlZm9ybT17d2F2ZWZvcm19XG4gICAgICAgIHNldFBvc2l0aW9uPXtzZXRQb3NpdGlvbn1cbiAgICAgICAgY3VycmVudFBvc2l0aW9uPXtjdXJyZW50UG9zaXRpb259XG4gICAgICAgIHNldEF1ZGlvPXtzZXRBdWRpb31cbiAgICAgICAgaXNBdWRpbz17aXNBdWRpb31cbiAgICAgICAgd2F2ZWZvcm1Db21wb25lbnQ9e2dldFdhdmVmb3JtQ29tcG9uZW50KCl9XG4gICAgICAvPlxuICAgICAgey8qIDxkaXYgaWQ9XCJ3YXZlZm9ybVwiIGNsYXNzTmFtZT1cImhpZGRlblwiPjwvZGl2PiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmVmb3JtO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIldhdmVzdXJmZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUlzTW91bnRlZCIsIlBsYXllckNhcmQiLCJXYXZlZm9ybSIsIndhdmVmb3JtIiwiaXNBdWRpbyIsInNldEF1ZGlvIiwiaXNNb3VudGVkIiwiZmlsZSIsImN1cnJlbnRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZmlsZUlucHV0IiwiY3JlYXRlV2F2ZWZvcm0iLCJlIiwidGFyZ2V0IiwiZmlsZXMiLCJjdXJyZW50IiwibG9hZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJnZXRXYXZlZm9ybUNvbXBvbmVudCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIiwiY3JlYXRlIiwiYmFyV2lkdGgiLCJiYXJSYWRpdXMiLCJiYXJHYXAiLCJiYXJNaW5IZWlnaHQiLCJiYXJIZWlnaHQiLCJjdXJzb3JXaWR0aCIsImNvbnRhaW5lciIsImJhY2tlbmQiLCJoZWlnaHQiLCJwcm9ncmVzc0NvbG9yIiwicmVzcG9uc2l2ZSIsIndhdmVDb2xvciIsImN1cnNvckNvbG9yIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwicmVmIiwiZmlsZWlucHV0Iiwib25DaGFuZ2UiLCJ0ZXh0Iiwib25DbGlja0hhbmRsZXIiLCJjbGljayIsImljb24iLCJ1bmRlZmluZWQiLCJ3YXZlZm9ybUNvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/wavesurfer/waveform.tsx\n"));

/***/ })

});