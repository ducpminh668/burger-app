import React from 'react';
import BurgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const Logo = props => {
  return (
    <div className="Logo">
      <img src={BurgerLogo} alt="burger-logo" />
    </div>
  );
};

export default Logo;
