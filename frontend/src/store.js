
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

// const store = createStore(
//         rootReducer, 
//         inititalState, 
//         composeWithDevTools(applyMiddleware(thunk), 
//                 window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

const store = createStore(rootReducer, inititalState,  composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));
export default store;