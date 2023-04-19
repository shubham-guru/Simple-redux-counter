import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  c: 0
};

const customReducer = createReducer(initialState, {
  increment: (state) => {
    state.c += 1;
  },
  decrement: (state) => {
    state.c -= 1;
  },
  incrementByValue: (state, action) => {
    state.c += action.payload;
  },
  reset: (state) => {
    state.c = 0;
  }
});

export default customReducer;
