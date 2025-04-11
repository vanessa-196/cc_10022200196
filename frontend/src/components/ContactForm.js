import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ fetchContacts }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newContact = { name, email, phone };

    try {
      await axios.post('http://localhost:5000/api/contacts', newContact);
      fetchContacts();  // Refresh the contact list
      setName('');
      setEmail('');
      setPhone('');
    } catch (err) {
      console.error('Error adding contact:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Contact</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
