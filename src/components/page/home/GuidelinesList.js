import './GuidelinesList.css';

import React, {Component} from 'react';
import RefreshButton from '../../buttons/RefreshButton.js';
import {Link} from 'react-router-dom';
import './GuidelinesList.css';
import { connect } from 'react-redux';
import actions from '../../../store/actions';

class GuidelinesList extends Component {
    constructor() {
        super();
        this.showEditor = this.showEditor.bind(this);
    }
    showEditor() {
        this.props.dispatch(actions.updateCurrentView({homePage:'showEditor'}));
    }
    render() {
        return(
            <div>
                <button 
                    color='secondary' 
                    onClick={this.showEditor}>
                    Create new
                </button>
                <h1>
                    GUIDELINELISTS
                </h1>
            </div>
        )

    }
}

export default connect(
    (state) => {
        return {
            account: state.account,
            currentView: state.currentView.homePage
        };
    }
)(GuidelinesList);
