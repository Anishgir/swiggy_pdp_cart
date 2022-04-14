import React from 'react';
import './styles.css';

function AppLogo({src,alt,className}) {
  return (
    <a href="/"> 
        <img src={src} alt = {alt} className = {className} /> 
    </a>
  );
}

export default AppLogo;
