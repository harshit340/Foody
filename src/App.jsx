import React from 'react';
import './App.css'
import Navbar from "./components/navabar/Navbar";
import { Routes,Route} from 'react-router-dom';
import Cart from "./pages/Cart/Cart";
import Home from './pages/Home/Home';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';

function App() {

  return (
    <div className="cpp">
      
  <Navbar />
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/order' element={<PlaceOrder/>}/>
  </Routes>
  </div>
  )
}

export default App
