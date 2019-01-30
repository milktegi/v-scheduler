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
    default:
      return state;
  }
};

export default authReducer;
