import React from 'react'
import './App.css'
import LandingPage from './Food-Zone/pages/LandingPage.jsx'
import { Routes,Route } from 'react-router-dom'
import ProductMenu from './Food-Zone/components/ProductMenu.jsx'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<LandingPage/>}/>
        <Route path='/products/:firmId' element = {<ProductMenu/>}/>
      </Routes>
      
    </div>
  )
}

export default App