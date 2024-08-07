 import Footer from '../components/Footer';
import NewsLetter from '../components/newsLetter';
import Services from '../components/Services';
import Hero from '../components/Hero';
import SatisfiedUsers from '../components/SatisfiedUsers';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonials';
import Header from '../components/Header';

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Hero />
      <SatisfiedUsers/>
      <section id="about"><AboutUs/></section>
      <section id="services"><Services/></section>
      <Testimonials/>
      <section id="resources"><NewsLetter /></section>
      <Footer />
    </div>
  );
};

export default LandingPage;
