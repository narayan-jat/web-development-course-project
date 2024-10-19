import { useState } from "react";
import TemperatureConverter from "./TemperatureConverter";
import DisplayComponent from "./components/Display";

import "./App.css";
import BackgroundChanger from "./components/BackgroundChanger";
function App() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div style={{width: "100%", margin: "0 auto"}}>
        <button onClick={Increment}>Increase</button>
        <DisplayComponent count={count}/>
        {count > 5 ? <button onClick={Decrement}>Decrease</button> : <h1>!! NAHI BTAUNGA SIR NE MANA KIYA HAI !!</h1>}
      </div>
      <TemperatureConverter/>
      <BackgroundChanger/>
    </>
  );
}

export default App;
