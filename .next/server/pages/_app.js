(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiRoutes = {
    BIRD_LIST: `/items`,
    SINGLE_BIRD: "/items/id",
    MEDIA: "/media",
    PREDICT: "/files/"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiRoutes);


/***/ }),

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const config = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
let publicRuntimeConfig = {};
if (config && config.publicRuntimeConfig) {
    publicRuntimeConfig = config.publicRuntimeConfig;
}
const environments = {
    API_URL: publicRuntimeConfig.API_URL,
    DB_URL: publicRuntimeConfig.DB_URL
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (environments);


/***/ }),

/***/ 437:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
;// CONCATENATED MODULE: external "@reduxjs/toolkit/query"
const query_namespaceObject = require("@reduxjs/toolkit/query");
;// CONCATENATED MODULE: ./src/store/actions/resetState.ts

const RESET_STATE_ACTION_TYPE = "resetState";
const resetStateAction = (0,toolkit_.createAction)(RESET_STATE_ACTION_TYPE, ()=>{
    return {
        payload: null
    };
});

;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
// EXTERNAL MODULE: external "redux-persist"
var external_redux_persist_ = __webpack_require__(161);
;// CONCATENATED MODULE: ./src/store/enchancers.ts
const round = (number)=>Math.round(number * 100) / 100;
const consoleStyle = [
    "color: #ffffff",
    "background: #6366f1",
    "font-size: 12px",
    "padding: 10px",
    "width: 100%",
    "font-weight: bold"
].join(";");
const monitorReducerEnhancer = (createStore)=>(reducer, initialState, enhancer)=>{
        const monitoredReducer = (state, action)=>{
            const start = performance.now();
            const newState = reducer(state, action);
            const end = performance.now();
            const diff = round(end - start);
            console.log(`%c${action.type} Reducer process time ${diff} seconds`, consoleStyle);
            return newState;
        };
        return createStore(monitoredReducer, initialState, enhancer);
    };

// EXTERNAL MODULE: ./src/store/detail/api.ts + 1 modules
var api = __webpack_require__(895);
// EXTERNAL MODULE: ./src/store/bird/api.ts + 1 modules
var bird_api = __webpack_require__(290);
// EXTERNAL MODULE: ./src/store/bird/birdSlice.ts
var birdSlice = __webpack_require__(883);
;// CONCATENATED MODULE: ./src/store/store.ts









const loggerMiddleware = (0,external_redux_logger_namespaceObject.createLogger)();
const middlewares = [
    loggerMiddleware,
    api/* responseApi.middleware */.pC.middleware,
    bird_api/* birdApi.middleware */.S5.middleware
];
const reducers = {
    [api/* responseApi.reducerPath */.pC.reducerPath]: api/* responseApi.reducer */.pC.reducer,
    [bird_api/* birdApi.reducerPath */.S5.reducerPath]: bird_api/* birdApi.reducer */.S5.reducer,
    [birdSlice/* default.reducerPath */.Z.reducerPath]: birdSlice/* default.reducer */.Z.reducer
};
const combinedReducer = (0,toolkit_.combineReducers)(reducers);
const rootReducer = (state, action)=>{
    if (action.type === RESET_STATE_ACTION_TYPE) {
        state = {};
    }
    return combinedReducer(state, action);
};
const store = (0,toolkit_.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }).concat(middlewares),
    preloadedState: {},
    enhancers: [
        monitorReducerEnhancer
    ]
});
const persistor = (0,external_redux_persist_.persistStore)(store);
(0,query_namespaceObject.setupListeners)(store.dispatch);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/components/ui/nprocess.tsx





external_nprogress_default().configure({
    showSpinner: false
});
/* eslint-disable react/prefer-stateless-function */ class NextNProgress extends (external_react_default()).Component {
    static defaultProps = {
        color: "#29D",
        startPosition: 0.3,
        stopDelayMs: 200,
        height: 3
    };
    timer = null;
    routeChangeStart = ()=>{
        external_nprogress_default().set(this.props.startPosition);
        external_nprogress_default().start();
    };
    routeChangeEnd = ()=>{
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            external_nprogress_default().done(true);
        }, this.props.stopDelayMs);
    };
    render() {
        const { color , height  } = this.props;
        return jsx_runtime_.jsx((style_default()), {
            id: "8ec18169a17d495c",
            dynamic: [
                color,
                height,
                color,
                color,
                color,
                color
            ],
            children: `#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:1031;top:0;left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;-webkit-box-shadow:0 0 10px ${color},0 0 5px ${color};-moz-box-shadow:0 0 10px ${color},0 0 5px ${color};box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg)translate(0px,-4px);-ms-transform:rotate(3deg)translate(0px,-4px);-moz-transform:rotate(3deg)translate(0px,-4px);-o-transform:rotate(3deg)translate(0px,-4px);transform:rotate(3deg)translate(0px,-4px)}#nprogress .spinner{display:"block";position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;border:solid 2px transparent;border-top-color:${color};border-left-color:${color};-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;-webkit-animation:nprogresss-spinner 400ms linear infinite;-moz-animation:nprogress-spinner 400ms linear infinite;-o-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes nprogress-spinner{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes nprogress-spinner{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}`
        });
    }
    componentDidMount() {
        const { options  } = this.props;
        if (options) {
            external_nprogress_default().configure(options);
        }
        router_default().events.on("routeChangeStart", this.routeChangeStart);
        router_default().events.on("routeChangeComplete", this.routeChangeEnd);
        router_default().events.on("routeChangeError", this.routeChangeEnd);
    }
}
/* harmony default export */ const nprocess = (NextNProgress);

;// CONCATENATED MODULE: ./src/pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    router_default().events.on("routeChangeStart", ()=>{
        external_nprogress_default().start();
    });
    router_default().events.on("routeChangeComplete", ()=>{
        external_nprogress_default().done();
    });
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "संरक्षण"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(nprocess, {
                color: "#f04444",
                startPosition: 0,
                stopDelayMs: 400,
                height: 5,
                options: {
                    easing: "ease"
                }
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
                store: store,
                children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                }))
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pC": () => (/* binding */ responseApi),
  "dF": () => (/* binding */ usePostPredictionResponseMutation)
});

// UNUSED EXPORTS: usePrefetch

// EXTERNAL MODULE: external "@reduxjs/toolkit/query/react"
var react_ = __webpack_require__(335);
// EXTERNAL MODULE: ./src/configs/apiRoutes.ts
var apiRoutes = __webpack_require__(717);
// EXTERNAL MODULE: ./src/configs/environments.ts
var environments = __webpack_require__(185);
;// CONCATENATED MODULE: ./src/store/detail/types.ts
const PREDICTION_RESPONSE_REDUCER_KEY = "responseApi";

;// CONCATENATED MODULE: ./src/store/detail/api.ts




const responseApi = (0,react_.createApi)({
    reducerPath: PREDICTION_RESPONSE_REDUCER_KEY,
    tagTypes: [
        "RESPONSE"
    ],
    baseQuery: (0,react_.fetchBaseQuery)({
        baseUrl: environments/* default.API_URL */.Z.API_URL
    }),
    endpoints: (builder)=>({
            postPredictionResponse: builder.mutation({
                query: (requestFileString)=>({
                        url: apiRoutes/* default.PREDICT */.Z.PREDICT,
                        method: "POST",
                        body: requestFileString
                    })
            })
        })
});
const { usePrefetch , usePostPredictionResponseMutation  } = responseApi;


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 161:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ 936:
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [436], () => (__webpack_exec__(437)));
module.exports = __webpack_exports__;

})();