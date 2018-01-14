import React, { Component } from 'react';
import './PrimaryButton.css'

class RefreshButton extends Component {
    render() {
        return (
            <button className='action-button' type='button'>
                {this.props.buttonName}
            </button>
        );
    }
}

export default RefreshButton;
