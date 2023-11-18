import React from 'react'
import UseContextH1 from './UseContextH1'
// import UseContextH1 from './UseContextH1'
// import UseContextH3 from './UseContextH3'


const UseContextH = () => {
  return (
    <div><h1>UseContextH</h1>
    <p>UseContext  hook is used to perform  the global data <br/>
    Likewise useContext is used carry the info or data from parent to child components without mediator{/*A-->B-->C-->D======A----->D*/}<br/></p>

     HOW TO CREATE USECONTEXT:<br/>
   <p>Creating the context <br/>
   Providing the context  <br/>
   Consuming the context <br/>
   </p>
   
   <UseContextH1/>






   {/* <UseContextH1/>
   <UseContextH3/> */}



</div> 
  )
}

export default UseContextH