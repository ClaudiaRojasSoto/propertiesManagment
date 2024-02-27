import React from 'react';
import PropTypes from 'prop-types';

const HeaderComponent = ({ setShowLogin, setShowSignup }) => {
  return (
    <header>
      <h1>Property Management</h1>
      <nav>
        <button onClick={() => setShowLogin(true)}>Login</button>
        <button onClick={() => setShowSignup(true)}>Sign Up</button>
      </nav>
    </header>
  );
};

HeaderComponent.propTypes = {
  setShowLogin: PropTypes.func.isRequired,
  setShowSignup: PropTypes.func.isRequired,
};

export default HeaderComponent;
