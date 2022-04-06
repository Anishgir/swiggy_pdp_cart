import React, {useContext} from 'react';
import Categories from './Categories.js';
import MenuItems from './MenuItems.js';
import Cart from './Cart.js';
import { CategoriesContext } from './CategoriesContext.js';

export default function Main() {
  const [categories,setCategories] = useContext(CategoriesContext);
  return (
    <main>
      <Categories setCategories = {setCategories}/>
      <MenuItems categories = {categories}/>
      <Cart/>
    </main>
  );
}
