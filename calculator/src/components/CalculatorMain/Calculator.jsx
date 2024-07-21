import React, { useState } from "react";
import "./Calculator.css";
import History from "../History/History";
import KeyBoard from "../KeyBoard/KeyBoard";

function Calculator() {
  const [history, setHistory] = useState([]);

  return (
    <div className="calculator d-flex flex-column w-100" style={{ height: "100vh" }}>
      <div className="flex-fill history">
        <History history={history} />
      </div>
      <div className="flex-fill keyboard">
        <KeyBoard history={history} setHistory={setHistory} />
      </div>
    </div>
  );
}

export default Calculator;
