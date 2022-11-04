import React from "react";

export const UseEffectSample3 = () => {
  // hooks
  const [num, setNum] = React.useState(10);

  React.useEffect(() => {
    num > 0 && setTimeout(() => setNum(num - 1), 1000);
  }, [num]);

  return (
    <div>
      <h1>Rocket Launcher</h1>
      <div>{num > 0 ? num : "Launch!"}</div>
    </div>
  );
};
