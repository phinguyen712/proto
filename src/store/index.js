import {
  accountReducer
} from './reducers';

import * as redux from 'redux';

//configuration for our store object
let store;

export default {
  configureStore (initialState = {}) {
    const reducer = redux.combineReducers({
    });

    store = redux.createStore(reducer, initialState, redux.compose(
    // for developer tools https://github.com/zalmoxisus/redux-devtools-extension
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
  },

  currentStore() {
    return store;
  }
};
