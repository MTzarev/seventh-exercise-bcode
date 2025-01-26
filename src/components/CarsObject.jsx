import { useState } from "react"
function CarsObject () {

    const [car, setCar] = useState({mark: "", 
                                    model: "",
                                    year: 0,
    })
function addMark (e) {
setCar(c=>({...c, mark:e.target.value}))
}
function addModel (e){
    setCar(c=>({...c, model: e.target.value}))

}
function addYear (e){
    setCar (c=>({...c, year: e.target.value}))

}


    return (
        <div>
            <p>Your Car is: {car.mark} {car.model} <br /> Year: {car.year}</p>
            <input type="text" placeholder="Enter car mark:" onChange={addMark} />
            <input type="text" placeholder="Enter car model:" onChange={addModel} />
            <input type="number" placeholder="Enter year of your car:" onChange={addYear} />
        
        </div>
    )
}
export default CarsObject