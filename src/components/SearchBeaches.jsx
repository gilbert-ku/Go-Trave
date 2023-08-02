import React, { useState } from 'react';

function SearchBeaches({ beaches = [] }) {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the user's input

  const filteredBeaches = beaches.filter((location) => {
    const beachLocation = location.location || ""; // Provide a default value if location is missing
    return beachLocation.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div className='beach-form-container'>
        <form action="">
          <input
            placeholder='search'
            className='search-beaches'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </div>

      <div className='main-container'>
        {searchTerm !== ""
          ? filteredBeaches.map((item) => (
              <div key={item.id} className='beach-item'>
                <img className="beach-image" src={item.image_url} alt={item.name} />
                <div className='beach-details'>
                  <h4>{item.name}</h4>
                  <p>Location: {item.location}</p>
                  <p>Avg Price Per Night: ${item.avg_price_per_night}</p>
                  <p>Rating: {item.rating}</p>
                </div>
              </div>
            ))
          : beaches.map((item) => (
              <div key={item.id} className='beach-item'>
                <img className="beach-image" src={item.image_url} alt={item.name} />
                <div className='beach-details'>
                  <h4>{item.name}</h4>
                  <p>Location: {item.location}</p>
                  <p>Avg Price Per Night: ${item.avg_price_per_night}</p>
                  <p>Rating: {item.rating}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default SearchBeaches;
