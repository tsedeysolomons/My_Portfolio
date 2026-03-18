import { useEffect, useState } from "react";
import SkillCard from "~/components/SkillCard";

function skill() {
  const [skills, setSkills] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/skills")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // Group by category
          const grouped = data.data.reduce((acc: any, skill: any) => {
            if (!acc[skill.category]) acc[skill.category] = [];
            acc[skill.category].push(skill.name);
            return acc;
          }, {});
          setSkills(Object.entries(grouped));
        }
      })
      .catch(err => console.error("Error fetching skills:", err))
      .finally(() => setLoading(false));
  }, []);

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
            {loading ? (
              <p>Loading skills...</p>
            ) : (
              skills.map(([category, items]) => (
                <SkillCard
                  key={category}
                  title={category}
                  items={items}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default skill;
