import React, { Component } from 'react';
import{Link} from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className='header-nav-bar'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Resources'>Resources</Link></li>
            <li><Link to='/ManageUsers'>Manage Users</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;
