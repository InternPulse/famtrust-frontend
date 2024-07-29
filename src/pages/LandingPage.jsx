 import Footer from '../components/Footer';
import NewsLetter from '../components/newsLetter';
import Services from '../components/Services';
import Header from '../components/Header';
import Hero from '../components/Hero';
import SatisfiedUsers from '../components/SatisfiedUsers';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SatisfiedUsers/>
      <AboutUs/>
      <Services />
      <Testimonials/>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default LandingPage;
