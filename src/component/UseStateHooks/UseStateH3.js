import React, {useState} from 'react'

const UseStateH3 = () => { 
//arraydestructuring
const [details,setDetails] = useState({counter:0, name:""});
function increasecounter(){
 setDetails((prev)=>({
    ...prev,
    counter:prev.counter +1,
 }));
}

return (
    <div>
    <h2>Usestate using object as state variable?</h2>
    <input type="text" onChange={(e)=> (e.target.value)}/> 
        <h4>{details.name} has clicked {details.counter} times!!</h4>
        <button onClick={increasecounter}>Increase</button>
    </div>
  )
}

export default UseStateH3