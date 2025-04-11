import React, { useState } from 'react';
import axios from 'axios';

const SearchContacts = ({ setContacts }) => {
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    try {
      const result = await axios.get(`http://localhost:5000/api/contacts/search?search=${search}`);
      setContacts(result.data);  // Update the contacts list with search results
    } catch (err) {
      console.error('Error searching contacts:', err);
    }
  };

  return (
    <div>
      <h2>Search Contacts</h2>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchContacts;
