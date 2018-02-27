import React, {Component} from 'react'; 
import './GuidelinesListItem.css';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryHollowButton from '../buttons/SecondaryHollowButton';
import {RIEInput} from 'riek';
import DeleteButton from '../buttons/DeleteButton';
import axios from 'axios';

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
        this.isAdmin = (this.props.accountType === 'admin');
        this.index = this.props.index;
        this.updateListState = this.updateListState.bind(this);
        this.toggleEditable = this.toggleEditable.bind(this);
        this.renderStartSaveButton = this.renderStartSaveButton.bind(this);
        this.updateGuidelinesItem = this.updateGuidelinesItem.bind(this);
        this.renderSurvey = this.renderSurvey.bind(this);
        this.deleteGuideLines = this.deleteGuideLines.bind(this);
    }
    updateListState(event) {
        if (event.name) {
            this.setState({name: event.name});
        } else if(event.description) {
            this.setState({description: event.description});
        } else if(event.link) {
            this.setState({link: event.link});
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

        if (this.state.editButton === 'Cancel') {
            this.setState({
                name: this.props.name,
                description: this.props.description,
                link: this.props.link,
            });
        }
    }
    renderEditButton() {
        const {editButton} = this.state;
        if (this.isAdmin) {
            return  < SecondaryHollowButton 
                        buttonName={editButton} 
                        onClickHandler={this.toggleEditable}/>
        }
    }
    renderStartSaveButton() {
        const self = this;
        if (this.state.startSaveButton === 'Save') {
            return (
                <SecondaryHollowButton 
                    buttonName='Save'
                    onClickHandler={this.updateGuidelinesItem}/>
            )
        } else {
            return (
                <PrimaryButton 
                    buttonName='Start'  
                    onClickHandler={() => self.renderSurvey()}/>
            )
        }
    }
    renderDeleteButton() {
        if (this.state.isEditable && this.isAdmin) {
            return <DeleteButton onClickHandler={this.deleteGuideLines}/>
        }
    }
    deleteGuideLines(){
        axios.delete('guidelines/delete', {data: {_id: this.props._id}})
		.then((response) => {
			if(response.status === 200) {
				window.parent.location = window.parent.location.href;
			} else {
				throw(response)
			}
		})
		.catch((err) => {
			console.log(err)
		});
    }
    renderSurvey() {
        const {link, name, description, dispatch} = this.props;
        dispatch(actions.renderSurvey(link, name, description))
        dispatch(actions.updateCurrentView({homePage: 'showSurvey'}))
    }
    renderLink() {
        const {link} = this.state;
        if (this.isAdmin) {
            return this.renderEditableOrNot(link,'link');
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
            return value;
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
        const {index, name, updatedDate, description} = this.state;
        return (
            <tr key={index}>
                <td className='name-description-section'>
                   {this.renderEditableOrNot(name,'name')}
                    <p>
                        {this.renderEditableOrNot(description,'description')}
                    </p>
                </td>
                <td className='link-section'>
                    {this.renderLink()}
                </td>
                <td className='date-buttons-section'>
                    <div className='date-button-container'>
                        <div className='date-section'>
                            {updatedDate}
                        </div>
                        <div className='buttons-section'>
                            {this.renderEditButton()}
                            {this.renderStartSaveButton()}
                            {this.renderDeleteButton()}   
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default connect(
    (state) => {
        return {
            guidelines: state.guidelines,
            accountType: state.account.type
        };
    }
)(GuidelinesList);
