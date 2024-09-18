import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 2,
};

export const accountSlices = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
        console.log("calling",state)
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount  += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  accountSlices.actions;

export default accountSlices.reducer;
