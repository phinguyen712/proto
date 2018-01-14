import './GuidelinesEditor.css';
import React, {Component} from 'react';
import RefreshButton from '../../buttons/PrimaryButton.js';
import {Link} from 'react-router-dom';
import './GuidelinesEditor.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import actions from '../../../store/actions.js';
// import {browserHistory} from 'react-router';

class GuideLinesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          url:''
        }
        this.password = '';
        this.handleNameChange= this.handleNameChange.bind(this);
        this.handleUrlChange = this.handleUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
      handleDescriptionChange(event) {
        this.setState({url: event.target.value});
      }
      handleLinkChange(event) {
        this.setState({url: event.target.value});
      }
      handleSubmit(e) {
        e.preventDefault();
        axios.post('guidelines/create', {
            name: this.state.name, 
            description: this.state.description,
            link: this.state.link,
         })
         .then((response) => {
              if(response.status === 200) {
                // browserHistory.push('home');
              } else {
                throw(response)
              }
          })
          .catch((err) => {
            console.log(err);
          });
    }    
    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name" hidden>Guidlines Name</Label>
                    <Input name="name"
                        placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="url" hidden>Password</Label>
                    <Input name="url"
                        placeholder="url" value={this.state.description} onChange={this.handlehandleDescriptionChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="url" hidden>Password</Label>
                    <Input name="url"
                        placeholder="url" value={this.state.link} onChange={this.handleLinkChange} />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default GuideLinesEditor;
 