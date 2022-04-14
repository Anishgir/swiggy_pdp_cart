import React from 'react';
import Button from '../../atoms/button/Button';
import vegMark from '../../../images/veg_mark.png';
import Image from '../../atoms/image/Image.js';

export default function ItemDescription(props) {
  const {categoryItem:{displayName,price,imgUrl}} = props;
  return (
    <div className='item-description'>
      <div>
        <Image src = {vegMark} alt = {'Veg Mark Logo'} className = {'veg-mark'}/>
        <p className='dish-name'>{displayName}</p>
        <p>{'\u20B9'}{price}</p>
      </div>
      <div className='container'>
          <Image src = {imgUrl} alt = {'Food Image'} className = {'item-image'}/>
          <Button className = {'add-item-btn'} buttonName = {'ADD'}/>
      </div>
    </div>
  );
}
