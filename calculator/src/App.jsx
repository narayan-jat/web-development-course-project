import Screen from "./components/Screen.jsx";
import Buttons from "./components/Buttons.jsx";
import "./App.css";
import { useState } from "react";


function App() {
  const [screenValue, setScreenValue] = useState("");
  const [lastPressedButton, setLastPressedButton] = useState("AC");

  const handleInput = (event) => {
    if (lastPressedButton === "=" & !["+", "-", "/", "*"].includes(event.target.innerText)){
      setScreenValue(event.target.innerText);
    }
    else{
      setScreenValue(screenValue + event.target.innerText);
    }
    setLastPressedButton("AC")
  };

  const handleEquals = () => {
    setLastPressedButton("=");
    const evaluatedExprssion = eval(screenValue);
    setScreenValue(evaluatedExprssion);
  };

  const handleClear = () => {
    setScreenValue("");
  };
  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="screen"><Screen screenValue={screenValue}/></div>
      <div className="buttons">
        <div className="group-buttons">
          <Buttons className="button" buttonText={"7"} onClick={handleInput}>
            7
          </Buttons>
          <Buttons className="button" buttonText={"8"} onClick={handleInput}>
            8
          </Buttons>
          <Buttons className="button" buttonText={"9"} onClick={handleInput}>
            9
          </Buttons>
          <Buttons className="button" buttonText={"/"} onClick={handleInput}>
            /
          </Buttons>
        </div>
        <div className="group-buttons">
          <Buttons className="button" buttonText={"6"} onClick={handleInput}>
            6
          </Buttons>
          <Buttons className="button" buttonText={"5"} onClick={handleInput}>
            5
          </Buttons>
          <Buttons className="button" buttonText={"4"} onClick={handleInput}>
            4
          </Buttons>
          <Buttons className="button" buttonText={"*"} onClick={handleInput}>
            *
          </Buttons>
        </div>
        <div className="group-buttons">
          <Buttons className="button" buttonText={"3"} onClick={handleInput}>
            3
          </Buttons>
          <Buttons className="button" buttonText={"2"} onClick={handleInput}>
            2
          </Buttons>
          <Buttons className="button" buttonText={"1"} onClick={handleInput}>
            1
          </Buttons>
          <Buttons className="button" buttonText={"-"} onClick={handleInput}>
            -
          </Buttons>
        </div>
        <div className="group-buttons">
          <Buttons className="button" buttonText={"0"} onClick={handleInput}>
            0
          </Buttons>
          <Buttons className="button" buttonText={"AC"} onClick={handleClear}>
            AC
          </Buttons>
          <Buttons className="button" buttonText={"="} onClick={handleEquals}>
            =
          </Buttons>
          <Buttons className="button" buttonText={"+"} onClick={handleInput}>
            +
          </Buttons>
        </div>
      </div>
    </div>
  );
}

export default App;
