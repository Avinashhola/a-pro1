
import React, {useState,useEffect} from 'react'

const UseEffectH4 = () => {

  const [counter,setCounter]=useState(0);
  useEffect(()=>{
    console.log("Run log UseEffect",counter);
    return ()=>{
        console.log('clean up!', counter)
    }
  },[counter]);
    return (
    <div>
      <h2>UseEffect 'CLEANUP'</h2>

       <p>Finally it is responding by {counter} times!!!</p>
       <button onClick={()=> setCounter(counter+1)}>Increase</button>
    </div>
  )
}

export default UseEffectH4


// import React, {useState,useEffect} from 'react'

// const UseEffectH4 = () => {

//   const [time,setTime]=useState(0);
//   useEffect(()=>{
//       const timer = setInterval(()=>{
//         setTime(time + 1);
//       }, 1000);
//     return () =>{
//         cleanInterval(timer)
//     }  
// });
//     return (
//     <div>
//       <h2>UseEffect 'CLEANUP FUNCTION'</h2>
//       <p>{time} in seconds</p>
//     </div>
//   ) 
// }

// export default UseEffectH4

