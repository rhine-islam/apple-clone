import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  open: boolean;
}

const initialState: CounterState = {
  open: false,
};

export const modalState = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.open = true;
    },
    modalClose: (state) => {
      state.open = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { modalOpen, modalClose } = modalState.actions;

export default modalState.reducer;
