import { useState } from "react";
function ObjectUpdater () {

    const [car, setCar] = useState({year: 2024 ,make: "Ford", model: "Mustang"})

function updateYear (e){
    setCar (c=>({...c, year: e.target.value}))
}
function updateMake (e){
    setCar (c=>({...c, make: e.target.value}))
}
function updateModel (e){
    setCar (c=>({...c, model:e.target.value}))
}
    
    return (<div>
    <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
    
    <input type="number" value={car.year} onChange={updateYear}/><br />
    <input type="text" value={car.make} onChange={updateMake}/><br />
    <input type="text" value={car.model} onChange={updateModel}/><br />

    </div>);
    
}
export default ObjectUpdater;