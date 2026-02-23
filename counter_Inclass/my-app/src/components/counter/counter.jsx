import { useState } from "react";
import "./counter.css";
import Logs from "../logs/logs";
 
const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [incValue, setIncValue] = useState(0);
    const [decValue, setDecValue] = useState(0);
    const [logs, setLogs] = useState([]);
    const [showLogs, setShowLogs] = useState(false);
 
    const handleOperation = (e) => {
        const value = +e.target.value;
        const inputName = e.target.name;
 
    if (e.target.id === "value_inc") {
        setIncValue(value);
    } else if (e.target.id === "value_dec") {
        setDecValue(value);
    }
};
const deleteLogs = (id) => {
    setLogs(logs.filter((log) => log.id !== id));
};
 
    const handleCounter = (sign) => {
        let oldValue = counter;
        let newValue = null;
 
        if (sign === "+") {
            newValue = counter + incValue;
            setCounter(newValue);
            setIncValue(0);
        } else if (sign === "-") {
            newValue = counter - decValue;
            setCounter(newValue);
            setDecValue(0);
        }
            //Generate a log
            const newLog = {
                id: Math.random(),
                value: `Previous Value = ${oldValue}, Value ${
                    sign === "+" ? "Added" : "Subtracted"
                } = ${sign === "+" ? incValue : decValue}, New Value = ${newValue}`,
            };
            setLogs([...logs, newLog]);
    };
 
  return (
    <div className="main">
        <div>
            <h1>Counter</h1>
        </div>
        <div>
            < h3>Value of Counter: {counter}</h3>
        </div>
        <div className="buttons">
          <div className="action_section">
                <form>
                    <input type="number"
                        value={incValue}
                        placeholder="0"
                        id="value_inc"
                        onChange={(e) => handleOperation(e)}
                    ></input>
                </form>
                <button
                    className="button button_inc"
                    onClick={() => handleCounter("+")}>
                    Increase
                </button>
            </div>
            <div className="action_section">
                <form>
                    <input type="number"
                        value={decValue} 
                        placeholder="0"
                        id="value_dec"
                        onChange={(e) => handleOperation(e)}
                    ></input>
                </form>
                <button
                    className="button button_dec"
                    onClick={() => handleCounter("-")}>
                    Decrease
                </button>
            </div>
        </div>
        {logs.length > 1 && (
                <div className="logs">
                    <button
                        className="button button_info"
                        onClick={() => setShowLogs(!showLogs)}
                        style={{
                            backgroundColor: showLogs?"black": "white",
                            color: showLogs? "white" : "black",
                        }}
                        >
                        {showLogs ? "Hide" : "Show"} Logs
                    </button>
                    {showLogs && (
                        <div className="logs_container">
                            <Logs logsData={logs} deleteLogs={(id)=>deleteLogs(id)} />
                        </div>
                    )}
                </div>
            )}
    </div>
  );
};
 
export default Counter