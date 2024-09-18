import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/incrementReward");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = { reward: 0 };

const reawardReducers = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.reward++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.reward += action.payload;
    });
});

export default reawardReducers