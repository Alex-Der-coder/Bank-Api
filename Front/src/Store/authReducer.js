// reducers/authReducer.js
const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: false,
      };

    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default authReducer;
