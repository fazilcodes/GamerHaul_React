import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './app.scss'


const App = () => {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App