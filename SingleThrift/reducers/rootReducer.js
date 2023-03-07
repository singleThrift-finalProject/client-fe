import { combineReducers } from 'redux';
import { counterReducer } from './countReducer';
import { loginReducer } from './loginReducer';
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  login: loginReducer,
  product: productReducer,
});

export default rootReducer;
