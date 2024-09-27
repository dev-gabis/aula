import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/ContextCart';
import ItemList from './components/ItemList';
import Cart from './components/Cart/Cart';
import Header from './components/header/header'; // Importando o novo Header
import products from './data/products';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header /> {/* Usando o Header aqui */}
          <Routes>
            <Route path="/" element={<ItemList items={products} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
