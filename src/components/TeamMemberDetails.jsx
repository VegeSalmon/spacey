import React from 'react';
import './TeamMemberDetails.css';

const TeamMemberDetails = ({ member }) => {
  if (!member) return null;

  return (
    <div className="team-member-details">
      <div className="team-member-image">
        <img src={member.image} alt={`${member.name} ${member.surname}`} />
      </div>
      <div className="team-member-info">
        <h2>{`${member.name} ${member.surname}`}</h2>
        <p>{member.description}</p>
      </div>
    </div>
  );
};

export default TeamMemberDetails;
