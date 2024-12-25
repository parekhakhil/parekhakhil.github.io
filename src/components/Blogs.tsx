import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import portfolioData from "../data/portfolio.json";

const Blogs = () => {
  return (
    <section id="blogs" className="min-h-screen py-24 bg-gradient-to-b from-wildflower-purple/10 to-wildflower-green/10 dark:from-wildflower-dark dark:to-black">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center mb-16">Latest Blogs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="card group hover:translate-y-[-5px] transition-all duration-300"
            >
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-48 object-cover rounded-t-xl mb-4"
              />
              <div className="p-4">
                <div className="flex items-center gap-4 text-sm text-wildflower-dark/70 dark:text-wildflower-light/70 mb-3">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {blog.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    {blog.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-wildflower-dark dark:text-wildflower-purple">
                  {blog.title}
                </h3>
                <p className="text-wildflower-dark/80 dark:text-wildflower-light/80 mb-4">
                  {blog.description}
                </p>
                
                <a 
                  href={blog.link}
                  className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors"
                >
                  Read More 
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;