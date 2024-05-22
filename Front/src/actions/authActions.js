


export const authLogout = () => {
  return {
    type: 'LOGOUT',
    
  };
};

export const authLogin = () => {
  return {
    type: 'LOGIN_SUCCESS',
  };
};

export const loginRequest = () => ({
  type: 'LOGIN_REQUEST',
});

export const loginSucces = () => ({
  type: 'LOGIN_SUCCESS',
});

export const profilSucces = (profileData) => ({
  type: 'PROFIL_SUCCESS',
  payload: profileData,
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});


export const login = (username, password) => async (dispatch) => {
  dispatch(loginRequest());

  const requestBody = {
    email: username,
    password: password,
  };

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      const responseData = await response.json();
      const token = responseData.body.token;
      localStorage.setItem('authToken', token);

      // Appel à fetchProfile après une connexion réussie
      await dispatch(fetchProfile(token));
    } else {
      const errorData = await response.json();
      console.log(errorData.message)
      alert(errorData.message);
    }
  } catch (error) {
    if (error.response && error.response.status === 400) {
      dispatch(loginFailure('Invalid username or password'));
    } else {
      dispatch(loginFailure('An unexpected error occurred'));
    }
  }
};


export const fetchProfile = (authToken) => async (dispatch) => {
  const apiUrl = 'http://localhost:3001/api/v1/user/profile';
  const authorizationHeader = `Bearer ${authToken}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authorizationHeader,
    },
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    if (response.ok) {
      const profileData = await response.json();
      console.log(profileData);  
      dispatch(loginSucces());
      dispatch(profilSucces(JSON.stringify(profileData.body)));
      return profileData;   
    } else {
      const errorData = await response.json();
      console.error('Profile API Error:', errorData);
 
      return null; 
    }
  } catch (error) {
    console.error('Error:', error);

    return null;
  }
};

// Fonction pour gérer la mise à jour du profil utilisateur
export default async function handleUpdateProfile(firstName, lastName, authToken) {
  // Ensure to call getAuthToken() properly if it's supposed to be used here

  const url = 'http://localhost:3001/api/v1/user/profile';
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    },
    body: JSON.stringify({
      firstName: firstName,
      lastName: lastName,
    }),
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      fetchProfile(); // This line seems to be calling an undefined function. Please ensure fetchProfile is defined or remove this line if not needed.
      throw new Error('Une erreur est survenue lors de la mise à jour du profil.');
    }
    const data = await response.json();
    return data.message;
  } catch (error) {
    return 'Une erreur est survenue lors de la mise à jour du profil.';
  }
}

