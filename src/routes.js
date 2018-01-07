import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import Home from './components/page/home/Home.js';
import NotFound from './components/NotFound';
import { BrowserRouter } from 'react-router';
import Resources from './components/page/resources/Resources.js';
import ManageUsers from './components/page/manageUsers/ManageUsers.js';

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
