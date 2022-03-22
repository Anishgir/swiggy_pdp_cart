import React from 'react';
import CreateCategoryInfo from './CreateCategoryInfo.js';
import CreateItemDescription from './CreateItemDescription.js';
import categories from './categories.json';
import menuItems from './menuItems.json';

export default function CreateCategory(props) {
  function addItemByCategoryInMap(map, key, menuItem) {
    if (map.has(key)) {
        map.get(key).push(menuItem);
    }
  }

  function addMenuItemsInMap(map, menuItem) {
      menuItem.categories.forEach(key => addItemByCategoryInMap(map, key, menuItem));
  }

  function addEmptyListByKeyInMap(map, key) {
      if (!map.has(key.displayName.toLowerCase())) {
          map.set(key.displayName.toLowerCase(), []);
      }
  }

  function createItemByCategoryMap(categories, menuItems) {
      const map = new Map();
      categories.forEach(key => addEmptyListByKeyInMap(map, key));
      menuItems.forEach(menuItem => addMenuItemsInMap(map, menuItem));
      return map;
  }

  const itemsByCategoryMap = createItemByCategoryMap(categories,menuItems);
  const categoryItemsList = itemsByCategoryMap.get(props.categoryName.toLowerCase());
  return (
    <div>
      <CreateCategoryInfo categoryName = {props.categoryName} numberOfItems = {categoryItemsList.length}/>
      {categoryItemsList.map(categoryItem => {
          return <CreateItemDescription categoryItem = {categoryItem}/>
      })}
    </div>
  );
}
