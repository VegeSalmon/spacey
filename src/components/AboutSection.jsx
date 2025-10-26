import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="projekt">
      <div className="about-container">
        <img
          className="about-background"
          src="/about.png"
          alt="Co to SpaceY?"
        />
        <div className="about-content">
          <div className="about-info">
            <div className="team-photo">
              <img
                src="/team.png"
                alt="Zespół SpaceY"
                className="circle-image"
              />
            </div>
            <div className="about-description">
              <h2 className="about-title rotated-title" style={{transform: 'rotate(6deg)'}}>
                Co jest SpaceY?
              </h2>
              <div className="about-pill">
                Jesteśmy grupą młodych pasjonatów kosmosu, zajmujemy się tworzeniem micro satelit oraz rakiet.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
