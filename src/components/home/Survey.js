import React, {Component} from 'react';
import RefreshButton from '../buttons/RefreshButton.js';
import {Link} from 'react-router-dom';
import './Survey.css';

class Survey extends Component {
  testFetch() {
    console.log('hey')
    fetch(`/account/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username:'phil', 
        password:'nguyen'
      })
    }).then( response => response.json())
    .then(data => console.log(data));
  }
  testFetch2() {
    console.log('heyss')
    fetch(`/guideline/create`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:'philsss', 
        description:'nguyen',
        link: 'sfsdfs'
      })
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
        <button onClick={ () => this.testFetch2()}>TestFestch2</button>
      </div>
    );
  }
}

export default Survey;
 