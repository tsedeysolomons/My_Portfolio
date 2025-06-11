//import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black text-white mr-0">
        {/* Navigation */}
        <header className="py-4 px-6 flex items-center justify-between border-b border-gray-800">
          <div className="text-xl font-bold">DevPortfolio</div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="#skills" className="text-gray-300 hover:text-white">
              Skills
            </Link>
            <Link to="#projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link to="#experience" className="text-gray-300 hover:text-white">
              Experience
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            <button className="px-4 py-2 border border-gray-700 rounded-md text-white hover:bg-gray-800">
              <a
                href="/Tsedey's Resume(F).pdf"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Resume
              </a>
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I&apos;m Tsedey Solomon
            <span className="block">Software Developer</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black rounded-md font-medium flex items-center"
            >
              Contact Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-700 text-white rounded-md font-medium hover:bg-gray-800"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a
              href="https://github.com/tsedeysolomons/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://t.me/tsedi_sol" // Replace with your actual Telegram link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" //http://www.w3.org/2000/svg is an XML namespace
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 2L11 13"></path>
                <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
              </svg>
            </a>

            <a
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
          </div>
        </main>
      </div>

      <div>
        <footer className="bg-gray-900 text-white py-10 mr-0 ">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
            {/* Left: Name or Logo */}
            <div className="text-lg font-semibold mb-4 md:mb-0">
              © {new Date().getFullYear()} Tsedey Solomon
            </div>

            {/* Center: Navigation */}
            <div className="flex space-x-6 text-sm mb-4 md:mb-0">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex space-x-4 text-xl">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:youremail@example.com"
                className="hover:text-gray-400"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
