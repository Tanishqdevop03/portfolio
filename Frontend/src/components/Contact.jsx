import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";
import {useState} from 'react';
import {useRef} from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const[loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Message Sent Successfully ✅");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.log("ERROR:", error);
          alert("Failed to send ❌");
          setLoading(false);
        }
      );
  };
  const contactInfo = [
    { icon: <Mail size={20} />, label: "Email", value: "tanishqtanishq56@gmail.com", href: "mailto:tanishqtanishq56@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 9212395334", href: "tel:+919212395334" },
    { icon: <MapPin size={20} />, label: "Location", value: "Delhi, India", href: "#" }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/tanishq-garg-27a290258/", name: "LinkedIn" },
    { icon: <FaGithub size={24} />, href: "https://github.com/Tanishqdevop03", name: "GitHub" },
    { icon: <TbBrandLeetcode size={24} />, href: "https://leetcode.com/u/tanishq_20/", name: "Leetcode" },
    { icon: <Globe size={24} />, href: "https://www.geeksforgeeks.org/profile/tanishqtas4vn?tab=activity", name: "GfG" }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-900/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] -z-10" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Feel free to reach out for collaborations, opportunities, or just a friendly hello!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {contactInfo.map((info, i) => (
                  <motion.a
                    key={i}
                    href={info.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-slate-900/50 border border-slate-800 rounded-3xl hover:border-cyan-500/30 transition-all group"
                  >
                    <div className="p-4 bg-slate-800 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-lg font-bold text-white transition-colors">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">Social Profiles</p>
                <div className="flex gap-4">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-4 bg-slate-800 rounded-2xl text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5 border border-transparent hover:border-cyan-400/20 transition-all"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Simple Contact Form Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-sm"
            >
              <form className="space-y-6" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Full Name</label>
                    <input
                      type = "text"
                      name = "name"
                      required 
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase px-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required 
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Subject</label>
                  <input
                    type="text"
                    name="subject" 
                    required
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase px-1">Message</label>
                  <textarea
                    name="message" 
                    rows="4" className="w-full bg-slate-800/50 border border-slate-700 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500/50 transition-all resize-none" placeholder="Your message here..." />
                </div>
                <button
                  type="submit" 
                  disabled={loading}
                  className={`w-full py-4 ${loading ? 'opacity-70 cursor-not-allowed bg-slate-700' : 'bg-cyan-500 hover:bg-cyan-600 hover:scale-[1.02]'} text-slate-950 font-black rounded-2xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 active:scale-[0.98] disabled:hover:scale-100 disabled:shadow-none`}>
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} TANISHQ GARG. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default Contact;