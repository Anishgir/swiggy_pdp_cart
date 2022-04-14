import React from 'react';
import './styles.css';

function AddItemButton(props) {
  return (
    <button className={props.className}>{props.buttonName}</button>
  );
}

export default AddItemButton;
