import React from 'react';
import CreateItem from './CreateItem.js'
import categories from './categories.json'

export default function CreateItemList() {
  return (
    <ul>
      {categories.map(item => {
          return <CreateItem categoryName = {item.displayName} id = {item.id}/>  
      })}
    </ul>
  );
}