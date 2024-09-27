import React, { useContext } from 'react';
import { CartContext } from '../../context/ContextCart';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

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
                sx={{ backgroundColor: 'red' }}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </Button>
            </ListItem>
          ))
        ) : (
          <Typography variant="body1">Your cart is empty</Typography>
        )}
      </List>
      {cart.length > 0 && (
        <Typography variant="h6" sx={{ marginTop: 2 }}>
          Total: ${getTotal()}
        </Typography>
      )}
    </div>
  );
};

export default Cart;