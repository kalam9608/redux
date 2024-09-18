import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AccountComRedux from "./components/AccountComRedux";
import BonusComRedux from "./components/BonusComRedux";
import Reward from "./components/Reward";
import { getUserAccount } from "./slices/accountSlices";

const AppReduxToolkit = () => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => state.acount.amount);
  const bonus = useSelector((state) => state.bonus.points);
  const loading = useSelector((state) => state.acount);


  return (
    <div style={{ maxWidth: "1000px", margin: "auto", alignItems: "center" }}>
      <h1>redux concept app with toolkit</h1>
      <hr />
      {loading.pending ? (
        <p>loading....</p>
      ) : (
        <h2 style={{ color: "green" }}>CurrentAmount:{amount} </h2>
      )}
      <h2 style={{ color: "green" }}>Bonus:{bonus}</h2>
      <button onClick={() => dispatch(getUserAccount(1))}>get user </button>
      <hr />
      <AccountComRedux />
      <hr />
      <BonusComRedux />
      <hr />
      <Reward />
    </div>
  );
};

export default AppReduxToolkit;
