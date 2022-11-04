import React from "react";

export const UseRefSample2: React.FC = () => {
  const [val, setVal] = React.useState<string>("");
  const inputRef = React.useRef<string>();

  React.useEffect(() => {
    inputRef.current = val || "";
  }, [val]);
  return (
    <div>
      <input type="text" onChange={(e) => setVal(e.target.value)} />
      <div>
        current value: <b>{val}</b>
      </div>
      <div>
        previous value:
        <b>{inputRef.current}</b>
      </div>
    </div>
  );
};
