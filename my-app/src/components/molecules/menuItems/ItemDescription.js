import React from 'react';
import AddItemButton from '../../atoms/addItem/AddItemButton';
import VegMarkLogo from '../../atoms/vegMarkLogo/VegMarkLogo';
import MenuItemImage from '../../atoms/menuItemImage/MenuItemImage';

export default function CreateItemDescription(props) {
  return (
    <div className='item-description'>
      <div>
        <VegMarkLogo/>
        <p className='dish-name'>{props.categoryItem.displayName}</p>
        <p>{'\u20B9'}{props.categoryItem.price}</p>
      </div>
      <div className='container'>
          <MenuItemImage URL = {props.categoryItem.imgUrl} alt = {"Food Image"}/>
          <AddItemButton/>
      </div>
    </div>
  );
}
