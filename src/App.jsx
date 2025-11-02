import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ActivitiesSection from './components/ActivitiesSection';
import PartnersSection from './components/PartnersSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray('section');

    sections.forEach((section) => {
      const isAboutSection = section.id === 'projekt';

      gsap.fromTo(section, 
        { opacity: 0, y: 100 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            toggleActions: isAboutSection ? 'play none none reverse' : 'play none none none'
          }
        }
      );
    });
  }, []);

  return (
    <div className="app">
      <div className="background-container">
        <img
          className="background-image bg-image-1"
          src="https://api.builder.io/api/v1/image/assets/TEMP/0f84d87b6f66342b11c827341e29294dd74367d1?width=5106"
          alt=""
        />
        <img
          className="background-image bg-image-2"
          src="https://api.builder.io/api/v1/image/assets/TEMP/18dc0f53fc04a6a8cbb98e0fdadf6e398ac12336?width=3674"
          alt=""
        />
        <img
          className="background-image bg-image-3"
          src="https://api.builder.io/api/v1/image/assets/TEMP/27cda3e8fc159baf35f37b431a8456073ffc2030?width=5107"
          alt=""
        />
        <img
          className="background-image bg-image-4"
          src="https://api.builder.io/api/v1/image/assets/TEMP/b350e43b5237d897ee8096ce340446f53d33b5d5?width=5106"
          alt=""
        />
        <img
          className="background-image bg-image-5"
          src="https://api.builder.io/api/v1/image/assets/TEMP/c6aa90ce320a034e694b024a337815ea1cb30bb8?width=3674"
          alt=""
        />
      </div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ActivitiesSection />
      <PartnersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
