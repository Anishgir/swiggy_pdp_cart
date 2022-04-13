import React from 'react';
import swiggylogo from '../../../images/swiggylogo.png';
import './styles.css';

function AppLogo() {
  return (
    <a href="/"> 
        <img src={swiggylogo} alt = "Swiggy Logo" className = "swiggy-logo" /> 
    </a>
  );
}

export default AppLogo;
