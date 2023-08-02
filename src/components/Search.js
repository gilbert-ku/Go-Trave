import React, { useState } from 'react';

const Search = ({ parks, onSearch }) => {
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearch = () => {
    if (!parks || !Array.isArray(parks)) {
      console.error('Parks array is not available.');
      return;
    }

    // Filter the parks based on the searchLocation and pass the filtered parks to the parent component (App.js)
    const filteredParks = parks.filter(
      (park) =>
        park.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    onSearch(filteredParks);
  };

  const handleInputChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <h2>Search for Parks</h2>
      <input
        type="text"
        value={searchLocation}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Search Park by location"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
