// import "./Cards.css"
import React, { useState, useEffect } from "react";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:8001/hotels")  
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
      });
  }, []);

  return (
    <>
    <h3>Hotels and their ratings</h3>
    <div className="mainContainer">
      
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotelCards">
          <img src={hotel.image_url} alt={`Hotel: ${hotel.name}`} />
          <h1>{hotel.name}</h1>
          <p>{hotel.address}</p>
          <p>{hotel.description}</p>
          <p>Price: {hotel.price}</p>
          <p>Rating: {hotel.rating}</p>
          <p>Amenities: {hotel.amenities.join(', ')}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Hotels;
