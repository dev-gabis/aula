import React, { createContext, useState } from 'react';

export const CartContext = createContext();

/**
 * CartProvider component that provides cart-related state and functions to its children.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components that will have access to the cart context.
 *
 * @returns {JSX.Element} The CartContext provider with cart state and functions.
 *
 * @example
 * <CartProvider>
 *   <YourComponent />
 * </CartProvider>
 *
 * @typedef {Object} CartContextValue
 * @property {Array} cart - The current state of the cart, an array of items.
 * @property {Function} addToCart - Function to add an item to the cart.
 * @property {Function} removeFromCart - Function to remove an item from the cart by its ID.
 * @property {boolean} snackbarOpen - State to control the visibility of the Snackbar.
 */

// exportando o CartProvider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Novo estado para controlar o Snackbar

  // Função para adicionar item ao carrinho
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    setSnackbarOpen(true); // Abre o Snackbar ao adicionar item
    setTimeout(() => setSnackbarOpen(false), 3000); // Fecha o Snackbar após 3 segundos
  };

  // Função para remover item do carrinho
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Retornando o CartContext.Provider com os valores do estado e funções
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, snackbarOpen }}>
      {children}
    </CartContext.Provider>
  );
};
