import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Database, Layout } from "lucide-react";
import * as Si from "react-icons/si";

interface Skill {
  id: number;
  category: string;
  name: string;
  proficiency_level: string;
}

export default function Skill() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/skills`)
      .then((res) => res.json())
      .then((json) => {
        setSkills(json.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching skills:", err));
  }, []);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  const getCategoryIcon = (cat: string) => {
    switch (cat.toLowerCase()) {
      case "frontend development":
        return <Globe size={20} />;
      case "backend development":
        return <Database size={20} />;
      case "mobile development":
        return <Cpu size={20} />;
      default:
        return <Layout size={20} />;
    }
  };

  const getTechIcon = (name: string) => {
    const n = name.toLowerCase().replace(/[\s\.\/#\+]/g, "");

    const iconMap: Record<string, any> = {
      react: Si.SiReact,
      nextjs: Si.SiNextdotjs,
      typescript: Si.SiTypescript,
      javascript: Si.SiJavascript,
      htmlcss: Si.SiHtml5,
      html: Si.SiHtml5,
      css: Si.SiCss3,
      nodejs: Si.SiNodedotjs,
      express: Si.SiExpress,
      python: Si.SiPython,
      csharp: Si.SiSharp,
      c: Si.SiC,
      mongodb: Si.SiMongodb,
      postgresql: Si.SiPostgresql,
      mysql: Si.SiMysql,
      firebase: Si.SiFirebase,
      git: Si.SiGit,
      docker: Si.SiDocker,
      tailwindcss: Si.SiTailwindcss,
      figma: Si.SiFigma,
      jest: Si.SiJest,
      cypress: Si.SiCypress,
      reacttestinglibrary: Si.SiTestinglibrary,
      mocha: Si.SiMocha,
      reactnative: Si.SiReact,
      ios: Si.SiIos,
      android: Si.SiAndroid,
      restapis: Si.SiPostman, // Using Postman for REST APIs
      websockets: Si.SiSocketdotio,
      microservices: Si.SiKubernetes,
      materialui: Si.SiMui,
      responsivedesign: Si.SiPwa,
      assemblylanguage: Si.SiWebassembly,
      cprogramming: Si.SiCplusplus,
      sqlserver: Si.SiMysql, // closest available
      azureappservice: Si.SiGooglecloud, // closest available
      swagger: Si.SiSwagger,
    };

    const Icon = iconMap[n] || null;
    return Icon ? (
      <Icon size={22} />
    ) : (
      <span className="text-lg font-bold">{name[0]}</span>
    );
  };

  const containerVars = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-black mb-6">
          Technical Skill
        </h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my tech stack, specialized in building
          scalable and performant applications.
        </p>
      </motion.div>

      <div className="grid gap-16">
        {categories.map((cat, idx) => (
          <motion.section
            key={cat}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVars}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500">
                {getCategoryIcon(cat)}
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{cat}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200/20 to-transparent" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {skills
                .filter((s) => s.category === cat)
                .map((skill) => (
                  <motion.div
                    key={skill.id}
                    variants={itemVars}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="glass-card p-4 flex flex-col items-center text-center group min-h-[140px] justify-center"
                  >
                    <div className="w-10 h-10 mb-3 rounded-lg bg-gray-100 dark:bg-white/5 flex items-center justify-center transition-all group-hover:bg-brand-500/20 text-gray-500 dark:text-gray-400 group-hover:text-brand-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                      {getTechIcon(skill.name)}
                    </div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-gray-900 dark:text-white mb-0.5 line-clamp-1">
                      {skill.name}
                    </h4>
                    <span className="text-[9px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                      {skill.proficiency_level}
                    </span>
                  </motion.div>
                ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
