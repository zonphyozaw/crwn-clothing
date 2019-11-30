import {createStore,applyMiddleware, compose} from 'redux';
import  logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducer';


const middlerwares = [logger,thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middlerwares)
  )
);
export default store;