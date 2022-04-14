import React from 'react';
import CategoryInfo from './CategoryInfo.js';
import ItemDescription from './ItemDescription.js';

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
  const {categories,menuItems} = props
  const itemsByCategoryMap = createItemByCategoryMap(categories,menuItems);
  const categoryItemsList = itemsByCategoryMap.get(props.categoryName.toLowerCase());
  return (
    <div>
      <CategoryInfo categoryName = {props.categoryName} numberOfItems = {categoryItemsList.length}/>
      {categoryItemsList.map(categoryItem => {
          return <ItemDescription key = {categoryItem.id} categoryItem = {categoryItem} alt = {'Food'}/>
      })}
    </div>
  );
}

export default Category;
