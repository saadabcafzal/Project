import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log("response: ", response)
      setProducts(response.data.products);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  return (
    <div className="app">
      <h1 className="text-3xl font-bold underline">Welcome to the eCommerce Store!</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.title}
            price={product.price}
            imageUrl={product.thumbnail}
            productId={product.id}
            productdescription={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;