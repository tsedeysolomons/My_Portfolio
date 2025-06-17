import type React from "react";
import { Calendar, MapPin, Building, Code, Cpu, Wrench } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Experience() {
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

      <section id="experience" className="py-12 md:py-24 lg:py-32 bg-black">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Experience
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                My professional journey and hands-on experience in technology
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8 justify-center">
            {/* Web Development Experience */}
            <ExperienceCard
              icon={<Code className="h-6 w-6" />}
              title="Web Developer"
              company="Freelance & Personal Projects"
              location="Remote"
              period="2020 - Present"
              type="Full-time"
              description="Developed and maintained responsive web applications using modern technologies. Created user-friendly interfaces and implemented robust backend solutions for various clients and personal projects."
              achievements={[
                "Built 15+ responsive websites and web applications",
                "Implemented modern frontend frameworks (React, Next.js)",
                "Developed RESTful APIs and database integrations",
                "Optimized website performance and SEO",
                "Collaborated with clients to deliver custom solutions",
              ]}
              technologies={[
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "HTML/CSS",
                "MongoDB",
                "PostgreSQL",
              ]}
            />

            {/* Microprocessor Experience */}
            <ExperienceCard
              icon={<Cpu className="h-6 w-6" />}
              title="Microprocessor Systems Developer"
              company="Academic & Personal Projects"
              location="University Lab"
              period="2019 - 2022"
              type="Academic"
              description="Gained extensive hands-on experience with microprocessor systems, embedded programming, and hardware-software integration through coursework and independent projects."
              achievements={[
                "Programmed 8051 and ARM microcontrollers",
                "Designed and implemented embedded systems",
                "Developed assembly language programs",
                "Created interfacing circuits for sensors and actuators",
                "Built real-time control systems",
              ]}
              technologies={[
                "Assembly Language",
                "C Programming",
                "8051 Microcontroller",
                "ARM Cortex",
                "Circuit Design",
                "Embedded C",
                "Hardware Debugging",
              ]}
            />

            {/* PEDS Internship */}
            <ExperienceCard
              icon={<Wrench className="h-6 w-6" />}
              title="ICT Support Intern"
              company="PEDS (Point of Sale Systems)"
              location="On-site"
              period="2021 - 2022"
              type="Internship"
              description="Provided technical support for cash register machines and point-of-sale systems. Gained valuable experience in troubleshooting hardware issues, software configuration, and customer support in a retail technology environment."
              achievements={[
                "Troubleshot and repaired cash register systems",
                "Configured POS software for various retail clients",
                "Provided technical support to store operators",
                "Maintained and updated system databases",
                "Documented common issues and solutions",
                "Assisted in system installations and upgrades",
              ]}
              technologies={[
                "POS Systems",
                "Cash Register Software",
                "Hardware Troubleshooting",
                "Database Management",
                "Customer Support",
                "System Configuration",
              ]}
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

function ExperienceCard({
  icon,
  title,
  company,
  location,
  period,
  type,
  description,
  achievements,
  technologies,
}: {
  icon: React.ReactNode;
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  technologies: string[];
}) {
  return (
    <Card className="relative overflow-hidden">
      <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
            <div>
              <CardTitle className="text-xl">{title}</CardTitle>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Building className="h-4 w-4" />
                <span>{company}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary">{type}</Badge>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{period}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>

        <div>
          <h4 className="mb-3 font-semibold">
            Key Achievements & Responsibilities:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-muted-foreground">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Technologies & Tools:</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
