import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import CounterChart from "./../components/counter/CounterChart";
import CounterButtons from "../components/counter/CounterButtons";
import DisplayUserDetails from "./../components/user-data/DisplayUserDetails";

const Counter = () => {
  const [count, setCount] = useState(0); // state for manage counter value
  const [background, setBackground] = useSpring(() => ({
    background: `rgba(0,255,0,0)`,
  })); // state to manage the bg color using react-spring
  const [dataPoints, setDataPoints] = useState([0]); // state to manage data points

  // function to update the bg color based on counter value
  const updateBackground = (newCount) => {
    setBackground({
      background: `rgba(0,255,0, ${Math.min(newCount / 10, 1)})`,
    });
  };

  // Handler for increment button
  const handleIncrement = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      updateBackground(newCount);
      return newCount;
    });
    setDataPoints((prev) => [...prev, count + 1]);
  };

  // Handler for decrement button
  const handleDecrement = () => {
    if (count > 0) {
      setCount((prev) => {
        const newCount = prev - 1;
        updateBackground(newCount);
        return newCount;
      });
      setDataPoints((prev) => [...prev, count - 1]);
    }
  };

  // Handler for reset button
  const handleReset = () => {
    setCount(0);
    setBackground({
      background: `rgba(0,255,0,0)`,
    });
    setDataPoints([0]);
  };

  return (
    <animated.div
      style={background}
      className="flex flex-col justify-center items-center h-full w-full"
    >
      <h1 className="text-3xl font-bold my-4  underline">Counter With Chart</h1>
      <h4 className="text-2xl font-bold mb-4">{count}</h4>
      <div className="flex justify-around items-start w-full">
        <div className="w-1/4">
          <DisplayUserDetails />
        </div>
        <div className="w-1/3">
          <CounterButtons
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            onReset={handleReset}
          />
        </div>
      </div>
      <div className="w-4/5 h-1/2 mt-10">
        <CounterChart dataPoints={dataPoints} />
      </div>
    </animated.div>
  );
};

export default Counter;
