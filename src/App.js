import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header';
import {connect} from 'react-redux';
import actions from './store/actions.js';
import Routes from './routes';
import axios from 'axios';
import { withRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    if(!this.props.account.username) {
        this.getUserData(this);
    }
  }
  getUserData(self) {
      axios.get('account/', {
      })
      .then((response) => {
          if(response.status === 200) {
            self.props.dispatch(actions.updateUserObject(response.data));
          } else {
            throw(response)
          }
      })
      .catch((err) => {
        console.log(err)
      });
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default withRouter(connect(
  (state) => {
    return {
      account: state.account
    };
  }
)(App));
