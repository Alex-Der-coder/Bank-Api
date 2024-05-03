import React from "react";
import { connect } from 'react-redux';

import Nav from './Nav'
import Footer from './Footer';
import Account from './Account';

function Profil({ isAuthenticated, profileSuccess, profileData }) {


  // Extraire le prénom et le nom de famille de profileData
  let firstName = "";
  let lastName = "";
  if (profileData) {
    const parsedProfileData = JSON.parse(profileData);
    firstName = parsedProfileData.firstName;
    lastName = parsedProfileData.lastName;

console.log(firstName)
  }

  return (
    <div className="profil_container">
      <Nav />
      <Account name={firstName} SecondName={lastName}/>
      <Footer/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  profileData: state.profil.profileData,
});

export default connect(mapStateToProps)(Profil);
