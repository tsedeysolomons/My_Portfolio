import SkillCard from "~/components/SkillCard";

function skill() {
  return (
    <>
      <section id="skills" className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills & Technologies
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Here are some of the technologies and tools I work with
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
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
            <SkillCard
              title="DevOps & Tools"
              items={["Git", "Docker", "AWS", "CI/CD"]}
            />
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
    </>
  );
}
export default skill;
