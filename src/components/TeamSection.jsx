import React, { useState } from 'react';
import './TeamSection.css';
import Modal from './Modal';
import TeamMemberDetails from './TeamMemberDetails';
import { teamMembers } from '../data';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  const group1 = teamMembers.filter(member => member.id === 'kacper' || member.id === 'patryk' || member.id === 'szymon');
  const group2 = teamMembers.filter(member => member.id === 'piotr' || member.id === 'stanislaw' || member.id === 'anna');

  return (
    <section className="team-section" id="zespol">
      <div className="team-container">
        <h2 className="team-title rotated-title" style={{transform: 'rotate(6deg)'}}>
          Poznaj nas!
        </h2>
        
        <div className="team-groups">
          <div className="team-group group-1">
            {group1.map((member, index) => (
              <div key={`group1-${index}`} className="team-member" onClick={() => openModal(member)}>
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                </div>
                <div className="member-name">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="team-group group-2">
            {group2.map((member, index) => (
              <div key={`group2-${index}`} className="team-member" onClick={() => openModal(member)}>
                <div className="member-image-container">
                  <img src={member.image} alt={member.name} className="member-image" />
                </div>
                <div className="member-name">
                  {member.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <TeamMemberDetails member={selectedMember} />
      </Modal>
    </section>
  );
};

export default TeamSection;
