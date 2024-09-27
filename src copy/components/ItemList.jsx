import React, { useContext } from 'react';
import { CartContext } from '../context/ContextCart';

const ItemList = ({ items }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>${item.price}</p>
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
