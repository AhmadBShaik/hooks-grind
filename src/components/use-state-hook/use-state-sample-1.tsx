import React from "react";

export const UseStateSample1 = () => {
  const [num, setNum] = React.useState(1);

  const increment = () => {
    setNum(num + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };
  return (
    <div>
      <div>{num}</div>
      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
