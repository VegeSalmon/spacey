import React, { useState } from 'react';
import './ActivitiesSection.css';
import Modal from './Modal';
import ProjectDetails from './ProjectDetails';
import { projects } from '../data';

const ActivitiesSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const activities = [
    {
      id: 'rakieta',
      title: 'Rakieta',
      image: process.env.PUBLIC_URL + '/rakieta.png',
      position: { top: '125px', right: '161px' }
    },
    {
      id: 'microsat',
      title: 'Micro Satelita',
      image: process.env.PUBLIC_URL + '/microsat.png',
      position: { top: '327px', left: '295px' }
    },
    {
      id: 'edukacja',
      title: 'Edukacja',
      image: process.env.PUBLIC_URL + '/edukacja.png',
      position: { top: '405px', right: '354px' }
    }
  ];

  return (
    <section className="activities-section">
      <div className="activities-container">
        <h2 className="activities-title rotated-title" style={{transform: 'rotate(-6deg)'}}>
          Nasze Działania:
        </h2>
        <div className="activities-grid">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className="activity-item"
              style={{
                position: 'absolute',
                ...activity.position
              }}
              onClick={() => openModal(projects.find(p => p.id === activity.id))}
            >
              <div className="activity-image-container">
                <img src={activity.image} alt={activity.title} className="activity-image" />
              </div>
              <div className="activity-title">
                {activity.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ProjectDetails project={selectedProject} />
      </Modal>
    </section>
  );
};

export default ActivitiesSection;
