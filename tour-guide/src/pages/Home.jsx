import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Button from '../components/Button';

function Home() {
  const initialOptions = {
    clientId: "AdcnuG4Y1-YrxVE0d_-wadGsl03kmKZUmhJFlaZH10QRDhWo3E5LgF7RC0FvBpw177HHl6ovoJLj9y2u",
    currency: "USD",
    intent: "capture",
  };

  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    people: '',
  });

  const [data, setData] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    fetchData(formData);
  }

  async function fetchData(formData) {
    const options = {
      method: 'GET',
      url: 'https://airbnb13.p.rapidapi.com/search-location',
      params: {
        location: formData.location,
        checkin: formData.checkIn,
        checkout: formData.checkOut,
        adults: formData.people,
        adults: '1',
        children: '0',
        infants: '0',
        pets: '0',
        page: '1',
        currency: 'USD',
      },
      headers: {
        'X-RapidAPI-Key': 'dd91de6d20mshc3665b7aac50046p1b5f16jsncfbcdb2c653f',
        'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <div className="container">
        <div className="image-con">
          <img
            src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990_1280.jpg"
            alt=""
          />
        </div>
        <div className="notice">
          <h1>Find your favorite place here!</h1>
        </div>
        <br />
        <div className="search-box">
          <div className="categories">
            <button>All Accommodation</button>
          </div>

          <form className="form" onSubmit={handleSubmit}>
            <label>Location</label>
            <input
              type="text"
              placeholder="type your destination"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
            <label>Check In</label>
            <input
              type="date"
              value={formData.checkIn}
              onChange={(e) =>
                setFormData({ ...formData, checkIn: e.target.value })
              }
            />
            <label>Check Out</label>
            <input
              type="date"
              value={formData.checkOut}
              onChange={(e) =>
                setFormData({ ...formData, checkOut: e.target.value })
              }
            />
            <label>No of people</label>
            <input
              type="number"
              placeholder="No of people"
              value={formData.people}
              onChange={(e) =>
                setFormData({ ...formData, people: e.target.value })
              }
            />
            <br />
            <div className="submit">
              <button>Search For Accommodation</button>
            </div>
          </form>
        </div>
      </div>

      {data !== null ? (
        <div className="main-container">
          {data.map((item) => (
            <div className="beach-item" key={item.id}>
              <img src={item.images[0]} alt={item.name} className='beach-image'/>
              
              <div className="beach-details">
                <p className="title">{item.name}</p>
                <span> {item.city}</span>
                <p>Bedrooms {item.bedrooms}</p>
                <p>Bathrooms {item.bathrooms}</p>
                <p> Beds {item.beds}</p> 
                <p> Address {item.address}</p>
                <br />
              </div>
             
              <br />
              <PayPalScriptProvider options={initialOptions}>
                <Button />
              </PayPalScriptProvider>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default Home;
