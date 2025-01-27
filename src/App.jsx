import ObjectNamesUpdater from "./components/ObjectNamesUpdater";
import ObjectUpdater from "./components/ObjectUpdater";
import ObjectInfo from "./components/ObjectInfo";
import FoodArray from "./components/FoodArray";
import CarsArray from "./components/CarsArray";
import CarsObject from "./components/CarsObject";
import ArrayOfObjects from "./components/ArrayOfObjects";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <>
<ToDoList/>

    <br /><br /><hr /><hr />
<ArrayOfObjects/>
<br /><br /><br />

<CarsObject/>

<br />

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
