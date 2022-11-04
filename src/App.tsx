import "./App.css";
import { UseEffectSample1, UseEffectSample2, UseEffectSample3, UseEffectSample4 } from "./components/use-effect-hook";
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
      {/* <UseStateSample1 />
      <UseStateSample2 />
      <UseStateSample3 />
      <LastCharStatus />
      <FruitsBasket /> */}
      {/* <UseEffectSample1 /> */}
      {/* <UseEffectSample2/> */}
      {/* <UseEffectSample3/> */}
      <UseEffectSample4/>
    </div>
  );
}

export default App;
