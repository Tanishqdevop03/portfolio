import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code size={20} />,
      skills: ["C++", "JavaScript", "Java", "SQL", "HTML", "CSS"]
    },
    {
      title: "Technologies / Frameworks",
      icon: <Globe size={20} />,
      skills: ["React.js", "Node.js", "Express.js", "Redux", "Tailwind CSS"]
    },
    {
      title: "Developer Tools",
      icon: <Terminal size={20} />,
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"]
    },
    {
      title: "Concepts",
      icon: <Cpu size={20} />,
      skills: ["DSA", "OOP", "REST APIs", "Backend Development", "DBMS", "OS", "Computer Networks"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Terminal size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Technical Skills</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/60 border border-slate-800 p-8 rounded-3xl hover:border-cyan-500/20 transition-all group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-800 rounded-lg text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-xl text-sm text-slate-300 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/5 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;