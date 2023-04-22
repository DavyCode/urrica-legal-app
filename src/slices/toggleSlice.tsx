import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  toggleCollapse: boolean;
}

const initialState: ToggleState = {
  toggleCollapse: false,
}





const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    setToggleCollapse: (state, action: PayloadAction<boolean>) => {
      state.toggleCollapse = action.payload;
    },
  },
});

export const { setToggleCollapse } = toggleSlice.actions;

export default toggleSlice.reducer;
