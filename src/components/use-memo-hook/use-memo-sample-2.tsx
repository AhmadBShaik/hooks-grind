import React from "react";

export const UseMemoSample2: React.FC = () => {
  const [dark, setDark] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(1);

  const theme = React.useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  React.useEffect(() => {
    console.log("theme changed");
  }, [theme]); // theme variable is memoized, useEffect will execute only if the dependencies list of useMemo changes i.e. "dark" in this case

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
