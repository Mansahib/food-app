import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import PlaceOrder from './pages/placeOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/loginPopup/LoginPopup'
import Verify from './pages/verify/Verify'
import Myorder from './pages/Myorders/Myorder'

const App = () => {
  const[showlogin,setShowLogin]=useState(false)
  return (
  <>
  {
  showlogin?<LoginPopup setShowLogin={setShowLogin} />:<> </>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/myorders' element={<Myorder />} />       
      </Routes>
    </div>
    <Footer />
  </>
  )
}

export default App