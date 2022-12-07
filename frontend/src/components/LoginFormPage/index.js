import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import "./LoginForm.css";
import logo from "../../assets/logo.png";


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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(email!==''){
        if(email===sessionUser){
          
          setEmailError('');
      }
    } else{
      
      setEmailError('Email required');
    }

    if(password!==''){
      if(password===sessionUser){
          
          setPasswordError('');
      } else{
     
        setPasswordError("Invalid Password")
      }
    } else{
      setPasswordError('Password Required')
    }
    setErrors([]);
    return dispatch(sessionActions.login({ email, password })).catch(
      
      async (res) => {
        
        let data;
        try {
          // .clone() essentially allows you to read the response body twice
          data = await res.clone().json();
        } catch {
          data = await res.text(); // Will hit this case if the server is down
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      }
    );
  };


  const loginDemo = () => {
    console.log(email)

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
        <button type="submit" className="signup-button" >
          Create your Amazish account
        </button>
      </Link>
      <button className="login-button" type="submit" onClick={loginDemo}>
          Demo Login
        </button>
        <div className="divider-container"></div>
        <div className="divider-break"></div>
    
  
    </div>
   
    </div>
    {/* <div className="center-section">
       <Link to="/">
        <img src={logo} alt="icon-logo" className="signup-logo"></img>
      </Link>
      <div className="center-form">
        <p className="createAccount">Sign in</p>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <label className="login-label">
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="login-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="login-button" type="submit">Log In</button>
        </form>
        <p className="terms">By creating an account, you agree to Amazish Conditions of Use and Privacy Notice.</p>
      </div>
      <div className="divider-container">
        <div className="divider-break"></div>
        <h5>New to Amazish?</h5>
      </div>
      <Link to="/signup">
        <button type="submit" className="signup-button">
          Create your Amazish account
        </button>
      </Link>
    </div> */}
    </>
  );
}

export default LoginFormPage;
