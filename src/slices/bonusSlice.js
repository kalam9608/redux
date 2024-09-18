import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 0,
};
const incrementPointsByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementPointsByAmount, (state, action) => {
      if (action.payload >= 100) state.points += 1;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
