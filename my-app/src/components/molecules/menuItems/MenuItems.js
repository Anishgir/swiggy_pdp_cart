import React from 'react';
import Category from './Category.js';
import styles from './menuItems.module.css';

export default function MenuItems(props) {
    const {categories,highLightedCategory,menuItems,loadingCategories,loadingMenuItems} = props;
    if(!loadingCategories && !loadingMenuItems){
            return (
            <div className={`${styles.menuItems} col-4`}>
                {highLightedCategory.map(item => {
                    const {displayName,id} = item;
                    return <Category key = {id} categoryName = {displayName} categories = {categories} menuItems = {menuItems}/>
                })}
            </div>
        );
    }
    return null;
}
