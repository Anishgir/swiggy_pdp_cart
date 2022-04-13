import React from 'react';
import SwiggyLogo from './SwiggyLogo.js';
import List from './List.js';
import './styles.css';
export default function Header() {
  return (
    <header>
      <div>
        <SwiggyLogo />
        <List />
      </div>
    </header>
  );
}
