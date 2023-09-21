import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../types/ModalType";

const ModalSlice = createSlice({
  name: "modal",
  initialState: initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal } = ModalSlice.actions;
export default ModalSlice.reducer;
