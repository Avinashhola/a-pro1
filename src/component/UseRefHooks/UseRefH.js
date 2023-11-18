import React from 'react'
import UseRefH1 from './UseRefH1'
import UseRefH2 from './UseRefH2'

const UseRefH = () => {
  return (
  
    <div><h2>UseRefHook</h2>
    <p>Useref allows us to access DOM elements.<br/>
    And for creating mutable variables which will not re-render the component.<br/>
    mostly it is used for rendering concept/Dom events.</p>
   <h4>Useref syntax: </h4>
  <p>const variableName = useRef(intialValue);</p>
<UseRefH1/>
<UseRefH2/>
  </div>
  )
}

export default UseRefH