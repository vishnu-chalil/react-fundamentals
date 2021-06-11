const { createSlice } = require("@reduxjs/toolkit");

const uiSlice = createSlice({
    name: 'ui',
    initialState: { cartIsvisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.cartIsvisible = !state.cartIsvisible;
        },
        showNotification(state, action) {

            state.notification = { status: action.payload.status, 
                title: action.payload.title, message: action.payload.message };

        },
    }
})

export default uiSlice;

export const uiActions = uiSlice.actions;