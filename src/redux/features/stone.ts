import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import stoneInit from "../stoneInit";

const INITIAL_STATE = stoneInit;

export type StoneState = typeof INITIAL_STATE;

// const add: CaseReducer<StoneState, PayloadAction<undefined>> = (state, payload) => {
//     // state;
// };

const update: CaseReducer<StoneState, PayloadAction<undefined>> = (state, payload) => {
  return state;
};

const stoneSlice = createSlice({
  name: 'stone',
  initialState: INITIAL_STATE,
  reducers: {update},
});

export default stoneSlice;
