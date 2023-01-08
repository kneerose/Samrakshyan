import { BirdDetailDtos } from "@app/models/dtos/bird-detail";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface IBirdList {
  birdList: Array<BirdDetailDtos>;
}

const initialState: IBirdList = {
  birdList: [],
};

const birdListSlice = createSlice({
  name: "birdList",
  initialState,
  reducers: {
    setBirdList(state = initialState, action: PayloadAction<IBirdList>) {
      state = { ...action.payload };
      return state;
    },
  },
});

const birdListReducer = persistReducer(
  {
    key: "kBirdList",
    storage,
    whitelist: ["birdList"],
  },
  birdListSlice.reducer
);

const reducerObj = {
  reducerPath: birdListSlice.name,
  reducer: birdListReducer,
};

export const { setBirdList } = birdListSlice.actions;

export default reducerObj;
