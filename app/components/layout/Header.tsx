import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = ({ onToggle }: { onToggle: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skill" },
    { name: "Projects", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 glass" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter"
        >
          <Link to="/" className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
            DEV.PORTFOLIO
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-brand-500/10 ${
                location.pathname === link.path 
                ? "text-brand-500 dark:text-brand-400 bg-brand-500/5" 
                : "text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggle}
            className="p-2.5 rounded-full glass hover:bg-brand-500/10 transition-colors"
            aria-label="Toggle Brightness"
          >
            <span className="dark:hidden"><Moon size={20} className="text-gray-700" /></span>
            <span className="hidden dark:block"><Sun size={20} className="text-amber-400" /></span>
          </motion.button>

          <a
            href="/Tsedey's Resume(F).pdf"
            className="hidden sm:flex btn-primary !h-10 !px-4 !text-sm gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} />
            Resume
          </a>

          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`p-3 rounded-xl text-lg font-medium ${
                    location.pathname === link.path 
                    ? "bg-brand-500/10 text-brand-500" 
                    : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/Tsedey's Resume(F).pdf"
                className="btn-primary w-full gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText size={18} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
