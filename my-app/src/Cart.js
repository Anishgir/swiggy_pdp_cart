import React from 'react';
import cartData from './cartItems.json'

export default function Cart() {
  return (
    <div className='cart col-4'>
      <div className='cart-description'>
          <h3>Cart</h3>
          <p>{cartData.lineItems.length} Items</p>
          <br />
          <p className = "dish-name"> {cartData.lineItems[0].name}</p>
          <span>
              <p>Subtotal</p>
              <p>{cartData.subTotal}</p>
          </span>
          <p className = "charges-description">Extra charges may apply</p>
          <button className='checkout-btn'>Checkout</button>
      </div>
    </div>
  );
}
