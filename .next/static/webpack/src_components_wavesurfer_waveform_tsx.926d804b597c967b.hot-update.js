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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button/button */ \"./src/components/ui/button/button.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hooks/use-is-mounted */ \"./src/lib/hooks/use-is-mounted.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { Flex, Button } from \"@chakar-ui/react\";\nvar Waveform = function() {\n    _s();\n    var waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isAudio = ref[0], setAudio = ref[1];\n    var isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), currentPosition = ref3[0], setPosition = ref3[1];\n    var fileInput;\n    var handlePlay = function() {\n        if (waveform.current.isPlaying()) {\n            waveform.current.pause();\n            setPosition(\"Pause\");\n        } else {\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    // const handlePause = () => {\n    //   setPosition(\"Pause\");\n    // };\n    var handleStop = function() {\n        waveform.current.stop();\n        setPosition(\"Stop\");\n    };\n    var createWaveform = function(e) {\n        setAudio(true);\n        var file = e.target.files[0];\n        if (file) {\n            waveform.current.load(URL.createObjectURL(file));\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Check if wavesurfer object is already created.\n        if (!waveform.current) {\n            // Create a wavesurfer object\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default().create({\n                barWidth: 3,\n                barRadius: 3,\n                barGap: 2,\n                barMinHeight: 1,\n                barHeight: 20,\n                cursorWidth: 1,\n                container: \"#waveform\",\n                backend: \"MediaElement\",\n                height: 200,\n                progressColor: \"#4353FF\",\n                responsive: true,\n                waveColor: \"#567FFF\",\n                cursorColor: \"#567FFF\"\n            });\n        // waveform.current.load(\"/spinybabbler.mp3\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"audio/*\",\n                        className: \"opacity-0 w-0 h-2\",\n                        ref: function(fileinput) {\n                            return fileInput = fileinput;\n                        },\n                        onChange: createWaveform\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    (!isAudio || !isMounted) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Import Sound\",\n                        onClickHandler: function() {\n                            return fileInput.click();\n                        },\n                        className: \"bg-buttonColor w-[145px] text-white\",\n                        icon: undefined\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            isAudio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[600px] sm:w-full space-y-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                setAudio(false);\n                                setPosition(\"\");\n                                setValue(null);\n                                waveform.current.stop();\n                            },\n                            className: \"py-3 px-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                                className: \"h-8 w-4 text-lightBlackColor\"\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"waveform\"\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between px-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: currentPosition == \"Play\" ? \"Pause\" : \"Play\",\n                                        onClickHandler: handlePlay,\n                                        className: \" \".concat(currentPosition == \"Play\" || currentPosition == \"Pause\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: currentPosition == \"Play\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPause, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Play\" ? \"text-white\" : \"text-black\", \" group-hover:text-white \")\n                                        }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPlay, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Pause\" ? \"text-white\" : \"text-black\", \"  group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: \"Stop\",\n                                        onClickHandler: handleStop,\n                                        className: \"\".concat(currentPosition == \"Stop\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStop, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Stop\" ? \"text-white\" : \"text-black\", \" group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    text: \"Predict the sound\",\n                                    className: \"bg-gray-400\",\n                                    onClickHandler: function() {\n                                        setLoading(true);\n                                        setTimeout(function() {\n                                            setValue(\"Spiny Babbler\");\n                                            setLoading(false);\n                                        }, 2000);\n                                    },\n                                    icon: undefined\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, _this),\n                            value ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" pt-2 text-center\",\n                                children: [\n                                    \"80% match with \",\n                                    value,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 15\n                            }, _this) : isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex pt-2 justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {\n                                    size: 40\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, _this),\n                    \")}\"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 86,\n                columnNumber: 20\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(Waveform, \"SlwLpDf+x8182pIcbhOX1yVmsdk=\", false, function() {\n    return [\n        _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted\n    ];\n});\n_c = Waveform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waveform);\nvar _c;\n$RefreshReg$(_c, \"Waveform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93YXZlc3VyZmVyL3dhdmVmb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDeUI7QUFDM0I7QUFDYTtBQUNIO0FBQ2E7QUFDOUQsbURBQW1EO0FBRW5ELElBQU1XLFFBQVEsR0FBRyxXQUFNOztJQUNyQixJQUFNQyxRQUFRLEdBQUdMLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQTRCQyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDSyxPQUFPLEdBQWNMLEdBQWUsR0FBN0IsRUFBRU0sUUFBUSxHQUFJTixHQUFlLEdBQW5CO0lBQ3hCLElBQU1PLFNBQVMsR0FBR0wsdUVBQVksRUFBRTtJQUNoQyxJQUEwQkYsSUFBa0IsR0FBbEJBLCtDQUFRLEVBQVUsRUFBckNRLEtBQUssR0FBY1IsSUFBa0IsR0FBaEMsRUFBRVMsUUFBUSxHQUFJVCxJQUFrQixHQUF0QjtJQUN0QixJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q1UsU0FBUyxHQUFnQlYsSUFBZSxHQUEvQixFQUFFVyxVQUFVLEdBQUlYLElBQWUsR0FBbkI7SUFDNUIsSUFBdUNBLElBQWtCLEdBQWxCQSwrQ0FBUSxFQUFVLEVBQWxEWSxlQUFlLEdBQWlCWixJQUFrQixHQUFuQyxFQUFFYSxXQUFXLEdBQUliLElBQWtCLEdBQXRCO0lBQ25DLElBQUljLFNBQVM7SUFDYixJQUFNQyxVQUFVLEdBQUcsV0FBTTtRQUN2QixJQUFJWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLEVBQUU7WUFDaENiLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDRSxLQUFLLEVBQUUsQ0FBQztZQUN6QkwsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCLE1BQU07WUFDTFQsUUFBUSxDQUFDWSxPQUFPLENBQUNHLElBQUksRUFBRSxDQUFDO1lBQ3hCTixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7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LFNBQVMsRUFBRSxVQUFTLENBRW5CLE1BQXVCLENBRHRCakMsZUFBZSxJQUFJLE1BQU0sR0FBRyxZQUFZLEdBQUcsWUFBWSxFQUN4RCx5QkFBdUIsQ0FBQzt5RUFDekI7Ozs7OzZDQUVKOzs7Ozs7cUNBQ0U7MENBQ04sOERBQUNnQyxLQUFHO2dDQUFDQyxTQUFTLEVBQUMscUJBQXNCOzBDQUNuQyw0RUFBQ3JELHlEQUFNO29DQUNMNEQsSUFBSSxFQUFDLG1CQUFtQjtvQ0FDeEJQLFNBQVMsRUFBQyxhQUFhO29DQUN2QlEsY0FBYyxFQUFFLFdBQU07d0NBQ3BCMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNqQmlELFVBQVUsQ0FBQyxXQUFNOzRDQUNmbkQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRDQUMxQkUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNuQixFQUFFLElBQUksQ0FBQyxDQUFDO3FDQUNWO29DQUNENEMsSUFBSSxFQUFFQyxTQUFTOzs7Ozt5Q0FDZjs7Ozs7cUNBQ0U7NEJBQ0xoRCxLQUFLLGlCQUNKLDhEQUFDcUQsR0FBQztnQ0FBQ2hCLFNBQVMsRUFBQyxtQkFBbUI7O29DQUFDLGlCQUFlO29DQUFDckMsS0FBSztvQ0FBQyxHQUFDOzs7Ozs7cUNBQUksR0FFNURFLFNBQVMsa0JBQ1AsOERBQUNrQyxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsMEJBQTBCOzBDQUN2Qyw0RUFBQzVDLDJEQUFnQjtvQ0FBQzZELElBQUksRUFBRSxFQUFFOzs7Ozt5Q0FBSTs7Ozs7cUNBQzFCOzs7Ozs7NkJBR047b0JBQUEsSUFFVjs7Ozs7O3FCQUFNOzs7Ozs7YUFFRixDQUtOO0NBQ0g7R0F4S0szRCxRQUFROztRQUdNRCxtRUFBWTs7O0FBSDFCQyxLQUFBQSxRQUFRO0FBMEtkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvd2F2ZXN1cmZlci93YXZlZm9ybS50c3g/N2E0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi91aS9idXR0b24vYnV0dG9uXCI7XG5pbXBvcnQgeyBGYVBhdXNlLCBGYVBsYXksIEZhU3RvcCwgRmFUaW1lcyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IFdhdmVzdXJmZXIgZnJvbSBcIndhdmVzdXJmZXIuanNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2lyY3VsYXJQcm9ncmVzcyB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyB1c2VJc01vdW50ZWQgfSBmcm9tIFwiLi4vLi4vbGliL2hvb2tzL3VzZS1pcy1tb3VudGVkXCI7XG4vLyBpbXBvcnQgeyBGbGV4LCBCdXR0b24gfSBmcm9tIFwiQGNoYWthci11aS9yZWFjdFwiO1xuXG5jb25zdCBXYXZlZm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgd2F2ZWZvcm0gPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IFtpc0F1ZGlvLCBzZXRBdWRpb10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZUlzTW91bnRlZCgpO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjdXJyZW50UG9zaXRpb24sIHNldFBvc2l0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oKTtcbiAgbGV0IGZpbGVJbnB1dDtcbiAgY29uc3QgaGFuZGxlUGxheSA9ICgpID0+IHtcbiAgICBpZiAod2F2ZWZvcm0uY3VycmVudC5pc1BsYXlpbmcoKSkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5wYXVzZSgpO1xuICAgICAgc2V0UG9zaXRpb24oXCJQYXVzZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5wbGF5KCk7XG4gICAgICBzZXRQb3NpdGlvbihcIlBsYXlcIik7XG4gICAgfVxuICB9O1xuICAvLyBjb25zdCBoYW5kbGVQYXVzZSA9ICgpID0+IHtcblxuICAvLyAgIHNldFBvc2l0aW9uKFwiUGF1c2VcIik7XG4gIC8vIH07XG4gIGNvbnN0IGhhbmRsZVN0b3AgPSAoKSA9PiB7XG4gICAgd2F2ZWZvcm0uY3VycmVudC5zdG9wKCk7XG4gICAgc2V0UG9zaXRpb24oXCJTdG9wXCIpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZVdhdmVmb3JtID0gKGUpID0+IHtcbiAgICBzZXRBdWRpbyh0cnVlKTtcbiAgICB2YXIgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIGlmIChmaWxlKSB7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LmxvYWQoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XG4gICAgICB3YXZlZm9ybS5jdXJyZW50LnBsYXkoKTtcbiAgICAgIHNldFBvc2l0aW9uKFwiUGxheVwiKTtcbiAgICB9XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBDaGVjayBpZiB3YXZlc3VyZmVyIG9iamVjdCBpcyBhbHJlYWR5IGNyZWF0ZWQuXG4gICAgaWYgKCF3YXZlZm9ybS5jdXJyZW50KSB7XG4gICAgICAvLyBDcmVhdGUgYSB3YXZlc3VyZmVyIG9iamVjdFxuICAgICAgd2F2ZWZvcm0uY3VycmVudCA9IFdhdmVzdXJmZXIuY3JlYXRlKHtcbiAgICAgICAgYmFyV2lkdGg6IDMsXG4gICAgICAgIGJhclJhZGl1czogMyxcbiAgICAgICAgYmFyR2FwOiAyLFxuICAgICAgICBiYXJNaW5IZWlnaHQ6IDEsXG4gICAgICAgIGJhckhlaWdodDogMjAsXG4gICAgICAgIGN1cnNvcldpZHRoOiAxLFxuICAgICAgICBjb250YWluZXI6IFwiI3dhdmVmb3JtXCIsXG4gICAgICAgIGJhY2tlbmQ6IFwiTWVkaWFFbGVtZW50XCIsXG4gICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICBwcm9ncmVzc0NvbG9yOiBcIiM0MzUzRkZcIixcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICAgICAgd2F2ZUNvbG9yOiBcIiM1NjdGRkZcIixcbiAgICAgICAgY3Vyc29yQ29sb3I6IFwiIzU2N0ZGRlwiLFxuICAgICAgfSk7XG4gICAgICAvLyB3YXZlZm9ybS5jdXJyZW50LmxvYWQoXCIvc3BpbnliYWJibGVyLm1wM1wiKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBhY2NlcHQ9XCJhdWRpby8qXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJvcGFjaXR5LTAgdy0wIGgtMlwiXG4gICAgICAgICAgcmVmPXsoZmlsZWlucHV0KSA9PiAoZmlsZUlucHV0ID0gZmlsZWlucHV0KX1cbiAgICAgICAgICBvbkNoYW5nZT17Y3JlYXRlV2F2ZWZvcm19XG4gICAgICAgIC8+XG4gICAgICAgIHsoIWlzQXVkaW8gfHwgIWlzTW91bnRlZCkgJiYgKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRleHQ9XCJJbXBvcnQgU291bmRcIlxuICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IGZpbGVJbnB1dC5jbGljaygpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYnV0dG9uQ29sb3Igdy1bMTQ1cHhdIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgaWNvbj17dW5kZWZpbmVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgICB7aXNBdWRpbyAmJiA8ZGl2IGNsYXNzTmFtZT1cImxnOnctWzYwMHB4XSBzbTp3LWZ1bGwgIHNwYWNlLXktNSAgXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QXVkaW8oZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uKFwiXCIpO1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKG51bGwpO1xuICAgICAgICAgICAgICAgIHdhdmVmb3JtLmN1cnJlbnQuc3RvcCgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweS0zIHB4LTNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8RmFUaW1lcyBjbGFzc05hbWU9XCJoLTggdy00IHRleHQtbGlnaHRCbGFja0NvbG9yXCI+PC9GYVRpbWVzPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJ3YXZlZm9ybVwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHB4LTVcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9e2N1cnJlbnRQb3NpdGlvbiA9PSBcIlBsYXlcIiA/IFwiUGF1c2VcIiA6IFwiUGxheVwifVxuICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXtoYW5kbGVQbGF5fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCAke1xuICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiUGxheVwiIHx8IGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBhdXNlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcImJnLWJ1dHRvbkNvbG9yIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICA6IFwiYmctZ3JheS00MDAgdGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgfSBob3ZlcjpiZy1idXR0b25Db2xvciBncm91cCBob3Zlcjp0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBsYXlcIiA/IChcbiAgICAgICAgICAgICAgICAgICAgPEZhUGF1c2VcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPT0gXCJQbGF5XCIgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlIGB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8RmFQbGF5XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaC00IHctNCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiUGF1c2VcIiA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB9ICBncm91cC1ob3Zlcjp0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0ZXh0PVwiU3RvcFwiXG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e2hhbmRsZVN0b3B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlN0b3BcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYnV0dG9uQ29sb3IgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTQwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICB9IGhvdmVyOmJnLWJ1dHRvbkNvbG9yIGdyb3VwIGhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgPEZhU3RvcFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiU3RvcFwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICB9IGdyb3VwLWhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJQcmVkaWN0IHRoZSBzb3VuZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiU3BpbnkgQmFiYmxlclwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGljb249e3VuZGVmaW5lZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3ZhbHVlID8gKFxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgcHQtMiB0ZXh0LWNlbnRlclwiPjgwJSBtYXRjaCB3aXRoIHt2YWx1ZX0gPC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHQtMiBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17NDB9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbn1cbiAgICA8L2Rpdj5cbiAgICAvLyApIDogKFxuICAgIC8vICAgPGRpdiBjbGFzc05hbWU9XCJ3LVszMDBweF0gaC1bMTAwcHhdIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4XCI+XG4gICAgLy8gICAgIDxDaXJjdWxhclByb2dyZXNzIHNpemU9ezQwfSAvPlxuICAgIC8vICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXYXZlZm9ybTtcbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJGYVBhdXNlIiwiRmFQbGF5IiwiRmFTdG9wIiwiRmFUaW1lcyIsIldhdmVzdXJmZXIiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJ1c2VJc01vdW50ZWQiLCJXYXZlZm9ybSIsIndhdmVmb3JtIiwiaXNBdWRpbyIsInNldEF1ZGlvIiwiaXNNb3VudGVkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJjdXJyZW50UG9zaXRpb24iLCJzZXRQb3NpdGlvbiIsImZpbGVJbnB1dCIsImhhbmRsZVBsYXkiLCJjdXJyZW50IiwiaXNQbGF5aW5nIiwicGF1c2UiLCJwbGF5IiwiaGFuZGxlU3RvcCIsInN0b3AiLCJjcmVhdGVXYXZlZm9ybSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJsb2FkIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiY3JlYXRlIiwiYmFyV2lkdGgiLCJiYXJSYWRpdXMiLCJiYXJHYXAiLCJiYXJNaW5IZWlnaHQiLCJiYXJIZWlnaHQiLCJjdXJzb3JXaWR0aCIsImNvbnRhaW5lciIsImJhY2tlbmQiLCJoZWlnaHQiLCJwcm9ncmVzc0NvbG9yIiwicmVzcG9uc2l2ZSIsIndhdmVDb2xvciIsImN1cnNvckNvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJ0eXBlIiwiYWNjZXB0IiwicmVmIiwiZmlsZWlucHV0Iiwib25DaGFuZ2UiLCJ0ZXh0Iiwib25DbGlja0hhbmRsZXIiLCJjbGljayIsImljb24iLCJ1bmRlZmluZWQiLCJidXR0b24iLCJvbkNsaWNrIiwiaWQiLCJzZXRUaW1lb3V0IiwicCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/wavesurfer/waveform.tsx\n"));

/***/ })

});