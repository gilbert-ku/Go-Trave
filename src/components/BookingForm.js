import React, { useState } from 'react';

const BookingForm = ({ onBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    duration: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.duration) {
      onBooking(formData);
      // Show the success message here
      window.alert('Park booked successfully!');
      setFormData({
        name: '',
        duration: '',
      });
    } else {
      window.alert('Please fill in all the required fields.');
    }
  };

  return (
    <div className='srch'>
      <h2>Book a Ranch</h2>
      <form  onSubmit={handleSubmit}>
        <div className='one'>
          <label htmlFor="name">Ranch Name: </label>
          <input className='srch1'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='two'>
          <label htmlFor="duration">Number of Hours: </label>
          <input className='srch1'
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <button className='srch2' type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
