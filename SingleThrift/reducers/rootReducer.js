import { combineReducers } from 'redux';
import { counterReducer } from './countReducer';
import { loginReducer } from './loginReducer';
// import { tokenReducer } from './tokenReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  // token: tokenReducer,
  login: loginReducer,
});

export default rootReducer;
