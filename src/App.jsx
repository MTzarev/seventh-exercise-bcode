import ObjectNamesUpdater from "./components/ObjectNamesUpdater";
import ObjectUpdater from "./components/ObjectUpdater";
import ObjectInfo from "./components/ObjectInfo";
import FoodArray from "./components/FoodArray";
function App() {
  return (
    <>
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
