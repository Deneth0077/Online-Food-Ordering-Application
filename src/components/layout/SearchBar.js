'use client';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="grid search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for menu items..."
        className="search-input"
      />
    </div>
  );
}
