import React, {createContext} from 'react'
import UseContextH3 from './UseContextH3';

export const variable1= createContext();
const UseContextH1 = () => {
  return (
    <div><h2>UseContextH1</h2>

<variable1.Provider value={"avinash's 'HOOKS'concept work"}><UseContextH3/></variable1.Provider>
    </div>
  )
}

export default UseContextH1