import React, {useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header.js';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HomePage from './HomePage.js';


import './App.css';

function App() {

  const [restorantName, setRestorantName] = useState("Punjabi Dhaba");
  return (
    <BrowserRouter>
       <Header />
       <Navbar />
      <Routes>
        <Route path = "/" element={<HomePage setRestorantName = {setRestorantName}/>}/>
        <Route path = "/restorant/:name"  element = {<React.Fragment><Banner restorantName = {restorantName}/> <Main /></React.Fragment>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
