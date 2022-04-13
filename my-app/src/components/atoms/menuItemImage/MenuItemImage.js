import React from 'react';
import './styles.css';

function MenuItemImage(props) {
  return (
    <React.Fragment>
      <img src = {props.URL} alt = {props.alt} className='item-image' />
    </React.Fragment>
  );
}

export default MenuItemImage;
