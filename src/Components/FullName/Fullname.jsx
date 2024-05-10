import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Please fill in both first and last name fields.');
      return;
    }

    setFullName(`${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  };

  return (
    
    <div className="container mt-5">
        <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName" >First Name:</label>
          <input type="text"  id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" >Last Name:</label>
          <input type="text"  id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <button type="submit" >Submit</button>
      </form>
      {fullName && (
        <div className="mt-3">
          <p>Full Name: {fullName}</p>
        </div>
      )}
    </div>
  );
};

export default NameForm;
