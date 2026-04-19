import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, MessageSquare, TrendingUp, Users, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Coding Achievements",
      icon: <Trophy className="text-amber-400" />,
      items: [
        "Solved 400+ Data Structure and Algorithm problems on LeetCode and GfG using C++ and Java.",
        "Regularly participate in coding contests and practice pattern-based problem solving.",
        "Delivered 3+ client websites contributing to increased user engagement."
      ]
    },
    {
      title: "Freelance Growth Marketer — Xalpha.AI",
      icon: <TrendingUp className="text-emerald-400" />,
      period: "Sept 2024 — Dec 2024",
      role: "Team Head",
      items: [
        "Led a remote team of 10-15 peers to execute growth strategies on social platforms.",
        "Increased user engagement by launching effective Twitter campaigns."
      ]
    }
  ];

  return (
    <section id="achievements" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-16">
            <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
              <Award size={32} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">Achievements / Extracurricular</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-xl">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  {item.period && (
                    <span className="text-xs font-bold text-slate-500">{item.period}</span>
                  )}
                </div>

                {item.role && (
                  <div className="flex items-center gap-2 mb-4 text-cyan-400 font-bold italic text-sm">
                    <Users size={14} /> {item.role}
                  </div>
                )}

                <ul className="space-y-4">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex gap-4 text-slate-400 leading-relaxed text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0 mt-2 group-hover:bg-cyan-500 transition-colors" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
