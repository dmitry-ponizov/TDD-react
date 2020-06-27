import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div data-test="component-counter">
      <h1 data-test="counter-display">The counter is currently {counter}</h1>
      <button
        data-test="increment-button"
        onClick={() => setCounter(counter + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
