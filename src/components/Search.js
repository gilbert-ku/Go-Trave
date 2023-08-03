import React, { useState } from 'react';

const Search = ({ ranches, parks, onSearch }) => {
  const [searchRanch, setSearchRanch] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleRanchSearch = () => {
    if (!ranches || !Array.isArray(ranches)) {
      console.error('Ranches array is not available.');
      return;
    }

    const filteredRanches = ranches.filter(
      (ranch) =>
        ranch.name.toLowerCase().includes(searchRanch.toLowerCase())
    );
    onSearch(filteredRanches);
  };

  const handleParkSearch = () => {
    if (!parks || !Array.isArray(parks)) {
      console.error('Parks array is not available.');
      return;
    }

    const filteredParks = parks.filter(
      (park) =>
        park.location.toLowerCase().includes(searchLocation.toLowerCase())
    );
    onSearch(filteredParks);
  };

  const handleRanchInputChange = (e) => {
    setSearchRanch(e.target.value);
  };

  const handleParkInputChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleKeyPress = (e, searchFunction) => {
    if (e.key === 'Enter') {
      searchFunction();
    }
  };

  return (
    <div className='srch'>
      <div>
        <h2>Search for Ranches</h2>
        <input
          className='srch1'
          type="text"
          value={searchRanch}
          onChange={handleRanchInputChange}
          onKeyPress={(e) => handleKeyPress(e, handleRanchSearch)} // Adjusted this line
          placeholder="Enter a ranch name"
        />
        <button className='srch2' onClick={handleRanchSearch}>Search</button>
      </div>
      <div>
        <h2>Search for Parks</h2>
        <input
          type="text"
          value={searchLocation}
          onChange={handleParkInputChange}
          onKeyPress={(e) => handleKeyPress(e, handleParkSearch)} // Adjusted this line
          placeholder="Search Park by location"
        />
        <button onClick={handleParkSearch}>Search</button>
      </div>
    </div>
  );
};

export default Search;
