import React from 'react';
import CreateCategoryInfo from './CategoryInfo.js';
import CreateItemDescription from './ItemDescription.js';
import categories from '../../../mocks/categories.json';
import menuItems from '../../../mocks/menuItems.json';

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

function Category(props) {
  const itemsByCategoryMap = createItemByCategoryMap(categories,menuItems);
  const categoryItemsList = itemsByCategoryMap.get(props.categoryName.toLowerCase());
  return (
    <div>
      <CreateCategoryInfo categoryName = {props.categoryName} numberOfItems = {categoryItemsList.length}/>
      {categoryItemsList.map(categoryItem => {
          return <CreateItemDescription key = {categoryItem.id} categoryItem = {categoryItem} alt = {'Food'}/>
      })}
    </div>
  );
}

export default Category;
