import React, {useState, useEffect} from 'react'

const UseEffectH1 = () => {
    const [counta,setcounta] = useState(0);
    const [countb,setcountb] = useState(10);


    useEffect(()=>{
         document.title = `${counta} new message`;
    });

    function Decreaseses(){
            setcountb(countb - 1)
    }
  return (
    <div><h2>UseEffect without dependencies</h2>
     
     <p>{counta} new messages!</p>
     <button onClick={() => setcounta(counta + 1)}>Increase</button>
     
     <p>{countb} Yes its Decresing!</p>
     <button onClick={Decreaseses}>Decreases</button>

     </div>

  )
}

export default UseEffectH1