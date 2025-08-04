import React, { useState } from 'react';
import './AddForm.css'; 
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const [product, setProduct] = useState({
    Title: '',
    Category: '',
    Description: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = [...existingProducts, product];

    localStorage.setItem('products', JSON.stringify(updatedProducts));

    window.alert('Add Form Successfully!');

    setProduct({
      Title: '',
      Category: '',
      Description: '',
    });
  };

  const handleNavigate = () => {
    navigate('/details');
  };

  return (
    <div className="form-container">
      <h2>Add Form</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Title:</label>
        <input 
          type="text" 
          name="Title" 
          value={product.Title} 
          onChange={handleChange} 
          required
        />

        <label>Category:</label>
        <input 
          type="text" 
          name="Category" 
          value={product.Category} 
          onChange={handleChange} 
          required
        />

        <label>Description:</label>
        <textarea 
          name="Description" 
          value={product.Description} 
          onChange={handleChange} 
          required
        />

        <div className='AddForm-btn'>
          <button type="submit">Add Form</button> 
          <button onClick={handleNavigate}>View Details</button>
         </div>
      </form>
    </div>
  );
};

export default AddForm;
