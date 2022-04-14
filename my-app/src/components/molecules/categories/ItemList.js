import React from 'react';
import Item from './Item.js'

export default function ItemList(props) {
  const {categories,setCategories,highLightedCategory,setHighLightedCategory,loadingCategories} = props;
  if(!loadingCategories){
    // const tempCategories = categories;
    // tempCategories.map((category) => {
    //   if(category.id === highLightedCategory[0].id){
    //     return category['color'] = 'orange';
    //   }
    //   return category['color'] = 'black';
    // })
    // setCategories(tempCategories);
    return (
      <ul>
        {categories.map(item => {
            return <Item key = {item.id} item = {item} categories = {categories} setCategoires = {setCategories} setHighLightedCategory = {setHighLightedCategory}/>  
        })}
      </ul>
    );
  }
  return null;
}