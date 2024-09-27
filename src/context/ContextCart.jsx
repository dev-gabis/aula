import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Novo estado para controlar o Snackbar

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setSnackbarOpen(true); // Abre o Snackbar ao adicionar item
    setTimeout(() => setSnackbarOpen(false), 3000); // Fecha o Snackbar após 3 segundos
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, snackbarOpen }}>
      {children}
    </CartContext.Provider>
  );
};
