
import './App.css';
import Home from './component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UseStateH from './component/UseStateH';
import UseEffectH from './component/UseEffectH';
import CustomHooks from './component/CustomHooks';
import UseCallBaH from './component/UseCallBaH';
import UseMemoH from './component/UseMemoH';
import UseLayH from './component/UseLayH';
import UseRedH from './component/UseRedH';
import UseRefH from './component/UseRefH';
import UseContextH from './component/UseContextH';






function App() {
  return (
<div>

<Router>

  <Routes>
  <Route path="/" element={ <Home/>}/>
   <Route path="/useState" element={<UseStateH/>}/>
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
</div>
   
  );
}

export default App;
