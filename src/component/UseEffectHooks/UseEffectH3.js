import React, {useState,useEffect} from 'react'

const UseEffectH3 = () => {

  const [counter,setCounter]=useState(0);
  const [otherCounter,setOtherCounter]=useState(4);
  useEffect(()=>{
    document.title = `${otherCounter} new messages!!!!`
  },[otherCounter]);
    return (
    <div>
      <h2>UseEffect with array variables</h2>

       <p>Finally it is responding for first repititon {counter} times!!!</p>
       <button onClick={()=> setCounter(counter+1)}>Increase</button>
   
       <p>Finally it is responding for second repititon by {otherCounter} times!!!</p>
       <button onClick={()=> setOtherCounter(otherCounter+4)}>Increase</button>
   
   
    </div>
  ) 
}

export default UseEffectH3