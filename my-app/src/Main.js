import React, {useState} from 'react';
import Categories from './Categories.js';
import MenuItems from './MenuItems.js';
import Cart from './Cart.js';
import catgoriesList from './mocks/categories.json';

export default function Main() {
  const [categories, setCategories] = useState(catgoriesList);

  return (
    <main>
      <Categories setCategories = {setCategories}/>
      <MenuItems categories = {categories}/>
      <Cart/>
    </main>
  );
}
