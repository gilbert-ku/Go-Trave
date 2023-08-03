import React, { useState, useEffect } from 'react';

const RanchList = () => {
  const [ranches, setRanches] = useState([]);
  const [ratings, setRatings] = useState({});
  const [bookingDates, setBookingDates] = useState({});

  useEffect(() => {
    // Fetch the ranch data from the provided URL
    fetch('http://localhost:8001/ranches')
      .then((response) => response.json())
      .then((data) => {
        setRanches(data);
      })
      .catch((error) => console.error('Error fetching ranch data:', error));
  }, []);

  const handleRatingChange = (ranchId, rating) => {
    setRatings({ ...ratings, [ranchId]: rating });
  };

  const handleBookingDatesChange = (ranchId, dateType, value) => {
    setBookingDates((prevBookingDates) => ({
      ...prevBookingDates,
      [ranchId]: { ...prevBookingDates[ranchId], [dateType]: value },
    }));
  };

  const toggleBookingDatesInput = (ranchId) => {
    setBookingDates((prevBookingDates) =>
      prevBookingDates[ranchId] ? { ...prevBookingDates, [ranchId]: null } : prevBookingDates
    );
  };

  const handleBookClick = (ranchId) => {
    const bookingInfo = bookingDates[ranchId];
    if (bookingInfo && bookingInfo.start && bookingInfo.end) {
      const ranchName = ranches.find((ranch) => ranch.id === ranchId).name;
      alert(`Booking ranch: ${ranchName} from ${bookingInfo.start} to ${bookingInfo.end}`);
    } else {
      alert('Please select booking dates first.');
    }
    toggleBookingDatesInput(ranchId);
  };

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

            <div className="booking-from">
              <label htmlFor={`start-date-${ranch.id}`}>Booking From:</label>
              <input
                type="date"
                id={`start-date-${ranch.id}`}
                value={bookingDates[ranch.id]?.start || ''}
                onChange={(e) => handleBookingDatesChange(ranch.id, 'start', e.target.value)}
              />
            </div>

            <div className="booking-to">
              <label htmlFor={`end-date-${ranch.id}`}>To:</label>
              <input
                type="date"
                id={`end-date-${ranch.id}`}
                value={bookingDates[ranch.id]?.end || ''}
                onChange={(e) => handleBookingDatesChange(ranch.id, 'end', e.target.value)}
              />
            </div>

            <button className="book" onClick={() => handleBookClick(ranch.id)}>
              Book
            </button>

            <div className="rate">
              <label htmlFor={`rating-${ranch.id}`}>Rate:</label>
              <input
                type="number"
                id={`rating-${ranch.id}`}
                min={1}
                max={5}
                value={ratings[ranch.id] || ''}
                onChange={(e) => handleRatingChange(ranch.id, parseInt(e.target.value))}
              />
            </div>
            <div className="review">
              <label className="rev" htmlFor={`review-${ranch.id}`}>
                Review:
              </label>
              <textarea
                id={`review-${ranch.id}`}
                value={ratings[ranch] || ''}
                onChange={(e) => handleRatingChange(ranch.id, e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RanchList;
