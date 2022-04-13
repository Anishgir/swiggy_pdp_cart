import React from 'react';
import Header from './components/molecules/header/Header.js';
import Navbar from './components/molecules/navBar/Navbar.js';
import Banner from './components/molecules/banner/Banner.js';
import Main from './components/organisms/main/Main.js';
import Footer from './components/molecules/footer/Footer.js';
import './style/styles.css';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner heading = {"Punjabi Momos"} alt = {"Food Banner"}/>
      <Main />
      <Footer alt = {'Swiggy Logo'}/>
    </div>
  );
}

export default App;
