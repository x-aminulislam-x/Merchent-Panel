import { combineReducers } from "@reduxjs/toolkit";
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  user: userReducer
  //   issuesDisplay: issuesDisplayReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
