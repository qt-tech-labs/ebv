import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface ModalSlice {
  hidden: boolean;
}

const initialState: ModalSlice = {
  hidden: true,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.hidden = !state.hidden;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const modalIsHidden = (state: RootState) => state.modal.hidden;

export default modalSlice.reducer;
