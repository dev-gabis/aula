import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/ContextCart';
import ItemList from './components/ItemList';
import Cart from './components/Cart/Cart';
import Header from './components/header'; // Importando o novo Header
import products from './data/products';

import { createTheme, ThemeProvider } from '@mui/material/styles';

// Customizando o tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#ff4081',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
});


const App = () => {
  return (
    <>
    <NavBar/>

    <section className='products'>
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
    </section>
    </>
  );
};

export default App;
