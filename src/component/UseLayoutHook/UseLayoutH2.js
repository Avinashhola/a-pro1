

import React, {useEffect, useState, useLayoutEffect,useRef} from 'react'

const UseLayoutH2 = () => {
    const [toggle,setToggle] = useState(0)
    const textRef = useRef()
     
    useLayoutEffect(()=>{    /*we will see the NoDelay with useLayoutEffect*/
        if (textRef.current !=null){
            const dimension = textRef.current.getboundingClientReact();
            textRef.current.style.paddingTop = `${dimension.height}px`
        }
        
    }, [toggle]);
 
    // useEffect(()=>{    /*we will see the fraction of time delayed with useEffect*/
    //     if (textRef.current !=null){
    //         const dimension = textRef.current.getboundingClientReact();
    //         textRef.current.style.paddingTop = `${dimension.height}px`
    //     }
        
    // }, [toggle]);

    // useLayoutEffect(()=>{
    //     console.log('useLayoutEffect')
    // }, [toggle]);

  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <h4>Code bless You</h4>}
    
    </div>
  )
}

export default UseLayoutH2
