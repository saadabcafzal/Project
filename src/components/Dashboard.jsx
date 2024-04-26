import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    productId: '',
    title: '',
    description: '',
    price: '',
  });

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log("response: ", response);
      setProducts(response.data.products);
     
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    closeModal();
  };

  const mergedProducts = [...products, formData];
  console.log("mergedProducts", mergedProducts);
 

  return (
    <div>
      <button onClick={openModal} className="add-product-button">Add Product</button>
      <h1>Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mergedProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.id}</td>
              <td>{product.description}</td>
              <td>${product.price}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Product ID:
            <input
              type="text"
              name="productId"
              value={formData.productId}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default Dashboard;