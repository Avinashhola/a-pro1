import React, {useState} from 'react'

const UseStateH1 = () => { 
    // const array  =useState(0) // this array has 2 elements --- 1 is intial val,2nd is function val
    // const counter  =array[0]
    // const setCounter = array[1]
//arraydestructuring
    const[counter,setCounter]  =useState(0)  // this array has 2 elements --- 1 is intial val,2nd is function val

    function increasecounter(){
        setCounter(counter + 1)
    }

  return (
    <div>
    <h2>Usestate using values as state variable?</h2>
        <h4>Counter:{counter}</h4>
        <button onClick={increasecounter}>Increase</button>
    </div>
  )
}

export default UseStateH1