import React, { useState, useEffect } from 'react';
import SearchPark from './components/SearchPark';
import ParkList from './components/ParkList';

const App = () => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from http://localhost:4000/parks using fetch
    fetch('http://localhost:4000/parks') // Update the URL if needed
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setParks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = (filteredParks) => {
    setFilteredParks(filteredParks);
  };

  const handleBooking = (booking) => {
    setBookings([...bookings, booking]);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app-container">
      <h1 className="app-heading">Park Booking</h1>
      <SearchPark parks={parks} onSearch={handleSearch} />
      {filteredParks.length > 0 ? (
        <ParkList parks={filteredParks} onBooking={handleBooking} />
      ) : (
        <ParkList parks={parks} onBooking={handleBooking} />
      )}

      <h2 className="bookings-heading">My Bookings</h2>
      <div className="bookings-list">
        {bookings.map((booking, index) => (
          <div key={index} className="booking-item">
            <ol>
              <p>Park: {booking.park.name}</p>
              <p>Customer Ratings: {booking.park.customer_ratings}</p>
              <p>Contact: {booking.park.contact}</p>
              <hr />
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
