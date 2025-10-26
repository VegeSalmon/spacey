import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-details">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="project-images">
        {project.images.map((image, index) => (
          <img key={index} src={image} alt={`${project.name} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
