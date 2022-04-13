import React from 'react';
import facebookImg from '../../../images/facebook.png';
import instagramImg from '../../../images/instagram.png';
import pinterestImg from '../../../images/pinterest.png';
import twitterImg from '../../../images/twitter.png';

export default function CompaniesLogoList(props) {
  return (
    <ul>
        <li><img src = {facebookImg} alt = {props.facebookLogo} /></li>
        <li><img src = {pinterestImg} alt = {props.instagramLogo} /></li>
        <li><img src = {instagramImg} alt = {props.twitterLogo} /></li>
        <li><img src = {twitterImg} alt = {props.pinterestLogo} /></li>
    </ul>
  );
}
