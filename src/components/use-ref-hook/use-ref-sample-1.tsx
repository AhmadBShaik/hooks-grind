import React from "react";

export const UseRefSample1: React.FC = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef!.current!.value = "";
          inputRef.current?.focus();
        }}
      >
        Add
      </button>
    </div>
  );
};
