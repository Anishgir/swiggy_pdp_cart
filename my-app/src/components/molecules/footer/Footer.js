import React from 'react';
import swiggyImg from '../../../images/swiggy.png';
import CompaniesLogoList from './CompaniesLogoList.js';
import './styles.css';

export default function Footer(props) {
  return (
    <footer className="footer">
         <img src={swiggyImg} alt={props.alt} />
         <p>2022 Swiggy</p>
         <CompaniesLogoList facebookLogo = {'Facebook Logo'} instagramLogo = {'Instagram Logo'} twitterLogo = {'Twitter Logo'} PinterestLogo = {"pinterest logo"}/>
    </footer>
  );
}
