import React,{useState} from 'react';
import CreateItem from './CreateItem.js'
import categories from './categories.json'
export default function CreateItemList(props) {
  categories.map(item =>  item['color'] = 'black');
  const [categoriesList, setCategoriesColor] = useState(categories);
  return (
    <ul>
      {categoriesList.map(item => {
          return <CreateItem key = {item.id} item = {item} setCategories = {props.setCategories} categories = {categoriesList} setCategoriesColor = {setCategoriesColor}/>  
      })}
    </ul>
  );
}