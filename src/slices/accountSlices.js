import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  amount: 2,
};

export const getUserAccount = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    console.log("userid===>",userId)
    const { data } = await axios.get(`http://localhost:3000/account/${userId}`);
    console.log("data==>",data)
    return data.amount;
  }
);

export const accountSlices = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      console.log("calling", state);
      state.amount += 1;
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
      state.amount += action.payload;
      state.pending = false;
    }).addCase(getUserAccount.pending, (state, action) => {
      state.pending = true;
    }).addCase(getUserAccount.rejected, (state, action) => {
        console.log("stat===>",action,state)
      state.pending = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  accountSlices.actions;

export default accountSlices.reducer;
