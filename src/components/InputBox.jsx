import React from "react";
import styled from "styled-components";

function  InputBox({
  label,
  amount,
  onAmountChange,
  onCurrancyChange,
  currancyOption = [],
  selectCurrancyValue= "usd",
  // amountDisable = false,
  // currencyDisable = false,
  // className = "",
}) {
  // console.log("onAmountChange===>",onAmountChange)
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <label htmlFor="">{label}</label>
        <input
          type="text"
          name=""
          id=""
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <p>curency type</p>
        <select
          name=""
          id=""
          style={{ marginBottom: "12px" }}
          value={selectCurrancyValue}
          onChange={(e) => onCurrancyChange(e.target.value)}
        >
          {currancyOption.map((curency) => (
            <option value={curency}>{curency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

const card = styled.div``;
