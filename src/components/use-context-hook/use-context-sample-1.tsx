import React from "react";

type CounterState = { count: number };
type CounterContextType = {
  counterState: CounterState;
  setCounterState: React.Dispatch<React.SetStateAction<CounterState>>;
};

const CounterContext = React.createContext<CounterContextType | null>(null);

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [counterState, setCounterState] = React.useState<CounterState>({
    count: 0,
  });
  return (
    <CounterContext.Provider value={{ counterState, setCounterState }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = React.useContext(CounterContext);
  if (!context)
    throw new Error("useCounter must be used inside CounterProvider");
  return context;
};

const CounterApp = () => {
  const { counterState, setCounterState } = useCounter();
  return (
    <div>
      <div>Context + useState</div>
      <div>{counterState.count}</div>
      <div>
        <button
          onClick={() => setCounterState({ count: counterState.count! - 1 })}
        >
          Decrement
        </button>
        <button
          onClick={() => setCounterState({ count: counterState.count! + 1 })}
        >
          Increment
        </button>
      </div>
      <div>
        <button onClick={() => setCounterState({ count: 0 })}>Reset</button>
      </div>
    </div>
  );
};

export const UseContextSample1 = () => {
  return (
    <CounterProvider>
      <CounterApp />
    </CounterProvider>
  );
};
