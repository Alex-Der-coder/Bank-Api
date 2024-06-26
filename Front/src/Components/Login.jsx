
import React, { useState , useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch ,useSelector } from 'react-redux';
import { login } from '../actions/authActions.js';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/profil');
    }
  }, [isLoggedIn, navigate]);



  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // Dispatch the login action
      await dispatch(login(username, password));
      // If login succeeds, you can perform any necessary action here
    } catch (error) {
      // Handle login error
      if (error.message === 'Invalid username or password') {
        setError("Invalid username or password. Please try again.");
        console.log(error);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };
  
    return (
    <main className="main bg-dark">
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label htmlFor="remember-me"
            >Remember me</label>
        </div>
         <button className="sign-in-button">Sign In</button>
         {error && <div className="error">{error}</div>}
      </form>
    </section>
    </main>
  );
}


export default Login;


