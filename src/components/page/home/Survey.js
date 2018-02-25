import React, {Component} from 'react';
import {Redirect} from 'react-router';
import RefreshButton from '../../buttons/RefreshButton.js';
import SecondaryHollowButton from '../../buttons/SecondaryHollowButton.js';
import actions from '../../../store/actions';
import { connect } from 'react-redux';
import './Survey.css';

class Survey extends Component {
	constructor() {
		super();
		this.state = {
			fireRedirect: false
		}
		this.returnToGuidelines = this.returnToGuidelines.bind(this);
	}
	returnToGuidelines() {
		this.props.dispatch(actions.updateCurrentView({homePage: 'showGuidelinesList'}));
	}
	render() {
		const { url, name, description} = this.props;
		return (
			<div className='survey-page'>
				<div className='survey-container'>
					<h3>{name}</h3>
					<p>{description}</p>
					<RefreshButton/>
					<SecondaryHollowButton buttonName ='Back' onClickHandler={() => this.returnToGuidelines()}/>
					<iframe title='survey' className='survey' src={url}/>
					{this.state.fireRedirect && (<Redirect to='/'/>)}
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
		return {
				url: state.currentView.surveyToRenderUrl,
				name : state.currentView.surveyToRenderName,
				description: state.currentView.surveyToRenderDescription
		};
	}
)(Survey);

 