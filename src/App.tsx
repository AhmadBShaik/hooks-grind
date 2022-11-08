import "./App.css";
import UseCallbackSample1 from "./components/use-callback-hook/use-callback-sample-1";
import {
  UseEffectSample1,
  UseEffectSample2,
  UseEffectSample3,
  UseEffectSample4,
} from "./components/use-effect-hook";
import {
  UseMemoSample1,
  UseMemoSample2,
  WithoutUseMemoSample1,
  WithoutUseMemoSample2,
} from "./components/use-memo-hook";

import { MathTables, UseReducerSample1 } from "./components/use-reducer-hook";
import { UseRefSample1, UseRefSample2 } from "./components/use-ref-hook";
import {
  UseStateSample1,
  UseStateSample2,
  UseStateSample3,
  LastCharStatus,
  FruitsBasket,
} from "./components/use-state-hook";

function App() {
  return (
    <div className="App">
      {/* <UseStateSample1 /> */}
      {/* <UseStateSample2 /> */}
      {/* <UseStateSample3 /> */}
      {/* <LastCharStatus /> */}
      {/* <FruitsBasket /> */}
      {/* <UseEffectSample1 /> */}
      {/* <UseEffectSample2/> */}
      {/* <UseEffectSample3/> */}
      {/* <UseEffectSample4/> */}
      {/* <UseRefSample1 /> */}
      {/* <UseRefSample2 /> */}
      {/* <UseReducerSample1/> */}
      {/* <MathTables /> */}
      {/* <WithoutUseMemoSample1/> */}
      {/* <UseMemoSample1 /> */}
      {/* <hr /> */}
      {/* <WithoutUseMemoSample1/> */}
      {/* <UseMemoSample1 /> */}
      {/* <hr /> */}
      {/* <WithoutUseMemoSample2 /> */}
      {/* <UseMemoSample2 /> */}
      <hr />
      <UseCallbackSample1 />
    </div>
  );
}

export default App;
