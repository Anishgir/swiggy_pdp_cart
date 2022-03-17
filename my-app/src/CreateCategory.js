import React from 'react';
import CreateCategoryInfo from './CreateCategoryInfo.js';
import CreateItemDescription from './CreateItemDescription.js';

export default function CreateCategory(props) {
  const categoryItemsList = props.categoryItemsList;
  return (
    <div>
      <CreateCategoryInfo categoryName = {props.categoryName} numberOfItems = {categoryItemsList.length}/>
      {categoryItemsList.map(categoryItem => {
          return <CreateItemDescription categoryItem = {categoryItem}/>
      })}
    </div>
  );
}
