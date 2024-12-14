import React from 'react'
import Navbar from '../components/Navbar'
import StaticItems from '../components/StaticItems'
import Chains from '../components/Chains'
import FirmSection from '../components/FirmSection'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <div className="componentContainer">
        <StaticItems/>
        <Chains/>
        <FirmSection/>
        </div>
        
    </div>
  )
}

export default LandingPage