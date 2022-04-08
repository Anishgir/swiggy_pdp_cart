import React, {useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './Header.js';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HomePage from './HomePage.js';
import User from './User.js'
import Offer from './Offer.js';
import { MenuItemsProvider } from './MenuItemsContext.js';
import { CategoriesProvider } from './CategoriesContext.js';
import { fetchUserInfo } from './reduxPackage/actions/userInfoActions.js';
import fetchOffer from './reduxPackage/actions/offerAction.js';
import {useDispatch} from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
    dispatch(fetchOffer());
  }, []);


  const [restorantName, setRestorantName] = useState("Punjabi Dhaba");
  return (
    <BrowserRouter>
       <MenuItemsProvider>
       <CategoriesProvider>
          <Header />
          <Navbar />
          <Routes>
            <Route path = "/" element={<HomePage setRestorantName = {setRestorantName}/>}/>
            <Route path = "/restorant/:name"  element = {<React.Fragment><Banner restorantName = {restorantName}/> <Main /></React.Fragment>}/>
            <Route path = "/user" element = {<User/>}/>
            <Route path = "/offer" element = {<Offer/>}/>
          </Routes>
          <Footer />
      </CategoriesProvider>
      </MenuItemsProvider>
    </BrowserRouter>
  );
}

export default App;
