import React from 'react';
import swiggyImg from '../../../images/swiggy.png';
import CompaniesLogoList from './SocialsList.js';
import styles from './footer.module.css';

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
         <img src={swiggyImg} alt={props.alt} />
         <span>2022 Swiggy</span>
         <CompaniesLogoList facebookLogo = {'Facebook Logo'} instagramLogo = {'Instagram Logo'} twitterLogo = {'Twitter Logo'} PinterestLogo = {"pinterest logo"}/>
    </footer>
  );
}
