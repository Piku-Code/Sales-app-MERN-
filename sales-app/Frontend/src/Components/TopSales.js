import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TopSales.css';

function TopSales() {
  const [topSalesData, setTopSalesData] = useState([]);

  useEffect(() => {
    // Fetch top 5 sales data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Make a GET request to your backend endpoint
      const response = await axios.get("http://localhost:5000/topSalesData");
      // Update state with the top 5 retrieved data
      setTopSalesData(response.data.posts.slice(0, 5) || []);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="top-sales-container">
      <h2>Top Sales</h2>
      <table>
        <thead>
          <tr>
            <th>Sales ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {topSalesData.map((sale) => (
            <tr key={sale.salesId}>
              <td>{sale.salesId}</td>
              <td>{sale.productName}</td>
              <td>{sale.quantity}</td>
              <td>{sale.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSales;
