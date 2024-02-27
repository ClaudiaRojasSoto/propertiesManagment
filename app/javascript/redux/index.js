import { combineReducers } from 'redux';
import authReducer from '../redux/reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
