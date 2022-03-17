import React from 'react';
import swiggyImg from './images/swiggy.png';
import CompaniesLogoList from './CompaniesLogoList.js';

export default function Footer() {
  return (
    <footer className="footer">
         <img src={swiggyImg} alt="swiggy logo" />
         <p>2022 Swiggy</p>
         <CompaniesLogoList />
    </footer>
  );
}
