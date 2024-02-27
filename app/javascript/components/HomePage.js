import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import HeroComponent from './HeroComponent';
import FooterComponent from './FooterComponent';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      {!showLogin && !showSignup && (
        <HeaderComponent setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      )}
      {showLogin && <FormLogin setShowLogin={setShowLogin} />}
      {showSignup && <FormSignup setShowSignup={setShowSignup} />}
      <HeroComponent />
      <FooterComponent />
    </div>
  );
};

export default HomePage;
