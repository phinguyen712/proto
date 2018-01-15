import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './GuidelinesListItem.css';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryHollowButton from '../buttons/SecondaryHollowButton';
import {RIEInput} from 'riek';
import axios from 'axios'

class GuidelinesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            description: this.props.description,
            link: this.props.link,
            updatedDate: this.props.updatedDate,
            isEditable: false,
            editButton: 'Edit',
            startSaveButton: 'Start'
        }
        // index pass from parent
        this.index = this.props.index;
        this.updateListState = this.updateListState.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
        this.renderStartSaveButton = this.renderStartSaveButton.bind(this);
        this.updateGuidelinesItem = this.updateGuidelinesItem.bind(this);
    }
    updateListState(event) {
        if (event.name) {
            this.setState({name: event.name});
        } else if(event.description) {
            this.setState({descritpion: event.description});
        } else if(event.link) {
            this.setState({link: event.link});
        }
    }
    renderEditableOrNot(value, string) {
        if (this.state.isEditable) {
            return (
                <RIEInput
                    classEditing='editing-text'
                    value={value}
                    change={this.updateListState}
                    propName={string}/>
            );
        } else {
            return (
                value
            ) 
        }

    }
    toggleEditable() {
        if (this.state.isEditable) {
            this.setState({
                isEditable: false,
                editButton: 'Edit',
                startSaveButton: 'Start'
            })
        } else {
            this.setState({
                isEditable: true,
                editButton: 'Cancel',
                startSaveButton: 'Save'
            })
        }
    }
    renderStartSaveButton() {
        if (this.state.startSaveButton === 'Save') {
            return (
                < SecondaryHollowButton 
                    buttonName={'Save'} 
                    onClickHandler={() => this.updateGuidelinesItem()}/>
            )
        } else {
            return (
               <PrimaryButton buttonName='Start'/>
            )
        }
    }
    updateGuidelinesItem() {
        const {name, description, link} = this.state,
            _id = this.props._id,
            updatedGuideline = {
                name,
                description,
                link,
                _id
            }
        this.props.submitPutRequest(updatedGuideline);
    }
    render() {
        const {index, name, link, updatedAt, description, editButton} = this.state;
        return (
            <tr key={index}>
                <td>
                   {this.renderEditableOrNot(name,'name')}
                    <p>
                        {this.renderEditableOrNot(description,'description')}
                    </p>
                </td>
                <td>
                    {this.renderEditableOrNot(link,'link')}
                </td>
                <td>
                    <div className='date-section'>
                        {updatedAt}
                    </div>
                    <div className='buttons-section'>
                       < SecondaryHollowButton 
                            buttonName={editButton} 
                            onClickHandler={this.toggleEditable}/>
                        {this.renderStartSaveButton()}   
                    </div>
                </td>
            </tr>
        );
    }
}

export default connect(
    (state) => {
        return {
            guidelines: state.guidelines
        };
    }
)(GuidelinesList);
