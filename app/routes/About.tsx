import { motion } from "framer-motion";
import { Award, Code, Mail, MapPin, Users, Heart, Coffee, Zap } from "lucide-react";

export default function About() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const values = [
    { icon: <Zap className="text-amber-400" />, title: "High Performance", desc: "Building blazing fast applications with optimized core logic and lightweight frontend frameworks." },
    { icon: <Heart className="text-red-400" />, title: "User Centric", desc: "Designing experiences that aren't just functional, but delightful and accessible for everyone." },
    { icon: <Coffee className="text-brand-500" />, title: "Fast Learning", desc: "Constants exploration of new tech stacks and methodologies to stay ahead in the digital landscape." },
  ];

  const stats = [
    { label: "Projects Completed", value: "10+", color: "text-brand-500" },
    { label: "Years Experience", value: "2+", color: "text-pink-500" },
    { label: "Code Commits", value: "1.2k", color: "text-amber-500" },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto space-y-32">
      {/* Hero Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-sm font-semibold mb-6">
            <UserIcon size={14} />
            <span>The Developer Journey</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[0.9]">
            I craft <span className="text-brand-500">solutions</span> for the future.
          </h1>
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-8 leading-relaxed max-w-xl">
            Based in Addis Ababa, I’ve spent the last few years mastering the art of full-stack engineering. 
            I focus on bridging the gap between complex backend architectures and intuitive, high-performance user interfaces.
          </p>
          
          <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-200/10">
            <div className="flex items-center gap-2 font-bold text-sm">
              <MapPin size={18} className="text-brand-500" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center gap-2 font-bold text-sm">
              <Mail size={18} className="text-brand-500" />
              <span>hello@tsedeysolomons.dev</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden aspect-[4/5] glass border-8 border-white dark:border-white/5 shadow-2xl">
            <img 
              src="/tsedeypic.JPG" 
              alt="Tsedey Solomon" 
              className="w-full h-full object-cover scale-110 grayscale hover:grayscale-0 transition-all duration-700" 
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-500/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl -z-10" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        variants={containerVars}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, i) => (
          <motion.div key={i} variants={itemVars} className="glass-card p-10 text-center">
            <p className={`text-5xl font-black mb-2 ${stat.color}`}>{stat.value}</p>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Values Grid */}
      <section className="space-y-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-black mb-6 tracking-tight">Core <span className="text-brand-500">Values</span></h2>
          <p className="text-gray-500">The principles that guide every line of code I write and every pixel I place.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-10 space-y-6 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-2xl">
                {v.icon}
              </div>
              <h3 className="text-2xl font-bold">{v.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

function UserIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
