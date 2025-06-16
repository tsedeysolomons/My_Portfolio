import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "First Session",
      category: "Contract Webflow Developer",
      categoryColor: "bg-yellow-400",
      description:
        "I work on contract for First Session, specializing in Webflow development and integrating various",
      image: "/tsedeypic.jpg",
      imageAlt: "First Session therapist finder interface",
    },
    {
      id: 2,
      title: "Resliders",
      category: "Side Project",
      categoryColor: "bg-gray-600",
      description:
        "Resliders is a personal project I've been working on to 'scratch my own itch'.",
      image: "/pictur.webp?height=300&width=400",
      imageAlt: "Resliders component library interface",
    },
    {
      id: 3,
      title: "PassionSports.ca",
      category: "Website Rebuild",
      categoryColor: "bg-cyan-500",
      description:
        "One of the first Webflow sites person printing company, Passion Sports, that I",
      image: "/placeholder.svg?height=300&width=400",
      imageAlt: "PassionSports custom apparel website",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <header className="py-4 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
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

      <div className="min-h-screen bg-black px-6 py-12 lg:px-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
                Current Projects
              </h1>
              <p className="text-lg lg:text-xl text-white leading-relaxed">
                I'm keeping this section updated with a selection of the
                projects I am currently tackling as a web designer and digital
                designer. From website overhauls to business automation systems
                to side projects, this will offer a glimpse into my current
                daily work and the type of projects I am currently focused on.
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                {/* Project Image */}
                <div className="aspect-[4/3] relative">
                  <img
                    src={project.image || "/tsedeypic.jpg"}
                    alt={project.imageAlt}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Category Tag */}
                  <div
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-black mb-4 ${project.categoryColor}`}
                  >
                    {project.category}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*footer */}
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

export default Projects;
