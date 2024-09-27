import React, { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import { List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import css from './cart.module.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      <List>
        {cart.length > 0 ? (
          cart.map((item) => (
            <ListItem key={item.id} divider>
              <ListItemText
                primary={item.name}
                secondary={`Price: $${item.price}`}
              />
              <Button
                variant="contained"
                color="secondary"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography variant="h6">Your cart is empty.</Typography>
        )}
      </List>
    </div>
  );
};

export default Cart;