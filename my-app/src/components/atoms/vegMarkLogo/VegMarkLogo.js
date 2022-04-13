import React from 'react';
import veg_mark from '../../../images/veg_mark.png';
import './styles.css';

function VegMarkLogo() {
  return (
    <React.Fragment>
      <img src={veg_mark} alt="Veg Mark Logo" className='veg-mark'/>
    </React.Fragment>
  );
}

export default VegMarkLogo;
