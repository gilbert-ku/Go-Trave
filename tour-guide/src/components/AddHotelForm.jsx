import React from 'react';
import './Add.css';

function AddHotelForm({ onAddHotel, onCancel }) {
  const [name, setName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [image_url, setImage] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [amenities, setAmenities] = React.useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      address,
      image_url,
      price,
      rating,
      amenities: amenities.split(',').map((amenity) => amenity.trim()),
    };

    try {
      const response = await fetch("https://hotels-server-x471.onrender.com/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add hotel");
      }

      const data = await response.json();
      console.log("Form data", data);

      // Add the new hotel to the hotelsList with an id
      
    
    } catch (error) {
      console.error("Error sending data", error);
    }
    window.location.reload()
  };

  return (
    <div className="hotel-form">
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Image_Url
          <input type="url" value={image_url} onChange={(e)=>setImage(e.target.value)} required/>
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </label>
        <label>
          Rating:
          <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} required />
        </label>
        <label>
          Amenities (comma-separated):
          <input type="text" value={amenities} onChange={(e) => setAmenities(e.target.value)} required />
        </label>
        <div className="form-buttons">
          <button type="submit">Add Hotel</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddHotelForm;
