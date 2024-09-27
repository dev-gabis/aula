import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Store
        </Typography>
        <Button color="inherit" component={Link} to="/">Products</Button>
        <Button color="inherit" component={Link} to="/cart">Cart</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
