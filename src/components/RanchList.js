import React, { useState, useEffect } from 'react';

function RanchList() {
  const [ranches, setRanches] = useState([]);

  useEffect(() => {
    // Fetch the ranch data from the provided URL
    fetch('http://localhost:8001/ranches')
      .then((response) => response.json())
      .then((data) => {
        setRanches(data);
      })
      .catch((error) => console.error('Error fetching ranch data:', error));
  }, []);

  return (
    <div className="ranch-list-container">
      {ranches.map((ranch) => (
        <div key={ranch.id} className="ranch-card">
          <div className="ranch-image-container">
            <img src={ranch.image_url} alt={ranch.name} className="ranch-image" />
          </div>
          <div className="ranch-details">
            <h2 className="ranch-name">{ranch.name}</h2>
            <p className="ranch-location">{ranch.location}</p>
            <p className="ranch-size">{ranch.size}</p>
            <p className="ranch-description">{ranch.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RanchList;
