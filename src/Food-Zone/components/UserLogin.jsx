import React, { useState } from 'react';
import { API_URL } from '../api';


const Login = ({setShowLogin}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async(e) =>{
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/user/login`,{
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({email,password})
      })
      const data = await response.json();
      if(response.ok)
      {
        alert("Login Successful")
        localStorage.setItem('token', data.token)
        setEmail("");
        setPassword("");
        setShowLogin(false);
        window.location.reload();
        // showWelcomeHandler();
      }
      else{
        alert("Login Failed Invalid Username or Password",data.message);
      }
    } catch (error) {
      // console.error(error);
      alert("Login Failed due to server error");
    }
  }

  return (
    <div className="login-section">
      <h3>Vendor Login</h3>
      <div className="formSection">
      <form onSubmit={loginHandler}>
        <div className="form-group">
          <label>Email</label>
          <input type="text" placeholder="Enter your Email"  value={email} onChange={(e) =>{setEmail(e.target.value)}} className="form-input" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter Your Password"   value={password} onChange={(e) =>{setPassword(e.target.value)}} className="form-input" />
        </div>
        <div className="btn-submit">
          <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
