import React from 'react';
import styles from './menuItems.module.css'

export default function CategoryInfo(props) {
  const {categoryName,numberOfItems} = props;
  return (
    <div className={styles.categoryInfo}>
      <h3>{categoryName}</h3>
      <p>{numberOfItems} Items</p>
    </div>
  );
}
