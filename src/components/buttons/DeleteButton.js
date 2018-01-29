import React, { Component } from 'react';
import './DeleteButton.css'

class DeleteButton extends Component {
    render() {
        return (
            <button className='delete-button' type='button' onClick={() => this.props.onClickHandler()}>
                DELETE
            </button>
        );
    }
}

export default DeleteButton;
