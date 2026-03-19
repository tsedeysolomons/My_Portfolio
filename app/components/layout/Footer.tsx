import { Github, Linkedin, Mail, Twitter, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 mt-20 border-t border-gray-200/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
            <h2 className="text-xl font-black bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              DEV.PORTFOLIO
            </h2>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Tsedey Solomon. All rights reserved.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {["About", "Project", "Skill", "Experience", "Blog", "Contact"].map((link) => (
              <a 
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-sm font-bold text-gray-400 hover:text-brand-500 transition-colors uppercase tracking-[0.2em]"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={18} />, href: "https://github.com/tsedeysolomons/" },
              { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/tsedeysolomon" },
              { icon: <Mail size={18} />, href: "mailto:tsdeys19@gmail.com" },
              { icon: <Twitter size={18} />, href: "https://x.com/TsedeySolomon" },
            ].map((social, i) => (
              <motion.a 
                key={i}
                href={social.href}
                target="_blank"
                whileHover={{ y: -3, scale: 1.1 }}
                className="p-2.5 rounded-full glass hover:bg-brand-500/10 text-gray-500 hover:text-brand-500 transition-colors"
                rel="noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to top logic */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="flex flex-col items-center gap-2 group"
          >
            <div className="p-3 rounded-full glass border-brand-500/20 group-hover:border-brand-500/50 transition-all text-brand-500 shadow-lg shadow-brand-500/10">
              <ChevronUp size={20} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-brand-500 transition-colors">
              Back to peak
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
