import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountComRedux from "./components/AccountComRedux";
import BonusComRedux from "./components/BonusComRedux";
import Reward from "./components/Reward";

const AppReduxToolkit = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.acount.amount);
  const bonus = useSelector((state) => state.bonus.points);

  console.log("am====>", amount);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", alignItems: "center" }}>
      <h1>redux concept app with toolkit</h1>
      <hr />
      <h2 style={{ color: "green" }}>CurrentAmount:{amount} </h2>
      <h2 style={{ color: "green" }}>Bonus:{bonus}</h2>
      <hr />
      <AccountComRedux/>
      <hr />
      <BonusComRedux/>
      <hr />
<Reward/>
    </div>
  );
};

export default AppReduxToolkit;
