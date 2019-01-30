import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

import { connect } from 'react-redux';

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-4">
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

// handle auth state
const mapStateToProps = state => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Navbar);
