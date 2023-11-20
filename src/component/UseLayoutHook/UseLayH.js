import React from 'react'
import UseLayoutH1 from './UseLayoutH1';
import UseLayoutH2 from './UseLayoutH2';
const UseLayH =()=>{
    return(
        <div><h2>UseLayoutEffect Hook</h2>
        <p>UseLayoutEffect is same as of UseEffect .<br/>
        'useEffect' runs 'after' the DOM is printed on the browser.<br/>
        but 'useLayoutEffect' runs 'before' the DOM is printed on the browser<br/>
        it runs synchronously, dimension of the layout</p>
        <ul><li>Height</li>
        <li>width</li>
        <li>anything related to layout</li></ul> 
<p>react calculate the component --- UseLayOutEffect ---- react prints all elements ---- Useeffect.</p>
<UseLayoutH1/>
<UseLayoutH2/>
      </div>
    );
}
export default UseLayH;


