import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount,setAmount]=useState(10);
  const [from,setFrom]=useState("usd");
  // console.log("fro===>",from,amount)
  const [convertedAmount,SetConvertedAmaunt]=useState(0)

  const curranyInfo=useCurrencyInfo(from)
  // console.log("option==>",curranyInfo)

  // get the keys in an array from objects
  const options=Object.keys(curranyInfo)
  
  console.log("option==>",options)

  const hanCurancyChange=(v )=>{
    setFrom(v)
  }
  return (
    <>
      <h1>useCutomhooks</h1>
      <InputBox
          label="from"
          amount={amount}
          // setAmount={setAmount}    
          
          onAmountChange={(v)=>setAmount(v)}
          // onCurrancyChange={(v)=>setFrom(v)}
          onCurrancyChange={hanCurancyChange}

          currancyOption={options}
          selectCurrancyValue= {from}
      />
      
    </>
  );
}

export default App;
