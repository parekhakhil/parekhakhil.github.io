import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Blogs from '@/components/Blogs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;