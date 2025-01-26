import { useState } from "react"
function ObjectInfo (){
    const [info, setInfo] = useState({
        tv: "Stamsung",
        stereo: "Samsung",
        airCondition: "Hitachi"
    })
    const tvMarkChange = (e)=>{
        setInfo(i=>({...i, tv:e.target.value}))
    }
    const stereoMarkChange = (e)=>{
        setInfo(i=>({...i, stereo:e.target.value}))
    }
    const airMarkChange = (e)=>{
        setInfo(i=>({...i, airCondition:e.target.value}))
    }
    return (
        <div>
            <p>Your tehnics are: Tv: {info.tv} Stereo: {info.stereo} AirCondition: {info.airCondition}</p>
       <input type="text" placeholder="Type TV mark" onChange={tvMarkChange} />
       <input type="text" placeholder="Type Stereo mark" onChange={stereoMarkChange}/>
       <input type="text" placeholder="Type AirCondition mark" onChange={airMarkChange} />
       </div>
    )

}
export default ObjectInfo