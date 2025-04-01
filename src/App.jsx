import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home/home'
import About from './pages/About/about'
import Contact from './pages/Contact/contact'
import Factory from './pages/Factory/factory'
import Product from './pages/Product/product'
import Error from './pages/PageNotFound/pagenotfound'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='' element={<About title="About-us"/>} />
      <Route path='' element={<Contact title="Contact" />} />
      <Route path='' element={<Factory title="Factory" />} />
      <Route path='' element={<Product title="Product"/>} />
      <Route path='*' element={<Error title="Error"/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App