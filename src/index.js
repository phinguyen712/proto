import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom'
import configureStore from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import { PersistGate } from 'redux-persist/lib/integration/react'
let { store, persistor } = configureStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>    
    </BrowserRouter>        
    , 
    document.getElementById('root')
);
registerServiceWorker();