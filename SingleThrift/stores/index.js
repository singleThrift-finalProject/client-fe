import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));

export default store;
