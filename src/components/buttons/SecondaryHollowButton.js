import React, { Component } from 'react';
import './SecondaryHollowButton.css'

class RefreshButton extends Component {
    render() {
        return (
            <button className='modify-button' type='button'>
                {this.props.buttonName}
            </button>
        );
    }
}

export default RefreshButton;
