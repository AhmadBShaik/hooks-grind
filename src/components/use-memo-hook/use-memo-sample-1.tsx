import React from "react";

const timeTakingFunc = (n: number) => {
  console.log("function created");
  let result = 1;
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
  return result * n;
};

export const UseMemoSample1: React.FC = () => {
  const [num1, setNum1] = React.useState<number>(1);
  const [num2, setNum2] = React.useState<number>(1);

  const computedValue = React.useMemo(() => timeTakingFunc(num1), [num1]);
  return (
    <div>
      <h1>computation with useMemo hook</h1>
      <div>result:{computedValue}</div>
      <div>{num1} (takes some time to update)</div>
      <div>{num2} (change is instantaneous)</div>
      <div>
        <button
          style={{ margin: 5 }}
          onClick={() => setNum1((prevNum) => prevNum - 1)}
        >
          decrement num1
        </button>
        <button
          style={{ margin: 5 }}
          onClick={() => setNum1((prevNum) => prevNum + 1)}
        >
          increment num1
        </button>
      </div>
      <div>
        <button
          style={{ margin: 5 }}
          onClick={() => setNum2((prevNum) => prevNum - 1)}
        >
          decrement num2
        </button>
        <button
          style={{ margin: 5 }}
          onClick={() => setNum2((prevNum) => prevNum + 1)}
        >
          increment num2
        </button>
      </div>
    </div>
  );
};
