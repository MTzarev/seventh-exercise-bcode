import { useState } from "react";
function ObjectNamesUpdater () {
const [name, setName] = useState({
    name: "Иван", lastName: "Иванов", age: 32
})

function nameChanger (event) {
    setName(n=>({...n, name:event.target.value}))

}
function lastNameChanger(event){
    setName(n=>({...n, lastName: event.target.value}))
}
function ageChanger(event) {
    setName (n=>({...n, age: event.target.value}))
}

return (
    <div>
        <p>Вие сте: {name.name} {name.lastName} на възраст: {name.age}</p>
    
        <input type="text" placeholder="Въведете име" onChange={nameChanger}/>
        <input type="text" placeholder="Въведете фамилия" onChange={lastNameChanger} />
        <input type="number" placeholder="Въведете възраст" onChange={ageChanger} />
    </div>
)
}
export default ObjectNamesUpdater;