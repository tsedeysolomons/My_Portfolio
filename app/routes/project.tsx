import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Code, Layers, Sparkles } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image_url: string;
  category: string;
  tags: string[];
  demo_link: string;
  repo_link: string;
  featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((json) => {
        setProjects(json.data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category || "Development"))).filter(Boolean)];
  const filteredProjects = filter === "all" ? projects : projects.filter(p => (p.category || "Development") === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-brand-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-sm font-semibold mb-6">
          <Sparkles size={14} />
          <span>My Portfolio</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Recent <span className="text-brand-500">Works</span></h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          From full-stack applications to intricate user interfaces, here's a selection of projects that showcase my passion for design and engineering.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-bold capitalize transition-all ${
              filter === cat 
              ? "bg-brand-500 text-white shadow-lg shadow-brand-500/30" 
              : "bg-gray-100 dark:bg-white/5 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -10 }}
              className="glass-card flex flex-col group h-full"
            >
              {/* Image Container */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image_url || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3 w-full">
                    <a 
                      href={project.repo_link} 
                      target="_blank" 
                      className="flex-1 btn-primary !h-10 text-xs gap-2"
                    >
                      <Github size={14} /> Code
                    </a>
                    <a 
                      href={project.demo_link} 
                      target="_blank" 
                      className="flex-1 btn-outline !h-10 !bg-white/10 !backdrop-blur-md !border-white/20 text-xs gap-2 text-white"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-brand-500 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-brand-500 mb-3">
                  <Layers size={14} />
                  <span className="text-xs font-bold uppercase tracking-widest">{project.category || "Development"}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold px-2 py-1 rounded bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:text-brand-500 transition-colors">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No projects found for this category.</p>
        </div>
      )}
    </div>
  );
}
