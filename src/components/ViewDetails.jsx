import React, { useState, useEffect } from 'react';
import './ViewDetails.css'; 

const ViewDetails = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const handleDelete = (indexToDelete) => {
    const updatedProducts = products.filter((_details, index) => index !== indexToDelete);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 5); 
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <div className="view-container">
      <h2>Product Details</h2>

      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Select</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {visibleProducts.map((prod, index) => (
                <tr key={index}>
                  <td><input type="checkbox" /></td>
                  <td>{prod.Title}</td>
                  <td>{prod.Category}</td>
                  <td>{prod.Description}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {visibleCount < products.length && (
            <button className="show-more-btn" onClick={handleShowMore}>
              Show More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default ViewDetails;
