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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button/button */ \"./src/components/ui/button/button.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hooks/use-is-mounted */ \"./src/lib/hooks/use-is-mounted.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { Flex, Button } from \"@chakar-ui/react\";\nvar Waveform = function() {\n    _s();\n    var waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isAudio = ref[0], setAudio = ref[1];\n    var isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), currentPosition = ref3[0], setPosition = ref3[1];\n    var fileInput;\n    var handlePlay = function() {\n        if (waveform.current.isPlaying()) {\n            waveform.current.pause();\n            setPosition(\"Pause\");\n        } else {\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    // const handlePause = () => {\n    //   setPosition(\"Pause\");\n    // };\n    var handleStop = function() {\n        waveform.current.stop();\n        setPosition(\"Stop\");\n    };\n    var createWaveform = function(e) {\n        setAudio(true);\n        var file = e.target.files[0];\n        if (file) {\n            waveform.current.load(URL.createObjectURL(file));\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Check if wavesurfer object is already created.\n        if (!waveform.current) {\n            // Create a wavesurfer object\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default().create({\n                barWidth: 3,\n                barRadius: 3,\n                barGap: 2,\n                barMinHeight: 1,\n                barHeight: 20,\n                cursorWidth: 1,\n                container: \"#waveform\",\n                backend: \"MediaElement\",\n                height: 200,\n                progressColor: \"#4353FF\",\n                responsive: true,\n                waveColor: \"#567FFF\",\n                cursorColor: \"#567FFF\"\n            });\n        // waveform.current.load(\"/spinybabbler.mp3\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"audio/*\",\n                        className: \"opacity-0 w-0 h-2\",\n                        ref: function(fileinput) {\n                            return fileInput = fileinput;\n                        },\n                        onChange: createWaveform\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    (!isAudio || !isMounted) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Import Sound\",\n                        onClickHandler: function() {\n                            return fileInput.click();\n                        },\n                        className: \"bg-buttonColor w-[145px] text-white\",\n                        icon: undefined\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[600px] sm:w-full space-y-5 \",\n                children: [\n                    isAudio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                setAudio(false);\n                                setPosition(\"\");\n                                setValue(null);\n                                waveform.current.stop();\n                            },\n                            className: \"py-3 px-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                                className: \"h-8 w-4 text-lightBlackColor\"\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"waveform\",\n                        className: isAudio ? \"visible\" : \"hidden\"\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between px-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: currentPosition == \"Play\" ? \"Pause\" : \"Play\",\n                                        onClickHandler: handlePlay,\n                                        className: \" \".concat(currentPosition == \"Play\" || currentPosition == \"Pause\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: currentPosition == \"Play\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPause, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Play\" ? \"text-white\" : \"text-black\", \" group-hover:text-white \")\n                                        }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPlay, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Pause\" ? \"text-white\" : \"text-black\", \"  group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: \"Stop\",\n                                        onClickHandler: handleStop,\n                                        className: \"\".concat(currentPosition == \"Stop\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStop, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Stop\" ? \"text-white\" : \"text-black\", \" group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 148,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    text: \"Predict the sound\",\n                                    className: \"bg-gray-400\",\n                                    onClickHandler: function() {\n                                        setLoading(true);\n                                        setTimeout(function() {\n                                            setValue(\"Spiny Babbler\");\n                                            setLoading(false);\n                                        }, 2000);\n                                    },\n                                    icon: undefined\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 166,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 165,\n                                columnNumber: 13\n                            }, _this),\n                            value ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" pt-2 text-center\",\n                                children: [\n                                    \"80% match with \",\n                                    value,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 180,\n                                columnNumber: 15\n                            }, _this) : isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex pt-2 justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {\n                                    size: 40\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 184,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 183,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 11\n                    }, _this),\n                    \")}\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 86,\n                columnNumber: 8\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(Waveform, \"SlwLpDf+x8182pIcbhOX1yVmsdk=\", false, function() {\n    return [\n        _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted\n    ];\n});\n_c = Waveform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waveform);\nvar _c;\n$RefreshReg$(_c, \"Waveform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93YXZlc3VyZmVyL3dhdmVmb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDeUI7QUFDM0I7QUFDYTtBQUNIO0FBQ2E7QUFDOUQsbURBQW1EO0FBRW5ELElBQU1XLFFBQVEsR0FBRyxXQUFNOztJQUNyQixJQUFNQyxRQUFRLEdBQUdMLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQTRCQyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDSyxPQUFPLEdBQWNMLEdBQWUsR0FBN0IsRUFBRU0sUUFBUSxHQUFJTixHQUFlLEdBQW5CO0lBQ3hCLElBQU1PLFNBQVMsR0FBR0wsdUVBQVksRUFBRTtJQUNoQyxJQUEwQkYsSUFBa0IsR0FBbEJBLCtDQUFRLEVBQVUsRUFBckNRLEtBQUssR0FBY1IsSUFBa0IsR0FBaEMsRUFBRVMsUUFBUSxHQUFJVCxJQUFrQixHQUF0QjtJQUN0QixJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q1UsU0FBUyxHQUFnQlYsSUFBZSxHQUEvQixFQUFFVyxVQUFVLEdBQUlYLElBQWUsR0FBbkI7SUFDNUIsSUFBdUNBLElBQWtCLEdBQWxCQSwrQ0FBUSxFQUFVLEVBQWxEWSxlQUFlLEdBQWlCWixJQUFrQixHQUFuQyxFQUFFYSxXQUFXLEdBQUliLElBQWtCLEdBQXRCO0lBQ25DLElBQUljLFNBQVM7SUFDYixJQUFNQyxVQUFVLEdBQUcsV0FBTTtRQUN2QixJQUFJWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLEVBQUU7WUFDaENiLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDRSxLQUFLLEVBQUUsQ0FBQztZQUN6QkwsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCLE1BQU07WUFDTFQsUUFBUSxDQUFDWSxPQUFPLENBQUNHLElBQUksRUFBRSxDQUFDO1lBQ3hCTixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7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ZmVyL3dhdmVmb3JtLnRzeD83YTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSBcIi4uL3VpL2J1dHRvbi9idXR0b25cIjtcbmltcG9ydCB7IEZhUGF1c2UsIEZhUGxheSwgRmFTdG9wLCBGYVRpbWVzIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgV2F2ZXN1cmZlciBmcm9tIFwid2F2ZXN1cmZlci5qc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaXJjdWxhclByb2dyZXNzIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IHVzZUlzTW91bnRlZCB9IGZyb20gXCIuLi8uLi9saWIvaG9va3MvdXNlLWlzLW1vdW50ZWRcIjtcbi8vIGltcG9ydCB7IEZsZXgsIEJ1dHRvbiB9IGZyb20gXCJAY2hha2FyLXVpL3JlYWN0XCI7XG5cbmNvbnN0IFdhdmVmb3JtID0gKCkgPT4ge1xuICBjb25zdCB3YXZlZm9ybSA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzQXVkaW8sIHNldEF1ZGlvXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgaXNNb3VudGVkID0gdXNlSXNNb3VudGVkKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnJlbnRQb3NpdGlvbiwgc2V0UG9zaXRpb25dID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICBsZXQgZmlsZUlucHV0O1xuICBjb25zdCBoYW5kbGVQbGF5ID0gKCkgPT4ge1xuICAgIGlmICh3YXZlZm9ybS5jdXJyZW50LmlzUGxheWluZygpKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnBhdXNlKCk7XG4gICAgICBzZXRQb3NpdGlvbihcIlBhdXNlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnBsYXkoKTtcbiAgICAgIHNldFBvc2l0aW9uKFwiUGxheVwiKTtcbiAgICB9XG4gIH07XG4gIC8vIGNvbnN0IGhhbmRsZVBhdXNlID0gKCkgPT4ge1xuXG4gIC8vICAgc2V0UG9zaXRpb24oXCJQYXVzZVwiKTtcbiAgLy8gfTtcbiAgY29uc3QgaGFuZGxlU3RvcCA9ICgpID0+IHtcbiAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICBzZXRQb3NpdGlvbihcIlN0b3BcIik7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlV2F2ZWZvcm0gPSAoZSkgPT4ge1xuICAgIHNldEF1ZGlvKHRydWUpO1xuICAgIHZhciBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQubG9hZChVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGxheSgpO1xuICAgICAgc2V0UG9zaXRpb24oXCJQbGF5XCIpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENoZWNrIGlmIHdhdmVzdXJmZXIgb2JqZWN0IGlzIGFscmVhZHkgY3JlYXRlZC5cbiAgICBpZiAoIXdhdmVmb3JtLmN1cnJlbnQpIHtcbiAgICAgIC8vIENyZWF0ZSBhIHdhdmVzdXJmZXIgb2JqZWN0XG4gICAgICB3YXZlZm9ybS5jdXJyZW50ID0gV2F2ZXN1cmZlci5jcmVhdGUoe1xuICAgICAgICBiYXJXaWR0aDogMyxcbiAgICAgICAgYmFyUmFkaXVzOiAzLFxuICAgICAgICBiYXJHYXA6IDIsXG4gICAgICAgIGJhck1pbkhlaWdodDogMSxcbiAgICAgICAgYmFySGVpZ2h0OiAyMCxcbiAgICAgICAgY3Vyc29yV2lkdGg6IDEsXG4gICAgICAgIGNvbnRhaW5lcjogXCIjd2F2ZWZvcm1cIixcbiAgICAgICAgYmFja2VuZDogXCJNZWRpYUVsZW1lbnRcIixcbiAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgIHByb2dyZXNzQ29sb3I6IFwiIzQzNTNGRlwiLFxuICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgICAgICB3YXZlQ29sb3I6IFwiIzU2N0ZGRlwiLFxuICAgICAgICBjdXJzb3JDb2xvcjogXCIjNTY3RkZGXCIsXG4gICAgICB9KTtcbiAgICAgIC8vIHdhdmVmb3JtLmN1cnJlbnQubG9hZChcIi9zcGlueWJhYmJsZXIubXAzXCIpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImF1ZGlvLypcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm9wYWNpdHktMCB3LTAgaC0yXCJcbiAgICAgICAgICByZWY9eyhmaWxlaW5wdXQpID0+IChmaWxlSW5wdXQgPSBmaWxlaW5wdXQpfVxuICAgICAgICAgIG9uQ2hhbmdlPXtjcmVhdGVXYXZlZm9ybX1cbiAgICAgICAgLz5cbiAgICAgICAgeyghaXNBdWRpbyB8fCAhaXNNb3VudGVkKSAmJiAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdGV4dD1cIkltcG9ydCBTb3VuZFwiXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17KCkgPT4gZmlsZUlucHV0LmNsaWNrKCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1idXR0b25Db2xvciB3LVsxNDVweF0gdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICBpY29uPXt1bmRlZmluZWR9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy1bNjAwcHhdIHNtOnctZnVsbCAgc3BhY2UteS01ICBcIj5cbiAgICAgICAge2lzQXVkaW8gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEF1ZGlvKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgICAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhVGltZXMgY2xhc3NOYW1lPVwiaC04IHctNCB0ZXh0LWxpZ2h0QmxhY2tDb2xvclwiPjwvRmFUaW1lcz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgey8qIDxkaXYgaWQ9XCJ3YXZlZm9ybVwiPjwvZGl2PiAqL31cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9zaWduYWwucG5nXCIgY2xhc3NOYW1lPVwiaC1bMzAwcHhdIHctWzYwMHB4XVwiIC8+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGlkPVwid2F2ZWZvcm1cIiBjbGFzc05hbWU9e2lzQXVkaW8gPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9PjwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC01XCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PXtjdXJyZW50UG9zaXRpb24gPT0gXCJQbGF5XCIgPyBcIlBhdXNlXCIgOiBcIlBsYXlcIn1cbiAgICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17aGFuZGxlUGxheX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBsYXlcIiB8fCBjdXJyZW50UG9zaXRpb24gPT0gXCJQYXVzZVwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1idXR0b25Db2xvciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktNDAwIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgIH0gaG92ZXI6YmctYnV0dG9uQ29sb3IgZ3JvdXAgaG92ZXI6dGV4dC13aGl0ZWB9XG4gICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPT0gXCJQbGF5XCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxGYVBhdXNlXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC00IHctNCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiUGxheVwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIH0gZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZSBgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZhUGxheVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBhdXNlXCIgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZWB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7LyogPEJ1dHRvbkRlc2lnblxuICAgICAgICAgICAgdGV4dD1cIlBhdXNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtoYW5kbGVQYXVzZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBhdXNlXCJcbiAgICAgICAgICAgICAgICA/IFwiYmctYnV0dG9uQ29sb3IgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgOiBcImJnLWdyYXktNDAwIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgfSBob3ZlcjpiZy1idXR0b25Db2xvciBncm91cCBob3Zlcjp0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICA8RmFQYXVzZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBhdXNlXCIgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgfSAgZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiU3RvcFwiXG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e2hhbmRsZVN0b3B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlN0b3BcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYnV0dG9uQ29sb3IgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTQwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICB9IGhvdmVyOmJnLWJ1dHRvbkNvbG9yIGdyb3VwIGhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgPEZhU3RvcFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiU3RvcFwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB9IGdyb3VwLWhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJQcmVkaWN0IHRoZSBzb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiU3BpbnkgQmFiYmxlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e3VuZGVmaW5lZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3ZhbHVlID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHQtMiB0ZXh0LWNlbnRlclwiPjgwJSBtYXRjaCB3aXRoIHt2YWx1ZX0gPC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHQtMiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17NDB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAvLyApIDogKFxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszMDBweF0gaC1bMTAwcHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4XCI+XG4gICAgLy8gICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezQwfSAvPlxuICAgIC8vICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlZm9ybTtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGYVBhdXNlIiwiRmFQbGF5IiwiRmFTdG9wIiwiRmFUaW1lcyIsIldhdmVzdXJmZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJ1c2VJc01vdW50ZWQiLCJXYXZlZm9ybSIsIndhdmVmb3JtIiwiaXNBdWRpbyIsInNldEF1ZGlvIiwiaXNNb3VudGVkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50UG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImZpbGVJbnB1dCIsImhhbmRsZVBsYXkiLCJjdXJyZW50IiwiaXNQbGF5aW5nIiwicGF1c2UiLCJwbGF5IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJjcmVhdGVXYXZlZm9ybSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsb2FkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3JlYXRlIiwiYmFyV2lkdGgiLCJiYXJSYWRpdXMiLCJiYXJHYXAiLCJiYXJNaW5IZWlnaHQiLCJiYXJIZWlnaHQiLCJjdXJzb3JXaWR0aCIsImNvbnRhaW5lciIsImJhY2tlbmQiLCJoZWlnaHQiLCJwcm9ncmVzc0NvbG9yIiwicmVzcG9uc2l2ZSIsIndhdmVDb2xvciIsImN1cnNvckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwicmVmIiwiZmlsZWlucHV0Iiwib25DaGFuZ2UiLCJ0ZXh0Iiwib25DbGlja0hhbmRsZXIiLCJjbGljayIsImljb24iLCJ1bmRlZmluZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJzZXRUaW1lb3V0IiwicCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/wavesurfer/waveform.tsx\n"));

/***/ })

});