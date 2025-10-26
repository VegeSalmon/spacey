import React from 'react';
import './SponsorDetails.css';

const SponsorDetails = ({ sponsor }) => {
  if (!sponsor) return null;

  return (
    <div className="sponsor-details">
      <img src={sponsor.image} alt={sponsor.name} className="sponsor-details-logo" />
      <p>{sponsor.description}</p>
    </div>
  );
};

export default SponsorDetails;
