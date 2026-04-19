import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Zap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Global Software It Solution",
      role: "Mern Stack Intern",
      period: "July 2025 – September 2025",
      location: "Delhi, India",
      points: [
        "Developed a responsive company website frontend using HTML, JavaScript, and CSS, improving page load speed by 30% and enhancing usability across 3+ device types.",
        "Built backend services using Node.js and Express.js to process and store 50+ monthly customer query submissions through a dynamic contact form.",
        "Implemented email automation using NodeMailer to deliver user queries directly to the company’s official email, reducing manual response time by 60%.",
        "Designed RESTful APIs for efficient communication between frontend and backend."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Briefcase size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Experience</h2>
          </div>

          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l-2 border-slate-800 pb-12 last:pb-0">
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              
              <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.company}</h3>
                    <p className="text-cyan-400 font-bold italic">{exp.role}</p>
                  </div>
                  <div className="text-left md:text-right text-sm">
                    <div className="flex items-center md:justify-end gap-2 text-slate-300 font-medium mb-1">
                      <Calendar size={14} /> {exp.period}
                    </div>
                    <div className="flex items-center md:justify-end gap-2 text-slate-500">
                      <MapPin size={14} /> {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex gap-4 text-slate-300 leading-relaxed">
                      <Zap size={18} className="text-cyan-500 shrink-0 mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
