import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo darken-8">
      <div className="container">
        <Link to="/" className="brand-logo sm left">
          v-scheduler
        </Link>
        {/** 추후 조건부 렌더링 필요 */}
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

export default Navbar;
