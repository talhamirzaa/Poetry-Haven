import './App.css';
import Land from './components/Land';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './components/Search';

function App() {
  return (
 <>
    <BrowserRouter>
    <Navbar></Navbar>   
    
    
    <div className="container">
    
          <Routes>
            <Route path="/" element={<Land/>}>
            </Route>
            <Route path="/Search" element={<Search/>}>
            </Route>
            
          </Routes>
    
    </div>
    </BrowserRouter>
 </>
  );
}

export default App;
