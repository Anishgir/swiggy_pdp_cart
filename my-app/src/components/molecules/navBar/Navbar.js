import React from 'react';
import styles from './navBar.module.css';

export default function Navbar() {
  const navbar = [{id:'1',name:'home'},
                  {id:'2',name:'Banglore'},
                  {id:'3',name:'Ashok Nagar'},
                  {id:'4',name:'Meghana Foods'}];
  const navItems = navbar.map((item) => <li key = {item.id}><a href='/'>{item.name}</a></li>)
  return (
    <div>
      <section className = {styles.navBar}>
         <nav>
            <ul>
               {navItems}
            </ul>
         </nav>
      </section>
    </div>
  );
}
