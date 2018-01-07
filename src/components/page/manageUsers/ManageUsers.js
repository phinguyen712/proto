import React, { Component } from 'react';
import './ManageUsers.css';
import PageLoginForm from '../../forms/PageLoginForm.js'

class ManageUsers extends Component {
  render() {
    return (
      <div>
        <h1>Please login</h1>
        <PageLoginForm/>
      </div>
    );
  }
}

export default ManageUsers;
