import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../slices/bonusSlice";

const BonusComRedux = () => {
  const bonus = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: "red" }}>bonus:{bonus}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
};


export default BonusComRedux
