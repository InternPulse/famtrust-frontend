import React from 'react';
import Footer from '../components/Footer';
import NewsLetter from '../components/newsLetter';
import Services from '../components/Services';
import Header from '../components/Header';
import Hero from '../components/Hero';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
