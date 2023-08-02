

function AddHotelForm() {

  return (
    <div >
      <h1>Add hotel</h1>
      <form className="AddHotelForm" >
        <label>Hotel Image</label>
        <br />
        <input
          type="url"
          name="image"
          placeholder="Hotel image"

        />
        <br />
        <br />
        <label>Hotel Name</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="Hotel name"

        />
        <br />
        <br />
        <label>Hotel Address</label>
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"

        />
        <br />
        <br />
        <label>Hotel Description</label>
        <br />
        <input
          type="text"
          name="description"
          placeholder="Description"

        />
        <br />
        <br />
        <label>Price in ($)</label>
        <br />
        <input
          type="number"
          name="price"
          placeholder="Price in ($)"

        />
        <br />
        <br />
        <label>Hotel Rating</label>
        <br />
        <input
          type="number"
          name="rating"
          placeholder="Rating"

        />
        <br />
        <br />
        <label>Hotel Amenities</label>
        <br />
        <input
          type="text"
          name="amenities"
          placeholder="Amenities"

        />
        <br />
        <br />
        <button type="submit" className="Submitbtn">
          Submit
        </button>
      </form>

      <h2>Newly added hotels</h2>
    </div>
  );
}

export default AddHotelForm;


