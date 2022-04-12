import React from 'react';
import bannerImage from './images/banner_image.jpeg';

export default function Banner(props) {
  const {heading,alt} = props;
  return (
     <section className="banner">
         <img src= {bannerImage} alt = {alt} />
         <h1>{heading}</h1>
      </section>
  );
}
