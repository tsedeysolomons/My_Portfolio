import { Github, Linkedin, Mail, Twitter, ChevronUp, Home } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-6 mt-12 border-t border-gray-200/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-lg font-black bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              DEV.PORTFOLIO
            </h2>
            <p className="text-[10px] font-medium text-gray-500 uppercase tracking-widest mt-1">
              © {new Date().getFullYear()} Tsedey Solomon. All rights reserved.
            </p>
          </div>

          {/* Quick Nav */}
          <Link 
            to="/"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brand-500 transition-all group"
          >
            <div className="p-1.5 rounded-lg bg-gray-100 dark:bg-white/5 border border-transparent group-hover:border-brand-500/30 transition-all">
              <Home size={14} />
            </div>
            Go to home page
          </Link>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              {[
                { icon: <Github size={16} />, href: "https://github.com/tsedeysolomons/" },
                { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/tsedeysolomon" },
                { icon: <Mail size={16} />, href: "mailto:tsdeys19@gmail.com" },
                { icon: <Twitter size={16} />, href: "https://x.com/TsedeySolomon" },
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  whileHover={{ y: -2, scale: 1.1 }}
                  className="p-2 rounded-full glass hover:bg-brand-500/5 text-gray-500 hover:text-brand-500 transition-colors"
                  rel="noreferrer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 group p-2 px-3 rounded-xl glass border-brand-500/10 hover:border-brand-500/30 transition-all shadow-lg shadow-brand-500/5"
            >
              <ChevronUp size={16} className="text-brand-500 animate-bounce-slow" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-brand-500 transition-colors">
                TOP
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
