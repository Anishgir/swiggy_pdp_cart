import Header from './Header.js';
import Navbar from './Navbar.js';
import Banner from './Banner.js';
import Main from './Main.js';
import Footer from './Footer.js';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Banner heading = {"Punjabi Momos"}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
