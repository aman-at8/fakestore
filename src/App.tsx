import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login/login.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ProductList from './components/productList/productList.tsx'
import ProductDetails from './components/productDetails/productDetails.tsx'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
