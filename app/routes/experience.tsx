import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, Briefcase, GraduationCap, Trophy } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period_start: string;
  period_end: string | null;
  employment_type: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon: string;
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/experience`)
      .then((res) => res.json())
      .then((json) => {
        setExperiences(json.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching experience:", err));
  }, []);

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const getIcon = (type: string) => {
    if (type.toLowerCase().includes('education')) return <GraduationCap size={20} />;
    if (type.toLowerCase().includes('award')) return <Trophy size={20} />;
    return <Briefcase size={20} />;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Professional <span className="text-brand-500">Journey</span></h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Tracing my path through software engineering, from academic foundations to industry-leading projects.
        </p>
      </motion.div>

      <div className="relative space-y-12 before:absolute before:inset-y-0 before:left-0 md:before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-brand-500/50 before:via-gray-200/20 before:to-transparent">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[-9px] md:left-1/2 md:ml-[-9px] top-0 w-5 h-5 rounded-full bg-brand-500 border-4 border-background z-20 shadow-lg shadow-brand-500/50" />

            {/* Content Side */}
            <div className="md:w-1/2 ml-8 md:ml-0">
              <div className="glass-card p-8 group hover:bg-brand-500/5 border-brand-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 mr-1 rounded-lg bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                    {getIcon(exp.employment_type)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                      <Building2 size={14} />
                      {exp.company}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-200/10 pb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    {formatDate(exp.period_start)} — {exp.period_end ? formatDate(exp.period_end) : "Present"}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.location}
                  </div>
                  <div className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-500">
                    {exp.employment_type}
                  </div>
                </div>

                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Key Results</h4>
                  <ul className="grid gap-2">
                    {exp.achievements?.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-500 shrink-0" />
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.technologies?.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-200/10 flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:text-brand-500 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Empty space for alternate side */}
            <div className="hidden md:block md:w-1/2" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
