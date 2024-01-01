import React, { useState } from 'react';
import './AddSales.css';
import axios from 'axios'; 

function AddSales() {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [amount, setAmount] = useState('');

  // Handle the form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add logic here to handle the data, such as sending it to the server
      await axios.post("http://localhost:5000/add", { productName, quantity, amount });
      setProductName('');
      setQuantity('');
      setAmount('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="add-sale-container">
      <h2>Add Sale</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button className='btn btn-primary mt-2 mb-3' type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddSales;
