import React from 'react';
import veg_mark from '../../../images/veg_mark.png';
import './styles.css';

function VegMarkLogo(props) {
  return (
    <React.Fragment>
      <img src={veg_mark} alt={props.alt} className='veg-mark'/>
    </React.Fragment>
  );
}

export default VegMarkLogo;
