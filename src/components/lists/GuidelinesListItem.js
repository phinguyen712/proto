import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './GuidelinesList.css';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryHollowButton from '../buttons/SecondaryHollowButton';
import {RIEInput} from 'riek';
import axios from 'axios'

class GuidelinesList extends Component {
    constructor() {
        super();
        this.state = {
            index: this.props.index,
            name: this.props.name,
            description: this.props.description,
            link: this.props.link,
            updatedDate: this.props.updatedDate
        }
    }
    updateListState(event) {
        if (event.name) {
            this.setState({name:event.name})
        }
    }
    updateList() {
        const {guidelines} = this.props.guidelines;
       
        axios.put('guidelines/edit', {
            id: guidelines._id,
            name: guidelines.name,
            description: guidelines.description,
            link: guidelines.link
        })
		.then((response) => {
			if(response.status === 200) {
				this.props.dispatch(actions.updateUserObject(response.data));
			} else {
				throw(response)
			}
		})
		.catch((err) => {
			console.log(err)
		});
    }
    render() {
        const {index, name, link, updatedAt, description} = this.state;
        return (
            <tr key={index}>
                <td>
                    <RIEInput
                        value={name}
                        change={this.updateListState}
                        propName='name'/>
                    <p>
                        {description}
                    </p>
                </td>
                <td>
                    {link}
                </td>
                <td>
                    <div className='date-section'>
                        {updatedAt}
                    </div>
                    <div className='buttons-section'>
                       <SecondaryHollowButton buttonName='Edit' onClick={() => this.editSurvey()}/>
                       <PrimaryButton buttonName='Start'/>
                    </div>
                </td>
            </tr>
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
