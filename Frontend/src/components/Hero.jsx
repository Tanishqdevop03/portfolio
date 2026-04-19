import React from 'react';
import { motion } from 'framer-motion';
import ThreeScene from './ThreeScene';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <ThreeScene />
      
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-medium tracking-widest mb-4 uppercase text-sm"
          >
            Software Engineer
          </motion.p>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight">
            I'm <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">TANISHQ GARG</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            A passionate Full Stack Developer specializing in the MERN stack, 
            building responsive and scalable digital solutions.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold rounded-full transition-all shadow-lg shadow-cyan-500/20"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border border-slate-700 hover:border-cyan-400/50 hover:bg-cyan-400/5 text-white font-bold rounded-full transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-slate-700 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;