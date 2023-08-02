
import React, { useState } from "react";


function AddHotelForm() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");
    const [amenities, setAmenities] = useState("");
    const [hotelsList, setHotelsList] = useState([]);
    function handleInput(event) {
        const { name, value } = event.target;
        switch (name) {
          case "image":
            setImage(value);
            break;
          case "name":
            setName(value);
            break;
          case "address":
            setAddress(value);
            break;
          case "description":
            setDescription(value);
            break;
          case "price":
            setPrice(value);
            break;
          case "rating":
            setRating(value);
            break;
          case "amenities":
            setAmenities(value.split(","));
            break;
          default:
            break;
        }
      }
    
    // state to tracking the id of the new hotel
    const [newHotelId, setNewHotelId] = useState(1);
  
    async function handleSubmit(e) {
      e.preventDefault();
      const formData = {
        image,
        name,
        address,
        description,
        price,
        rating,
        amenities,
      };
  
      try {
        const response = await fetch("http://localhost:8001/hotels", {
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
        console.log("form data", data);
  
        // Add the new hotel to the hotelsList with an id
        const newHotel = { ...data, id: newHotelId };
        setHotelsList([...hotelsList, newHotel]);
        setNewHotelId(newHotelId + 1); // Increment the id for the next hotel
      } catch (error) {
        console.error("Error sending data", error);
      }
    }
  return (
    <div >
      <h1>Add hotel</h1>
      <form className="AddHotelForm" onSubmit={handleSubmit}>
        <label>Hotel Image</label>
        <br />
        <input
          type="url"
          name="image"
          placeholder="Hotel image"
          value={image}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Hotel Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Hotel name"
          value={name}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Hotel Address</label>
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Hotel Description</label>
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Price in ($)</label>
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price in ($)"
          value={price}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Hotel Rating</label>
        <br />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={rating}
          onChange={handleInput}
        />
        <br />
        <br />
        <label>Hotel Amenities</label>
        <br />
        <input
          type="text"
          name="amenities"
          placeholder="Amenities"
          value={amenities}
          onChange={handleInput}
        />
        <br />
        <br />
        <button type="submit" className="Submitbtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddHotelForm;


