import { createSlice, configureStore } from "@reduxjs/toolkit";

const initalAuthState = {
    isAuthenticated: false,
  };
  const authSlice = createSlice({
    name: "auth",
    initialState: initalAuthState,
    reducers: {
      login(state) {
        state.isAuthenticated = true;
      },
  
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });
  
  //const store = createStore(counterSclice.reducer);

  
  
  export default authSlice.reducer;
  export const authActions = authSlice.actions;
