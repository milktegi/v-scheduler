import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
	return (
		<ul className="right">
			<li><NavLink to="/">새 일정</NavLink></li>
			<li><NavLink to="/">로그아웃</NavLink></li>
			<li><NavLink to="/" 
			className="btn btn-floating pink lighten-1"
			>mm</NavLink>
			</li>
		</ul>
	)
}

export default SignedInLinks;