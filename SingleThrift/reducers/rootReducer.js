import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { cityReducer } from './cityReducer';
import { counterReducer } from './countReducer';
import { loginReducer } from './loginReducer';
import { productDetailReducer } from './productDetailReducer';
import { productReducer } from './productReducer';
import { sellerProductReducer } from './sellerProductReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  login: loginReducer,
  product: productReducer,
  sellerProduct: sellerProductReducer,
  productDetail: productDetailReducer,
  cart: cartReducer,
  city: cityReducer,
});

export default rootReducer;
