import React, { useState } from 'react';
import { createAudience } from '../api';

const AudienceForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const audienceData = { name };

    try {
      const newAudience = await createAudience(audienceData);
      console.log('Audience created:', newAudience);
    } catch (error) {
      console.error('Failed to create audience:', error);
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
      <button type="submit">Create Audience</button>
    </form>
  );
};

export default AudienceForm;
