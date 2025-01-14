import React, { createContext, useState, useContext } from 'react';

// Tạo Context cho giỏ hàng
const CartContext = createContext();

// Provider của CartContext
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
  const addToCart = (product) => {
    const newCartItems = [...cartItems];
    const existingItem = newCartItems.find(item => item.product_id === product.product_id);

    if (existingItem) {
      existingItem.quantity += 1; // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
    } else {
      newCartItems.push({ ...product, quantity: 1 }); // Thêm sản phẩm mới vào giỏ hàng
    }

    setCartItems(newCartItems);
    localStorage.setItem('cart', JSON.stringify(newCartItems)); // Lưu giỏ hàng vào localStorage
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook để sử dụng CartContext
export const useCart = () => useContext(CartContext);
