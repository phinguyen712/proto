import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/Header.js';
import './App.css';
import Routes from './routes.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
