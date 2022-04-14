import React from 'react';

export default function CreateItem(props) {
  const {item:{displayName,id},categories,setCategories,setHighLightedCategory} = props;
  
  function changeColorOfSelectedCategory(element,selectedItem){
    if(element.displayName === selectedItem.displayName){
      element = {displayName: element.displayName, id:element.id, color:'orange'};
      setHighLightedCategory([element]);
    }
    else{
      element = {displayName: element.displayName, id:element.id, color:'black'};
    }
    return element;
  }
  function onSelectingCategory(selectedCategory){
    const updatedCategories = categories.map(element => changeColorOfSelectedCategory(element,selectedCategory[0]))
    // setCategories(updatedCategories);
  }

  return (
    <li onClick = {() => onSelectingCategory([{displayName:displayName,id:id}])}>
      {displayName}
    </li>
  );
}
