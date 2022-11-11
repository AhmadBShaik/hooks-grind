import React from "react";

// type CounterDispatch =

type CounterAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "RESET"; payload: { num: number } };

const counterReducer = (
  counterState: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "DECREMENT":
      return { count: counterState.count - 1 };
    case "INCREMENT":
      return { count: counterState.count + 1 };
    case "RESET":
      return { count: action.payload.num };
  }
};

const initialCounterState: CounterState = { count: 0 };

type CounterState = { count: number };
type CounterDispatch = React.Dispatch<CounterAction>;

type CounterContextType = {
  counterState: CounterState;
  counterDispatch: CounterDispatch;
};

const CounterContext = React.createContext<CounterContextType | null>(null);
const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counterState, counterDispatch] = React.useReducer(
    counterReducer,
    initialCounterState
  );
  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context) throw new Error("useCounter must be used in CounterProvider");
  return context;
};

const CounterApp: React.FC = () => {
  const { counterState, counterDispatch } = useCounter();
  return (
    <div>
      <div>Context + useReducer</div>
      <div>{counterState.count}</div>
      <div>
        <button onClick={() => counterDispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => counterDispatch({ type: "INCREMENT" })}>
          Increment
        </button>
      </div>
      <div>
        <button
          onClick={() =>
            counterDispatch({ type: "RESET", payload: { num: 0 } }) // custom reset
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export const UseContextSample2 = () => {
  return (
    <CounterProvider>
      <CounterApp />
    </CounterProvider>
  );
};
