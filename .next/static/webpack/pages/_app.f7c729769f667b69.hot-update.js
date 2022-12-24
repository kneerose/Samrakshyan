"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/store/detail/api.ts":
/*!*********************************!*\
  !*** ./src/store/detail/api.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"responseApi\": function() { return /* binding */ responseApi; },\n/* harmony export */   \"usePostPredictionResponseMu\": function() { return /* binding */ usePostPredictionResponseMu; },\n/* harmony export */   \"usePrefetch\": function() { return /* binding */ usePrefetch; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"./node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./src/store/detail/types.ts\");\n\n\nvar responseApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.createApi)({\n    reducerPath: _types__WEBPACK_IMPORTED_MODULE_0__.PREDICTION_RESPONSE_REDUCER_KEY,\n    tagTypes: [\n        \"RESPONSE\"\n    ],\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_1__.fetchBaseQuery)({\n        baseUrl: \"http://127.0.0.1:8000\"\n    }),\n    endpoints: function(builder) {\n        return {\n            getPredictionResponse: builder.mutation({\n                query: function(requestBody) {\n                    return {\n                        url: \"/files/\",\n                        method: \"POST\",\n                        headers: {\n                            \"content-type\": \"application/json\",\n                            accept: \"application/json\"\n                        },\n                        body: requestBody\n                    };\n                }\n            })\n        };\n    }\n});\nvar usePrefetch = responseApi.usePrefetch, usePostPredictionResponseMu = responseApi.usePostPredictionResponseMu;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUvZGV0YWlsL2FwaS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5RTtBQUVmO0FBRW5ELElBQU1HLFdBQVcsR0FBR0gsdUVBQVMsQ0FBQztJQUNqQ0ksV0FBVyxFQUFFRixtRUFBK0I7SUFDNUNHLFFBQVEsRUFBRTtRQUFDLFVBQVU7S0FBQztJQUN0QkMsU0FBUyxFQUFFTCw0RUFBYyxDQUFDO1FBQUVNLE9BQU8sRUFBQyx1QkFBdUI7S0FBRSxDQUFDO0lBQzlEQyxTQUFTLEVBQUUsU0FBQ0MsT0FBTztlQUFNO1lBQ3JCQyxxQkFBcUIsRUFBRUQsT0FBTyxDQUFDRSxRQUFRLENBQXdCO2dCQUMzREMsS0FBSyxFQUFFLFNBQUNDLFdBQVc7MkJBQU07d0JBQ3JCQyxHQUFHLEVBQUMsU0FBUzt3QkFDYkMsTUFBTSxFQUFDLE1BQU07d0JBQ2JDLE9BQU8sRUFBQzs0QkFDSixjQUFjLEVBQUUsa0JBQWtCOzRCQUNsQ0MsTUFBTSxFQUFFLGtCQUFrQjt5QkFDN0I7d0JBQ0RDLElBQUksRUFBQ0wsV0FBVztxQkFFbkI7aUJBQUM7YUFDTCxDQUFDO1NBQ0w7S0FBQztDQUNMLENBQUMsQ0FBQztBQUVJLElBQVFNLFdBQVcsR0FBa0NoQixXQUFXLENBQXhEZ0IsV0FBVyxFQUFFQywyQkFBMkIsR0FBS2pCLFdBQVcsQ0FBM0NpQiwyQkFBMkIsQ0FBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2RldGFpbC9hcGkudHM/MzE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCc7XG5pbXBvcnQgeyBwcmVkaWN0aW9uRHRvIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2R0b3MvcHJlZGljdGlvbic7XG5pbXBvcnQgeyBQUkVESUNUSU9OX1JFU1BPTlNFX1JFRFVDRVJfS0VZIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjb25zdCByZXNwb25zZUFwaSA9IGNyZWF0ZUFwaSh7XG4gICAgcmVkdWNlclBhdGg6IFBSRURJQ1RJT05fUkVTUE9OU0VfUkVEVUNFUl9LRVksXG4gICAgdGFnVHlwZXM6IFsnUkVTUE9OU0UnXSwgLy9hdXRvZmV0Y2hpbmdcbiAgICBiYXNlUXVlcnk6IGZldGNoQmFzZVF1ZXJ5KHsgYmFzZVVybDonaHR0cDovLzEyNy4wLjAuMTo4MDAwJyB9KSxcbiAgICBlbmRwb2ludHM6IChidWlsZGVyKSA9PiAoe1xuICAgICAgICBnZXRQcmVkaWN0aW9uUmVzcG9uc2U6IGJ1aWxkZXIubXV0YXRpb248cHJlZGljdGlvbkR0bywgc3RyaW5nPih7XG4gICAgICAgICAgICBxdWVyeTogKHJlcXVlc3RCb2R5KSA9PiAoe1xuICAgICAgICAgICAgICAgIHVybDonL2ZpbGVzLycsXG4gICAgICAgICAgICAgICAgbWV0aG9kOidQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOntcbiAgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJvZHk6cmVxdWVzdEJvZHlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KVxuICAgIH0pXG59KTtcblxuZXhwb3J0IGNvbnN0IHsgdXNlUHJlZmV0Y2gsIHVzZVBvc3RQcmVkaWN0aW9uUmVzcG9uc2VNdSB9ID0gcmVzcG9uc2VBcGk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJQUkVESUNUSU9OX1JFU1BPTlNFX1JFRFVDRVJfS0VZIiwicmVzcG9uc2VBcGkiLCJyZWR1Y2VyUGF0aCIsInRhZ1R5cGVzIiwiYmFzZVF1ZXJ5IiwiYmFzZVVybCIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRQcmVkaWN0aW9uUmVzcG9uc2UiLCJtdXRhdGlvbiIsInF1ZXJ5IiwicmVxdWVzdEJvZHkiLCJ1cmwiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWNjZXB0IiwiYm9keSIsInVzZVByZWZldGNoIiwidXNlUG9zdFByZWRpY3Rpb25SZXNwb25zZU11Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/store/detail/api.ts\n"));

/***/ })

});