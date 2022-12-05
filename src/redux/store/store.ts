import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const middleware = [thunk];

const initialState = {};
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      trace: true,
      traceLimit: 25,
    })) || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middleware),
  ),
);

export default store;
