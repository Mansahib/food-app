import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/list/List'
import Orders from './pages/orders/Orders'

const App = () => {
  const url="http://localhost:4000"
  return (
    <div>
      <Navbar />
      <hr>
      </hr>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App