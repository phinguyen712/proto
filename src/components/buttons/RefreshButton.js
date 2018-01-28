import React, { Component } from 'react';
import './RefreshButton.css'

class RefreshButton extends Component {
    refreshPage() {
        window.parent.location = window.parent.location.href;
    }
    render() {
        return (
            <button className='refresh-button' type='button'  onClick={() => this.props.onClickHandler()}>
                Start Over
            </button>
        );
    }
}

export default RefreshButton;
