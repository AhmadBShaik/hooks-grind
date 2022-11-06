import React from "react";

export const WithoutUseMemoSample2: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(1);

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  React.useEffect(() => {
    console.log("theme changed");
  }, [theme]); // useEffect executes in every state change, because theme variable is created in every rerender(It will be new value every time) 

  return (
    <div>
      <div style={theme}>
        <div>{count}</div>
      </div>
      <div>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
      </div>
      <button onClick={() => setDark((dark) => !dark)}>change theme</button>
    </div>
  );
};
