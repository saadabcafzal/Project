import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function IndividualCard(props) {
    const {id}=useParams();
   

    const [products, setProducts] = useState([]);
    

    const {title,price,description}=products;

    useEffect(() => {
      fetchProducts();
    }, []);
  
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log("response: ", response)
        setProducts(response.data);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

  return (
    <div className="product-card">
      <div className="product-image mx-auto">
        <img src={products.thumbnail} alt={name} />
      </div>
      <div className="product-details">
        <h2 className="product-name">{title}</h2>
        <p className="product-price">${price}</p>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
}

export default IndividualCard;