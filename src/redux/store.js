import { configureStore } from "@reduxjs/toolkit";
import citiesReducer from "./reducers/citiesReducers";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
    reducer: {
        citiesReducer,
        authReducer
    }
})