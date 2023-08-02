import React, { useState } from 'react';

function SearchBeaches({ beaches = [] }) {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the user's input

  //filtering the beaches based on the search term 
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
        {/* conditional rendering to display the beaches based on the users' search input */}
        {searchTerm !== ""
          ? filteredBeaches.map((item) => (
              <div key={item.name} className='beach-item'>
                <img className="beach-image" src={item.image_url} alt={item.name} />
                <div className='beach-details'>
                  <h4>{item.name}</h4>
                  <p><b>Location:</b> {item.location}</p>
                  <p><b>Avg Price Per Night:</b> ${item.avg_price_per_night}</p>
                  <p><b>Rating:</b> {item.rating}</p>
                </div>
              </div>
            ))
          : beaches.map((item) => (
              <div key={item.name} className='beach-item'>
                <img className="beach-image" src={item.image_url} alt={item.name} />
                <div className='beach-details'>
                  <h4>{item.name}</h4>
                  <p><b>Location:</b> {item.location}</p>
                  <p><b>Avg Price Per Night:</b> ${item.avg_price_per_night}</p>
                  <p><b>Rating:</b> {item.rating}</p>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default SearchBeaches;
