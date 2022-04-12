import React from 'react';
import Category from './Category.js';

export default function MenuItems(props) {
    const categories = props.categories;
    return (
    <div className='menu-items col-4'>
        {categories.map(item => {
            const {id,displayName} = item;
            return <Category key = {id} categoryName = {displayName}/>
        })}
    </div>
  );
}
