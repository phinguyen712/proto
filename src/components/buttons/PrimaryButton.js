import React, { Component } from 'react';
import './PrimaryButton.css'

class RefreshButton extends Component {
    render() {
        return (
            <button className='action-button' type='button' onClick={() => this.props.onClickHandler()}>
                {this.props.buttonName}
            </button>
        );
    }
}

export default RefreshButton;
