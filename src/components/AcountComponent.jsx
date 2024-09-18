import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increamentByAmount, increment } from "../actions";

const AcountComponent = () => {
  const [value, setValue] = useState(0);

  const amount = useSelector((state) => state.acount.amount);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{ color: "red" }}>Amount:{amount}</h1>

      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <input type="text" onChange={(e) => setValue(+e.target.value)} />
      <button onClick={() => dispatch(increamentByAmount(value))}>incremnt by amount{value}</button>
    </div>
  );
};

export default AcountComponent;
