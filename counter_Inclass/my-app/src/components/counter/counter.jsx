import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [incValue, setIncValue] = useState(0);
  const [decValue, setDecValue] = useState(0);
  const[logs, setLogs] = useState({});

  // Handle increment input change
  const handleIncChange = (e) => {
    setIncValue(Number(e.target.value));
  };

  // Handle decrement input change
  const handleDecChange = (e) => {
    setDecValue(Number(e.target.value));
  };

  // Handle counter operations with logging
  const handleCounter = (sign) => {
    const oldValue = counter;
    let newValue = counter;

    if (sign === "+") {
      newValue = counter + incValue;
    } else if (sign === "-") {
      newValue = counter - decValue;
    }

    // Log Operation
    console.log(
      `Previous Value = ${oldValue}, Value ${
        sign === "+" ? "Added" : "Subtracted"
      } = ${sign === "+" ? incValue : decValue}, New Value = ${newValue}`
    );
    setLogs([...logs,newLogs]);

    setCounter(newValue);
  };

  return (
    <div className="main">
      <h1>Counter</h1>

      <h3>Value of Counter: {counter}</h3>

      <div className="buttons">
        {/* Increment Section */}
        <div className="action_section">
          <input
            type="number"
            value={incValue}
            placeholder="Enter increment value"
            onChange={handleIncChange}
          />

          <button
            type="button"
            className="button button_inc"
            onClick={() => handleCounter("+")}
          >
            Increase
          </button>
        </div>

        {/* Decrement Section */}
        <div className="action_section">
          <input
            type="number"
            value={decValue}
            placeholder="Enter decrement value"
            onChange={handleDecChange}
          />

          <button
            type="button"
            className="button button_dec"
            onClick={() => handleCounter("-")}
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
