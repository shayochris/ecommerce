// import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Product from './components/Product'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
    </Router>
  )
}

export default App
