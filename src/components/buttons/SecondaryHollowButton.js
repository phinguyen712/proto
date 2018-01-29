import React, { Component } from 'react';
import './SecondaryHollowButton.css'

class SecondaryHollowButton extends Component {
    render() {
        return (
            <button className='modify-button' type='button' onClick={() => this.props.onClickHandler()}>
                {this.props.buttonName}
            </button>
        );
    }
}

export default SecondaryHollowButton;
