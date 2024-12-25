import { Github, Linkedin, Twitter, Download } from 'lucide-react';
import portfolioData from '../data/portfolio.json';

const Footer = () => {
  const { name, socialLinks, resumeUrl } = portfolioData;

  return (
    <footer className="bg-wildflower-dark py-12 text-wildflower-light">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-wildflower-light/80">Building digital experiences.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Akhil Parekh Resume.pdf"
              className="hover:text-secondary transition-colors"
              aria-label="Download Resume"
            >
              <Download size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-wildflower-light/20 text-center text-wildflower-light/60">
          <p>&copy; {new Date().getFullYear()} Created by {name} with ❤️.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;