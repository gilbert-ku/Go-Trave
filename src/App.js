import React, { useState, useEffect } from 'react';
import './App.css';
import RanchList from './components/RanchList';
import BookingForm from './components/BookingForm';
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

  const handleBooking = (formData) => {
    // Logic for handling park booking (using formData.name and formData.duration)
    console.log('Booking park:', formData);
    // Perform booking operations here
  };

  const handleSearch = (filteredRanches) => {
    // Logic for handling the filtered ranches from the Search component
    console.log('Filtered ranches:', filteredRanches);
    setFilteredRanches(filteredRanches);
    // Perform any operations with the filtered ranches here
  };

  return (
    
    <div className='main-container'>
        <Search ranches={ranches} onSearch={handleSearch} />
        <RanchList ranches={filteredRanches.length > 0 ? filteredRanches : ranches} />
        <BookingForm onBooking={handleBooking} />
     
    </div>
  );
}

export default App;
