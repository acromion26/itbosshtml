import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Reviews />
      <Footer />
    </div>
  );
}
