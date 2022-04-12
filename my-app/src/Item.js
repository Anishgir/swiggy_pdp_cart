import React from 'react';

export default function CreateItem(props) {
  function changeColorOfSelectedCategory(element,selectedItem){
    if(element.displayName === selectedItem.displayName){
      element = {displayName: element.displayName, id:element.id, color:'orange'};
    }
    else{
      element = {displayName: element.displayName, id:element.id, color:'black'};
    }
    return element;
  }
  function onSelectingCategory(selectedCategory){
    props.setCategories(selectedCategory);
    const updatedCategories = props.categories.map(element => changeColorOfSelectedCategory(element,selectedCategory[0]))
    props.setCategoriesColor(updatedCategories);
  }

  return (
    <li key = {props.item.id} onClick = {() => onSelectingCategory([{displayName:props.item.displayName,id:props.item.id}])} style = {{color:props.item.color}}>
      {props.item.displayName}
    </li>
  );
}
