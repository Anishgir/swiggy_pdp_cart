import React,{useContext} from 'react';
import CreateCategory from './CreateCategory.js';
import { CategoriesContext } from './CategoriesContext.js';

export default function MenuItems() {
    const [categories] = useContext(CategoriesContext);
    return (
    <div className='menu-items col-4'>
        {categories.map(item => {
            return <CreateCategory key = {item.id} categoryName = {item.displayName}/>
        })}
    </div>
  );
}
