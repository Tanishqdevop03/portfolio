import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ADGIPS Hub",
      date: "January 2025",
      stack: ["React", "JavaScript", "MongoDB", "Express.js", "OpenAI API"],
      description: "A full-stack MERN platform used by 200+ students to track and visualize campus placement.",
      points: [
        "Built an admin dashboard that automates scraping and categorization of 100+ job listings across companies and domains.",
        "Implemented placement statistics and visualization features using Chart.js for better data representation and insights.",
        "Integrated OpenAI API chatbot capable of answering 50+ placement-related queries for students.",
        "Deployed the application on Vercel and Render with custom domain integration."
      ],
      githubLink: "https://github.com/aditya99933/Placement-records",
      liveLink: "https://www.adgipshub.online/"
    },
    {
      title: "Catalyst Consultants Website",
      date: "January 2026",
      stack: ["MERN Stack", "Resend API"],
      description: "A responsive insurance company website improving user engagement and reducing bounce rate by 30%.",
      points: [
        "Built backend services using Node.js and Express.js to handle 50+ monthly client inquiries.",
        "Developed RESTful APIs enabling seamless frontend-backend communication and reducing response latency by 25%.",
        "Integrated Resend API to automate email handling for inquiries, reducing manual response time by 60%.",
        "Deployed the application using Vercel and Render ensuring scalable and reliable hosting."
      ],
      githubLink: "https://github.com/Tanishqdevop03/catalyst-consultants",
      liveLink: "https://www.catalystconsultants.in/"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToScroll, setItemsToScroll] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsToScroll(1);
      } else {
        setItemsToScroll(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsToScroll);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                <Layers size={32} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prevSlide}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all focus:outline-none group"
                aria-label="Previous project"
              >
                <ChevronLeft className="group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button 
                onClick={nextSlide}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all focus:outline-none group"
                aria-label="Next project"
              >
                <ChevronRight className="group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-visible lg:overflow-hidden">
              <motion.div 
                className="flex gap-8"
                animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 2}rem)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
                  if (swipe) {
                    if (offset.x < 0) nextSlide();
                    else prevSlide();
                  }
                }}
              >
                {projects.map((project, i) => (
                  <motion.div
                    key={i}
                    className="min-w-full lg:min-w-[calc(50%-1rem)] bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all flex flex-col h-full"
                  >
                    <div className="p-8 pb-0">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full uppercase tracking-widest">
                          {project.date}
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((item, j) => (
                          <span key={j} className="text-[10px] font-bold text-cyan-400 border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 rounded-md">
                            {item}
                          </span>
                        ))}
                      </div>

                      <p className="text-slate-300 mb-6 leading-relaxed font-medium italic">
                        {project.description}
                      </p>
                    </div>

                    <div className="px-8 pb-8 flex-grow:1 flex flex-col">
                      <ul className="space-y-3 mb-8 flex-grow:1">
                        {project.points.map((point, j) => (
                          <li key={j} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex gap-4 mt-auto pt-6 border-t border-slate-800/50">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors"
                        >
                          <FaGithub size={16} /> Source Code
                        </a>
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === i ? "w-8 bg-cyan-500" : "w-2 bg-slate-800 hover:bg-slate-700"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
