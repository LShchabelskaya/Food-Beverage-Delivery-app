import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./teamReducer";

const store = configureStore({
    reducer: {
        team: teamReducer
    }
});

export default store;