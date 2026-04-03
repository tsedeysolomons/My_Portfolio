import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Calendar, Clock, User, Tag, ArrowRight, 
  ChevronLeft, ChevronRight, BookOpen, Newspaper 
} from "lucide-react";
import { client, urlFor } from "~/lib/sanity";
import { PortableText } from "@portabletext/react";

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  tags?: string[];
  mainImage: any;
  author: string;
  published_date: string;
  read_time: string;
  content: any; // PortableText JSON
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
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState({ name: "", email: "", content: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    client.fetch(`*[_type == "post" && featured == true] {
      _id, title, "slug": slug.current, excerpt, 
      "category": categories[0]->title, tags, mainImage,
      "author": author->name, "published_date": publishedAt,
      "read_time": "8 min read"
    }`).then(setFeaturedPosts);
  }, []);

  useEffect(() => {
    setLoading(true);
    const searchFilter = searchTerm ? `&& (title match "${searchTerm}*" || excerpt match "${searchTerm}*")` : "";
    const categoryFilter = selectedCategory !== "All" ? `&& "${selectedCategory}" in categories[]->title` : "";

    client.fetch(`*[_type == "post" ${searchFilter} ${categoryFilter}] {
      _id, title, "slug": slug.current, excerpt, 
      "category": categories[0]->title, tags, mainImage,
      "author": author->name, "published_date": publishedAt,
      "read_time": "5 min read"
    } | order(published_date desc)`).then(data => {
      setPosts(data);
      setLoading(false);
    });
  }, [searchTerm, selectedCategory, currentPage]);

  useEffect(() => {
    if (selectedPost) {
      // Fetching comments from our CUSTOM BACKEND using the Sanity ID as a persistent key
      fetch(`http://localhost:5000/api/blog/${selectedPost._id}/comments`)
        .then(res => res.json())
        .then(json => setComments(json.data || []));
    }
  }, [selectedPost]);

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPost || !newComment.name || !newComment.content) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`http://localhost:5000/api/blog/${selectedPost._id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      const data = await response.json();
      if (data.success) {
        setComments([data.data, ...comments]);
        setNewComment({ name: "", email: "", content: "" });
        setSubmitSuccess(true);
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (err) {
      console.error("Error posting comment:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePostClick = (postId: string) => {
    client.fetch(`*[_type == "post" && _id == $id][0] {
      _id, title, "slug": slug.current, excerpt, 
      "category": categories[0]->title, tags, mainImage,
      "author": author->name, "published_date": publishedAt,
      "read_time": "5 min read",
      "content": body
    }`, { id: postId }).then(setSelectedPost);
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
          {selectedPost.mainImage && (
            <div className="mb-12 rounded-3xl overflow-hidden aspect-video">
              <img 
                src={urlFor(selectedPost.mainImage).url()} 
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <header className="mb-12">
            <div className="flex items-center gap-2 text-brand-500 mb-6 px-3 py-1 bg-brand-500/10 rounded-full w-fit text-xs font-bold uppercase tracking-widest">
              <Newspaper size={14} />
              {selectedPost.category || "General"}
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

          <div className="prose prose-invert prose-brand max-w-none text-gray-500 dark:text-gray-400 leading-relaxed text-lg sanity-content">
             <PortableText 
               value={selectedPost.content} 
               components={{
                 block: {
                   h1: ({children}) => <h1 className="text-3xl font-black mb-6 mt-12 text-white">{children}</h1>,
                   h2: ({children}) => <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{children}</h2>,
                   normal: ({children}) => <p className="mb-6 leading-relaxed">{children}</p>,
                 },
                 list: {
                   bullet: ({children}) => <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>,
                 }
               }}
             />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200/10 flex flex-wrap gap-2">
            {selectedPost.tags?.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-white/5 text-gray-400 text-xs font-bold">
                #{tag}
              </span>
            ))}
          </div>
        </article>

        {/* Comment Section */}
        <section className="mt-16 space-y-12">
          <div className="flex items-center gap-4">
            <h3 className="text-2xl font-black tracking-tight">{comments.length} Discussion{comments.length !== 1 ? 's' : ''}</h3>
            <div className="h-px bg-gray-200/10 flex-1" />
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <motion.div 
                key={comment.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 border-transparent bg-gray-50/50 dark:bg-white/5"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-500 font-black text-sm uppercase">
                      {comment.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{comment.name}</p>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                        {new Date(comment.created_at).toLocaleDateString()} at {new Date(comment.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-[52px]">
                  {comment.content}
                </p>
              </motion.div>
            ))}
            
            {comments.length === 0 && (
              <div className="text-center py-12 border-2 border-dashed border-gray-200/10 rounded-3xl">
                <p className="text-gray-500 font-medium italic">No comments yet. Be the first to start the conversation!</p>
              </div>
            )}
          </div>

          {/* Comment Form */}
          <div className="glass-card p-8 border-brand-500/10 relative overflow-hidden">
            <AnimatePresence>
              {submitSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center mb-4">
                    <Clock size={32} />
                  </div>
                  <h4 className="text-2xl font-black mb-2">Comment Posted!</h4>
                  <p className="text-gray-500">Thank you for sharing your thoughts. Your comment is now live.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mb-8">
              <h4 className="text-lg font-bold flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-500">
                  <Newspaper size={18} />
                </div>
                Leave a Comment
              </h4>
            </div>

            <form onSubmit={handlePostComment} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Identity</label>
                  <input 
                    required
                    type="text" 
                    value={newComment.name}
                    onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
                    className="w-full h-12 px-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-500/40 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-gray-500 font-medium"
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Contact</label>
                  <input 
                    required
                    type="email" 
                    value={newComment.email}
                    onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                    className="w-full h-12 px-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-500/40 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-gray-500 font-medium"
                    placeholder="Email (Will not be published)"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Thoughts</label>
                <textarea 
                  required
                  rows={5}
                  value={newComment.content}
                  onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                  className="w-full p-6 rounded-3xl bg-gray-50 dark:bg-white/5 border border-transparent focus:border-brand-500/40 focus:bg-white dark:focus:bg-white/10 outline-none transition-all placeholder:text-gray-500 font-medium resize-none shadow-inner"
                  placeholder="What's on your mind? Share your feedback or questions..."
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <p className="text-[11px] text-gray-500 dark:text-gray-500 max-w-xs italic">
                  Your email address is required for verification and will not be shared publicly.
                </p>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary gap-4 px-10 rounded-2xl group shadow-xl shadow-brand-500/20 disabled:opacity-50"
                >
                  <span className="text-sm font-black uppercase tracking-widest">
                    {isSubmitting ? "Posting..." : "Post Comment"}
                  </span>
                  {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </form>
          </div>
        </section>
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
              key={post._id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => handlePostClick(post._id)}
              className="glass-card p-6 flex flex-col cursor-pointer group"
            >
              {post.mainImage && (
                <div className="mb-6 rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 dark:bg-white/5">
                  <img 
                    src={urlFor(post.mainImage).url()} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              )}
              <div className="flex items-center gap-2 text-brand-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                <BookOpen size={12} />
                {post.category || "General"}
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
