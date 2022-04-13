import React from 'react';

export default function CategoryInfo(props) {
  const {categoryName,numberOfItems} = props;
  return (
    <div className='category-info'>
      <h3>{categoryName}</h3>
      <p>{numberOfItems} Items</p>
    </div>
  );
}
