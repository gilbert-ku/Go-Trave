
import React, { useState, useEffect } from 'react';
import './App.css';
import RanchList from './components/RanchList';
import Search from './components/Search';

function App() {
  const [ranches, setRanches] = useState([]);
  const [filteredRanches, setFilteredRanches] = useState([]);

  useEffect(() => {
    // Fetch the ranch data from the provided URL
    fetch('http://localhost:8001/ranches')
      .then((response) => response.json())
      .then((data) => {
        setRanches(data);
      })
      .catch((error) => console.error('Error fetching ranch data:', error));
  }, []);

 

  const handleSearch = (filteredRanches) => {
    console.log('Filtered ranches:', filteredRanches);
    setFilteredRanches(filteredRanches);
  };

  return (
    
    <div className='main-container'>
        <Search ranches={ranches} onSearch={handleSearch} />
        <RanchList ranches={filteredRanches.length > 0 ? filteredRanches : ranches} />
     
    </div>
  );
}

export default App;
