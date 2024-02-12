import React, { useState } from 'react'

// React router
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'

// Components
import MenuHeader from './components/MenuHeader'
import Slider from './components/Slider'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Slider />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
