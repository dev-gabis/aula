import React, { useContext } from 'react';
import { CartContext } from '../context/ContextCart.jsx';
// import ItemList from './itemList.jsx';

// * Componente que renderiza um produto

const ProductCard = ({ item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to cart</button>
        </div>
    );
}

export default ProductCard;