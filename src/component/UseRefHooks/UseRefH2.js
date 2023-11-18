import React, {useRef}from 'react'

const UseRefH2 = () => {
  const inputEle1 = useRef()
  const handleClick=()=>{
     console.log(inputEle1)//{it is used to know whta type dom evnts can we work}
    inputEle1.current.style.width="300px"
    inputEle1.current.focus();
  };
  return (
    <div>  <h3>DOM  value without rerender</h3>
    <input type="text" ref={inputEle1}/>
    <button onClick={handleClick}>Click Here</button>
    </div>
  
  
    )
}

export default UseRefH2  