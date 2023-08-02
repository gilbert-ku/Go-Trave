import React, { useState } from 'react';

const ParkList = ({ parks, onBooking }) => {
  const [selectedPark, setSelectedPark] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    numberOfPeople: '',
    duration: '',
  });

  const handleParkClick = (park) => {
    setSelectedPark(park);
    setFormData({
      name: '',
      numberOfPeople: '',
      duration: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.numberOfPeople && formData.duration) {
      onBooking({
        park: selectedPark,
        name: formData.name,
        numberOfPeople: formData.numberOfPeople,
        duration: formData.duration,
      });
      // Show the success message here
      window.alert('Park booked successfully!');
      setSelectedPark(null);
      setFormData({
        name: '',
        numberOfPeople: '',
        duration: '',
      });
    } else {
      window.alert('Please fill in all the required fields.');
    }
  };

  return (
    <div>
      <h2>Park List</h2>
      <ul className="park-list">
        {parks.map((park) => (
          <li key={park.id} className="park-item" onClick={() => handleParkClick(park)}>
            <div className="park-image-container">
              <img src={park.image_url} alt={park.name} className="park-image" />
            </div>
            <div className="park-details">
              <h3>{park.name}</h3>
              <p>{park.description}</p>
              <p>Location: {park.location}</p>
            </div>
          </li>
        ))}
      </ul>
      {selectedPark && (
        <div className="selected-park">
          <h3>Book {selectedPark.name}</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="numberOfPeople">Number of People: </label>
              <input
                type="number"
                id="numberOfPeople"
                name="numberOfPeople"
                value={formData.numberOfPeople}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="duration">Duration (in hours): </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Book</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ParkList;
