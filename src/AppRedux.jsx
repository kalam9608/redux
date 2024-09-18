import React from "react";
import AcountComponent from "./components/AcountComponent";
import BonusComponent from "./components/BonusComponent";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./actions";

const AppRedux = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.acount.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const loading = useSelector((state) => state.acount.pending);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", alignItems: "center" }}>
      <h1>redux concept app</h1>
      <hr />
      <h2>CurrentAmount:{loading ? "loading....." : amount} </h2>
      <h2>Bonus:{bonus}</h2>
      <hr />

      <button onClick={() => dispatch(getUser(1))}>init amount</button>

      <AcountComponent />
      <hr />
      <BonusComponent />
    </div>
  );
};

export default AppRedux;
