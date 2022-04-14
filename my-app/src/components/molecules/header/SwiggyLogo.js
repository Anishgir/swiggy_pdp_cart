import React from 'react';
import swiggylogo from '../../../images/swiggylogo.png';
import AppLogo from '../../atoms/image/Image';

function SwiggyLogo() {
  return (
    <div>
      <AppLogo alt = {'App Logo'} src = {swiggylogo} className = {'swiggy-logo'}/>
      <a href="/">Set location</a> 
      <a href="/">Click to Choose Location</a>
    </div>
  );
}

export default SwiggyLogo;
