import React, { useState } from 'react';


const RanchList = ({ ranches }) => {
  // State to store the rating and review for each ranch
  const [ratings, setRatings] = useState({});
  // State to store booking dates for each ranch
  const [bookingDates, setBookingDates] = useState({});

  // Function to handle rating change for a ranch
  const handleRatingChange = (ranchId, rating) => {
    setRatings({ ...ratings, [ranchId]: rating });
  };

  // Function to handle booking dates change for a ranch
  const handleBookingDatesChange = (ranchId, dateType, value) => {
    setBookingDates((prevBookingDates) => ({
      ...prevBookingDates,
      [ranchId]: { ...prevBookingDates[ranchId], [dateType]: value },
    }));
  };

  // Function to toggle booking dates input
  const toggleBookingDatesInput = (ranchId) => {
    setBookingDates((prevBookingDates) =>
      prevBookingDates[ranchId] ? { ...prevBookingDates, [ranchId]: null } : prevBookingDates
    );
  };


// Function to handle book button click
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
              <label htmlFor={`start-date-${ranch.id}`}>Booking From :</label>
              <input
                type="date"
                id={`start-date-${ranch.id}`}
                value={bookingDates[ranch.id]?.start || ''}
                onChange={(e) => handleBookingDatesChange(ranch.id, 'start', e.target.value)}
              />
            </div>

            <div className="booking-To">
              <label htmlFor={`end-date-${ranch.id}`}>To :</label>
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


            {/* Input fields for rating and review */}
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
              <label className='rev' htmlFor={`review-${ranch.id}`}>Review:</label>
              <textarea
                id={`review-${ranch.id}`}
                value={ratings[ranch] || ''}
                onChange={(e) => handleRatingChange(ranch.id, e.target.value)}
              />
            </div>
            {/* Input field for booking dates */}
          
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default RanchList;
