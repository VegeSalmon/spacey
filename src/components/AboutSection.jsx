import React, { useState, useEffect, useRef } from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const [rocketStyle, setRocketStyle] = useState({});
  const sectionRef = useRef(null);
  const teamPhotoRef = useRef(null);
  const aboutInfoRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const updateRocketPosition = () => {
      if (sectionRef.current && teamPhotoRef.current && aboutInfoRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;

        let progress = (scrollY - (sectionTop - viewportHeight)) / (sectionHeight + viewportHeight);
        progress = Math.max(0, Math.min(1, progress));

        const easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;


        const teamPhotoRect = teamPhotoRef.current.getBoundingClientRect();
        const aboutInfoRect = aboutInfoRef.current.getBoundingClientRect();

        // Waypoints for the animation path
        const p0 = { x: -100, y: teamPhotoRect.top - 100 };
        const p1 = { x: teamPhotoRect.left, y: teamPhotoRect.top - 50 };
        const p2 = { x: (teamPhotoRect.right + aboutInfoRect.left) / 2, y: (teamPhotoRect.top + aboutInfoRect.top) / 2 };
        const p3 = { x: (teamPhotoRect.right + aboutInfoRect.left) / 2, y: teamPhotoRect.bottom + 50 };
        const p4 = { x: window.innerWidth + 100, y: p3.y };

        let x, y;

        if (easedProgress <= 0.25) {
          const segmentProgress = easedProgress / 0.25;
          x = p0.x + (p1.x - p0.x) * segmentProgress;
          y = p0.y + (p1.y - p0.y) * segmentProgress;
        } else if (easedProgress <= 0.5) {
          const segmentProgress = (easedProgress - 0.25) / 0.25;
          x = p1.x + (p2.x - p1.x) * segmentProgress;
          y = p1.y + (p2.y - p1.y) * segmentProgress;
        } else if (easedProgress <= 0.75) {
          const segmentProgress = (easedProgress - 0.5) / 0.25;
          x = p2.x + (p3.x - p2.x) * segmentProgress;
          y = p2.y + (p3.y - p2.y) * segmentProgress;
        } else {
          const segmentProgress = (easedProgress - 0.75) / 0.25;
          x = p3.x + (p4.x - p3.x) * segmentProgress;
          y = p3.y + (p4.y - p3.y) * segmentProgress;
        }

        setRocketStyle({
          position: 'fixed',
          top: `${y}px`,
          left: `${x}px`,
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: 'auto',
          zIndex: 1,
        });
      }
      animationFrameId.current = requestAnimationFrame(updateRocketPosition);
    };

    animationFrameId.current = requestAnimationFrame(updateRocketPosition);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <section className="about-section" id="projekt" ref={sectionRef}>
      <div className="about-container">
        <img
          src={process.env.PUBLIC_URL + "/Statek.png"}
          alt="Rakieta"
          style={rocketStyle}
          className="animated-rocket"
        />
        <div className="about-content">
          <div className="about-info" ref={aboutInfoRef}>
            <div className="team-photo" ref={teamPhotoRef}>
              <img
                src={process.env.PUBLIC_URL + "/team.png"}
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
