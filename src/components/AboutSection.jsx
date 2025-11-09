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

        // Adjust the animation to start later and end sooner
        const animationStart = sectionTop - viewportHeight * 0.8; // Start when 80% of the section is visible
        const animationEnd = sectionTop + sectionHeight - viewportHeight * 0.2; // End when 20% of the section is left
        const animationDuration = animationEnd - animationStart;

        let progress = (scrollY - animationStart) / animationDuration;
        progress = Math.max(0, Math.min(1, progress));

        const easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;

        const teamPhotoRect = teamPhotoRef.current.getBoundingClientRect();

        // Quadratic Bezier curve for a 'right, down, right' path
        const p0 = { x: -300, y: teamPhotoRect.top };
        const p1 = { x: window.innerWidth / 2, y: teamPhotoRect.bottom + 500 };
        const p2 = { x: window.innerWidth + 300, y: teamPhotoRect.bottom + 300 };

        const t = easedProgress;
        const x = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
        const y = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;

        setRocketStyle({
          position: 'fixed',
          top: `${y}px`,
          left: `${x}px`,
          transform: 'translate(-50%, -50%)',
          width: '200px',
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
