import React, { useState } from "react";

//types
type CounterProps = {
  initialValue?: number;
  stepSize?: number;
};

const Counter = () => {
  // State to hold the count value
  const [count, setCount] = useState(0);
  // Function to increment the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  // Function to decrement the count
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  // Function to reset the count
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container ">
      <h1 className="text-2xl text-amber-300">Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
