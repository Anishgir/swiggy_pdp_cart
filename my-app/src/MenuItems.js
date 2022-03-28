import React from 'react';
import CreateCategory from './CreateCategory.js';

export default function MenuItems(props) {
    const categories = props.categories;
    return (
    <div className='menu-items col-4'>
        {categories.map(item => {
            return <CreateCategory categoryName = {item.displayName}/>
        })}
    </div>
  );
}
