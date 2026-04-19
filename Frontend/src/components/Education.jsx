import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const coursework = [
    "Data Structures And Algorithm",
    "Object Oriented Programming",
    "Operating System",
    "Mern Stack Technology",
    "Artificial Intelligence",
    "Database Management",
    "Computer Network"
  ];

  return (
    <section id="education" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <GraduationCap size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Education</h2>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl mb-12 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors" />
            
            <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Dr. Akhilesh Das Gupta Institute Of Professional Studies
                </h3>
                <p className="text-cyan-400 font-medium">
                  Bachelor of Technology in Electronics and Communication Engineering
                </p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-slate-300 font-bold">Nov. 2022 — May 2026</p>
                <p className="text-slate-500 italic text-sm">New Delhi, India</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-purple-500/10 rounded-2xl text-purple-400">
              <BookOpen size={24} />
            </div>
            <h3 className="text-2xl font-bold">Relevant Coursework</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coursework.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)' }}
                className="p-4 bg-slate-900/30 border border-slate-800 rounded-xl text-slate-300 flex items-center gap-3 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400" />
                {course}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
