import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: {
        hidden: true
    },
    reducers: {
        toggle: state => {
            state.hidden = !state.hidden
        }
    }
})

export const {toggle} = modalSlice.actions

export const modalIsHidden = state => state.modal.hidden

export default modalSlice.reducer