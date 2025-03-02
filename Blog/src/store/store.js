import { configureStore } from "@reduxjs/toolkit";
import {login,logout} from './authSlice';

const store = configureStore({
    reducer: { }
});

export default store;