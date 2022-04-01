import React from 'react';
import bannerImage from './images/banner_image.jpeg';

export default function Banner(props) {
  return (
     <section className="banner">
         <img src= {bannerImage} alt = "Food" />
         <h1>{props.restorantName}</h1>
      </section>
  );
}
