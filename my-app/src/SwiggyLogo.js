import React from 'react';
import swiggylogo from './images/swiggylogo.png';

export default function SwiggyLogo() {
  return (
    <div>
      <a href="/"> <img src={swiggylogo} alt = "Swiggy Logo" className = "swiggy-logo" /> </a>
      <a href="/">Set location</a> 
      <a href="/">Click to Choose Location</a>
    </div>
  );
}
