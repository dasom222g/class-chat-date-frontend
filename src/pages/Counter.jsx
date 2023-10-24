import React, { useState } from "react";

const Counter = ({ interval, changeNumber }) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + interval);
    changeNumber(count + interval);
  };

  const decrease = () => {
    setCount(count - interval);
    changeNumber(count - interval);
  };

  return (
    <div className="text-center">
      <h3 className="text-2xl">counter</h3>
      <div className="text-xl py-2">{count}</div>
      <button
        type="button"
        className="bg-gray-300 border m-1 p-2"
        onClick={increase}
      >
        +{interval}
      </button>
      <button
        type="button"
        className="bg-gray-300 border m-1 p-2"
        onClick={decrease}
      >
        -{interval}
      </button>
    </div>
  );
};

export default Counter;
