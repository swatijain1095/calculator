import React from "react";
import "./style.scss";

const Buttons = () => {
  return (
    <div className="button-container">
      <div className="button-container__row">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="del-btn">DEL</button>
      </div>
      <div className="button-container__row">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
      </div>
      <div className="button-container__row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
      </div>
      <div className="button-container__row">
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>*</button>
      </div>
      <div className="button-container__row">
        <button className="reset-btn">RESET</button>
        <button className="equals-btn">=</button>
      </div>
    </div>
  );
};

export default Buttons;
