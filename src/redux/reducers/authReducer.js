const initialState = {
  loginUser: '',
  authToken: '',
} 

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMINLTE_LOGIN_USER':
      return {
        ...state,
        loginUser: action.loginUser,
        authToken: action.authToken,
      };
    
      case 'ADMINLTE_LOGOUT_USER':
        return {
          ...state,
          loginUser: '',
          authToken: '',
        };
  
    default:
      return state;
  }
}

export default reducer;