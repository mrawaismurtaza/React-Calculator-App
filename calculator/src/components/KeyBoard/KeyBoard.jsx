import React, { useState } from "react";
import "./KeyBoard.css";
import Sign from "../Signs/Sign";
import Digits from "../Digits/Digits";
import Operators from "../Operators/Operators";

function KeyBoard({ history, setHistory }) {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleReset = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = evaluateExpression(input);
      setInput(result.toString());

      // Update history
      setHistory((prevHistory) => [
        ...prevHistory,
        { equation: input, result: result.toString() },
      ]);
    } catch (error) {
      setInput("Error");
    }
  };

  const evaluateExpression = (expression) => {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a / b,
      "^": (a, b) => Math.pow(a, b),
      "%": (a, b) => a % b,
    };

    const functions = {
      "sin": Math.sin,
      "cos": Math.cos,
      "tan": Math.tan,
      "asin": Math.asin,
      "acos": Math.acos,
      "atan": Math.atan,
    };

    const parse = (expr) => {
      const stack = [];
      let num = "";
      
      for (let i = 0; i < expr.length; i++) {
        const char = expr[i];

        if (char >= "0" && char <= "9" || char === ".") {
          num += char;
        } else if (char in operators) {
          if (num) {
            stack.push(parseFloat(num));
            num = "";
          }
          while (stack.length >= 2 && operators[stack[stack.length - 2]]) {
            const b = stack.pop();
            const operator = stack.pop();
            const a = stack.pop();
            stack.push(operators[operator](a, b));
          }
          stack.push(char);
        } else if (char === "(") {
          let j = i + 1;
          let brackets = 1;
          while (j < expr.length) {
            if (expr[j] === "(") brackets++;
            if (expr[j] === ")") brackets--;
            if (brackets === 0) break;
            j++;
          }
          stack.push(parse(expr.slice(i + 1, j)));
          i = j;
        } else {
          let func = "";
          while (i < expr.length && /^[a-z]/.test(expr[i])) {
            func += expr[i];
            i++;
          }
          i--; // Adjust index after loop
          if (func in functions) {
            stack.push(functions[func](parse(expr.slice(i + 1))));
            while (i < expr.length && expr[i] !== ")") i++;
          } else {
            throw new Error("Unknown function");
          }
        }
      }
      if (num) stack.push(parseFloat(num));

      while (stack.length >= 2) {
        const b = stack.pop();
        const operator = stack.pop();
        const a = stack.pop();
        stack.push(operators[operator](a, b));
      }

      return stack[0];
    };

    return parse(expression);
  };

  return (
    <div className="KeyBoard fs-2">
      <div className="inp">
        <input type="text" className="w-100" value={input} onChange={handleInputChange} />
      </div>
      <div className="keys">
        <Sign onButtonClick={handleButtonClick} />
        <Digits onButtonClick={handleButtonClick} />
        <Operators onButtonClick={handleButtonClick} onReset={handleReset} onCalculate={handleCalculate} />
      </div>
    </div>
  );
}

export default KeyBoard;
