const initialState = {
  profileData: null,
  ProfilSucces: false,
};

const profilReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {
        ...state,
        ProfilSucces: false,
        profileData: null,
      };

    case 'PROFIL_SUCCESS':
      return {
        ...state,
        ProfilSucces: true,
        profileData: action.payload,
      };

    default:
      return state;
  }
};

export default profilReducer;
