import React, { useContext } from 'react';
import { CartContext } from '../context/ContextCart';
import ItemList from './itemList.jsx';

// * Componente que renderiza um produto

const ProductCard = ({ Item }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <h3>{Item.name}</h3>
            <p>Price: ${ItemList.orice}</p>
            <button onClick={() => addToCart(Item)}>Add to cart</button>
        </div>
    );
}

export default ProductCard;