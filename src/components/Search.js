import React, { useState } from 'react';

const Search = ({ ranches, onSearch }) => {
  const [searchRanch, setSearchRanch] = useState('');

  const handleSearch = () => {
    if (!ranches || !Array.isArray(ranches)) {
      console.error('Ranches array is not available.');
      return;
    }

    // Filter the ranches based on the searchRanch and pass the filtered ranches to the parent component (App.js)
    const filteredRanches = ranches.filter(
      (ranch) =>
        ranch.name.toLowerCase().includes(searchRanch.toLowerCase())
    );
    onSearch(filteredRanches);
  };

  const handleInputChange = (e) => {
    setSearchRanch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='srch'>
      <h2>Search for Ranches</h2>
      <input className='srch1'
        type="text"
        value={searchRanch}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a ranch name"
      />
      <button className='srch2' onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
