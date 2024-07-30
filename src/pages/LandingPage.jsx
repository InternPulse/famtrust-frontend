import React from 'react';
import Footer from '../components/Footer';
import NewsLetter from '../components/newsLetter';
import Services from '../components/Services';
import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <div>
      
      <Hero />
      <Services />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
