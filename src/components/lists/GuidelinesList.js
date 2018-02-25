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
        if(this.props.accountType === 'admin') {
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
        if(this.props.accountType === 'admin') {
            return <AddButton buttonName='Add Survey' onClickHandler={this.renderAddSurvey}/>
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
                    />
                );
            }) 
        );
    }
    render() {
        return(
            <div>
                {this.renderAddSurveyButton()}
                <table className='guidelineListTable'>
                    <thead className='guidelines-header'>
                        <th>Diastology</th> 
                        {this.renderLink()}
                        <th>Date Modified</th>
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
            accountType: state.account.type
        };
    }
)(GuidelinesList);
