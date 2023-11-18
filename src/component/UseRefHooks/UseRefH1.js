import React,{useState,useEffect,useRef} from 'react'

const UseRefH1 = () => {
  // const[counter,setCounter]  =useState(0)  // this array has 2 elements --- 1 is intial val,2nd is function val
  // useEffect(()=>{
  //   setCounter((prev)=> prev + 1);
  // })
  const[name,setName]  =useState("")
  const count = useRef(0)
  useEffect(()=>{
    count.current = count.current +1
  })

return (
  <div>
  <h3>Mutable value without rerender</h3>
        {/* <div> <input type='text' onChange={(e) => setName(e.target.value)}/>
          <p>Name: {name}</p>
          <p>Render: {counter}</p>     
        </div> */}  {/*infinite loop so we use useref */}
        <div> <input type='text' onChange={(e) => setName(e.target.value)}/>
          <p>Name: {name}</p>
          <p>Render: {count.current}</p> {/*infinite loop so we use useref */}    
        </div>

         
  </div>
)
}

export default UseRefH1  