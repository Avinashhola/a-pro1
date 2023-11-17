
import React from 'react'
import './Home.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UseStateH from './UseStateH';
import UseEffectH from './UseEffectH';
import UseContextH from './UseContextH';
import UseRefH from './UseRefH';
import UseRedH from './UseRedH';
import UseLayH from './UseLayH';
import UseMemoH from './UseMemoH';
import UseCallBaH from './UseCallBaH';
import CustomHooks from './CustomHooks';
import Hooks from './Hooks';

export const Home = () => {
  return (
   <>
   <Router>
      <Routes>
        <Route path='/' element={<Hooks/>}/>
        <Route path='/UseState' element={<UseStateH/>}/>
        <Route path="/useEffect" element={<UseEffectH/>}/>
        <Route path="/useContext" element={<UseContextH/>}/>
        <Route path="/useRef" element={<UseRefH/>}/>
        <Route path="/useReducer" element={<UseRedH/>}/>
        <Route path="/useLayout" element={<UseLayH/>}/>
        <Route path="/useMemo" element={<UseMemoH/>}/>
        <Route path="/useCallback" element={<UseCallBaH/>}/>
        <Route path="/usecustom" element={<CustomHooks/>}/> 
      </Routes>
    </Router>
</> 
  )
}
export default Home




// import React from "react";
// import {Link} from 'react-router-dom';

// const Home = ()=>{
//     return (
// <div>
//  <h1>HOOKS</h1>
//  <p>Hooks are the functions to use some react features in functional components.</p>
//  <p>Hooks are functions that make Functional Components work like Class Components.</p>
//  <ul>Types of Hooks:
//     {/* <li><Link to='/'> Hooks </Link></li> */}
//     <li><Link to='/useState'>UseState Hook </Link></li>
//     <li><Link to='/useEffect'>UseEffect Hook </Link></li>
//     <li><Link to='/useContext'>UseContext Hook</Link></li>
//     <li><Link to='/useRef'>UseRef Hook </Link></li>
//     <li><Link to='/useReducer'>UseReducer Hook </Link></li>
//     <li><Link to='/useLayout'>UseLayout Hook </Link></li>
//     <li><Link to='/useMemo'>UseMemo Hook </Link></li>
//     <li><Link to='/useCallback'>UseCallback Hook </Link></li>
//     <li><Link to='/usecustom'>Custom Hook </Link></li>
//  </ul>

// </div>
//     )
// }
// export default Home

