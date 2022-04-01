import React from 'react';
import {Link} from 'react-router-dom';

function HomePage(props) {
  function handelRestorantName(e){
    props.setRestorantName(e.target.innerText);
  }
  return (
    <div className='home'>
      <h1>Welcome To Swiggy</h1>
      <ul onClick={handelRestorantName}>
          <Link to = "restorant/punjabidhaba">
            <li>Punjabi Dhaba</li>
          </Link>
          <Link to = "restorant/abdulkibiryani">
            <li>Abdul Ki Biryani</li>
          </Link>
      </ul>
    </div>
  );
}

export default HomePage;
