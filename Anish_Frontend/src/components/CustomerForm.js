// src/components/CustomerForm.js
import React, { useState } from 'react';
import { createCustomer } from '../api';

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalSpends, setTotalSpends] = useState(0);
  const [maxVisits, setMaxVisits] = useState(0);
  const [lastVisit, setLastVisit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = {
      name,
      email,
      totalSpends,
      maxVisits,
      lastVisit,
    };

    try {
      const newCustomer = await createCustomer(customerData);
      console.log('Customer created:', newCustomer);
    } catch (error) {
      console.error('Failed to create customer:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Total Spends:</label>
        <input
          type="number"
          value={totalSpends}
          onChange={(e) => setTotalSpends(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Max Visits:</label>
        <input
          type="number"
          value={maxVisits}
          onChange={(e) => setMaxVisits(Number(e.target.value))}
        />
      </div>
      <div>
        <label>Last Visit:</label>
        <input
          type="datetime-local"
          value={lastVisit}
          onChange={(e) => setLastVisit(e.target.value)}
        />
      </div>
      <button type="submit">Create Customer</button>
    </form>
  );
};

export default CustomerForm;
