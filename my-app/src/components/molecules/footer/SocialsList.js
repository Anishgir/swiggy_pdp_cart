import React from 'react';
import facebookImg from '../../../images/facebook.png';
import instagramImg from '../../../images/instagram.png';
import pinterestImg from '../../../images/pinterest.png';
import twitterImg from '../../../images/twitter.png';
import SocialListItem from './SocialListItem';

export default function SocialsList(props) {
  const socialList = [{URL:facebookImg,alt:props.facebookLogo},{URL:instagramImg,alt:props.instagramLogo},{URL:twitterImg,alt:props.twitterLogo},{URL:pinterestImg,alt:props.pinterestLogo}];
  return (
    <ul>
        {socialList.map((item) => {
          return <SocialListItem URL = {item.URL} alt = {item.alt}/>
        })}
    </ul>
  );
}
