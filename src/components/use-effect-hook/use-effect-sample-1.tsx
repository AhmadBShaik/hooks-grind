import React from "react";

export const UseEffectSample1 = () => {
  // hooks
  const [num, setNum] = React.useState(1);

  React.useEffect(() => {
    console.log("useEffect 1");
  }, []); // Runs only one time on page load

  React.useEffect(() => {
    console.log("useEffect 2");
  }, [num]); // Runs on page load as well as on state change of num

  // handlers
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
