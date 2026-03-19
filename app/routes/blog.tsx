import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Calendar, Clock, User, Tag, ArrowRight, 
  ChevronLeft, ChevronRight, BookOpen, Newspaper 
} from "lucide-react";

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  content: string;
  author: string;
  published_date: string;
  read_time: string;
  tags: string[];
  featured: boolean;
}

const categories = ["All", "Web Development", "Embedded Systems", "Career", "Python", "Backend"];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<Post[]>([]);
  const [pagination, setPagination] = useState({ total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blog/featured")
      .then((res) => res.json())
      .then((json) => setFeaturedPosts(json.data || []));
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: "6",
      search: searchTerm,
      category: selectedCategory === "All" ? "" : selectedCategory,
    });

    fetch(`http://localhost:5000/api/blog?${params}`)
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data || []);
        setPagination(json.pagination);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, [searchTerm, selectedCategory, currentPage]);

  const handlePostClick = (postId: number) => {
    fetch(`http://localhost:5000/api/blog/${postId}`)
      .then((res) => res.json())
      .then((json) => setSelectedPost(json.data))
      .catch((err) => console.error("Error fetching post details:", err));
  };

  if (selectedPost) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="py-12 px-6 max-w-4xl mx-auto"
      >
        <button
          onClick={() => setSelectedPost(null)}
          className="btn-outline !h-10 !px-4 mb-12 gap-2"
        >
          <ChevronLeft size={16} />
          Back to feed
        </button>

        <article className="glass-card p-8 md:p-12">
          <header className="mb-12">
            <div className="flex items-center gap-2 text-brand-500 mb-6 px-3 py-1 bg-brand-500/10 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
              <Newspaper size={14} />
              {selectedPost.category}
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              {selectedPost.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-500" />
                {selectedPost.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-500" />
                {new Date(selectedPost.published_date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-brand-500" />
                {selectedPost.read_time}
              </div>
            </div>
          </header>

          <div className="prose prose-invert prose-brand max-w-none text-gray-500 dark:text-gray-400 leading-relaxed text-lg">
             <div dangerouslySetInnerHTML={{ __html: selectedPost.content.replace(/\n/g, "<br />") }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200/10 flex flex-wrap gap-2">
            {selectedPost.tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 text-xs font-bold">
                #{tag}
              </span>
            ))}
          </div>
        </article>
      </motion.div>
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
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Inside My <span className="text-brand-500">Mind</span></h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Sharing knowledge, building tutorials, and exploring the intersection of design and deep tech.
        </p>
      </motion.div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-16 px-6 py-4 glass rounded-3xl border border-brand-500/10">
        <div className="relative flex-1 group w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors" size={18} />
          <input 
            placeholder="Search for articles..."
            className="w-full h-12 pl-12 pr-4 bg-transparent outline-none font-medium placeholder:text-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat ? "bg-brand-500 text-white shadow-lg shadow-brand-500/20" : "hover:bg-brand-500/10 text-gray-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {posts.map((post, idx) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => handlePostClick(post.id)}
              className="glass-card p-8 flex flex-col cursor-pointer group"
            >
              <div className="flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <BookOpen size={12} />
                {post.category}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-500 transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <Calendar size={10} />
                    {new Date(post.published_date).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    {post.read_time}
                  </div>
                </div>
                <div className="p-2 rounded-full bg-brand-500/10 text-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Simplified Pagination */}
      {pagination.totalPages > 1 && (
        <div className="mt-20 flex justify-center gap-4">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => p - 1)}
            className="btn-outline !h-12 !px-6 gap-2"
          >
            <ChevronLeft size={18} /> Prev
          </button>
          <button 
            disabled={currentPage === pagination.totalPages}
            onClick={() => setCurrentPage(p => p + 1)}
            className="btn-primary !h-12 !px-6 gap-2"
          >
            Next <ChevronRight size={18} />
          </button>
        </div>
      )}

      {posts.length === 0 && !loading && (
        <div className="text-center py-20 bg-gray-50/50 dark:bg-white/5 rounded-3xl border border-dashed border-gray-200 dark:border-white/10">
          <p className="text-gray-500 font-medium">No articles found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
