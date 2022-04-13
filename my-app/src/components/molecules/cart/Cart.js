import React from 'react';
import cartData from '../../../mocks/cartItems.json'
import CheckoutButton from '../../atoms/checkoutButton/CheckoutButton';
import './styles.css';

function Cart() {
  const {lineItems,subTotal} = cartData;
  return (
    <div className='cart col-4'>
      <div className='cart-description'>
          <h3>Cart</h3>
          <p>{lineItems.length} Items</p>
          <br />
          <p className = "dish-name"> {lineItems[0].name}</p>
          <span>
              <p>Subtotal</p>
              <p> {'\u20B9'} {subTotal}</p>
          </span>
          <p className = "charges-description">Extra charges may apply</p>
          <CheckoutButton/>
      </div>
    </div>
  );
}

export default Cart;
