import React from "react";
import "./Operators.css";

function Operators({ onButtonClick, onReset, onCalculate }) {
  return (
    <div className="operators">
      <div className="rows">
        <button onClick={() => onButtonClick('+')}>+</button>
        <button onClick={() => onButtonClick('-')}>-</button>
        <button onClick={onReset}>AC</button>
      </div>
      <div className="rows">
        <button onClick={() => onButtonClick('/')}>/</button>
        <button onClick={() => onButtonClick('*')}>*</button>
        <button onClick={() => onButtonClick('%')}>%</button>
      </div>
      <div className="rows">
        <button onClick={() => onButtonClick('(')}>(</button>
        <button onClick={() => onButtonClick(')')}>)</button>
        <button onClick={onCalculate}>=</button>
      </div>
    </div>
  );
}

export default Operators;
