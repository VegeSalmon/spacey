import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PartnersSection.css';
import Modal from './Modal';
import AllSponsorsDetails from './AllSponsorsDetails';

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sponsors = [
    {
      id: 'pcb',
      name: 'Pcb',
      image: process.env.PUBLIC_URL + '/pcb.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'zrzutka',
      name: 'Zrzutka',
      image: process.env.PUBLIC_URL + '/zrzutka.png',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'botland',
      name: 'Botland',
      image: process.env.PUBLIC_URL + '/botland.png',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 'megakoszulki',
      name: 'Megakoszulki',
      image: process.env.PUBLIC_URL + '/megakoszulki.png',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ];

  useLayoutEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    gsap.set(bottomRow, {xPercent: -50});

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.partners-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      tl.to(topRow, { xPercent: -25, ease: 'none' });
      tl.to(bottomRow, { xPercent: 0, ease: 'none' }, 0);
    });

    mm.add("(max-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.partners-section',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
      tl.to(topRow, { xPercent: -50, ease: 'none' });
      tl.to(bottomRow, { xPercent: -25, ease: 'none' }, 0);
    });

    return () => {
      mm.revert();
    };
  }, []);

  const renderSponsorItem = (sponsor, index, rowType) => {
    const itemClass = sponsor.id === 'megakoszulki' ? 'sponsor-item megakoszulki-sponsor' : 'sponsor-item';
    return (
      <div key={`${rowType}-${index}`} className={itemClass} onClick={openModal}>
        <div className="sponsor-button">
          <div className="button-background"></div>
          <img 
            src={sponsor.image} 
            alt={sponsor.name}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="partners-section" id="partnerzy">
      <div className="partners-container">
        <div className="partners-scroll-container">
          <div className="partners-row partners-row-top" ref={topRowRef}>
            {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => 
              renderSponsorItem(sponsor, index, 'top')
            )}
          </div>
          <div className="partners-row partners-row-bottom" ref={bottomRowRef}>
            {[...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => 
              renderSponsorItem(sponsor, index, 'bottom')
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AllSponsorsDetails sponsors={sponsors} />
      </Modal>
    </section>
  );
};

export default PartnersSection;