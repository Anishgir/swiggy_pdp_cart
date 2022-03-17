import React from 'react';
import Categories from './Categories.js';
import MenuItems from './MenuItems.js';
import Cart from './Cart.js';

export default function Main() {
  return (
    <main>
      <Categories/>
      <MenuItems />
      <Cart/>
    </main>
  );
}
