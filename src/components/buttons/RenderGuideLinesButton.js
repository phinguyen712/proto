import React, { Component } from 'react';
import {connect} from 'react-redux'
import SecondaryHollowButton from './SecondaryHollowButton';
import actions from '../../store/actions';

class renderGuideLinesList extends Component {
    constructor() {
        super();
        this.renderGuideLinesList = this.renderGuideLinesList.bind(this);
    }
    renderGuideLinesList() {
        this.props.dispatch(actions.updateCurrentView({homePage: 'showGuidelinesList'}));
    }
    render() {
        return (
            <SecondaryHollowButton buttonName='BACK' onClickHandler={this.renderGuideLinesList}/>
        );
    }
}

export default connect()(renderGuideLinesList);
