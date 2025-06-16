import { Award, Badge, Code, Mail, MapPin, Users } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function about() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Git",
  ];
  return (
    <>
      <div className=" bg-black text-white mr-0">
        {/* Navigation */}
        <header className="py-4 px-6 flex items-center justify-between border-b border-gray-800">
          <div className="text-xl font-bold">DevPortfolio</div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white">
              About
            </Link>
            <Link to="/skill" className="text-gray-300 hover:text-white">
              Skills
            </Link>
            <Link to="project" className="text-gray-300 hover:text-white">
              Projects
            </Link>
            <Link to="/experience" className="text-gray-300 hover:text-white">
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
      </div>

      <div className=" bg-black text-white">
        {/* Hero Section */}
        <section className="relative flex items-center justify-between px-6 md:px-12 lg:px-20">
          <div className="flex-1 max-w-2xl">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-4 text-gray-300">
              hi there, I'm
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              Tsedey Solomon
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mt-8 max-w-xl">
              Full Stack Developer passionate about creating exceptional digital
              experiences and solving complex problems through code.
            </p>
            <div className="flex items-center gap-6 mt-8 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Ethiopian, Adiss Abeba , NLKK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>hello@tsedeysolomons.dev</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block flex-shrink-0 ml-12">
            <div className="relative">
              <img
                src="/tsedeypic.JPG"
                alt="tsedey's pic"
                width={400}
                height={600}
                className="object-cover rounded-b-none "
              />
            </div>
          </div>
        </section>
        {/* About Section */}
        <section className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of
                  experience building web applications that make a difference. I
                  love turning complex problems into simple, beautiful, and
                  intuitive solutions.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through blog posts and
                  speaking engagements.
                </p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Technical Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {/*i dont understand the erro here? */}
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        fontVariant={"secondary"}
                        className="bg-gray-800  text-gray-200 "
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">50+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">5+</div>
                    <div className="text-gray-400">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="px-6 md:px-12 lg:px-20 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              What I Value
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
                <p className="text-gray-400">
                  Writing maintainable, scalable, and well-documented code that
                  stands the test of time.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-gray-400">
                  Working closely with teams to deliver exceptional products and
                  share knowledge.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-gray-400">
                  Continuously learning and pushing boundaries to deliver the
                  best possible solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  href="https://github.com/tsedeysolomons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/tsedeysolomon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:tsedeys19@gmail.com"
                  className="hover:text-gray-400"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
export default about;
