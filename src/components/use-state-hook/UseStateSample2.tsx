import React from "react";

export const UseStateSample2 = () => {
  const [num, setNum] = React.useState(1);

  const increment = () => {
    setNum((prev) => prev + 1);
  };

  const decrement = () => {
    setNum((prev) => prev - 1);
  };
  return (
    <div>
      <div>{num}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
