import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Button from '../components/Button';

function Ranches() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const initialOptions = {
    clientId: "AdcnuG4Y1-YrxVE0d_-wadGsl03kmKZUmhJFlaZH10QRDhWo3E5LgF7RC0FvBpw177HHl6ovoJLj9y2u",
    currency: "USD",
    intent: "capture",
  };

  useEffect(() => {
    fetch("https://ranches.onrender.com/ranches")
      .then((res) => res.json())
      .then((ranch) => {
        setData(ranch);
      });
  }, []);

  useEffect(() => {
    // Filter the data based on the search query
    const filteredRanches = data.filter((ranch) =>
      ranch.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filteredRanches);
  }, [searchQuery, data]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div>
        <input className='search-beaches'
          type="text"
          placeholder="Search by location"
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <br />
      
      <div className='main-container'>
        {filteredData.map((ranch) => (
          <div className="beach-item" key={ranch.id}>
            <img src={ranch.image_url} alt={ranch.name} className='beach-image'/>
            <div className="beach-details">
              <h2>{ranch.name}</h2>
              <p>{ranch.location}</p>
              <p>{ranch.size}</p>
              <p>{ranch.description}</p>
            </div>
            <br />
            <PayPalScriptProvider options={initialOptions}>
              <Button />
            </PayPalScriptProvider>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ranches;
