import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './PageLoginForm.scss';
import {connect} from 'react-redux';
import actions from '../../store/actions.js';
import axios from 'axios';

class PageLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login:'',
      password:''
    }
    this.password = '';
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLoginChange(event) {
    this.setState({login: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    axios.post('account/login', {
        username: this.state.login, 
        password: this.state.password,
     })
     .then((response) => {
          if(response.status === 200) {
            this.props.dispatch(actions.updateUserObject(response.data));
          } else {
            throw(response)
          }
      })
      .catch((err) => {
        console.log(err)
      });
  }
  renderLoginForm(){
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input xname="email" id="exampleEmail" 
            placeholder="login" value={this.state.login} onChange={this.handleLoginChange} />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" 
            placeholder="password" value={this.state.password} onChange={this.handlePasswordChange} />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
  renderLogOutButton() {
    return ( 
      <div>
        <h1>You are logged in</h1>
      </div>
    )
  }
  
  render() {
    if(!this.props.account.username){ 
      return this.renderLoginForm();
    } else {
      return this.renderLogOutButton();
    }
  }
}


export default connect(
  (state) => {
    return {
      account: state.account
    };
  }
)(PageLoginForm);