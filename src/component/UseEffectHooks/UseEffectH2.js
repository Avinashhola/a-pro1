import React, {useState,useEffect} from 'react'

const UseEffectH2 = () => {

  const [counter,setCounter]=useState(0);
  useEffect(()=>{
    document.title = `${counter} new messages!!!!`
  },[]);
    return (
    <div>
      <h2>UseEffect with empty array</h2>

       <p>Finally it is responding by {counter} times!!!</p>
       <button onClick={()=> setCounter(counter+1)}>Increase</button>
    </div>
  )
}

export default UseEffectH2