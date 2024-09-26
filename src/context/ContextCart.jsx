import { createContext, useState, useContext } from 'react';

const CartContext = createContext(); // Criando um contexto

// Criando um hook para usar o contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => { // Adiciona um produto ao carrinho
        setCart = ([...cartItems, product]); // Adiciona o produto ao carrinho
    }

    return ( // Retorna o contexto com o valor do carrinho e a função para adicionar um produto ao carrinho
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};


