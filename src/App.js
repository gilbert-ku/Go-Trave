import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import Hotels from "./components/Hotels";
import AddHotelForm from './components/AddHotelForm';
import RanchList from './components/RanchList';
import BookingForm from './components/BookingForm';
import Search from './components/Search';
import Beaches from './components/Beaches';

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
   
    console.log('Booking ranch:', formData);
    
  };

  const handleSearch = (filteredRanches) => {
    
    console.log('Filtered ranches:', filteredRanches);
    setFilteredRanches(filteredRanches);
   
  };

  return (
    <div className='main-container'>
      <Home />
      <AddHotelForm />
      <Hotels />
      <Beaches />
      <Search ranches={ranches} onSearch={handleSearch} />
      <RanchList ranches={filteredRanches.length > 0 ? filteredRanches : ranches} />
      <BookingForm onBooking={handleBooking} />
    </div>
  );
}
