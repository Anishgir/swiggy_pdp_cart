import React from 'react';

export default function CreateItem(props) {
  const {item:{id,displayName,color},categories,setCategories,setCategoriesColor} = props;
  
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
    setCategories(selectedCategory);
    const updatedCategories = categories.map(element => changeColorOfSelectedCategory(element,selectedCategory[0]))
    setCategoriesColor(updatedCategories);
  }

  return (
    <li key = {id} onClick = {() => onSelectingCategory([{displayName:displayName,id:id}])} style = {{color:color}}>
      {displayName}
    </li>
  );
}
