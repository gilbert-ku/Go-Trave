// import "./Cards.css"
import React, { useState, useEffect } from "react";

function Hotels() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:8001/hotels")  
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        setHotels(data);
      });
  }, []);

  return (
    <>
    <h3>Hotels and their ratings</h3>
    </>
  );
}

export default Hotels;
