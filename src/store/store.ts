import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { RESET_STATE_ACTION_TYPE } from "./actions/resetState";
import { createLogger } from "redux-logger";
import { monitorReducerEnhancer } from "./enchancers";
import { responseApi } from "./detail/api";
import { birdApi } from "./bird/api";
import birdslice from "./bird/birdSlice";
const loggerMiddleware = createLogger();
const middlewares = [
  loggerMiddleware,
  responseApi.middleware,
  birdApi.middleware,
];
const reducers = {
  [responseApi.reducerPath]: responseApi.reducer,
  [birdApi.reducerPath]: birdApi.reducer,
  [birdslice.reducerPath]: birdslice.reducer,
};
const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      // serializableCheck: {
      //     ignoredActions: [
      //         FLUSH,
      //         REHYDRATE,
      //         PAUSE,
      //         PERSIST,
      //         PURGE,
      //         REGISTER,
      //         // This action has functions set in store object so to avoid serializable check its been added here
      //         'rtkWalletProvider/setRtkWalletProvider'
      //     ]
      // }
    }).concat(middlewares),
  preloadedState: {},
  enhancers: [monitorReducerEnhancer],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;

setupListeners(store.dispatch);
