import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import SearchContacts from './components/SearchContacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/contacts');
      setContacts(result.data);  // Set contacts from the server
    } catch (err) {
      console.error('Error fetching contacts:', err);
    }
  };

  useEffect(() => {
    fetchContacts();  // Fetch contacts when the component mounts
  }, []);

  return (
    <div>
      <h1>Contact Management App</h1>
      <ContactForm fetchContacts={fetchContacts} />
      <SearchContacts setContacts={setContacts} />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
