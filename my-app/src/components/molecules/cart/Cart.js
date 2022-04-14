import React,{useState,useEffect} from 'react';
import Button from '../../atoms/button/Button';
import cartCSS from './cart.module.css';

function Cart() {
  const [cartData,setCartData] = useState([]);
  const [loading,setLoading] = useState(true);
  const {lineItems,subTotal} = cartData;
  useEffect(() => {
    const fetchCartData = async () => {
        try {
            const response = await fetch('http://localhost:8080/cart');
            const data = await response.json();
            setCartData(data);
            setLoading(false);
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchCartData();
  },[]) ;
  if(!loading){
    return (
      <div className={cartCSS.cart+'col-4'}>
        <div className={cartCSS.cartDescription}>
            <h3>Cart</h3>
            <p>{lineItems.length} Items</p>
            <br />
            <p className = {cartCSS.dishName}> {lineItems[0].name}</p>
            <span>
                <p>Subtotal</p>
                <p> {'\u20B9'} {subTotal}</p>
            </span>
            <p className = {cartCSS.chargesDescription}>Extra charges may apply</p>
            <Button className = {'checkout-btn'} buttonName = {'Checkout'}/>
        </div>
      </div>
    );
  }
  return null;
}

export default Cart;
