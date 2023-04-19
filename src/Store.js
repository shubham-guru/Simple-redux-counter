import { configureStore } from "@reduxjs/toolkit";
import customReducer from "./Reducer";

const store = configureStore({
  reducer: {
    counter: customReducer
  }
});

export default store;
