import React, { useState } from 'react';

<<<<<<< HEAD
const Search = ({ ranches, parks, onSearch }) => {
  const [searchRanch, setSearchRanch] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleRanchSearch = () => {
=======
const Search = ({ ranches, onSearch }) => {
  const [searchRanch, setSearchRanch] = useState('');

  const handleSearch = () => {
>>>>>>> f071018 (ranches branch added and made it accessible)
    if (!ranches || !Array.isArray(ranches)) {
      console.error('Ranches array is not available.');
      return;
    }

<<<<<<< HEAD
=======
    // Filter the ranches based on the searchRanch and pass the filtered ranches to the parent component (App.js)
>>>>>>> f071018 (ranches branch added and made it accessible)
    const filteredRanches = ranches.filter(
      (ranch) =>
        ranch.name.toLowerCase().includes(searchRanch.toLowerCase())
    );
    onSearch(filteredRanches);
  };

<<<<<<< HEAD
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
=======
  const handleInputChange = (e) => {
    setSearchRanch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
>>>>>>> f071018 (ranches branch added and made it accessible)
    }
  };

  return (
    <div className='srch'>
<<<<<<< HEAD
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
=======
      <h2>Search for Ranches</h2>
      <input className='srch1'
        type="text"
        value={searchRanch}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a ranch name"
      />
      <button className='srch2' onClick={handleSearch}>Search</button>
>>>>>>> f071018 (ranches branch added and made it accessible)
    </div>
  );
};

export default Search;
