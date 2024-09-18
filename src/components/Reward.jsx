import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByAmount } from "../reducers/rewardReducers";

const Reward = () => {
  const reward = useSelector((state) => state.reward.reward);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: "red" }}>Reward:{reward}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementByAmount(9))}>incremnt by amount{9}</button>
    </div>
  );
};


export default Reward
