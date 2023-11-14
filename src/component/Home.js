import React from "react";
import {Link} from 'react-router-dom';

const Home = ()=>{
    return (
<div>
 <h1>HOOKS</h1>
 <p>Hooks are the functions to use some react features in functional components.</p>
 <p>Hooks are functions that make Functional Components work like Class Components.</p>
 <ul>Types of Hooks:
    {/* <li><Link to='/'> Hooks </Link></li> */}
    <li><Link to='/useState'>UseState Hook </Link></li>
    <li><Link to='/useEffect'>UseEffect Hook </Link></li>
    <li><Link to='/useContext'>UseContext Hook</Link></li>
    <li><Link to='/useRef'>UseRef Hook </Link></li>
    <li><Link to='/useReducer'>UseReducer Hook </Link></li>
    <li><Link to='/useLayout'>UseLayout Hook </Link></li>
    <li><Link to='/useMemo'>UseMemo Hook </Link></li>
    <li><Link to='/useCallback'>UseCallback Hook </Link></li>
    <li><Link to='/usecustom'>Custom Hook </Link></li>
 </ul>

</div>
    )
}
export default Home