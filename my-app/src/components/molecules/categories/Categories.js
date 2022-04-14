import React from 'react';
import ItemList from './ItemList.js';
import './styles.css';

export default function Categories(props) {
  const {categories,setCategories,highLightedCategory,setHighLightedCategory,loadingCategories} = props;
  return (
    <div className='categories col-4'>
    <ItemList categories = {categories} setCategories = {setCategories} highLightedCategory = {highLightedCategory} setHighLightedCategory = {setHighLightedCategory} loadingCategories = {loadingCategories}/>
    </div>
  );
}
