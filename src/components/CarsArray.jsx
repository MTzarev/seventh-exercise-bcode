import {useState} from "react"
function CarsArray () {

const [car, setCar] = useState(["Toyota", "Audi", "BMW"]);

function addCar () {
const newCar = document.getElementById("carInput").value;
document.getElementById("carInput").value=""
setCar (c=>[...c, newCar])
}
function removeCar (idx){
    setCar (car.filter((el, i)=>i!==idx))
}

    return (
        <>
        <div>
            <h1>My Garage</h1>
            <ul>
                {car.map((car, idx)=><li key={idx} onClick={()=>removeCar(idx)}>{car}</li>)}
            </ul>
            <input type="text" id="carInput" placeholder="Add your car" />
            <button onClick={addCar}>Add Car</button>
        </div>
        </>
    )
}
export default CarsArray;