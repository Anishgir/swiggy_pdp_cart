import React, {useState} from 'react';
import Categories from '../../molecules/categories/Categories.js';
import MenuItems from '../../molecules/menuItems/MenuItems.js';
import Cart from '../../molecules/cart/Cart.js';
import catgoriesList from '../../../mocks/categories.json';
import './styles.css';

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
