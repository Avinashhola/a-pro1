import React, {useState} from 'react'

const UseStateH2 = () => { 
//arraydestructuring
    const[counter,setCounter]  =useState(0)  // this array has 2 elements --- 1 is intial val,2nd is function val
    const[name,setName] =useState("")
    function increasecounter(){
        setCounter(counter + 1)
    }

  return (
    <div>
    <h2>Usestate using Input Text as state variable?</h2>
    <input type="text" onChange={(e)=> setName(e.target.value)}/> 
        <h4>{name} has clicked {counter} times</h4>
        <button onClick={increasecounter}>Increase</button>
    </div>
  )
}

export default UseStateH2