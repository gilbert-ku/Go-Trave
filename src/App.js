import './App.css';
import React, { useState } from 'react';
import Hotels from "./components/Hotels";
import AddHotelForm from './components/AddHotelForm';
import Beaches from "./components/Beaches";
import Search from "./components/Search";
import RanchList from "./components/RanchList";
import BookingForm from "./components/BookingForm";

function App() {
  const [filteredRanches, setFilteredRanches] = useState([]);
  const [ranches, setRanches] = useState([]); // You should have an initial state for ranches

  const handleSearch = (filteredRanches) => {
    console.log('Filtered ranches:', filteredRanches);
    setFilteredRanches(filteredRanches);
  };

  const handleBooking = (bookingData) => {
    // Handle booking logic here
  };

  return (
    <div className='main-container'>
      <AddHotelForm />
      <Hotels />
      <Beaches />
      <Search ranches={ranches} onSearch={handleSearch} />
      <RanchList ranches={filteredRanches.length > 0 ? filteredRanches : ranches} />
      <BookingForm onBooking={handleBooking} />
    </div>
  );
}

export default App;
