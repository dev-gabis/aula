import React from 'react';
import ProductCard from `./ProductCart`;

// * Componente que renderiza a lista de produtos

const ItemList = ({ items }) => { 
    return (
        <div className="item-list">
            {items.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ItemList; 