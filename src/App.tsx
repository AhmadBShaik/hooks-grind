import "./App.css";
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
      <UseStateSample1 />
      <UseStateSample2 />
      <UseStateSample3 />
      <LastCharStatus />
      <FruitsBasket />
    </div>
  );
}

export default App;
