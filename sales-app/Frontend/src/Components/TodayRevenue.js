
import React, { useEffect, useState } from 'react';
import './TotalRevenue.css'; // Import the CSS file

const TotalRevenue = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const backendURL = 'http://localhost:5000/totalRevenue'; // Update the URL
    fetch(backendURL)
      .then(response => response.json())
      .then(data => setTotalRevenue(data.totalRevenue))
      .catch(error => console.error('Error fetching total revenue:', error));
  }, []);

  return (
    <div className="total-revenue-container">
      <h2>Total Revenue</h2>
      <div className="total-revenue">
        Total Revenue: ${totalRevenue}
      </div>
    </div>
  );
};

export default TotalRevenue;
