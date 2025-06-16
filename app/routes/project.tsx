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
    <div className="min-h-screen bg-pink-300 px-6 py-12 lg:px-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div className="max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              Current Projects
            </h1>
            <p className="text-lg lg:text-xl text-gray-800 leading-relaxed">
              I'm keeping this section updated with a selection of the projects
              I am currently tackling as a web designer and digital designer.
              From website overhauls to business automation systems to side
              projects, this will offer a glimpse into my current daily work and
              the type of projects I am currently focused on.
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
  );
}

export default Projects;
