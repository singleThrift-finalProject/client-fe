import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { counterReducer } from './countReducer';
import { loginReducer } from './loginReducer';
import { productReducer } from './productReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  login: loginReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
