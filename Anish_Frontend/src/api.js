import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Customers API
export const createCustomer = async (customerData) => {
  try {
    const response = await axios.post(`${API_URL}/customers`, customerData);
    return response.data;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw error;
  }
};

// Audiences API
export const createAudience = async (audienceData) => {
  try {
    const response = await axios.post(`${API_URL}/audiences`, audienceData);
    return response.data;
  } catch (error) {
    console.error('Error creating audience:', error);
    throw error;
  }
};

export const getAudiences = async () => {
  try {
    const response = await axios.get(`${API_URL}/audiences`);
    return response.data;
  } catch (error) {
    console.error('Error fetching audiences:', error);
    throw error;
  }
};

// Campaigns API
export const createCampaign = async (campaignData) => {
  try {
    const response = await axios.post(`${API_URL}/campaigns`, campaignData);
    return response.data;
  } catch (error) {
    console.error('Error creating campaign:', error);
    throw error;
  }
};

export const getCampaigns = async () => {
  try {
    const response = await axios.get(`${API_URL}/campaigns`);
    return response.data;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
};
