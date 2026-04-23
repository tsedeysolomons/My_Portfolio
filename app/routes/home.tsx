import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Github, Linkedin, Send, Mail, ArrowRight, Code2,
  ExternalLink, Sparkles, MapPin, Briefcase, GraduationCap,
  Globe, Star, Zap, Layers, RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

export function meta() {
  return [
    { title: "Tsedey Solomon | Digital Craftbox" },
    { name: "description", content: "Personal portfolio of Tsedey Solomon - Software Developer & Digital Artisan." },
  ];
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const SKILLS = [
  { label: "Full-Stack", icon: <Layers size={14} /> },
  { label: "TypeScript", icon: <Code2 size={14} /> },
  { label: "React / Next.js", icon: <Zap size={14} /> },
  { label: "Angular / .NET", icon: <Star size={14} /> },
  { label: "Node.js", icon: <Globe size={14} /> },
  { label: "PostgreSQL", icon: <Briefcase size={14} /> },
];

const STATS = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "1+", label: "Industries Served" },
];

const SOCIAL_LINKS = [
  { icon: <Github size={20} />, url: "https://github.com/tsedeysolomons/", label: "GitHub" },
  { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/tsedey-solomon", label: "LinkedIn" },
  { icon: <Send size={20} />, url: "https://t.me/tsedi_sol", label: "Telegram" },
  { icon: <Mail size={20} />, url: "mailto:tsdeys19@gmail.com", label: "Email" },
];

const QUOTES = [
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Abelson & Sussman" },
  { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "The best error message is the one that never shows up.", author: "Thomas Fuchs" },
  { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
  { text: "Before software can be reusable it first has to be usable.", author: "Ralph Johnson" },
  { text: "The most disastrous thing that you can ever learn is your first programming language.", author: "Alan Kay" },
  { text: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", author: "Antoine de Saint-Exupéry" },
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "It's not a bug — it's an undocumented feature.", author: "Anonymous" },
];

export default function Home() {
  const [time, setTime] = useState("");
  const [quoteIndex, setQuoteIndex] = useState(() => Math.floor(Math.random() * QUOTES.length));
  const [quoteVisible, setQuoteVisible] = useState(true);

  const cycleQuote = useCallback(() => {
    setQuoteVisible(false);
    setTimeout(() => {
      setQuoteIndex((prev) => {
        let next;
        do { next = Math.floor(Math.random() * QUOTES.length); } while (next === prev);
        return next;
      });
      setQuoteVisible(true);
    }, 400);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date())
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate quote every 8 seconds
  useEffect(() => {
    const timer = setInterval(cycleQuote, 8000);
    return () => clearInterval(timer);
  }, [cycleQuote]);

  return (
    <div className="min-h-screen">
      {/* ── HERO SECTION ── */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Background blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={staggerItem} className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter mb-6">
              <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent dark:from-white dark:to-gray-500">
                Hi, I'm
              </span>
              <br />
              <span className="text-brand-500">Tsedey</span>
              <br />
              <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent dark:from-white dark:to-gray-500">
                Solomon
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p variants={staggerItem} className="text-xl md:text-2xl font-semibold text-gray-400 mb-4">
              Full-Stack Software Developer
            </motion.p>

            {/* Description */}
            <motion.p variants={staggerItem} className="text-base text-gray-500 dark:text-gray-400 max-w-lg leading-relaxed mb-8">
              Specialized in crafting performant, high-scale digital solutions that bridge design and technology. Based in{" "}
              <span className="inline-flex items-center gap-1 text-gray-300">
                <MapPin size={14} className="text-brand-500" /> Addis Ababa, Ethiopia
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-10">
              <Link to="/project" className="btn-primary gap-3 px-8 rounded-2xl group">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/24.21.TsedeysResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-8 rounded-2xl gap-2"
              >
                <ExternalLink size={16} /> Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerContainer} className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link, i) => (
                <motion.a
                  key={i}
                  variants={staggerItem}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-500 hover:border-brand-500/40 hover:bg-brand-500/10 transition-all"
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Profile Card */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-6"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border-2 border-brand-500/30 shadow-2xl shadow-brand-500/20">
                <img
                  src="/tsedeypic.JPG"
                  alt="Tsedey Solomon"
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-bold">
                <span className="text-brand-500">💻</span> Open to Work
              </div>
              {/* Clock badge */}
              <div className="absolute -top-4 -left-4 glass-card px-4 py-2 rounded-2xl text-xs font-mono font-bold text-brand-500">
                {time}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-3 gap-4 w-full max-w-sm"
            >
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="glass-card p-4 rounded-2xl text-center"
                >
                  <p className="text-2xl font-black text-brand-500">{stat.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SKILLS STRIP ── */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-card text-sm font-bold text-gray-300 hover:text-brand-500 hover:border-brand-500/40 transition-all cursor-default"
            >
              <span className="text-brand-500">{skill.icon}</span>
              {skill.label}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={12} /> Finished Project
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            EMwA Trainer <span className="text-brand-500">Pooling System</span>
          </h2>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-card rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[400px]"
        >
          {/* Image side */}
          <div className="relative overflow-hidden min-h-[300px]">
            <img
              src="/trainerpooling.png"
              alt="EMwA Trainer Pooling System"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />
          </div>

          {/* Content side */}
          <div className="p-10 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                <Star size={10} /> Finished
              </span>
              <h3 className="text-2xl font-black mb-4 tracking-tight">
                Enterprise Trainer Management Platform
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                Streamlining professional trainer mobilization for the Ethiopian Midwifes Association with a centralized, data-driven management platform. The system optimizes nationwide allocation across Ethiopia's healthcare education network.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Angular", "Tailwind CSS", "C#", ".NET"].map((tag) => (
                  <span key={tag} className="text-[10px] font-bold px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 border border-brand-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="http://49.12.194.224:8081/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !h-11 px-6 text-sm gap-2 rounded-xl"
              >
                <ExternalLink size={15} /> Live Demo
              </a>
              <a
                href="https://github.com/tsedeysolomons/Trainer-pooling.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !h-11 px-6 text-sm gap-2 rounded-xl"
              >
                <Github size={15} /> Source Code
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── EXPERIENCE TIMELINE ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Briefcase size={12} /> Career
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">
            My <span className="text-brand-500">Journey</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            {
              role: "Software Developer",
              company: "DAF Tech Computer",
              period: "Dec 2025 — Present",
              type: "Full-time",
              current: true,
              icon: <Code2 size={18} />,
            },
            {
              role: "Web Developer",
              company: "Freelance & Personal Projects",
              period: "Jan 2024 — Present",
              type: "Full-time",
              current: true,
              icon: <Globe size={18} />,
            },
            {
              role: "Microprocessor Systems Developer",
              company: "Academic & Personal Projects",
              period: "Jan 2023 — Dec 2024",
              type: "Academic",
              current: false,
              icon: <Zap size={18} />,
            },
            {
              role: "ICT Support Intern",
              company: "PEDS (Point of Sale Systems)",
              period: "Jan 2024 — Dec 2024",
              type: "Internship",
              current: false,
              icon: <GraduationCap size={18} />,
            },
          ].map((exp, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="glass-card p-6 rounded-2xl flex gap-4 items-start hover:-translate-y-1 transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${exp.current ? "bg-brand-500/20 text-brand-500" : "bg-white/5 text-gray-400"}`}>
                {exp.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h3 className="font-black text-base leading-tight">{exp.role}</h3>
                  {exp.current && (
                    <span className="text-[9px] font-black px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 uppercase tracking-widest">
                      Active
                    </span>
                  )}
                </div>
                <p className="text-sm text-brand-500 font-semibold mb-1">{exp.company}</p>
                <p className="text-xs text-gray-400">{exp.period} · {exp.type}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 text-center"
        >
          <Link to="/experience" className="btn-outline px-8 rounded-2xl gap-2 inline-flex items-center">
            Full Resume <ArrowRight size={16} />
          </Link>
        </motion.div>
      </section>

      {/* ── QUOTE SECTION ── */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden text-center"
        >
          {/* Decorative gradient top bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 via-purple-500 to-pink-500" />

          {/* Big background quote mark */}
          <div className="absolute -bottom-6 -right-4 text-[200px] font-black text-brand-500/5 leading-none select-none pointer-events-none">
            "
          </div>

          {/* Quote icon */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 mb-8 mx-auto">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
            </svg>
          </div>

          {/* Animated quote text */}
          <div className="min-h-[100px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {quoteVisible && (
                <motion.div
                  key={quoteIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col items-center"
                >
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-black italic tracking-tight text-gray-100 max-w-3xl leading-snug mb-6">
                    "{QUOTES[quoteIndex].text}"
                  </blockquote>
                  <cite className="text-sm font-bold uppercase tracking-[0.25em] text-brand-500 not-italic">
                    — {QUOTES[quoteIndex].author}
                  </cite>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Dot indicators */}
            <div className="flex gap-1.5">
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setQuoteVisible(false);
                    setTimeout(() => { setQuoteIndex(i); setQuoteVisible(true); }, 400);
                  }}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i === quoteIndex ? "bg-brand-500 w-4" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Quote ${i + 1}`}
                />
              ))}
            </div>

            {/* Refresh button */}
            <button
              onClick={cycleQuote}
              className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 hover:bg-brand-500/20 transition-all"
              title="Next quote"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 via-transparent to-purple-500/10 pointer-events-none" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold uppercase tracking-widest mb-6">
              <Mail size={12} /> Let's Connect
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              Have a project <br />
              <span className="text-brand-500">in mind?</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
              I'm always open to discussing new opportunities, interesting projects, or just having a great conversation about tech.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary px-10 rounded-2xl gap-2">
                <Mail size={16} /> Get in Touch
              </Link>
              <Link to="/project" className="btn-outline px-10 rounded-2xl gap-2">
                <Layers size={16} /> See All Projects
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
