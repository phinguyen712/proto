import React, {Component} from 'react';
import {Redirect} from 'react-router';
import PrimaryhButton from '../../buttons/PrimaryButton.js';
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
		this.refreshPage = this.refreshPage.bind(this);
		this.returnToGuidelines = this.returnToGuidelines.bind(this);
	}
	refreshPage(e) {
		window.location.reload();
	}
	returnToGuidelines() {
		this.props.dispatch(actions.updateCurrentView({homePage: 'showGuidelinesList'}));
	}
	render() {
		return (
			<div className='survey-page'>
				<div className='survey-container'>
					<h2>Lorum Ipsum</h2>
					<h3>In venenatis pellentesque felis vitae varius</h3>
					<PrimaryhButton buttonName ='Start Over' onClickHandler={() => this.refreshPage()}/>
					<SecondaryHollowButton buttonName ='Back' onClickHandler={() => this.returnToGuidelines()}/>
					<iframe title='survey' className='survey' src={this.props.url}/>
					{this.state.fireRedirect && (<Redirect to='/'/>)}
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => {
			return {
				  url: state.currentView.surveyToRenderUrl
			};
	}
)(Survey);

 