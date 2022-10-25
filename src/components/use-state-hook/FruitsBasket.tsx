import React from "react";

export const FruitsBasket = () => {
  const [fruits, setFruits] = React.useState<string[]>([]);
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const addFruit = (fruit: string) => {
    setFruits([...fruits, fruit]);
  };

  const removeFruit = (index: number) => {
    setFruits((prevFruits) => {
      const newFruits = prevFruits.filter((fruit, idx) => idx !== index);
      return newFruits;
    });
  };
  const removeAllFruits = () => {
    setFruits([]);
  };
  return (
    <div style={{ marginTop: 40 }}>
      <div>Fruit Basket</div>
      <div>
        <button onClick={() => removeAllFruits()}>remove all fruits</button>
      </div>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          if (inputRef.current?.value.trim() !== "") {
            addFruit(inputRef.current?.value.trim()!);
          }
          inputRef!.current!.value = "";
          inputRef.current?.focus();
        }}
      >
        add
      </button>
      {fruits.map((fruit, index) => (
        <div key={index}>
          {fruit} <button onClick={() => removeFruit(index)}>x</button>
        </div>
      ))}
    </div>
  );
};
