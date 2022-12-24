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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button/button */ \"./src/components/ui/button/button.tsx\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hooks/use-is-mounted */ \"./src/lib/hooks/use-is-mounted.ts\");\n/* harmony import */ var _playercard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../playercard */ \"./src/components/playercard/index.tsx\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { Flex, Button } from \"@chakar-ui/react\";\nvar Waveform = function() {\n    _s();\n    var waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isAudio = ref[0], setAudio = ref[1];\n    var isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), currentPosition = ref1[0], setPosition = ref1[1];\n    var fileInput;\n    var createWaveform = function(e) {\n        setAudio(true);\n        var file = e.target.files[0];\n        if (file) {\n            waveform.current.load(URL.createObjectURL(file));\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Check if wavesurfer object is already created.\n        if (!waveform.current) {\n            // Create a wavesurfer object\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default().create({\n                barWidth: 3,\n                barRadius: 3,\n                barGap: 2,\n                barMinHeight: 1,\n                barHeight: 20,\n                cursorWidth: 1,\n                container: \"#waveform\",\n                backend: \"MediaElement\",\n                height: 200,\n                progressColor: \"#4353FF\",\n                responsive: true,\n                waveColor: \"#567FFF\",\n                cursorColor: \"#567FFF\"\n            });\n        // waveform.current.load(\"/spinybabbler.mp3\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"audio/*\",\n                        className: \"opacity-0 w-0 h-2\",\n                        ref: function(fileinput) {\n                            return fileInput = fileinput;\n                        },\n                        onChange: createWaveform\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    (!isAudio || !isMounted) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Import Sound\",\n                        onClickHandler: function() {\n                            return fileInput.click();\n                        },\n                        className: \"bg-buttonColor text-white\",\n                        icon: undefined\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this),\n            isAudio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_playercard__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                waveform: waveform,\n                setPosition: setPosition,\n                currentPosition: currentPosition,\n                setAudio: setAudio,\n                waveformComponent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: \"waveform\",\n                    className: \"hidden\"\n                }, void 0, false, void 0, void 0)\n            }, void 0, false, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 67,\n                columnNumber: 19\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"waveform\",\n                className: \"hidden\"\n            }, void 0, false, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_s(Waveform, \"Gv68E70b3wk0B3Z0NsaD1x2Grp4=\", false, function() {\n    return [\n        _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted\n    ];\n});\n_c = Waveform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waveform);\nvar _c;\n$RefreshReg$(_c, \"Waveform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93YXZlc3VyZmVyL3dhdmVmb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUF5QztBQUVGO0FBQ2E7QUFFVTtBQUN2QjtBQUN2QyxtREFBbUQ7QUFFbkQsSUFBTU8sUUFBUSxHQUFHLFdBQU07O0lBQ3JCLElBQU1DLFFBQVEsR0FBR0wsNkNBQU0sQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBNEJDLEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBcENLLE9BQU8sR0FBY0wsR0FBZSxHQUE3QixFQUFFTSxRQUFRLEdBQUlOLEdBQWUsR0FBbkI7SUFDeEIsSUFBTU8sU0FBUyxHQUFHTix1RUFBWSxFQUFFO0lBQ2hDLElBQXVDRCxJQUFrQixHQUFsQkEsK0NBQVEsRUFBVSxFQUFsRFEsZUFBZSxHQUFpQlIsSUFBa0IsR0FBbkMsRUFBRVMsV0FBVyxHQUFJVCxJQUFrQixHQUF0QjtJQUNuQyxJQUFJVSxTQUFTO0lBQ2IsSUFBTUMsY0FBYyxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUM1Qk4sUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2YsSUFBSU8sSUFBSSxHQUFHRCxDQUFDLENBQUNFLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJRixJQUFJLEVBQUU7WUFDUlQsUUFBUSxDQUFDWSxPQUFPLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDQyxlQUFlLENBQUNOLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDakRULFFBQVEsQ0FBQ1ksT0FBTyxDQUFDSSxJQUFJLEVBQUUsQ0FBQztZQUN4QlgsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRFgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsaURBQWlEO1FBQ2pELElBQUksQ0FBQ00sUUFBUSxDQUFDWSxPQUFPLEVBQUU7WUFDckIsNkJBQTZCO1lBQzdCWixRQUFRLENBQUNZLE9BQU8sR0FBR25CLDJEQUFpQixDQUFDO2dCQUNuQ3lCLFFBQVEsRUFBRSxDQUFDO2dCQUNYQyxTQUFTLEVBQUUsQ0FBQztnQkFDWkMsTUFBTSxFQUFFLENBQUM7Z0JBQ1RDLFlBQVksRUFBRSxDQUFDO2dCQUNmQyxTQUFTLEVBQUUsRUFBRTtnQkFDYkMsV0FBVyxFQUFFLENBQUM7Z0JBQ2RDLFNBQVMsRUFBRSxXQUFXO2dCQUN0QkMsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCQyxNQUFNLEVBQUUsR0FBRztnQkFDWEMsYUFBYSxFQUFFLFNBQVM7Z0JBQ3hCQyxVQUFVLEVBQUUsSUFBSTtnQkFDaEJDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQkMsV0FBVyxFQUFFLFNBQVM7YUFDdkIsQ0FBQyxDQUFDO1FBQ0gsOENBQThDO1NBQy9DO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxRQUFROzswQkFDckIsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxxQkFBcUI7O2tDQUNsQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLE1BQU07d0JBQ1hDLE1BQU0sRUFBQyxTQUFTO3dCQUNoQkgsU0FBUyxFQUFDLG1CQUFtQjt3QkFDN0JJLEdBQUcsRUFBRSxTQUFDQyxTQUFTO21DQUFNL0IsU0FBUyxHQUFHK0IsU0FBUzt5QkFBQzt3QkFDM0NDLFFBQVEsRUFBRS9CLGNBQWM7Ozs7OzZCQUN4QjtvQkFDRCxDQUFDLENBQUNOLE9BQU8sSUFBSSxDQUFDRSxTQUFTLENBQUMsa0JBQ3ZCLDhEQUFDWCx5REFBTTt3QkFDTCtDLElBQUksRUFBQyxjQUFjO3dCQUNuQkMsY0FBYyxFQUFFO21DQUFNbEMsU0FBUyxDQUFDbUMsS0FBSyxFQUFFO3lCQUFBO3dCQUN2Q1QsU0FBUyxFQUFDLDJCQUEyQjt3QkFDckNVLElBQUksRUFBRUMsU0FBUzs7Ozs7NkJBQ2Y7Ozs7OztxQkFFQTtZQUNMMUMsT0FBTyxrQkFBSSw4REFBQ0gsbURBQVU7Z0JBQUNFLFFBQVEsRUFBRUEsUUFBUTtnQkFBRUssV0FBVyxFQUFFQSxXQUFXO2dCQUFFRCxlQUFlLEVBQUVBLGVBQWU7Z0JBQUVGLFFBQVEsRUFBRUEsUUFBUTtnQkFBRTBDLGlCQUFpQixnQkFBRSw4REFBQ2IsS0FBRztvQkFBQ2MsRUFBRSxFQUFDLFVBQVU7b0JBQUNiLFNBQVMsRUFBQyxRQUFRO2lEQUFPOzs7OztxQkFBRTswQkFDN0wsOERBQUNELEtBQUc7Z0JBQUNjLEVBQUUsRUFBQyxVQUFVO2dCQUFDYixTQUFTLEVBQUMsUUFBUTs7Ozs7cUJBQU87Ozs7OzthQUN4QyxDQUNOO0NBQ0g7R0E3REtqQyxRQUFROztRQUdNRixtRUFBWTs7O0FBSDFCRSxLQUFBQSxRQUFRO0FBK0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2F2ZXN1cmZlci93YXZlZm9ybS50c3g/N2E0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91aS9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgeyBGYVBhdXNlLCBGYVBsYXksIEZhU3RvcCwgRmFUaW1lcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IFdhdmVzdXJmZXIgZnJvbSBcIndhdmVzdXJmZXIuanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VJc01vdW50ZWQgfSBmcm9tIFwiLi4vLi4vbGliL2hvb2tzL3VzZS1pcy1tb3VudGVkXCI7XG5pbXBvcnQgUGxheWVyQ2FyZCBmcm9tIFwiLi4vcGxheWVyY2FyZFwiO1xuLy8gaW1wb3J0IHsgRmxleCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrYXItdWkvcmVhY3RcIjtcblxuY29uc3QgV2F2ZWZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHdhdmVmb3JtID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNBdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcbiAgY29uc3QgW2N1cnJlbnRQb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBsZXQgZmlsZUlucHV0O1xuICBjb25zdCBjcmVhdGVXYXZlZm9ybSA9IChlKSA9PiB7XG4gICAgc2V0QXVkaW8odHJ1ZSk7XG4gICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5sb2FkKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5wbGF5KCk7XG4gICAgICBzZXRQb3NpdGlvbihcIlBsYXlcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgd2F2ZXN1cmZlciBvYmplY3QgaXMgYWxyZWFkeSBjcmVhdGVkLlxuICAgIGlmICghd2F2ZWZvcm0uY3VycmVudCkge1xuICAgICAgLy8gQ3JlYXRlIGEgd2F2ZXN1cmZlciBvYmplY3RcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQgPSBXYXZlc3VyZmVyLmNyZWF0ZSh7XG4gICAgICAgIGJhcldpZHRoOiAzLFxuICAgICAgICBiYXJSYWRpdXM6IDMsXG4gICAgICAgIGJhckdhcDogMixcbiAgICAgICAgYmFyTWluSGVpZ2h0OiAxLFxuICAgICAgICBiYXJIZWlnaHQ6IDIwLFxuICAgICAgICBjdXJzb3JXaWR0aDogMSxcbiAgICAgICAgY29udGFpbmVyOiBcIiN3YXZlZm9ybVwiLFxuICAgICAgICBiYWNrZW5kOiBcIk1lZGlhRWxlbWVudFwiLFxuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjNDM1M0ZGXCIsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHdhdmVDb2xvcjogXCIjNTY3RkZGXCIsXG4gICAgICAgIGN1cnNvckNvbG9yOiBcIiM1NjdGRkZcIixcbiAgICAgIH0pO1xuICAgICAgLy8gd2F2ZWZvcm0uY3VycmVudC5sb2FkKFwiL3NwaW55YmFiYmxlci5tcDNcIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgYWNjZXB0PVwiYXVkaW8vKlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0wIHctMCBoLTJcIlxuICAgICAgICAgIHJlZj17KGZpbGVpbnB1dCkgPT4gKGZpbGVJbnB1dCA9IGZpbGVpbnB1dCl9XG4gICAgICAgICAgb25DaGFuZ2U9e2NyZWF0ZVdhdmVmb3JtfVxuICAgICAgICAvPlxuICAgICAgICB7KCFpc0F1ZGlvIHx8ICFpc01vdW50ZWQpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PVwiSW1wb3J0IFNvdW5kXCJcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiBmaWxlSW5wdXQuY2xpY2soKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJ1dHRvbkNvbG9yIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaWNvbj17dW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtpc0F1ZGlvICYmIDxQbGF5ZXJDYXJkIHdhdmVmb3JtPXt3YXZlZm9ybX0gc2V0UG9zaXRpb249e3NldFBvc2l0aW9ufSBjdXJyZW50UG9zaXRpb249e2N1cnJlbnRQb3NpdGlvbn0gc2V0QXVkaW89e3NldEF1ZGlvfSB3YXZlZm9ybUNvbXBvbmVudD0gPGRpdiBpZD1cIndhdmVmb3JtXCIgY2xhc3NOYW1lPVwiaGlkZGVuXCI+PC9kaXY+Lz59XG4gICAgICA8ZGl2IGlkPVwid2F2ZWZvcm1cIiBjbGFzc05hbWU9XCJoaWRkZW5cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmVmb3JtO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIldhdmVzdXJmZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUlzTW91bnRlZCIsIlBsYXllckNhcmQiLCJXYXZlZm9ybSIsIndhdmVmb3JtIiwiaXNBdWRpbyIsInNldEF1ZGlvIiwiaXNNb3VudGVkIiwiY3VycmVudFBvc2l0aW9uIiwic2V0UG9zaXRpb24iLCJmaWxlSW5wdXQiLCJjcmVhdGVXYXZlZm9ybSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJjdXJyZW50IiwibG9hZCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInBsYXkiLCJjcmVhdGUiLCJiYXJXaWR0aCIsImJhclJhZGl1cyIsImJhckdhcCIsImJhck1pbkhlaWdodCIsImJhckhlaWdodCIsImN1cnNvcldpZHRoIiwiY29udGFpbmVyIiwiYmFja2VuZCIsImhlaWdodCIsInByb2dyZXNzQ29sb3IiLCJyZXNwb25zaXZlIiwid2F2ZUNvbG9yIiwiY3Vyc29yQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJyZWYiLCJmaWxlaW5wdXQiLCJvbkNoYW5nZSIsInRleHQiLCJvbkNsaWNrSGFuZGxlciIsImNsaWNrIiwiaWNvbiIsInVuZGVmaW5lZCIsIndhdmVmb3JtQ29tcG9uZW50IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/wavesurfer/waveform.tsx\n"));

/***/ })

});