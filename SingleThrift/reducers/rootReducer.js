import { combineReducers } from 'redux';
import { counterReducer } from './countReducer';
import { tokenReducer } from './tokenReducer';

const rootReducer = combineReducers({
  count: counterReducer,
  token: tokenReducer,
});

export default rootReducer;
