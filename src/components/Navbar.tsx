import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blogs', label: 'Blogs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-white/80 dark:bg-wildflower-dark/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-wildflower-dark dark:text-wildflower-purple">
            {portfolioData.name}
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              download="Akhil Parekh Resume.pdf"
              className="inline-flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-wildflower-dark shadow-lg py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-2 nav-link"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              download="Akhil Parekh Resume.pdf"
              className="block px-6 py-2 nav-link"
              onClick={() => setIsOpen(false)}
            >
              <span className="inline-flex items-center gap-2">
                <Download size={16} />
                Download Resume
              </span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
