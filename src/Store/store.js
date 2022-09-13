import { combineReducers, configureStore } from "@reduxjs/toolkit";
import citySlice from "./citySlice";

const rootReducer = combineReducers({});
export const store = configureStore({
  reducer: { city: citySlice },
});
