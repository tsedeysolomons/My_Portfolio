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

function Projects() {
  const projects = [
    {
      id: 1,
      title: "First Session",
      category: "Contract Webflow Developer",
      categoryColor: "bg-yellow-400",
      description:
        "I work on contract for First Session, specializing in Webflow development and integrating various",
      image: "/image.png",
      imageAlt: "First Session therapist finder interface",
    },
    {
      id: 2,
      title: "Resliders",
      category: "Side Project",
      categoryColor: "bg-gray-600",
      description:
        "Resliders is a personal project I've been working on to 'scratch my own itch'.",
      image: "/front.png?height=200&width=200",
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
              {tags.map((tag, index) => (
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
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link target="_blank" rel="noopener noreferrer" to={""}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link target="_blank" rel="noopener noreferrer" to={""}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    );
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
      {/* Projects Section */}
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
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment processing."
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "TypeScript", "Stripe", "MongoDB"]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/ecommerce"
            />
            <ProjectCard
              title="Microcontroller Weather Station"
              description="An embedded weather monitoring system using ARM microcontroller with sensors for temperature, humidity, and pressure data collection."
              image="/placeholder.svg?height=300&width=500"
              tags={[
                "ARM Cortex",
                "Embedded C",
                "Sensors",
                "Real-time Systems",
              ]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/weather-station"
            />
            <ProjectCard
              title="POS System Dashboard"
              description="A web-based dashboard for monitoring and managing point-of-sale systems, built during my experience with cash register maintenance."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Node.js", "Real-time Data", "System Monitoring"]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/pos-dashboard"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features."
              image="/placeholder.svg?height=300&width=500"
              tags={["React", "Node.js", "Socket.io", "PostgreSQL"]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/taskmanager"
            />
            <ProjectCard
              title="Home Automation System"
              description="An IoT-based home automation system using microcontrollers to control lights, temperature, and security systems remotely."
              image="/placeholder.svg?height=300&width=500"
              tags={["IoT", "8051", "Web Interface", "Remote Control"]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/home-automation"
            />
            <ProjectCard
              title="Blog Platform"
              description="A content management system for bloggers with markdown support, image uploads, SEO optimization, and analytics."
              image="/placeholder.svg?height=300&width=500"
              tags={["Next.js", "Sanity CMS", "Tailwind CSS", "Vercel"]}
              demoLink="https://example.com"
              repoLink="https://github.com/johndoe/blog"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Projects;
