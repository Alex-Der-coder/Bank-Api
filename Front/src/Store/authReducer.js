// reducers/authReducer.js
const initialState = {
  isLoggedIn: false,
  loginFailure: null,
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


      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoggedIn: false,
          error: action.payload, 
        };
  

    default:
      return state;
  }
};

export default authReducer;
