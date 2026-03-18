import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProjects(data.data);
        }
      })
      .catch((err) => console.error("Error fetching projects:", err))
      .finally(() => setLoading(false));
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

  function ProjectCard({
    title,
    description,
    image,
    tags,
    demoLink,
    repoLink,
  }: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoLink: string;
    repoLink: string;
  }) {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {(tags || []).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={repoLink || "#"}
            >
              <Github className="mr-2 h-4 w-4" />
              Code
            </a>
          </Button>
          <Button size="sm" asChild>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={demoLink || "#"}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (loading) {
    return <div className="min-h-screen pt-20 text-center text-2xl">Loading projects...</div>;
  }

  return (
    <>
      <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div className="max-w-4xl">
              <h1 className="text-5xl  lg:text-6xl font-bold  mb-8">
                Current Projects
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed">
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
            {regularProjects.length > 0 ? (
              regularProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg h-full"
                >
                  {/* Project Image */}
                  <div className="aspect-[4/3] relative">
                    <img
                      src={project.image_url || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div
                      className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-black mb-4 bg-yellow-400`}
                    >
                      {project.category || "Development"}
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-700 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xl">No current projects found.</p>
            )}
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <section id="projects" className="py-12 md:py-24 lg:py-32 ml-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A selection of my recent work and personal projects
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image_url}
                tags={project.tags}
                demoLink={project.demo_link}
                repoLink={project.repo_link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
