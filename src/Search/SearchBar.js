import React, { useState } from 'react';
import './Searchstyle.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Введите имя пользователя..."
      />
      <button onClick={handleSearch}>Поиск</button>
    </div>
  );
}

export default SearchBar;
