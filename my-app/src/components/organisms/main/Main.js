import React, {useState,useEffect} from 'react';
import Categories from '../../molecules/categories/Categories.js';
import MenuItems from '../../molecules/menuItems/MenuItems.js';
import Cart from '../../molecules/cart/Cart.js';
import './styles.css';

function fetchData(URL,setLoading,setData){
  const fetchPDPData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setData(data);
    setLoading(false);
  }
  fetchPDPData();
}
function Main() {
  const [categories, setCategories] = useState([]);
  const [menuItems,setMenuItems] = useState([]);
  const [highLightedCategory,setHighLightedCategory] = useState([{displayName:'Recommended', id: 'recommended'}]);
  const [loadingMenuItems,setLoadingMenuItems] = useState(true);
  const [loadingCategories,setLoadingCategories] = useState(true);
  useEffect(() =>{
    fetchData('http://localhost:8080/categories',setLoadingCategories,setCategories);
    fetchData('http://localhost:8080/menu-items',setLoadingMenuItems,setMenuItems);
  },[]);
  return (
    <main>
      <Categories categories = {categories} setCategories = {setCategories} highLightedCategory = {highLightedCategory} setHighLightedCategory = {setHighLightedCategory} loadingCategories = {loadingCategories}/>
      <MenuItems categories = {categories} highLightedCategory = {highLightedCategory} menuItems = {menuItems} loadingCategories = {loadingCategories} loadingMenuItems = {loadingMenuItems}/>
      <Cart/>
    </main>
  );
}

export default Main;
