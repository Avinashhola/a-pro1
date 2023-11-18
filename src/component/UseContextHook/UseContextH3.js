
import React, {useContext}from 'react'
import { variable1 } from './UseContextH1'
const UseContextH3 = () => {
  return (
    <div>
    <variable1.Consumer>{value=> <div>{value}</div>}</variable1.Consumer>
    
    </div>
  )
}

export default UseContextH3