import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

// Button component to handle increment, decrement, and reset actions
const CounterButtons = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className="flex gap-5">
      <button className="counter-buttons rounded-full" onClick={onIncrement}>
        <FaPlusCircle className="counter-icon text-green-500" />
      </button>
      <button className="counter-buttons" onClick={onReset}>
        <GrPowerReset className="counter-icon" />
      </button>
      <button className="counter-buttons" onClick={onDecrement}>
        <FaMinusCircle className="counter-icon text-red-500" />
      </button>
    </div>
  );
};

export default CounterButtons;
