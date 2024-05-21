import React from "react";

// Button component to handle increment, decrement, and reset actions
const CounterButtons = ({ onIncrement, onDecrement, onReset }) => {
  return (
    <div className="flex gap-5">
      <button className="counter-buttons" onClick={onIncrement}>
        increment
      </button>
      <button className="counter-buttons" onClick={onReset}>
        reset
      </button>
      <button className="counter-buttons" onClick={onDecrement}>
        decrement
      </button>
    </div>
  );
};

export default CounterButtons;
