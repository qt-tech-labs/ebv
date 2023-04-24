import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";


interface ModalSlice {
    hidden: boolean
}

const initialState: ModalSlice = {
    hidden: true
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        toggle: (state) => {
            state.hidden = !state.hidden
        }
    }
})

export const {toggle} = modalSlice.actions

export const modalIsHidden = (state: RootState) => state.modal.hidden

export default modalSlice.reducer