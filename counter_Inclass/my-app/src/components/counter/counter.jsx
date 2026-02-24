// import { useState, useRef } from "react";
// import "./counter.css";
// import Logs from "../logs/logs";

// const Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [incValue, setIncValue] = useState(0);
//   const [decValue, setDecValue] = useState(0);
//   const [logs, setLogs] = useState([]);
//   const [showLogs, setShowLogs] = useState(false);
//   const logIdRef = useRef(0);

//   const handleOperation = (e) => {
//     const value = +e.target.value;

//     if (e.target.id === "value_inc") {
//       setIncValue(value);
//     } else if (e.target.id === "value_dec") {
//       setDecValue(value);
//     }
//   };

//   const deleteLogs = (id) => {
//     setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
//   };

//   const handleCounter = (sign) => {
//     const oldValue = counter;
//     let newValue = counter;

//     if (sign === "+") {
//       newValue = counter + incValue;
//       setCounter(newValue);
//       setIncValue(0);
//     } else if (sign === "-") {
//       newValue = counter - decValue;
//       setCounter(newValue);
//       setDecValue(0);
//     }

//     const newLog = {
//       id: logIdRef.current++,
//       value: `Previous Value = ${oldValue}, Value ${
//         sign === "+" ? "Added" : "Subtracted"
//       } = ${sign === "+" ? incValue : decValue}, New Value = ${newValue}`,
//     };

//     setLogs((prev) => [...prev, newLog]);
//   };

//   return (
//     <div className="main" data-testid="counter-component">
//       <div>
//         <h1>Counter</h1>
//       </div>

//       <div>
//         <h3 data-testid="counter-value">Value of Counter: {counter}</h3>
//       </div>

//       <div className="buttons">
//         <div className="action_section">
//           <form>
//             <input
//               type="number"
//               value={incValue}
//               placeholder="0"
//               id="value_inc"
//               data-testid="value_inc"
//               onChange={handleOperation}
//             />
//           </form>

//           <button
//             type="button"
//             className="button button_inc"
//             onClick={() => handleCounter("+")}
//           >
//             Increase
//           </button>
//         </div>

//         <div className="action_section">
//           <form>
//             <input
//               type="number"
//               value={decValue}
//               placeholder="0"
//               id="value_dec"
//               data-testid="value_dec"
//               onChange={handleOperation}
//             />
//           </form>

//           <button
//             type="button"
//             className="button button_dec"
//             onClick={() => handleCounter("-")}
//           >
//             Decrease
//           </button>
//         </div>
//       </div>

//       {logs.length >= 1 && (
//         <div className="logs" data-testid="logs-section">
//           <button
//             type="button"
//             className="button button_info"
//             onClick={() => setShowLogs((s) => !s)}
//             style={{
//               backgroundColor: showLogs ? "black" : "white",
//               color: showLogs ? "white" : "black",
//             }}
//           >
//             {showLogs ? "Hide" : "Show"} Logs
//           </button>

//           {showLogs && (
//             <div className="logs_container">
//               <Logs logsData={logs} deleteLogs={deleteLogs} />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Counter;


import { useState, useRef } from "react";
import "./counter.css";
import Logs from "../logs/logs";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [incValue, setIncValue] = useState("0");
  const [decValue, setDecValue] = useState("0");
  const [logs, setLogs] = useState([]);
  const [showLogs, setShowLogs] = useState(false);
  const logIdRef = useRef(0);

  const handleOperation = (e) => {
    if (e.target.id === "value_inc") {
      setIncValue(e.target.value);
    } else if (e.target.id === "value_dec") {
      setDecValue(e.target.value);
    }
  };

  const deleteLogs = (id) => {
    setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
  };

  const handleCounter = (sign) => {
    const oldValue = counter;
    let amount = 0;

    if (sign === "+") {
      amount = Number(incValue) || 0;
      setCounter((prev) => prev + amount);
      setIncValue("0");
    } else if (sign === "-") {
      amount = Number(decValue) || 0;
      setCounter((prev) => prev - amount);
      setDecValue("0");
    }

    // Only log if the operation actually changes the counter
    if (amount !== 0) {
      const newValue = counter + (sign === "+" ? amount : -amount);

      const newLog = {
        id: logIdRef.current++,
        value: `Previous Value = ${oldValue}, Value ${
          sign === "+" ? "Added" : "Subtracted"
        } = ${amount}, New Value = ${newValue}`,
      };

      setLogs((prev) => [...prev, newLog]);
    }
  };

  return (
    <div className="main" data-testid="counter-component">
      <div>
        <h1>Counter</h1>
      </div>

      <div>
        <h3 data-testid="counter-value">Value of Counter: {counter}</h3>
      </div>

      <div className="buttons">
        <div className="action_section">
          <form>
            <input
              type="number"
              value={incValue}
              placeholder="0"
              id="value_inc"
              data-testid="value_inc"
              onChange={handleOperation}
            />
          </form>

          <button
            type="button"
            className="button button_inc"
            onClick={() => handleCounter("+")}
          >
            Increase
          </button>
        </div>

        <div className="action_section">
          <form>
            <input
              type="number"
              value={decValue}
              placeholder="0"
              id="value_dec"
              data-testid="value_dec"
              onChange={handleOperation}
            />
          </form>

          <button
            type="button"
            className="button button_dec"
            onClick={() => handleCounter("-")}
          >
            Decrease
          </button>
        </div>
      </div>

      {logs.length >= 1 && (
        <div className="logs" data-testid="logs-section">
          <button
            type="button"
            className="button button_info"
            onClick={() => setShowLogs((s) => !s)}
            style={{
              backgroundColor: showLogs ? "black" : "white",
              color: showLogs ? "white" : "black",
            }}
          >
            {showLogs ? "Hide" : "Show"} Logs
          </button>

          {showLogs && (
            <div className="logs_container">
              <Logs logsData={logs} deleteLogs={deleteLogs} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Counter;