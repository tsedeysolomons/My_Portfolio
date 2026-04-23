import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Send,
  Mail,
  AppWindow,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  } as any;

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any },
    },
  } as any;

  const socialLinks = [
    {
      icon: <Github />,
      url: "https://github.com/tsedeysolomons/",
      color: "hover:text-white",
    },
    {
      icon: <Linkedin />,
      url: "https://linkedin.com/in/tsedey-solomon",
      color: "hover:text-blue-400",
    },
    {
      icon: <Send />,
      url: "https://t.me/tsedi_sol",
      color: "hover:text-sky-400",
    },
    {
      icon: <Mail />,
      url: "mailto:tsdeys19@gmail.com",
      color: "hover:text-brand-500",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Decorative cosmic orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

      <motion.main
        variants={containerVars}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          variants={itemVars}
          className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-sm font-semibold border border-brand-500/20"
        >
          <AppWindow size={14} />
          <span>Available for new projects</span>
        </motion.div>

        <motion.h1
          variants={itemVars}
          className="text-5xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
        >
          Building <span className="text-brand-500">exceptional</span> digital
          experiences.
        </motion.h1>

        <motion.p
          variants={itemVars}
          className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Hi, I’m{" "}
          <span className="text-gray-900 dark:text-white font-semibold underline decoration-brand-500/30">
            Tsedey Solomon
          </span>
          . I’m a software developer specialized in building modern, accessible,
          and high-performance web applications.
        </motion.p>

        <motion.div
          variants={itemVars}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="/project"
            className="btn-primary w-full sm:w-auto gap-2 group"
          >
            Explore My Work
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a href="/contact" className="btn-outline w-full sm:w-auto">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVars}
          className="flex items-center justify-center gap-8"
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              className={`text-gray-400 transition-colors ${social.color}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.main>

      {/* Background aesthetic grid */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none -z-10" />
    </div>
  );
}
