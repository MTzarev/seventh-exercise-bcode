import ObjectNamesUpdater from "./components/ObjectNamesUpdater";
import ObjectUpdater from "./components/ObjectUpdater";
import ObjectInfo from "./components/ObjectInfo";
import FoodArray from "./components/FoodArray";
import CarsArray from "./components/CarsArray";
function App() {
  return (
    <>
    <CarsArray/>
    <br />

      <FoodArray/>
<br />
<hr />
      <ObjectInfo />

      <ObjectNamesUpdater />

      <ObjectUpdater />
    </>
  );
}

export default App;
