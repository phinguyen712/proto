import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './GuidelinesList.css';
import { connect } from 'react-redux';
import actions from '../../store/actions';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryHollowButton from '../buttons/SecondaryHollowButton';
import {RIEInput} from 'riek';
import axios from 'axios';
import GuidelinesListItem from './GuidelinesListItem';

class GuidelinesList extends Component {
    renderHeader(){
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
                <GuidelinesListItem
                    index={i}
                    name={guidelineName}
                    description={item.description}
                    link={item.link}
                    updatedDate={item.meta.updated_at}
                />
            }) 
        );
    }
    render() {
        return(
            <table className='guidelineListTable'>
                <tbody>
                    {this.renderHeader()}
                    {this.renderItems()}
                </tbody>
            </table>
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
