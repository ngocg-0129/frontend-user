import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cartItems } = useCart();

  const handleRemoveItem = (productId) => {
    const newCartItems = cartItems.filter(item => item.product_id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCartItems)); // Cập nhật giỏ hàng trong localStorage
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.product_id}>
              <h3>{item.name}</h3>
              <p>{item.price} VND</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.product_id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
