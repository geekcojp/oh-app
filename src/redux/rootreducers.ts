import { combineReducers } from '@reduxjs/toolkit';
import stoneModules from './features/stone';
import { State } from './types';

export type RootState = {
  stoneItems: State;
};

export const rootReducer = combineReducers({
  stoneItems: stoneModules.reducer,
});
