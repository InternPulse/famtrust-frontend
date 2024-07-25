import React from 'react';
import Footer from '../components/Footer';
import NewsLetter from '../components/newsLetter';
import Services from '../components/Services';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Services />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
