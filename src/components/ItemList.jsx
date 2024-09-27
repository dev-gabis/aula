import React, { useContext, useState } from 'react';
import { CartContext } from '../context/ContextCart';
import { Card, CardMedia, CardContent, Typography, Button, Snackbar, Alert } from '@mui/material';

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.name} foi adicionado ao carrinho!`);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="item-list">
      {items.map((item) => (
        <Card key={item.id} sx={{ maxWidth: 345, margin: 2, borderRadius: 2 }}>
          <CardMedia
            component="img"
            height="280"
            image={item.image}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="h6" color="text.primary">
              ${item.price}
            </Typography>
            <Button
              variant="contained"
              onClick={() => handleAddToCart(item)}
              sx={{
                backgroundColor: 'green',
                color: 'white',
                marginTop: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)',
                  backgroundColor: 'darkgreen',
                },
              }}
            >
              Add to Cart
            </Button>
          </CardContent>
        </Card>
      ))}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ItemList;