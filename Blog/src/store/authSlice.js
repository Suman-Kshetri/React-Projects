import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

// state Keeps Track of the Current Data
// Without state, there would be no way to know whether a user is logged in or out.
// state ensures that the app always has the latest authentication status.
// action Tells the Reducer What to Change

// Redux uses action to specify what needs to be updated.
// The payload carries the actual data required to modify the state.
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login(state,action)
        {
            state.status = true;
            state.userData = action.payload.userData;

        },
        logout(state) {
            state.status = false;
            state.userData = null;
        }
    }
});

export default authSlice.reducer;

export const {login,logout} = authSlice.actions;