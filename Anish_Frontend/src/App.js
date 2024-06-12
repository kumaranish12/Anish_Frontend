import React from 'react';
import CustomerForm from './components/CustomerForm';
import AudienceForm from './components/AudienceForm';
import CampaignForm from './components/CampaignForm';
import CampaignStats from './components/CampaignStats';

function App() {
  return (
    <div className="App">
      <h1>Create Customer</h1>
      <CustomerForm />
      <h1>Create Audience</h1>
      <AudienceForm />
      <h1>Create Campaign</h1>
      <CampaignForm />
      <h1>Campaign Statistics</h1>
      <CampaignStats />
    </div>
  );
}

export default App;
