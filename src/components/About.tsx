/**
 * About Component
 * 
 * Displays professional background and technical skills
 * with animated progress bars and scroll animations.
 */
import { useEffect, useRef } from 'react';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const skills = Object.entries(portfolioData.about.skills).map(([name, data]) => ({
    name,
    level: data.percentage,
    details: data.Technology.join(', ')
  }));

  return (
    <section id="about" className="min-h-screen relative flex items-center py-24 bg-gradient-to-b from-wildflower-green/10 to-wildflower-purple/10 dark:from-wildflower-dark dark:to-black">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll card">
            <h3 className="text-2xl font-bold mb-6 text-wildflower-dark dark:text-wildflower-purple">
              {portfolioData.about.aboutTitle}
            </h3>
            <div className="space-y-4 text-content">
              <div dangerouslySetInnerHTML={{ __html: portfolioData.about.aboutText }} />
            </div>
          </div>

          <div className="space-y-8 animate-on-scroll">
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-wildflower-dark dark:text-wildflower-purple">
                Technical Expertise
              </h3>
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-wildflower-dark dark:text-wildflower-light">
                        {skill.name}
                      </span>
                      <span className="text-sm text-wildflower-dark/80 dark:text-wildflower-light/80">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-wildflower-light dark:bg-wildflower-dark/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <p className="text-sm text-wildflower-dark/70 dark:text-wildflower-light/70">
                      {skill.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
