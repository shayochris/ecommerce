// import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Product from './components/Product'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Register from './components/Register'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
