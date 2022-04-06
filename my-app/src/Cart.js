import React,{useState, useEffect} from 'react';
export default function Cart() {
  const [cartData,setCartData] = useState([]);
  useEffect(() => {
    const fetchCartData = async () => {
        try {
            const response = await fetch('http://localhost:8080/cart');
            const data = await response.json();
            setCartData(data);
        } catch (error) {
            console.log("error", error);
        }
    };
    fetchCartData();
  },[]) ;
  if(cartData.lineItems){
    return (
      <div className='cart col-4'>
        <div className='cart-description'>
            <h3>Cart</h3>
            <p>{cartData.lineItems.length} Items</p>
            <br />
            <p className = "dish-name"> {cartData.lineItems[0].name}</p>
            <span>
                <p>Subtotal</p>
                <p> {'\u20B9'} {cartData.subTotal}</p>
            </span>
            <p className = "charges-description">Extra charges may apply</p>
            <button className='checkout-btn'>Checkout</button>
        </div>
      </div>
    );
  }
  else{
    return null;
  }
}
