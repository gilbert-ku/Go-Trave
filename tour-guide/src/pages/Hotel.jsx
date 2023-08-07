import React, { useEffect, useState } from 'react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Button from '../components/Button';
import AddHotelForm from '../components/AddHotelForm';

function Hotel() {
  const [hotelsList, setHotelsList] = useState([]);
  const [showAddHotelForm, setShowAddHotelForm] = useState(false);

  const initialOptions = {
    clientId: "AdcnuG4Y1-YrxVE0d_-wadGsl03kmKZUmhJFlaZH10QRDhWo3E5LgF7RC0FvBpw177HHl6ovoJLj9y2u",
    currency: "USD",
    intent: "capture",
  };

  useEffect(() => {
    fetch("https://hotels-server-x471.onrender.com/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotelsList(data);
      });
  }, []);

  const handleAddHotel = (newHotel) => {
   
    setHotelsList([...hotelsList, newHotel]);
   
    setShowAddHotelForm(false);
  };

  return (
    <>
      <div className="main-container">
        {showAddHotelForm ? (
          <AddHotelForm onAddHotel={handleAddHotel} onCancel={() => setShowAddHotelForm(false)} />
        ) : (
          <button onClick={() => setShowAddHotelForm(true)}>Add Hotel</button>
        )}
        {hotelsList.map((hotel) => (
          <div key={hotel.id} className="beach-item">
            <img src={hotel.image_url} alt={`Hotel: ${hotel.name}`} className='beach-image' />
            <div className="beach details">
              <h1>{hotel.name}</h1>
              <p>{hotel.address}</p>
              <p>{hotel.description}</p>
              <p>Price: {hotel.price}</p>
              <p>Rating: {hotel.rating}</p>
              <p>Amenities: {hotel.amenities.join(', ')}</p>
            </div>
            <br />
            <PayPalScriptProvider options={initialOptions}>
              <Button />
            </PayPalScriptProvider>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hotel;
