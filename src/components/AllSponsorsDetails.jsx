import React from 'react';
import './AllSponsorsDetails.css';

const AllSponsorsDetails = ({ sponsors }) => {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <div className="all-sponsors-details">
      {sponsors.map((sponsor, index) => {
        const sponsorClass = sponsor.id === 'megakoszulki' ? 'sponsor-display megakoszulki-sponsor' : 'sponsor-display';
        return (
          <div key={sponsor.id} className={`${sponsorClass} ${index % 2 === 0 ? 'logo-left' : 'logo-right'}`}>
            <div className="sponsor-logo-container">
              <img src={sponsor.image} alt={sponsor.name} className="sponsor-details-logo" />
            </div>
            <div className="sponsor-description-container">
              <p>{sponsor.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default AllSponsorsDetails;
