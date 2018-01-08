import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import {BrowserRouter} from 'react-router-dom'
import store from './store';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store.configureStore()}>
            <App />
        </Provider>    
    </BrowserRouter>        
    , 
    document.getElementById('root')
);
registerServiceWorker();