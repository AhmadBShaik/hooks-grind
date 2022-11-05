import React from "react";

type CounterState = {
  value: number;
  varying_number: number;
};

type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET" }
  | { type: "RESET_VARYING_NUMBER" }
  | { type: "RESET_TO_DEFAULTS" }
  | { type: "SET_VARYING_NUMBER"; payload: { varying_number: number } };

const CounterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, value: state.value + state.varying_number };
    case "DECREMENT":
      return { ...state, value: state.value - state.varying_number };
    case "RESET":
      return { ...state, value: 0 };
    case "SET_VARYING_NUMBER":
      return { ...state, varying_number: action.payload.varying_number };
    case "RESET_VARYING_NUMBER":
      return { ...state, varying_number: 1 };
    case "RESET_TO_DEFAULTS":
      return initialCounterState;
  }
};

const initialCounterState: CounterState = {
  value: 0,
  varying_number: 1,
};

export const UseReducerSample1: React.FC = () => {
  const [counterState, counterDispatch] = React.useReducer(
    CounterReducer,
    initialCounterState
  );

  return (
    <div>
      <div style={{ marginTop: 6 }}>
        <button onClick={() => counterDispatch({ type: "RESET_TO_DEFAULTS" })}>
          reset to defaults
        </button>
        {/* <button>set custom varying number</button> */}
      </div>
      <div style={{ margin: 6 }}>
        <input
          value={counterState.varying_number}
          type="number"
          onChange={(e) =>
            counterDispatch({
              type: "SET_VARYING_NUMBER",
              payload: { varying_number: parseInt(e.target.value) },
            })
          }
        />
        <button
          onClick={() => counterDispatch({ type: "RESET_VARYING_NUMBER" })}
        >
          reset varying number
        </button>
      </div>
      <div style={{ marginTop: 6 }}>{counterState.value}</div>
      <div style={{ marginTop: 6 }}>
        <button
          style={{ margin: 6 }}
          onClick={() => counterDispatch({ type: "DECREMENT" })}
        >
          Decrement
        </button>
        <button
          style={{ margin: 6 }}
          onClick={() => counterDispatch({ type: "INCREMENT" })}
        >
          Increment
        </button>
      </div>
      <div style={{ marginTop: 6 }}>
        <button onClick={() => counterDispatch({ type: "RESET" })}>
          Reset
        </button>
      </div>
    </div>
  );
};
