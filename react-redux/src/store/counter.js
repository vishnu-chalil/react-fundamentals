import { createSlice, configureStore } from "@reduxjs/toolkit";
//import {createStore} from 'redux';

// react toolkit uses package called imur which prevents accidental state changes and inconsistency.

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState:initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
