import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit" className="search-btn">
        Search
      </button>
    </form>
  );
}