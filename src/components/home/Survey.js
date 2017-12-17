import React, {Component} from 'react';
import RefreshButton from '../buttons/RefreshButton.js';
import {Link} from 'react-router-dom';
import './Survey.css';

class Survey extends Component {
  testFetch() {
    fetch(`/user`, {
      method: 'GET',
      accept: 'application/json',
    }).then( response => response.json())
    .then(data => console.log(data));
  }
  render() {
    return (
      <div className='survey-page'>
        <div className='survey-container'>
          <h2>Lorum Ipsum</h2>
          <h3>In venenatis pellentesque felis vitae varius</h3>
          <RefreshButton onClick={ () => this.refreshPage()}/>
          <iframe className='survey' src='https://www.surveymonkey.com/r/YDM5DWK'/>
        </div>
        <button onClick={ () => this.testFetch()}></button>
      </div>
    );
  }
}

export default Survey;
 