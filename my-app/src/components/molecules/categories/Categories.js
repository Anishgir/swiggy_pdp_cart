import React from 'react';
import ItemList from './ItemList.js';
import styles from './categories.module.css';

export default function Categories(props) {
  const {categories,setCategories,highLightedCategory,setHighLightedCategory,loadingCategories} = props;
  return (
    <div className={`${styles.categories} col-4`}>
    <ItemList categories = {categories} setCategories = {setCategories} highLightedCategory = {highLightedCategory} setHighLightedCategory = {setHighLightedCategory} loadingCategories = {loadingCategories}/>
    </div>
  );
}
