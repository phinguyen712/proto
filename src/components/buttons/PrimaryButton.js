import React, { Component } from 'react';
import './PrimaryButton.css'

class PrimaryButton extends Component {
    render() {
        return (
            <button className='primary-button' type='button' onClick={() => this.props.onClickHandler()}>
                {this.props.buttonName}
            </button>
        );
    }
}

export default PrimaryButton;
