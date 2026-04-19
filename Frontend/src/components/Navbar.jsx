import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

const Navbar = () => {   
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/tanishq-garg-27a290258/", label: "LinkedIn" },
    { icon: <FaGithub size={20} />, href: "https://github.com/Tanishqdevop03", label: "Github" },
    { icon: <TbBrandLeetcode size={20} />, href: "https://leetcode.com/u/tanishq_20/", label: "Leetcode" },
    { icon: <Globe size={20} />, href: "#", label: "GfG" },
  ];

  const navItems = ["Education", "Experience", "Projects", "Skills", "Achievements"];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-slate-800 bg-slate-950/50"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              TANISHQ GARG
            </h1>
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex gap-2">
              {socialLinks.map((link, i) => (
                <a 
                  key={i} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-slate-400 hover:text-cyan-400 transition-all hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-16 left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 z-40 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors border-b border-slate-900 pb-2"
                >
                  {item}
                </a>
              ))}
              <div className="flex gap-4 pt-2">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i} 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-900 rounded-xl text-slate-400 hover:text-cyan-400 transition-all shadow-lg"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;