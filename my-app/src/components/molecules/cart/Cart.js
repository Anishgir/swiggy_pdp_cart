import React,{useState,useEffect} from 'react';
import Button from '../../atoms/button/Button';
import styles from './cart.module.css';

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
      <div className={`${styles.cart} col-4`}>
        <div className={styles.cartDescription}>
            <h3 className={styles.heading}>Cart</h3>
            <p className={styles.numberOfItems}>{lineItems.length} Items</p>
            <br />
            <p className = {styles.dishName}> {lineItems[0].name}</p>
            <span className={styles.subTotal}>
                <p className={styles.reduceMargin}>Subtotal</p>
                <p className={styles.reduceMargin}> {'\u20B9'} {subTotal}</p>
            </span>
            <p className = {styles.chargesDescription}>Extra charges may apply</p>
            <Button className = {'checkout-btn'} buttonName = {'Checkout'}/>
        </div>
      </div>
    );
  }
  return null;
}

export default Cart;
