import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkillCard from "~/components/SkillCard";

function skill() {
  return (
    <>
      {/* Navigation */}
      <header className="sticky top-0 z-40 py-4 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
        <div className="text-xl font-bold">DevPortfolio</div>

        <nav className="hidden md:flex items-center space-x-8 ">
          <Link to="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link to="/skill" className="text-gray-300 hover:text-white">
            Skill
          </Link>
          <Link to="/project" className="text-gray-300 hover:text-white">
            Project
          </Link>
          <Link to="/experience" className="text-gray-300 hover:text-white">
            Experience
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-amber-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
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
            >
              Resume
            </a>
          </button>
        </div>
      </header>

      <section id="skills" className="py-12 md:py-24 lg:py-32  bg-black ">
        <div className="container px-6 md:px-6 items-center justify-center ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Skills & Technologies
              </h2>
              <p className="max-w-[700px] text-white md:text-xl">
                Here are some of the technologies and tools I work with
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16  pl-2 items-center justify-self-center">
            <SkillCard
              title="Frontend Development"
              items={["React", "Next.js", "TypeScript", "HTML/CSS"]}
            />
            <SkillCard
              title="Backend Development"
              items={["Node.js", "Express", "Python", "Django"]}
            />
            <SkillCard
              title="Database"
              items={["MongoDB", "PostgreSQL", "MySQL", "Firebase"]}
            />
            <SkillCard title="DevOps & Tools" items={["Git", "Docker"]} />
            <SkillCard
              title="UI/UX"
              items={[
                "Tailwind CSS",
                "Material UI",
                "Figma",
                "Responsive Design",
              ]}
            />
            <SkillCard
              title="Testing"
              items={["Jest", "React Testing Library", "Cypress", "Mocha"]}
            />
            <SkillCard
              title="Mobile"
              items={["React Native", "Flutter", "iOS", "Android"]}
            />
            <SkillCard
              title="Other"
              items={["GraphQL", "REST APIs", "WebSockets", "Microservices"]}
            />
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
                href="https://github.com/tsedeysolomons/"
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
    </>
  );
}
export default skill;
