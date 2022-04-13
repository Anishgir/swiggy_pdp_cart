import React from 'react';
import AddItemButton from '../../atoms/addItem/AddItemButton';
import VegMarkLogo from '../../atoms/vegMarkLogo/VegMarkLogo';
import MenuItemImage from '../../atoms/menuItemImage/MenuItemImage';

export default function ItemDescription(props) {
  const {categoryItem:{displayName,price,imgUrl}} = props;
  return (
    <div className='item-description'>
      <div>
        <VegMarkLogo alt = {'Veg Mark Logo'}/>
        <p className='dish-name'>{displayName}</p>
        <p>{'\u20B9'}{price}</p>
      </div>
      <div className='container'>
          <MenuItemImage URL = {imgUrl} alt = {"Food Image"}/>
          <AddItemButton/>
      </div>
    </div>
  );
}
