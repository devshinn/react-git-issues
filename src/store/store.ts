import { isssueDetailSlice } from './slices/issueDetail';
import { isssueListSlice } from './slices/issueList';
import { repoNameSlice } from './slices/repoInfo';
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';

const reducer = combineReducers({
  issueList: isssueListSlice.reducer,
  issueDetail: isssueDetailSlice.reducer,
  repoName: repoNameSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
