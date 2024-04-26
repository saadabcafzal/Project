import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard(props) {
  const { name, price, imageUrl, productId, productDescription } = props;

  return (
    <div className="product-card">
      <div className="product-image mx-auto">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{productDescription}</p>
        <Link to={`/product/${productId}`} className="product-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;