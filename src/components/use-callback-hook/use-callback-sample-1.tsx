import React from "react";

const List = ({
  getItems,
}: {
  getItems: (incrementer?: number) => number[];
}) => {
  const [items, setItems] = React.useState<number[]>([]);
  React.useEffect(() => {
    setItems(getItems(5)); // number can be passed as argument
    console.log("Updating items");
  }, [getItems]);

  return (
    <div>
      {items.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default function UseCallbackSample1() {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const [num, setNum] = React.useState<number>(1);
  // const getItems = () => [num, num + 1, num + 2]; // getItems is created in every rerender
  // const getItems = React.useCallback(() => [num, num + 1, num + 2], [num]); // getItems will not be created
  const getItems = React.useCallback(
    (incrementor: number = 1) => [
      num + incrementor,
      num + incrementor + 1,
      num + incrementor + 2,
    ],
    [num]
  ); // getItems will not be created
  return (
    <div>
      <input
        type={"number"}
        onChange={(e) => setNum(parseInt(e.target.value))}
      />
      {!isNaN(num) && <List getItems={getItems} />}
      <div>
        <button onClick={() => setToggle((toggle) => !toggle)}>toggle</button>
        {toggle && <div>toggle</div>}
      </div>
    </div>
  );
}
