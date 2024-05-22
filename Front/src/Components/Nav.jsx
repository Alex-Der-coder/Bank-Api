// Nav.js
import React  from 'react';
import { connect } from 'react-redux';
import { authLogin, authLogout  } from '../actions/authActions';
import { loginSucces } from '../actions/authActions';
import { Link } from 'react-router-dom';
import Banklogo from '../img/argentBankLogo.png';

function Nav({ isLoggedIn, ProfilSucces, profileData, authLogout , loginFailure }) {

console.log(profileData);

let parsedProfileData = null;
if (profileData) {
  parsedProfileData = JSON.parse(profileData);
}

const firstName = parsedProfileData ? parsedProfileData.firstName : null;

const loginOrLogout = isLoggedIn ? (
  <>
    {firstName && (
        <a className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </a>
      )}
    <Link to="/" className="main-nav-item" onClick={authLogout}>
      <i className="fa fa-sign-out"></i>
      Sign Out
    </Link>
  </>
) : (
  <Link to="/signup" className="main-nav-item" >
    <i className="fa fa-user-circle"></i>
    Login
  </Link>
);


  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={Banklogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>{loginOrLogout}</div>
      


    </nav>
  );
}


const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  ProfilSucces: state.profil.ProfilSucces,
  profileData: state.profil.profileData,

});


const mapDispatchToProps = {
  authLogin,
  authLogout,
  loginSucces,


};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);


