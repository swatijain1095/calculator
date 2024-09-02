import React from "react";
import Buttons from "../Buttons/Buttons";
import "./style.scss";

const Calculator = () => {
  return (
    <div className="calculator">
      <header className="calculator__header">Calculator</header>
      <input type="text" className="calculator__input" />
      <Buttons />
    </div>
  );
};

export default Calculator;
