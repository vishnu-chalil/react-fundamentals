import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";

import authReducer from "./auth";


const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});


export default store;


//import {createStore} from 'redux';

// react toolkit uses package called imur which prevents accidental state changes and inconsistency.

// const initialCounterState = { counter: 0, showCounter: true };

// const counterSlice = createSlice({
//   name: "counter",
//   initialState:initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },

//     decrement(state) {
//       state.counter--;
//     },
//     increase(state, action) {
//       state.counter = state.counter + action.payload;
//     },
//     toggleCounter(state) {
//       state.showCounter = !state.showCounter;
//     },
//   },
// });

// const initalAuthState = {
//   isAuthenticated: false,
// };
// const authSlice = createSlice({
//   name: "auth",
//   initialState: initalAuthState,
//   reducers: {
//     login(state) {
//       state.isAuthenticated = true;
//     },

//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

//const store = createStore(counterSclice.reducer);
// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// export default store;

/// Without rdux toolkit, Here state mutation is a strict no no
// import {createStore} from 'redux';

// const initalState= {counter:0, showCounter:true }
// const countReducer = (state=initalState, action) =>{

//     if(action.type === 'INCREMENT'){

//         return{counter: state.counter+1,
//         showCounter: state.showCounter};

//     }
//     if(action.type === 'DECREMENT'){

//         return{counter: state.counter-1,
//             showCounter: state.showCounter};

//     }

//     if(action.type === 'INCREASE'){

//         return{counter: state.counter + action.amount,
//             showCounter: state.showCounter};

//     }

//     if(action.type === 'TOGGLE'){

//         return{counter: state.counter,
//             showCounter: !state.showCounter};

//     }
//     return state;

// };

// const store = createStore(countReducer);

// export default store;

// removed dependency "redux": "^4.1.0",
