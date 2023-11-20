import React, {useEffect, useState, useLayoutEffect} from 'react'

const UseLayoutH1 = () => {
    const [toggle,setToggle] = useState(0)

    useEffect(()=>{
        console.log("useEffect");
    }, [toggle]);

    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    }, [toggle]);

  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h4>Code bless You</h4>}
    
    </div>
  )
}

export default UseLayoutH1