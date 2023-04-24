import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./components/modal/modalSlice";

export default configureStore({
    reducer: {
        modal: modalSlice
    }
})