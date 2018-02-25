import React, {Component} from 'react';
import './GuidelinesList.css';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import axios from 'axios';
import GuidelinesListItem from './GuidelinesListItem';
import AddButton from '../buttons/AddButton'

class GuidelinesList extends Component {
    constructor() {
        super();
        this.submitPutRequest = this.submitPutRequest.bind(this);
        this.renderAddSurvey = this.renderAddSurvey.bind(this);
    }
    renderLink() {
        if(this.props.account.type === 'admin') {
            return <th>Link</th>
        }
    }
    submitPutRequest(data) {
        const self = this;
        axios.put('/guidelines/edit', {
            _id: data._id,
            name: data.name,
            description: data.description,
            link: data.link
        })
        .then((response) => {
            if(response.status === 200) {
                self.props.dispatch(actions.retrieveGuidelines(response.data));
                window.location.reload();
            } else {
                throw(response)
            }
        })
        .catch((err) => {
            console.log(err)
        });
    }
    renderAddSurvey() {
        this.props.dispatch(actions.updateCurrentView({'homePage': 'showGuideLineAddForm'}))
    }
    renderAddSurveyButton() {
        if(this.props.account.type === 'admin') {
            return <div className='add-guideline-button' onClick={() => this.renderAddSurvey()}> +Create New</div>
        }
    }
    renderItems() {
        let guidelineName;
        return(
            this.props.guidelines.map((item, i) => {
                guidelineName = (item.name) ? item.name : '';
                return(
                    <GuidelinesListItem
                        key={i}
                        _id={item._id}
                        name={guidelineName}
                        description={item.description}
                        link={item.link}
                        updatedDate={item.meta.updated_at}
                        submitPutRequest={this.submitPutRequest}
                    />
                );
            }) 
        );
    }
    render() {
        return(
            <div>
                <div className='guidelineList-top'>
                    <h3>Welcome back <span>{this.props.account.username}</span></h3>
                    {this.renderAddSurveyButton()}
                </div>
                <table className='guidelineListTable'>
                    <thead className='guidelines-header'>
                        <th>Diastology</th> 
                        {this.renderLink()}
                        <th className='right-column'>Date Modified</th>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            guidelines: state.guidelines,
            account: state.account
        };
    }
)(GuidelinesList);
