import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {

	return (
		<ul className="right">
			<li><NavLink to="/create">새 일정</NavLink></li>
			<li><a onClick={props.signOut}>로그아웃</a></li>
			<li><NavLink to="/" 
			className="btn btn-floating pink lighten-1"
			>mm</NavLink>
			</li>
		</ul>
	)
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut())
	}
}

export default connect(null, mapDispatchToProps)(SignedInLinks);