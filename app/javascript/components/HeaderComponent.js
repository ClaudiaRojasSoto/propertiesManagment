import React from 'react';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';

const HeaderComponent = () => {
  return (
    <header>
      <h1>Property Management</h1>
      <nav>
        <LoginButton />
        <SignupButton />
      </nav>
    </header>
  );
};

export default HeaderComponent;
