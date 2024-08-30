import React, { useState } from "react";
import "./App.css";

function App() {
  // State to track whether the bulb is on or off
  const [isOn, setIsOn] = useState(false);

  // Function to toggle the bulb on and off
  const toggleBulb = () => {
    setIsOn(!isOn);
  };

    let [num, setNum] = useState(0);

    let incFun = () => {
      setNum(num + 1);
    };

    let decFun = () => {
      setNum(num - 1);
    };

  return (
    <div className="App">
      <header className="App-header">
          <h1>{num}</h1>

         <button onClick={incFun}>Increment</button>
         <br />
         {/* Disable the Decrement button if num is 0 */}
         <button onClick={decFun} disabled={num === 0}>
           Decrement
         </button>


        {/* Display the bulb image based on the state */}
        <img
          src={isOn ? "https://www.freeiconspng.com/thumbs/lightbulb-png/light-bulb-png-bulb-png1247-12.png" : 
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSnVprXHK5QN9VtOLfHQY_AxwAiNf9B_nOA&s"} // Use appropriate image paths
          alt="Bulb"
          style={{ width: "200px", height: "auto" }}
        />
        <br />
        {/* Button to toggle the bulb */}
        <button onClick={toggleBulb}>
          {isOn ? "Turn Off" : "Turn On"}
        </button>
      </header>
    </div>
  );
}

export default App;
