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
    renderHeader() {
        return (
            <tr className='header'>
                <th>Diastology</th> 
                <th>Link</th>
                <th>Date Modified</th>
            </tr>
        )
    }
    renderItems() {
        return(
            this.props.guidelines.map((item, i) => {
                const guidelineName = (item.name) ? item.name : '';
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
        console.log('hey')
        this.props.dispatch(actions.updateCurrentView({'homePage': 'showGuideLineAddForm'}))
    }
    render() {
        return(
            <div>
                <table className='guidelineListTable'>
                    <AddButton buttonName='Add Survey' onClickHandler={this.renderAddSurvey}/>
                    <tbody>
                        {this.renderHeader()}
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
            guidelines: state.guidelines
        };
    }
)(GuidelinesList);
