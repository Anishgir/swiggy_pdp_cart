import React from 'react';

export default function CreateCategoryInfo(props) {
  return (
    <div className='category-info'>
      <h3>{props.categoryName}</h3>
      <p>{props.numberOfItems} Items</p>
    </div>
  );
}
