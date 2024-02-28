import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer'; // Ajusta la ruta según sea necesario
import { forgotPasswordReducer } from './reducers/forgotPasswordReducer'; // Asegúrate de exportar correctamente estos reducers
import { resetPasswordReducer } from './reducers/resetPasswordReducer';
import signupReducer from './reducers/signupReducer'; // Ajusta la ruta según sea necesario

const rootReducer = combineReducers({
  auth: authReducer,
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signup: signupReducer,
});

export default rootReducer;
