import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignForm = () => {
    const [title, setTitle] = useState('');
    const [audiences, setAudiences] = useState([]);
    const [selectedAudience, setSelectedAudience] = useState('');

    useEffect(() => {
        const fetchAudiences = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/audiences');
                setAudiences(response.data);
            } catch (error) {
                console.error('Failed to fetch audiences:', error);
            }
        };

        fetchAudiences();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/campaigns', {
                title,
                audienceId: selectedAudience,
            });
            console.log('Campaign created:', response.data);
        } catch (error) {
            console.error('Failed to create campaign:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Audience:</label>
                <select
                    value={selectedAudience}
                    onChange={(e) => setSelectedAudience(e.target.value)}
                    required
                >
                    <option value="">Select Audience</option>
                    {audiences.map((audience) => (
                        <option key={audience._id} value={audience._id}>
                            {audience.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">Create Campaign</button>
        </form>
    );
};

export default CampaignForm;
