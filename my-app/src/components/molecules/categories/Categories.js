import React from 'react';
import CreateItemList from './ItemList.js';
import './styles.css';

export default function Categories(props) {
  return (
    <div className='categories col-4'>
    <CreateItemList setCategories = {props.setCategories}/>
    </div>
  );
}
