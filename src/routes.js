import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import Home from './components/home/Home';
import NotFound from './components/NotFound';
import { BrowserRouter } from 'react-router';
import Resources from './components/Resources.js';
import ManageUsers from './components/ManageUsers.js';

const Routes = props => (  
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/Resources' component={Resources}/>
    <Route exact path='/ManageUsers' component={ManageUsers}/>
    {/* 404 Route */}
    <Route path='/*' component={NotFound}/>
  </Switch>
);

export default Routes;
