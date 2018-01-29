import {
  accountsReducer,
  currentViewReducer,
  guidelinesReducer
} from './reducers';

import * as redux from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'



const persistConfig = {
	key: 'root',
	storage: storage,
}

let persistedReducer = persistCombineReducers(persistConfig, 	
	{
		account: accountsReducer,
		currentView: currentViewReducer,
		guidelines: guidelinesReducer
	}
);

export default () => {
	let store = redux.createStore(persistedReducer, redux.compose(
		// for developer tools https://github.com/zalmoxisus/redux-devtools-extension
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));
	let persistor = persistStore(store);
	return { store, persistor};
}
