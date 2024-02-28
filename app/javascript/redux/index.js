import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import { forgotPasswordReducer } from './reducers/forgotPasswordReducer';
import { resetPasswordReducer } from './reducers/resetPasswordReducer';
import signupReducer from './reducers/signupReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signup: signupReducer,
});

export default rootReducer;
