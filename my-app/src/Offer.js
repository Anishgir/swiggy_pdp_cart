import React,{useState,useEffect,useContext} from 'react';
import { MenuItemsContext } from './MenuItemsContext.js';

function Offer() {
  const [menuItems] = useContext(MenuItemsContext);
  const [offer,setOffer] = useState([]);
  useEffect(() => {
    const fetchOffer = async () => {
        try {
            const response = await fetch('http://localhost:8080/promotion');
            const data = await response.json();
            setOffer(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchOffer();
  },[]) ;
  if(menuItems[0]){
    return (
      <div className='offers'>
        {menuItems.map(item => {
          return (
            <div className='col-4' key = {item.id}>
            <p>{item.displayName}</p>
            <img src={item.imgUrl} alt="" />
            <p>{`${'\u20B9'} ${item.price} ${offer.offerText}`}</p>
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

export default Offer;
