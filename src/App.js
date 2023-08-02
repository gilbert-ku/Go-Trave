import React, { useState, useEffect } from 'react';
import Search from './components/Search';
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
    <div>
      <h1>Park Booking</h1>
      <Search parks={parks} onSearch={handleSearch} />
      {filteredParks.length > 0 ? (
        <ParkList parks={filteredParks} onBooking={handleBooking} />
      ) : (
        <ParkList parks={parks} onBooking={handleBooking} />
      )}

      <h2>My Bookings</h2>
      {bookings.map((booking, index) => (
        <div key={index}>
          <ol>
            <p>Park: {booking.park.name}</p>
            <p>Description: {booking.park.description}</p>
            <p>Location: {booking.park.location}</p>
            <img
              src={booking.park.image_url}
              alt={booking.park.name}
              style={{ maxWidth: '300px' }}
            />
            <p>Name: {booking.name}</p>
            <p>Number of People: {booking.numberOfPeople}</p>
            <p>Duration (in hours): {booking.duration}</p>
          </ol>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
