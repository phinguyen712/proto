import React, { Component } from 'react';
import {
	Nav,
	NavItem
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {
	renderLoggedInUser() {
		if(this.props.username) {
			return <Link to='/ManageUsers'>{this.props.username}</Link>;
		} else {
			return <Link to='/ManageUsers'>Log In</Link>;
		}

	}
	render() {
		return (
			<div className='header-nav-bar-container'>
				<div className='header-nav-bar'>
					<div className='brand-logo'>Brand</div>
					<Nav className='nav-menu-item'>
						<NavItem>
							<Link to='/'>Home</Link>
						</NavItem>
						<NavItem>
							<Link to='/Resources'>Resources</Link>
						</NavItem>
						<NavItem>
							<Link to='/ManageUsers'>Manage Users</Link>
						</NavItem>	
					</Nav>
					<div className='user-status'>{this.renderLoggedInUser()}</div>
				</div>
			</div>
		);
	}
}

export default connect(
    (state) => {
        return {
            username: state.account.username,
        };
    }
)(Header);
