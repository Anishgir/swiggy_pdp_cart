import React from 'react';
import facebookImg from '../../../images/facebook.png';
import instagramImg from '../../../images/instagram.png';
import pinterestImg from '../../../images/pinterest.png';
import twitterImg from '../../../images/twitter.png';
import SocialListItem from './SocialListItem';

export default function SocialsList(props) {
  const socialList = [{URL:facebookImg,alt:props.facebookLogo,id:'1'},{URL:instagramImg,alt:props.instagramLogo,id:'2'},{URL:twitterImg,alt:props.twitterLogo,id:'3'},{URL:pinterestImg,alt:props.pinterestLogo,id:'4'}];
  return (
    <ul>
        {socialList.map((item) => {
          return <SocialListItem key = {item.id}URL = {item.URL} alt = {item.alt} id = {item.id}/>
        })}
    </ul>
  );
}
