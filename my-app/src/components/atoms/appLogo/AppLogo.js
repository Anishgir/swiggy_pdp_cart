import React from 'react';
import swiggylogo from '../../../images/swiggylogo.png';
import './styles.css';

function AppLogo(props) {
  return (
    <a href="/"> 
        <img src={swiggylogo} alt = {props.alt} className = "swiggy-logo" /> 
    </a>
  );
}

export default AppLogo;
