import React from 'react'
import UseEffectH1 from './UseEffectH1'
import UseEffectH2 from './UseEffectH2'
import UseEffectH3 from './UseEffectH3'
import UseEffectH4 from './UseEffectH4'

const UseEffectH = () => {
  return (
    <div><h1>UseEffectH</h1>
    <p>UseEffect hook is used to perform side effects in our component. <br/>
    side effects are actions which are performed with the 'Outside world', we perform a side effect when we need to reach outside of our React component to do something.<br/> 
    for eg:<br/>
    Fetching Data from API <br/>
    updating the DOM document & window  <br/>
    timer functions settimeout &setinterval.<br/></p>

    <h5>useEffect(callback{/*side-effect-Logic */}, dependencies{/*Array-of-variables */})</h5>
    <h5>useEffect(callback{/*whattorun*/}, dependencies{/*whentorun*/})</h5>


      <UseEffectH1/>
      <UseEffectH2/>
      <UseEffectH3/>
      <UseEffectH4/>
   </div>
  )
}

export default UseEffectH