import React, { useContext } from 'react';
import { CartContext } from '../context/ContextCart';

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
