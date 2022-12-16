// frontend/src/components/SignupFormPage/index.js
import './SignupForm.css';
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import logo from "../../assets/logo.png";

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
   
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, name, password }))
        .catch(async (res) => {
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
      });
    }
    // return setErrors(['Password fields must be equal']);
  };

  //label, input, input-focus

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
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <ul>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
      <input
            className='test-input-one'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              required
            />

    <h5>Email</h5>
    <input
            className='test-input-two'
              type="text"
              value={email}
              onChange={(e)=>handleEmailChange(e)}
          
            />
             {emailError&&<div className='error-msg'>{emailError}</div>}
      <h5>Password</h5>
      <input
            className='test-input-three'
              type="password"
              value={password}
              onChange={(e)=>handlePasswordChange(e)}
         
              placeholder="At least 6 characters"
            />
              {passwordError&&<div className='error-msg'>{passwordError}</div>}

        <h5>Re-enter Password</h5>
        <input
            className='test-input-four'
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
    <button className="login__registerButton" type="submit">Continue</button>
      </form>
      <button className="login-button" type="submit" onClick={loginDemo}>
          Demo Login
        </button>
      <p className="terms">By creating an account, you agree to Amazish Conditions of Use and Privacy Notice.</p>
      
        <p className="options-tag">Already have an account? <Link className="a-link" to="/login">Sign In</Link></p>
      
    </div> 
    </div>
    </>
  );
}

export default SignupFormPage;