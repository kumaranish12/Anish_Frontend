import React, { useState, useEffect } from 'react';
import { getCampaigns } from '../api';

const CampaignStats = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await getCampaigns();
        setCampaigns(data);
      } catch (error) {
        console.error('Failed to fetch campaigns:', error);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>Campaign Statistics</h2>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign._id}>
            <strong>{campaign.title}</strong> (Audience: {campaign.audienceId})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignStats;
