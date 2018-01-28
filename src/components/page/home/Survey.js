import React, {Component} from 'react';
import {Redirect} from 'react-router';
import RefreshButton from '../../buttons/PrimaryButton.js';
import { connect } from 'react-redux';
import './Survey.css';

class Survey extends Component {
	constructor() {
		super();
		this.state = {
			fireRedirect: false
		}
		this.refreshPage = this.refreshPage.bind(this);
	}
	refreshPage(e) {
		window.location.reload();
	}
	render() {
		return (
			<div className='survey-page'>
				<div className='survey-container'>
					<h2>Lorum Ipsum</h2>
					<h3>In venenatis pellentesque felis vitae varius</h3>
						<RefreshButton onClickHandler={() => this.refreshPage()}/>
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

 