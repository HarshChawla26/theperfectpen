import { configureStore } from "@reduxjs/toolkit";
import tosSlice from "./slice/tosSlice";


export default configureStore({
    reducer:{
        showtos : tosSlice
    },
    devTools: true
});