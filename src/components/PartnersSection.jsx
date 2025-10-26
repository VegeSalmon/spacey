import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './PartnersSection.css';
import Modal from './Modal';
import SponsorDetails from './SponsorDetails';

gsap.registerPlugin(ScrollTrigger);

const PartnersSection = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);

  const [selectedSponsor, setSelectedSponsor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (sponsor) => {
    setSelectedSponsor(sponsor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSponsor(null);
  };

  const sponsors = [
    {
      id: 'sponsor1',
      name: 'Sponsor 1',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=889',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 'sponsor2',
      name: 'Sponsor 2',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/05ad9cbe8f5223e438e1f0c7ba92a49d16bd65c9?width=662',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'sponsor3',
      name: 'Sponsor 3',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/19902b58233c20908a481e1d37babac20211f96f?width=880',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 'sponsor4',
      name: 'Sponsor 4',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/1b8a2986646b9115de67e9906de6cab8c6c35303?width=891',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 'sponsor5',
      name: 'Sponsor 5',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/8009db54dfe92c5061293e3100394d114dc10b7d?width=889',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.'
    },
    {
      id: 'sponsor6',
      name: 'Sponsor 6',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/08c14bb5b1701d1559db94889f0eaabd782fc8bd?width=662',
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      id: 'sponsor7',
      name: 'Sponsor 7',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/9e2482acde253bbb52c92175280259a91248dc88?width=880',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      id: 'sponsor8',
      name: 'Sponsor 8',
      image: 'https://api.builder.io/api/v1/image/assets/TEMP/913de4741df0b2618bc9f39624f906ad1a5e0f64?width=891',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    }
  ];

  useLayoutEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;

    gsap.set(bottomRow, {xPercent: -50});

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

    return () => {
      tl.kill();
    };
  }, []);

  const renderSponsorItem = (sponsor, index, rowType) => {
    return (
      <div key={`${rowType}-${index}`} className="sponsor-item" onClick={() => openModal(sponsor)}>
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
        <SponsorDetails sponsor={selectedSponsor} />
      </Modal>
    </section>
  );
};

export default PartnersSection;