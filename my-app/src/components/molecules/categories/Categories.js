import React from 'react';
import ItemList from './ItemList.js';
import './styles.css';

export default function Categories(props) {
  return (
    <div className='categories col-4'>
    <ItemList setCategories = {props.setCategories}/>
    </div>
  );
}
