import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <Button onClick={() => handleAddToCart(item)}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            transition: 'transform 0.3s',
            margin: '0 10px',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: 'darkgreen',
              color: 'white',
            },
          }} component={Link} to="/">Products</Button>
        <Button
          onClick={() => handleAddToCart(item)}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.1)',
              backgroundColor: 'darkgreen',
              color: 'white',
            },
          }}
          component={Link}
          to="/cart"
        >
          🛒 Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;