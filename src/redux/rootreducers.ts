import { combineReducers } from '@reduxjs/toolkit';
// import todoModule from '../modules/todo-module/todo-module';
import { State } from './types';

export type RootState = {
  stoneItems: State;
};

export const rootReducer = combineReducers({
  // stoneItems: stoneModules.reducer,
});
