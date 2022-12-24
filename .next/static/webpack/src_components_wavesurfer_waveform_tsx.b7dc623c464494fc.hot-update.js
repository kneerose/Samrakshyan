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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ui_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/button/button */ \"./src/components/ui/button/button.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wavesurfer.js */ \"./node_modules/wavesurfer.js/dist/wavesurfer.js\");\n/* harmony import */ var wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wavesurfer_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/hooks/use-is-mounted */ \"./src/lib/hooks/use-is-mounted.ts\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { Flex, Button } from \"@chakar-ui/react\";\nvar Waveform = function() {\n    _s();\n    var waveform = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isAudio = ref[0], setAudio = ref[1];\n    var isMounted = (0,_lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), value = ref1[0], setValue = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), isLoading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), currentPosition = ref3[0], setPosition = ref3[1];\n    var fileInput;\n    var handlePlay = function() {\n        if (waveform.current.isPlaying()) {\n            waveform.current.pause();\n            setPosition(\"Pause\");\n        } else {\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    // const handlePause = () => {\n    //   setPosition(\"Pause\");\n    // };\n    var handleStop = function() {\n        waveform.current.stop();\n        setPosition(\"Stop\");\n    };\n    var createWaveform = function(e) {\n        setAudio(true);\n        var file = e.target.files[0];\n        if (file) {\n            waveform.current.load(URL.createObjectURL(file));\n            waveform.current.play();\n            setPosition(\"Play\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        // Check if wavesurfer object is already created.\n        if (!waveform.current) {\n            // Create a wavesurfer object\n            waveform.current = wavesurfer_js__WEBPACK_IMPORTED_MODULE_2___default().create({\n                barWidth: 3,\n                barRadius: 3,\n                barGap: 2,\n                barMinHeight: 1,\n                barHeight: 20,\n                cursorWidth: 1,\n                container: \"#waveform\",\n                backend: \"MediaElement\",\n                height: 200,\n                progressColor: \"#4353FF\",\n                responsive: true,\n                waveColor: \"#567FFF\",\n                cursorColor: \"#567FFF\"\n            });\n        // waveform.current.load(\"/spinybabbler.mp3\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"file\",\n                        accept: \"audio/*\",\n                        className: \"opacity-0 w-0 h-2\",\n                        ref: function(fileinput) {\n                            return fileInput = fileinput;\n                        },\n                        onChange: createWaveform\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, _this),\n                    (!isAudio || !isMounted) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        text: \"Import Sound\",\n                        onClickHandler: function() {\n                            return fileInput.click();\n                        },\n                        className: \"bg-buttonColor w-[145px] text-white\",\n                        icon: undefined\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this),\n            isAudio && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"lg:w-[600px] sm:w-full space-y-5 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col items-end\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                setAudio(false);\n                                setPosition(\"\");\n                                setValue(null);\n                                waveform.current.stop();\n                            },\n                            className: \"py-3 px-3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaTimes, {\n                                className: \"h-8 w-4 text-lightBlackColor\"\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"waveform\",\n                        className: isAudio ? \"visible\" : \"h\"\n                    }, void 0, false, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between px-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: currentPosition == \"Play\" ? \"Pause\" : \"Play\",\n                                        onClickHandler: handlePlay,\n                                        className: \" \".concat(currentPosition == \"Play\" || currentPosition == \"Pause\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: currentPosition == \"Play\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPause, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Play\" ? \"text-white\" : \"text-black\", \" group-hover:text-white \")\n                                        }, void 0, false, void 0, void 0) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPlay, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Pause\" ? \"text-white\" : \"text-black\", \"  group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        text: \"Stop\",\n                                        onClickHandler: handleStop,\n                                        className: \"\".concat(currentPosition == \"Stop\" ? \"bg-buttonColor text-white\" : \"bg-gray-400 text-black\", \" hover:bg-buttonColor group hover:text-white\"),\n                                        icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaStop, {\n                                            className: \"h-4 w-4 \".concat(currentPosition == \"Stop\" ? \"text-white\" : \"text-black\", \" group-hover:text-white\")\n                                        }, void 0, false, void 0, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button_button__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    text: \"Predict the sound\",\n                                    className: \"bg-gray-400\",\n                                    onClickHandler: function() {\n                                        setLoading(true);\n                                        setTimeout(function() {\n                                            setValue(\"Spiny Babbler\");\n                                            setLoading(false);\n                                        }, 2000);\n                                    },\n                                    icon: undefined\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 145,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 144,\n                                columnNumber: 13\n                            }, _this),\n                            value ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" pt-2 text-center\",\n                                children: [\n                                    \"80% match with \",\n                                    value,\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 159,\n                                columnNumber: 15\n                            }, _this) : isLoading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex pt-2 justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {\n                                    size: 40\n                                }, void 0, false, {\n                                    fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                    lineNumber: 163,\n                                    columnNumber: 19\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                                lineNumber: 162,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n                lineNumber: 86,\n                columnNumber: 20\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/niraj/Samrakshyan/frontend/src/components/wavesurfer/waveform.tsx\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, _this);\n};\n_s(Waveform, \"SlwLpDf+x8182pIcbhOX1yVmsdk=\", false, function() {\n    return [\n        _lib_hooks_use_is_mounted__WEBPACK_IMPORTED_MODULE_4__.useIsMounted\n    ];\n});\n_c = Waveform;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Waveform);\nvar _c;\n$RefreshReg$(_c, \"Waveform\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy93YXZlc3VyZmVyL3dhdmVmb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7QUFBeUM7QUFDeUI7QUFDM0I7QUFDYTtBQUNIO0FBQ2E7QUFDOUQsbURBQW1EO0FBRW5ELElBQU1XLFFBQVEsR0FBRyxXQUFNOztJQUNyQixJQUFNQyxRQUFRLEdBQUdMLDZDQUFNLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQTRCQyxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXBDSyxPQUFPLEdBQWNMLEdBQWUsR0FBN0IsRUFBRU0sUUFBUSxHQUFJTixHQUFlLEdBQW5CO0lBQ3hCLElBQU1PLFNBQVMsR0FBR0wsdUVBQVksRUFBRTtJQUNoQyxJQUEwQkYsSUFBa0IsR0FBbEJBLCtDQUFRLEVBQVUsRUFBckNRLEtBQUssR0FBY1IsSUFBa0IsR0FBaEMsRUFBRVMsUUFBUSxHQUFJVCxJQUFrQixHQUF0QjtJQUN0QixJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q1UsU0FBUyxHQUFnQlYsSUFBZSxHQUEvQixFQUFFVyxVQUFVLEdBQUlYLElBQWUsR0FBbkI7SUFDNUIsSUFBdUNBLElBQWtCLEdBQWxCQSwrQ0FBUSxFQUFVLEVBQWxEWSxlQUFlLEdBQWlCWixJQUFrQixHQUFuQyxFQUFFYSxXQUFXLEdBQUliLElBQWtCLEdBQXRCO0lBQ25DLElBQUljLFNBQVM7SUFDYixJQUFNQyxVQUFVLEdBQUcsV0FBTTtRQUN2QixJQUFJWCxRQUFRLENBQUNZLE9BQU8sQ0FBQ0MsU0FBUyxFQUFFLEVBQUU7WUFDaENiLFFBQVEsQ0FBQ1ksT0FBTyxDQUFDRSxLQUFLLEVBQUUsQ0FBQztZQUN6QkwsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCLE1BQU07WUFDTFQsUUFBUSxDQUFDWSxPQUFPLENBQUNHLElBQUksRUFBRSxDQUFDO1lBQ3hCTixXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7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QUFDO3dDQUM5QzJDLElBQUksZ0JBQ0YsOERBQUM1RCxrREFBTTs0Q0FDTGtELFNBQVMsRUFBRSxVQUFTLENBRW5CLE1BQXVCLENBRHRCakMsZUFBZSxJQUFJLE1BQU0sR0FBRyxZQUFZLEdBQUcsWUFBWSxFQUN4RCx5QkFBdUIsQ0FBQzt5RUFDekI7Ozs7OzZDQUVKOzs7Ozs7cUNBQ0U7MENBQ04sOERBQUNnQyxLQUFHO2dDQUFDQyxTQUFTLEVBQUMscUJBQXNCOzBDQUNuQyw0RUFBQ3JELHlEQUFNO29DQUNMNEQsSUFBSSxFQUFDLG1CQUFtQjtvQ0FDeEJQLFNBQVMsRUFBQyxhQUFhO29DQUN2QlEsY0FBYyxFQUFFLFdBQU07d0NBQ3BCMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO3dDQUNqQmlELFVBQVUsQ0FBQyxXQUFNOzRDQUNmbkQsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDOzRDQUMxQkUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3lDQUNuQixFQUFFLElBQUksQ0FBQyxDQUFDO3FDQUNWO29DQUNENEMsSUFBSSxFQUFFQyxTQUFTOzs7Ozt5Q0FDZjs7Ozs7cUNBQ0U7NEJBQ0xoRCxLQUFLLGlCQUNKLDhEQUFDcUQsR0FBQztnQ0FBQ2hCLFNBQVMsRUFBQyxtQkFBbUI7O29DQUFDLGlCQUFlO29DQUFDckMsS0FBSztvQ0FBQyxHQUFDOzs7Ozs7cUNBQUksR0FFNURFLFNBQVMsa0JBQ1AsOERBQUNrQyxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsMEJBQTBCOzBDQUN2Qyw0RUFBQzVDLDJEQUFnQjtvQ0FBQzZELElBQUksRUFBRSxFQUFFOzs7Ozt5Q0FBSTs7Ozs7cUNBQzFCOzs7Ozs7NkJBR047Ozs7OztxQkFDSjs7Ozs7O2FBRUYsQ0FLTjtDQUNIO0dBdktLM0QsUUFBUTs7UUFHTUQsbUVBQVk7OztBQUgxQkMsS0FBQUEsUUFBUTtBQXlLZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3dhdmVzdXJmZXIvd2F2ZWZvcm0udHN4PzdhNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vdWkvYnV0dG9uL2J1dHRvblwiO1xuaW1wb3J0IHsgRmFQYXVzZSwgRmFQbGF5LCBGYVN0b3AsIEZhVGltZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBXYXZlc3VyZmVyIGZyb20gXCJ3YXZlc3VyZmVyLmpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENpcmN1bGFyUHJvZ3Jlc3MgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgdXNlSXNNb3VudGVkIH0gZnJvbSBcIi4uLy4uL2xpYi9ob29rcy91c2UtaXMtbW91bnRlZFwiO1xuLy8gaW1wb3J0IHsgRmxleCwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrYXItdWkvcmVhY3RcIjtcblxuY29uc3QgV2F2ZWZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHdhdmVmb3JtID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNBdWRpbywgc2V0QXVkaW9dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBpc01vdW50ZWQgPSB1c2VJc01vdW50ZWQoKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY3VycmVudFBvc2l0aW9uLCBzZXRQb3NpdGlvbl0gPSB1c2VTdGF0ZTxzdHJpbmc+KCk7XG4gIGxldCBmaWxlSW5wdXQ7XG4gIGNvbnN0IGhhbmRsZVBsYXkgPSAoKSA9PiB7XG4gICAgaWYgKHdhdmVmb3JtLmN1cnJlbnQuaXNQbGF5aW5nKCkpIHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGF1c2UoKTtcbiAgICAgIHNldFBvc2l0aW9uKFwiUGF1c2VcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQucGxheSgpO1xuICAgICAgc2V0UG9zaXRpb24oXCJQbGF5XCIpO1xuICAgIH1cbiAgfTtcbiAgLy8gY29uc3QgaGFuZGxlUGF1c2UgPSAoKSA9PiB7XG5cbiAgLy8gICBzZXRQb3NpdGlvbihcIlBhdXNlXCIpO1xuICAvLyB9O1xuICBjb25zdCBoYW5kbGVTdG9wID0gKCkgPT4ge1xuICAgIHdhdmVmb3JtLmN1cnJlbnQuc3RvcCgpO1xuICAgIHNldFBvc2l0aW9uKFwiU3RvcFwiKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVXYXZlZm9ybSA9IChlKSA9PiB7XG4gICAgc2V0QXVkaW8odHJ1ZSk7XG4gICAgdmFyIGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICBpZiAoZmlsZSkge1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5sb2FkKFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xuICAgICAgd2F2ZWZvcm0uY3VycmVudC5wbGF5KCk7XG4gICAgICBzZXRQb3NpdGlvbihcIlBsYXlcIik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgd2F2ZXN1cmZlciBvYmplY3QgaXMgYWxyZWFkeSBjcmVhdGVkLlxuICAgIGlmICghd2F2ZWZvcm0uY3VycmVudCkge1xuICAgICAgLy8gQ3JlYXRlIGEgd2F2ZXN1cmZlciBvYmplY3RcbiAgICAgIHdhdmVmb3JtLmN1cnJlbnQgPSBXYXZlc3VyZmVyLmNyZWF0ZSh7XG4gICAgICAgIGJhcldpZHRoOiAzLFxuICAgICAgICBiYXJSYWRpdXM6IDMsXG4gICAgICAgIGJhckdhcDogMixcbiAgICAgICAgYmFyTWluSGVpZ2h0OiAxLFxuICAgICAgICBiYXJIZWlnaHQ6IDIwLFxuICAgICAgICBjdXJzb3JXaWR0aDogMSxcbiAgICAgICAgY29udGFpbmVyOiBcIiN3YXZlZm9ybVwiLFxuICAgICAgICBiYWNrZW5kOiBcIk1lZGlhRWxlbWVudFwiLFxuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgcHJvZ3Jlc3NDb2xvcjogXCIjNDM1M0ZGXCIsXG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIHdhdmVDb2xvcjogXCIjNTY3RkZGXCIsXG4gICAgICAgIGN1cnNvckNvbG9yOiBcIiM1NjdGRkZcIixcbiAgICAgIH0pO1xuICAgICAgLy8gd2F2ZWZvcm0uY3VycmVudC5sb2FkKFwiL3NwaW55YmFiYmxlci5tcDNcIik7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgYWNjZXB0PVwiYXVkaW8vKlwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3BhY2l0eS0wIHctMCBoLTJcIlxuICAgICAgICAgIHJlZj17KGZpbGVpbnB1dCkgPT4gKGZpbGVJbnB1dCA9IGZpbGVpbnB1dCl9XG4gICAgICAgICAgb25DaGFuZ2U9e2NyZWF0ZVdhdmVmb3JtfVxuICAgICAgICAvPlxuICAgICAgICB7KCFpc0F1ZGlvIHx8ICFpc01vdW50ZWQpICYmIChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0ZXh0PVwiSW1wb3J0IFNvdW5kXCJcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGVyPXsoKSA9PiBmaWxlSW5wdXQuY2xpY2soKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJ1dHRvbkNvbG9yIHctWzE0NXB4XSB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgIGljb249e3VuZGVmaW5lZH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICAge2lzQXVkaW8gJiYgPGRpdiBjbGFzc05hbWU9XCJsZzp3LVs2MDBweF0gc206dy1mdWxsICBzcGFjZS15LTUgIFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldEF1ZGlvKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbihcIlwiKTtcbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShudWxsKTtcbiAgICAgICAgICAgICAgICB3YXZlZm9ybS5jdXJyZW50LnN0b3AoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMyBweC0zXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhVGltZXMgY2xhc3NOYW1lPVwiaC04IHctNCB0ZXh0LWxpZ2h0QmxhY2tDb2xvclwiPjwvRmFUaW1lcz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwid2F2ZWZvcm1cIiBjbGFzc05hbWU9e2lzQXVkaW8gPyBcInZpc2libGVcIjpcImhcIn0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcHgtNVwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGV4dD17Y3VycmVudFBvc2l0aW9uID09IFwiUGxheVwiID8gXCJQYXVzZVwiIDogXCJQbGF5XCJ9XG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9e2hhbmRsZVBsYXl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgICR7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPT0gXCJQbGF5XCIgfHwgY3VycmVudFBvc2l0aW9uID09IFwiUGF1c2VcIlxuICAgICAgICAgICAgICAgICAgICA/IFwiYmctYnV0dG9uQ29sb3IgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJiZy1ncmF5LTQwMCB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICB9IGhvdmVyOmJnLWJ1dHRvbkNvbG9yIGdyb3VwIGhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgIGljb249e1xuICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiUGxheVwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8RmFQYXVzZVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9PSBcIlBsYXlcIiA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgICB9IGdyb3VwLWhvdmVyOnRleHQtd2hpdGUgYH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGYVBsYXlcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoLTQgdy00ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPT0gXCJQYXVzZVwiID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIH0gIGdyb3VwLWhvdmVyOnRleHQtd2hpdGVgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHRleHQ9XCJTdG9wXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrSGFuZGxlcj17aGFuZGxlU3RvcH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID09IFwiU3RvcFwiXG4gICAgICAgICAgICAgICAgICAgID8gXCJiZy1idXR0b25Db2xvciB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOiBcImJnLWdyYXktNDAwIHRleHQtYmxhY2tcIlxuICAgICAgICAgICAgICAgIH0gaG92ZXI6YmctYnV0dG9uQ29sb3IgZ3JvdXAgaG92ZXI6dGV4dC13aGl0ZWB9XG4gICAgICAgICAgICAgICAgaWNvbj17XG4gICAgICAgICAgICAgICAgICA8RmFTdG9wXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNCB3LTQgJHtcbiAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPT0gXCJTdG9wXCIgPyBcInRleHQtd2hpdGVcIiA6IFwidGV4dC1ibGFja1wiXG4gICAgICAgICAgICAgICAgICAgIH0gZ3JvdXAtaG92ZXI6dGV4dC13aGl0ZWB9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ICBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGV4dD1cIlByZWRpY3QgdGhlIHNvdW5kXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgb25DbGlja0hhbmRsZXI9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoXCJTcGlueSBCYWJibGVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgaWNvbj17dW5kZWZpbmVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dmFsdWUgPyAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBwdC0yIHRleHQtY2VudGVyXCI+ODAlIG1hdGNoIHdpdGgge3ZhbHVlfSA8L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwdC0yIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBzaXplPXs0MH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxufVxuICAgIDwvZGl2PlxuICAgIC8vICkgOiAoXG4gICAgLy8gICA8ZGl2IGNsYXNzTmFtZT1cInctWzMwMHB4XSBoLVsxMDBweF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXhcIj5cbiAgICAvLyAgICAgPENpcmN1bGFyUHJvZ3Jlc3Mgc2l6ZT17NDB9IC8+XG4gICAgLy8gICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdhdmVmb3JtO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZhUGF1c2UiLCJGYVBsYXkiLCJGYVN0b3AiLCJGYVRpbWVzIiwiV2F2ZXN1cmZlciIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2lyY3VsYXJQcm9ncmVzcyIsInVzZUlzTW91bnRlZCIsIldhdmVmb3JtIiwid2F2ZWZvcm0iLCJpc0F1ZGlvIiwic2V0QXVkaW8iLCJpc01vdW50ZWQiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsImN1cnJlbnRQb3NpdGlvbiIsInNldFBvc2l0aW9uIiwiZmlsZUlucHV0IiwiaGFuZGxlUGxheSIsImN1cnJlbnQiLCJpc1BsYXlpbmciLCJwYXVzZSIsInBsYXkiLCJoYW5kbGVTdG9wIiwic3RvcCIsImNyZWF0ZVdhdmVmb3JtIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImxvYWQiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjcmVhdGUiLCJiYXJXaWR0aCIsImJhclJhZGl1cyIsImJhckdhcCIsImJhck1pbkhlaWdodCIsImJhckhlaWdodCIsImN1cnNvcldpZHRoIiwiY29udGFpbmVyIiwiYmFja2VuZCIsImhlaWdodCIsInByb2dyZXNzQ29sb3IiLCJyZXNwb25zaXZlIiwid2F2ZUNvbG9yIiwiY3Vyc29yQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJyZWYiLCJmaWxlaW5wdXQiLCJvbkNoYW5nZSIsInRleHQiLCJvbkNsaWNrSGFuZGxlciIsImNsaWNrIiwiaWNvbiIsInVuZGVmaW5lZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpZCIsInNldFRpbWVvdXQiLCJwIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/wavesurfer/waveform.tsx\n"));

/***/ })

});