import React from "react";
import Nav from './Nav'
import Footer from "./Footer";
import Login from "./Login";



function Signup() {
    return (
      <div className="login_container">
    <Nav />
    <Login/>
    <Footer/>
     </div>
    );
  }
  
  export default Signup;