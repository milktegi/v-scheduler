const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      console.log('login failure');
      return {
        ...state,
        authError: 'login failed'
      };
		case 'SIGNOUT_SUCCESS':

		console.log('signout success!')
		return state;
    case 'SIGNUP_SUCCESS':
    console.log('signup 성공');
    return{
      ...state,
      authError: null
    }
    case 'SIGNUP_ERROR':
    return {
      ...state,
      authError: action.err.message
    }
    default:
      return state;
  }
};

export default authReducer;
