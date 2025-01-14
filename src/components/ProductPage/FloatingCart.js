import React, { useState, useContext } from "react";
import { CartContext } from "../ShopPage/ListProducts/CartContext";
import "./FloatingCart.css";

const FloatingCart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="floating-cart-container">
      <button className="floating-cart-icon" onClick={toggleCart}>
        🛒
        {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
      </button>
      {showCart && (
        <div className="cart-popup">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <img src={item.images} alt={item.name} width="50" />
                    <p>{item.name}</p>
                    <p>Price: {item.price.toLocaleString()} VND</p>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                    />
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </li>
                ))}
              </ul>
              <p>Total Price: {calculateTotalPrice().toLocaleString()} VND</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingCart;
