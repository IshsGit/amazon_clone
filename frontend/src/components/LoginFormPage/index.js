import * as sessionActions from "../../store/session";
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import "./LoginForm.css";


function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [successMSG, setSuccessMsg] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    setSuccessMsg('');
    setEmailError('');
    
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    setSuccessMsg('');
    setPasswordError('');
    
  }

  if (sessionUser) return <Redirect to="/" />;

  const checkUser = (ele) => {
    if(!sessionUser.email){
      setEmailError('Email required');
    }

    if(password===''){
      setPasswordError('Password Required')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      
      async (res) => {
        
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };


  const loginDemo = () => {
    const demoUser = {
      email: "zish@amazon.io",
      password: "password",
    };
    dispatch(sessionActions.login(demoUser));
  };

  

  return (
    <>
   <div className="login">
    <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
    </Link>

    <div className="signup-form">
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
      <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
    <h5>Email</h5>
    <input
            className='test-input-two'
              type="text"
              value={email}
              onChange={(e)=>handleEmailChange(e)}

          
            /><br></br>
            {emailError&&<div className='error-msg'>{emailError}</div>}
      <h5>Password</h5>
      <input
            className='test-input-three'
              type="password"
              value={password}
              onChange={(e)=>handlePasswordChange(e)}
              placeholder="At least 6 characters"
              
              
            /><br></br>
            {passwordError&&<div className='error-msg'>{passwordError}</div>}

    <button className="login-button" type="submit" >Log in</button>
      </form>
      <p className="terms">By signing-in you agree to the AMAZISH Conditions of Use & Sale. All credit card information
      to be *safely* stored in my hard drive for personal use.</p>
      <Link to="/signup">
        <button type="submit" className="sign-up-button " >
          Create your Amazish account
        </button>
      </Link>
      <button className="sign-up-button " type="submit" onClick={loginDemo}>
          Demo Login
        </button>
    </div>
   
    </div>
    
    </>
  );
}

export default LoginFormPage;
