import React, {Component} from 'react';
import RefreshButton from '../buttons/PrimaryButton.js';
import {Link} from 'react-router-dom';
import './GuideLineAddForm.css';
import {connect} from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PrimaryButton from '../buttons/PrimaryButton';
import RenderGuideLinesButton from '../buttons/RenderGuideLinesButton';
import axios from 'axios';
import actions from '../../store/actions.js';
// import {browserHistory} from 'react-router';

class GuideLinesEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name:'',
          link:'',
          description:''
        }
        this.password = '';
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleLinkChange = this.handleLinkChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleNameChange(event) {
        this.setState({name: event.target.value});
      }
      handleDescriptionChange(event) {
        this.setState({description: event.target.value});
      }
      handleLinkChange(event) {
        this.setState({link: event.target.value});
      }
      handleSubmit() {
        axios.post('guidelines/create', {
            name: this.state.name, 
            description: this.state.description,
            link: this.state.link,
         })
         .then((response) => {
              if(response.status === 200) {
                this.props.dispatch(actions.addGuideline(response.data))
                this.props.dispatch(actions.updateCurrentView({homePage: 'showGuidelinesList'}));
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
            <Form className="guideline-add-form"onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="name" hidden>Guidlines Name</Label>
                    <Input name="name"
                        placeholder="name" value={this.state.name} onChange={this.handleNameChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="description" hidden>Password</Label>
                    <Input name="description"
                        placeholder="description" value={this.state.description} onChange={this.handleDescriptionChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="link" hidden>Password</Label>
                    <Input name="link"
                        placeholder="link" value={this.state.link} onChange={this.handleLinkChange} />
                </FormGroup>
                <PrimaryButton buttonName='ADD' onClickHandler={this.handleSubmit}/>
                <RenderGuideLinesButton/>
            </Form>
        )
    }
}

export default connect()(GuideLinesEditor);
 