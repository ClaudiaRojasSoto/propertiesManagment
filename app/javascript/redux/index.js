import { combineReducers } from 'redux';
import greetingsReducer from './reducers/greetingsReducer';

const rootReducer = combineReducers({
  greetings: greetingsReducer
});

export { greetingsReducer };

export default rootReducer;
