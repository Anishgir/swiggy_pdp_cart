import React from 'react';
import SwiggyLogo from './SwiggyLogo.js';
import List from './List.js';
import styles from './header.module.css';
export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <SwiggyLogo alt = {'Swiggy Logo'}/>
        <List />
      </div>
    </header>
  );
}
