import {Action, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {createLogger} from 'redux-logger';
import {ThunkAction} from 'redux-thunk';
import {rootReducer, RootState} from './rootreducers';

const middlewares = [...getDefaultMiddleware({serializableCheck: false})];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
  });
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
});

// export type AppDispatch = typeof store.dispatch;

// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
