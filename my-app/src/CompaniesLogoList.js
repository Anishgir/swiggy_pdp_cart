import React from 'react';
import facebookImg from './images/facebook.png';
import instagramImg from './images/instagram.png';
import pinterestImg from './images/pinterest.png';
import twitterImg from './images/twitter.png';

export default function CompaniesLogoList() {
  return (
    <ul>
        <li><img src = {facebookImg} alt = "facebook logo" /></li>
        <li><img src = {pinterestImg} alt = "pinterest logo" /></li>
        <li><img src = {instagramImg} alt = "instagram logo" /></li>
        <li><img src = {twitterImg} alt = "twitter logo" /></li>
    </ul>
  );
}
