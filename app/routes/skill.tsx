import SkillCard from "~/components/SkillCard";

function skill() {
  return (
    <>
      <section id="skills" className="py-12 md:py-24 lg:py-32  ml-28 ">
        <div className="container px-6 md:px-6 items-center justify-center ">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
                Skills & Technologie
              </h2>
              <p className="max-w-[700px] text-3xl md:text-xl">
                These are the core technologies, frameworks, and tools I rely on
                to design, develop, and deploy robust web and mobile
                applications.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16  pl-2 items-center justify-self-center">
            <SkillCard
              title="Frontend Development"
              items={["React", "Next.js", "TypeScript", "HTML/CSS","JavaScript"]}
            />
            <SkillCard
              title="Backend Development"
              items={["Node.js", "Express", "Python"]}
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
              items={["React Native", "iOS", "Android"]}
            />
            <SkillCard
              title="Other"
              items={[ "REST APIs", "WebSockets", "Microservices"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default skill;
