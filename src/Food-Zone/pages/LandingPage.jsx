import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import StaticItems from '../components/StaticItems'
import Chains from '../components/Chains'
import FirmSection from '../components/FirmSection'
import UserRegister from '../components/UserRegister'
import UserLogin from '../components/UserLogin'
import WelcomePage from '../components/WelcomePage'
const LandingPage = () => {

  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showLogout, setShowLogout] = useState(false)
  const [showWelcomePage, setWelcomePage] = useState(true)
  const token = localStorage.getItem('token')

  useEffect(()=>{
    const Token = localStorage.getItem('token')
    if(Token){
      setShowLogout(true);
      setWelcomePage(false)
    }
  },[])

  const logoutHandler = () =>{
    localStorage.removeItem('token');
    showLoginHandler();
    setShowLogout(false)
  }
  const showRegisterHandler = () => {
      setShowRegister(true);
      setShowLogin(false);
      setWelcomePage(false);
  }

  const showLoginHandler = () =>{
    setShowLogin(true);
    setShowRegister(false);
    setWelcomePage(false);
  }
  return (
    <div>
        <Navbar showRegisterHandler = {showRegisterHandler} showLoginHandler={showLoginHandler} showLogout = {showLogout} logoutHandler = {logoutHandler}/>
        <div className="componentContainer">
        {showRegister && < UserRegister showLoginHandler={showLoginHandler}/>}
         {showLogin && <UserLogin setShowLogin={setShowLogin} />}
         {showWelcomePage && <WelcomePage/>}

        {token && (
          <>
            <StaticItems />
            <Chains />
            <FirmSection />
          </>
        )}

        
        </div>
        
    </div>
  )
}

export default LandingPage