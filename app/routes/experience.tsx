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
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { useEffect, useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
};

export default function Experience() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/experience")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setExperiences(data.data);
        }
      })
      .catch((err) => console.error("Error fetching experience:", err))
      .finally(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    return new Date(dateStr).getFullYear().toString();
  };

  return (
    <>
      <section id="experience" className="py-12 md:py-24 lg:py-32 ml-28">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
                Experience
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                My professional journey and hands-on experience in technology
              </p>
            </div>
          </div>

          <div className="mt-16 space-y-8 justify-center">
            {loading ? (
              <p className="text-center text-xl">Loading experience...</p>
            ) : (
              experiences.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  icon={iconMap[exp.icon] || <Code className="h-6 w-6" />}
                  title={exp.title}
                  company={exp.company}
                  location={exp.location}
                  period={`${formatDate(exp.period_start)} - ${exp.period_end ? formatDate(exp.period_end) : "Present"}`}
                  type={exp.employment_type}
                  description={exp.description}
                  achievements={exp.achievements || []}
                  technologies={exp.technologies || []}
                />
              ))
            )}
          </div>
        </div>
      </section>
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
