import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/signupActions';

const initialState = {
  isRegistering: false,
  user: null,
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        user: action.payload.user,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        isRegistering: false,
        user: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default signupReducer;
