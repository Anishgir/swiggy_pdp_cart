import React from 'react';
import veg_mark from './images/veg_mark.png'

export default function CreateItemDescription(props) {
  return (
    <div className='item-description'>
      <div>
        <img src={veg_mark} alt="Veg Mark Logo" className='veg-mark'/>
        <p className='dish-name'>{props.categoryItem.displayName}</p>
        <p>{props.categoryItem.price}</p>
      </div>
      <div className='container'>
          <img src = {props.categoryItem.imgUrl} alt="food Item" className='item-image' />
          <button className='add-item-btn'>ADD</button>
      </div>
    </div>
  );
}
