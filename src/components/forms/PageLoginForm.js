import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './PageLoginForm.scss'

export default class PageLoginForm extends React.Component {
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
    fetch('account/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.login, 
        password: this.state.password,
      })
    }).then( response => response.json())
    .then(data => console.log(data));
    
  }
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input name="email" id="exampleEmail" 
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
}
