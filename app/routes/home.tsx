import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Github, Linkedin, Send, Mail, AppWindow, ArrowRight, Code2, Cpu, Globe, ExternalLink, Sparkles, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function meta() {
  return [
    { title: "Tsedey Solomon | Digital Craftbox" },
    { name: "description", content: "Personal portfolio of Tsedey Solomon - Software Developer & Digital Artisan." },
  ];
}

const containerVars: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const cardVars: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Intl.DateTimeFormat('en-US', { 
        hour: '2-digit', minute: '2-digit', second: '2-digit' 
      }).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto min-h-screen">
      <motion.div 
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 auto-rows-min gap-4"
      >
        {/* --- Spotlight Intro Card (Span 8x2) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-8 lg:row-span-2 glass-card p-10 flex flex-col justify-center grow relative overflow-hidden group"
        >
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-500/20 rounded-full blur-[100px] group-hover:bg-brand-500/30 transition-all duration-700" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-brand-500/10 text-brand-500 text-[11px] font-black uppercase tracking-widest border border-brand-500/20">
              <Sparkles size={14} className="animate-spin-slow" />
              <span>Innovating Digital Horizons</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter mb-10 max-w-2xl bg-gradient-to-br from-gray-900 to-gray-500 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Building <br/><span className="text-brand-500 italic">visionary</span> code.
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-10">
               <span className="text-gray-900 dark:text-white font-bold">Tsedey Solomon</span> — Software Architect specialized in crafting performant, high-scale digital solutions that bridge design and technology.
            </p>

            <div className="flex flex-wrap gap-4">
               <Link to="/project" className="btn-primary gap-3 px-10 rounded-3xl group">
                Review My Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
               </Link>
               <Link to="/contact" className="btn-outline px-10 rounded-3xl">
                Get in touch
               </Link>
            </div>
          </div>
        </motion.div>

        {/* --- Live Clock Card (Span 4x1) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-4 lg:row-span-1 glass-card p-8 flex flex-col justify-center items-center text-center group bg-brand-500/5"
        >
          <Clock size={24} className="mb-4 text-brand-500 group-hover:rotate-180 transition-transform duration-700" />
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter tabular-nums mb-2 font-mono">{time}</h3>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Addis Ababa, East Africa</p>
        </motion.div>

        {/* --- Skill Mosaic Card (Span 4x2) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-4 lg:row-span-2 glass-card p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-black mb-8 flex items-center gap-3 italic">
              <div className="w-8 h-8 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-500">
                <Code2 size={18} />
              </div>
              Technical Skill
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Full-Stack", "TS / JS", "Python", "Cloud", "UI/UX", "API Design"].map((item) => (
                <div key={item} className="p-3 rounded-2xl bg-gray-100 dark:bg-white/5 border border-transparent hover:border-brand-500/30 transition-all flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                   <span className="text-xs font-bold uppercase tracking-widest">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <Link to="/skill" className="mt-8 text-[11px] font-black uppercase tracking-widest text-brand-500 hover:tracking-[0.2em] transition-all">
            Full capabilities →
          </Link>
        </motion.div>

        {/* --- Project Spotlight Card (Span 8x2) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-8 lg:row-span-2 glass-card p-0 overflow-hidden group relative min-h-[400px]"
        >
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />
           <div className="absolute top-10 left-10 z-20">
              <span className="px-3 py-1 rounded-full bg-brand-500 text-[10px] font-black text-white uppercase tracking-widest mb-4 inline-block">Featured Case Study</span>
              <h3 className="text-4xl font-black text-white tracking-tighter mb-2">EMwA Trainer Pooling System</h3>
              <p className="text-gray-300 max-w-md leading-relaxed">Streamlining professional trainer mobilization for the Ethiopian Midwifes Association with a centralized, data-driven management platform. The system optimizes nationwide allocation across Ethiopia's healthcare education network.</p>
           </div>
           
           <div className="absolute bottom-10 right-10 z-20">
              <Link to="/project" className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRight size={24} />
              </Link>
           </div>

           {/* Placeholder for visual flair */}
           <div className="absolute inset-0 bg-brand-900/40 flex items-center justify-center -z-10 group-hover:scale-110 transition-transform duration-1000">
              <Globe size={300} strokeWidth={0.5} className="text-brand-500/20 animate-spin-slow" />
           </div>
        </motion.div>

        {/* --- Connection Stake Card (Span 4x1) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-4 lg:row-span-1 glass-card p-4 flex items-center justify-around bg-pink-500/5 group"
        >
          {[
            { icon: <Github />, url: "https://github.com/tsedeysolomons/" },
            { icon: <Linkedin />, url: "https://linkedin.com/in/tsedey-solomon" },
            { icon: <Send />, url: "https://t.me/tsedi_sol" },
            { icon: <Mail />, url: "mailto:tsdeys19@gmail.com" },
          ].map((link, i) => (
            <a 
              key={i} 
              href={link.url} 
              target="_blank" 
              className="w-14 h-14 rounded-3xl bg-white dark:bg-white/5 flex items-center justify-center text-gray-500 hover:text-brand-500 hover:shadow-lg hover:shadow-brand-500/20 transition-all border border-transparent hover:border-brand-500/40"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

        {/* --- Experience/Status Card (Span 4x2) --- */}
        <motion.div 
          variants={cardVars}
          className="lg:col-span-4 lg:row-span-2 glass-card p-10 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-8 italic">Past & Present</h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l border-brand-500/30">
                 <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-brand-500 rounded-full" />
                 <p className="text-xs font-black text-brand-500 mb-1">CURRENT</p>
                 <p className="font-bold text-lg leading-tight uppercase tracking-tighter">Full Stack Architect</p>
              </div>
              <div className="relative pl-6 border-l border-gray-200/20">
                 <div className="absolute left-[-5px] top-0 w-[10px] h-[10px] bg-gray-400 rounded-full" />
                 <p className="text-xs font-black text-gray-400 mb-1">PREVIOUS</p>
                 <p className="font-bold text-lg leading-tight uppercase tracking-tighter">ICT Technical Support</p>
              </div>
            </div>
          </div>
          <Link to="/experience" className="btn-outline h-12 w-full text-xs font-black tracking-widest mt-8">Full Resume</Link>
        </motion.div>

      </motion.div>
    </div>
  );
}
