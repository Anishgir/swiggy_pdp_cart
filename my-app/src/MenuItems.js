import React from 'react';
import categories from './categories.json';
import menuItems from './menuItems.json';
import CreateCategory from './CreateCategory.js';

export default function MenuItems() {
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
    return (
    <div className='menu-items col-4'>
        {categories.map(item => {
            return <CreateCategory categoryName = {item.displayName} categoryItemsList = {itemsByCategoryMap.get(item.displayName.toLowerCase())}/>
        })}
    </div>
  );
}
