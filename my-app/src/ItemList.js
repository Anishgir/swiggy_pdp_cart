import React,{useState} from 'react';
import Item from './Item.js'
import categories from './mocks/categories.json'

export default function CreateItemList(props) {
  categories.map(category =>  category['color'] = 'black');
  const [categoriesList, setCategoriesColor] = useState(categories);
  return (
    <ul>
      {categoriesList.map(item => {
          return <Item key = {item.id} item = {item} setCategories = {props.setCategories} categories = {categoriesList} setCategoriesColor = {setCategoriesColor}/>  
      })}
    </ul>
  );
}