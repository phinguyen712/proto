import React, { Component } from 'react';
import './AddButton.css'

class AddButton extends Component {
    render() {
        return (
            <button className='action-button' type='button' onClick={() => this.props.onClickHandler()}>
                {this.props.buttonName}
            </button>
        );
    }
}

export default AddButton;
