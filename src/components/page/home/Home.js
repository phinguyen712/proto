import React, { Component } from 'react';
import Survey from './Survey.js'
import GuidelinesList from './GuidelinesList';
import GuidelinesEditor from './GuidelinesEditor'
import './Home.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Button } from 'reactstrap';
import actions from '../../../store/actions';

class Home extends Component {
    renderView() {
        const {currentView} = this.props;
        if (currentView === 'showGuidelinesList') {
            return (
                <div>
                    <GuidelinesList/>
                </div>
            );
        } else if (currentView === 'showSurvey') {
            return (
                <div>
                    <Survey/>
                </div>
            );
        } else if (currentView === 'showEditor') {
            return (
                <div>
                    <GuidelinesEditor/>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    componentWillMount(){
        const { dispatch ,account } = this.props;
        if (account.type === 'admin') {
            dispatch(actions.updateCurrentView({homePage:'showGuidelinesList'}));
        } else {
            dispatch(actions.updateCurrentView({homePage:'showSurvey'}));
        }
    }
    render() {
        return (
            this.renderView()
        );
    }
}

export default connect(
    (state) => {
        return {
            account: state.account,
            currentView: state.currentView.homePage
        };
    }
)(Home);
