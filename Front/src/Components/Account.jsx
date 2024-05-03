import React , { useState } from "react";
import handleUpdateProfile from "../actions/authActions"

 const Account = ({ name, SecondName }) => {
console.log(name,SecondName)

const [firstName, setFirstName] = useState(name);
const [lastName, setLastName] = useState(SecondName);

  // Stocker les valeurs d'origine (placeholders) lorsque vous commencez à modifier les champs
  const [originalFirstName, setOriginalFirstName] = useState(name);
  const [originalLastName, setOriginalLastName] = useState(SecondName);

  const resetForm = () => {
    // Réinitialiser les champs avec des chaînes vides
    setFirstName("");
    setLastName("");
  };

const updateName = async () => {
  try {
    const updatedProfile = {
      firstName: firstName,
      lastName: lastName
    };
    console.log(updatedProfile);
    // Call handleUpdateProfile with updated names JSON
    const authToken = localStorage.getItem('authToken');

    const message = await handleUpdateProfile(firstName , lastName ,authToken );

    setOriginalFirstName(firstName);
      setOriginalLastName(lastName);
  } catch (error) {
    console.error("Error updating profile:", error);

  }
};

return (
  <main className="main bg-dark">
    <div className="header">
      <h1>Welcome back<br />
      <div>
      <input
      className="InputProfil"
        type="text"
        value={firstName}
        placeholder={originalFirstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
<input
className="InputProfil"
        type="text"
        value={lastName}
            placeholder={originalLastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
</div>
      
      </h1>
     <div>
        <button className="edit-button" onClick={updateName}>Save</button>
        <button className="edit-button" onClick={resetForm}>Cancel</button>
     </div>
     

        </div>
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        </main>
    );
  }
  
  export default Account;