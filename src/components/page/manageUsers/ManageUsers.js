import React, { Component } from 'react';
import './ManageUsers.css';
import PageLoginForm from '../../forms/PageLoginForm.js';
import { connect } from 'react-redux';
import LogoutButton from '../../buttons/PrimaryButton.js';
import actions from '../../../store/actions';

class ManageUsers extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }
  renderLoginForm() {
    if(this.props.username) {
      return <LogoutButton buttonName='LogOut' onClickHandler={this.logout}/>
    } else {
      return <PageLoginForm/>
    }
  }
  logout() {
    this.props.dispatch(actions.logOutUser());
  }
  render() {
    return (
      <div>
        <h1>Account</h1>
        {this.renderLoginForm()}
      </div>
    );
  }
}

export default connect(
  (state) => {
      return {
          username: state.account.username,
      };
  }
)(ManageUsers);
