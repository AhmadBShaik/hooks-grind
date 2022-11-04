import React from "react";

export const UseStateSample3 = () => {
  // =====================================================
  const [num, setNum] = React.useState(() => {
    console.log("num");
    return 1;
  }); // runs only in first render because it do not have a function call

  const increment = () => {
    setNum((prev) => prev + 1);
  };

  const decrement = () => {
    setNum((prev) => prev - 1);
  };

  // =====================================================
  const [num1, setNum1] = React.useState(
    (() => {
      console.log("num 1");
      return 1;
    })()
  ); // runs in every render because it have a function call

  const increment1 = () => {
    setNum1((prev) => prev + 1);
  };

  const decrement1 = () => {
    setNum1((prev) => prev - 1);
  };
  
  return (
    <div>
      <div>{num}</div>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <div>{num1}</div>
      <button onClick={decrement1}>Decrement</button>
      <button onClick={increment1}>Increment</button>
    </div>
  );
};
