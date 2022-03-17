import React from 'react';

export default function CreateItem(props) {
  return (
    <li key = {props.id}>
      {props.categoryName}
    </li>
  );
}
