import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
