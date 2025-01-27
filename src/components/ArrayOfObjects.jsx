import { useState } from "react";
function ArrayOfObjects() {

    const[cars, setCars] = useState([])
    const [carYear, setCarYear]= useState(new Date().getFullYear())
    const[carMake, setCarMake]= useState("");
    const[carModel, setCarModel] = useState("");

   function handleAddCar(){

    const newCar = {year: carYear, 
                    make: carMake, 
                    model: carModel};
        setCars (cars=>[...cars, newCar]);
        
        setCarYear("");
        setCarMake("");
        setCarModel("");
   } 
   function handleRemoveCar(index){
setCars(cars => cars.filter((el, i)=>i !==index))
   }
   function handleYearChange (event){
    setCarYear(event.target.value);
   }
   function handleMakeChange (event){
    setCarMake(event.target.value);

   }
   function handleModelChange(event){
    setCarModel(event.target.value);
   }

    return(
        <div>
            <h2>List of car objects</h2>
            <ul>
{cars.map((x, index)=> <li key={index} onClick={()=>handleRemoveCar(index)}>
{x.year}{x.make}{x.model}
</li>)}
            </ul>
            <input value={carYear} type="number" placeholder="Type year"  onChange={handleYearChange}/><br />
            <input value={carMake} type="text" placeholder="Type mark"  onChange={handleMakeChange}/><br />
            <input value = {carModel} type="text" placeholder="Type model"  onChange={handleModelChange}/><br />
<button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}
export default ArrayOfObjects;