import React from 'react';

export default function Navbar() {
  return (
    <div>
      <section className = "nav-bar">
         <nav>
            <ul>
               <li><a href="/">Home</a> <span>/</span></li>
               <li><a href="/">Banglore</a> <span>/</span></li>
               <li><a href="/">Ashok Nagar</a> <span>/</span></li>
               <li><a href="/">Meghana Foods</a></li>
            </ul>
         </nav>
      </section>
    </div>
  );
}
