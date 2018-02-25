import React, { Component } from 'react';
import Survey from './Survey.js'
import GuidelinesList from '../../lists/GuidelinesList';
import GuideLineAddForm from '../../forms/GuideLineAddForm';
import './Home.css';
import { connect } from 'react-redux';

class Home extends Component {
    renderView() {
        const {currentView} = this.props;
        if (currentView === 'showGuidelinesList') {
            return (
                // Render guidelinelist or empty home view
                <div className="guidelinesList">
                    {this.renderDefaultHomePage()}
                </div>
            );
        } else if (currentView === 'showSurvey') {
            return (
                <div>
                    <Survey/>
                </div>
            );
        } else if (currentView === 'showGuideLineAddForm') {
            return (
                <div>
                    <GuideLineAddForm/>
                </div>
            )
        } else {
            return <div></div>
        }
    }
    // Render default homepage guidelinelist based on login
    renderDefaultHomePage() {
        if(this.props.account.username) {
            return (
                <div>
                     <GuidelinesList/>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>
                        Please Log in
                    </h1>
                </div>
            )
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
