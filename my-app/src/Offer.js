import React,{useContext} from 'react';
import { MenuItemsContext } from './MenuItemsContext.js';
import { connect } from 'react-redux';

function Offer(props) {
  const [menuItems] = useContext(MenuItemsContext);
  if(menuItems[0]){
    return (
      <div className='offers'>
        {menuItems.map(item => {
          return (
            <div className='col-4' key = {item.id}>
            <p>{item.displayName}</p>
            <img src={item.imgUrl} alt="" />
            <p>{`${'\u20B9'} ${item.price}`} ${props.offer.offerText}</p>
            </div>
          )
        })}
      </div>
    );
  }
  else{
    return null;
  }
}

const mapStateToProps = state => {
  return{
    offer: state.offerReducer.offer
  }
}

export default connect(mapStateToProps)(Offer);
