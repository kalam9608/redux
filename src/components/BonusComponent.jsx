import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, incrementBonus, incrementBonusAmount } from "../actions";

const BonusComponent = () => {
  const dispatch = useDispatch();
  const bonus = useSelector((state) => state.bonus.points);
  return (
    <div>
      <h1 style={{ color: "blue" }}>Bonus:{bonus}</h1>

      <button onClick={() => dispatch(incrementBonusAmount())}>
        Add Bonus
      </button>
    </div>
  );
};

export default BonusComponent;
