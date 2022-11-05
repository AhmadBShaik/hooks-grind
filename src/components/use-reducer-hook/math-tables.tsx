import React from "react";

type TableState = {
  num: number;
};

type TableActions =
  | { type: "NEXT_TABLE" }
  | { type: "PREVIOUS_TABLE" }
  | { type: "CUSTOM_TABLE"; payload: { num: number } };

const tableReducer = (state: TableState, action: TableActions) => {
  switch (action.type) {
    case "NEXT_TABLE":
      return { num: state.num + 1 };
    case "PREVIOUS_TABLE":
      return { num: state.num - 1 };
    case "CUSTOM_TABLE":
      return { num: action.payload.num };
  }
};

const initialState: TableState = {
  num: 1,
};
export const MathTables: React.FC = () => {
  const [tableState, tableDispatch] = React.useReducer(
    tableReducer,
    initialState
  );

  return (
    <div>
      <div>
        <input
          type="number"
          value={tableState.num}
          onChange={(e) =>
            tableDispatch({
              type: "CUSTOM_TABLE",
              payload: { num: parseInt(e.target.value) },
            })
          }
        />
      </div>
      {!isNaN(tableState.num) && (
        <div>
          <div> current multiplier: {tableState.num}</div>
          <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div>
                {`${tableState.num} x ${num} = ${tableState.num * num}`}
              </div>
            ))}
          </div>
          <div>
            <button onClick={() => tableDispatch({ type: "PREVIOUS_TABLE" })}>
              previous
            </button>
            <button onClick={() => tableDispatch({ type: "NEXT_TABLE" })}>
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
