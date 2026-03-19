import { Github, Linkedin, Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: <Mail size={20} />, label: "Email", value: "tsdeys19@gmail.com", href: "mailto:tsdeys19@gmail.com" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "tsedeysolomon", href: "https://linkedin.com/in/tsedeysolomon" },
    { icon: <Github size={20} />, label: "GitHub", value: "tsedeysolomon19", href: "https://github.com/tsedeysolomon19" },
  ];

  return (
    <div className="py-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">Let's <span className="text-brand-500">Connect</span></h2>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I’m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
        {/* Left: Contact Info */}
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="space-y-8"
        >
          <div className="glass-card p-10 flex flex-col justify-between h-full bg-brand-500/5 border-brand-500/20">
            <div>
               <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
               <div className="space-y-6">
                {socialLinks.map((link, i) => (
                  <a 
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-brand-500/10 group-hover:text-brand-500 transition-all">
                      {link.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{link.label}</p>
                      <p className="font-bold text-gray-900 dark:text-white group-hover:text-brand-500 transition-colors">{link.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200/20">
              <p className="text-sm text-gray-500 italic">"Good design is obvious. Great design is transparent."</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="glass-card p-10 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full h-12 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-500/50 focus:bg-transparent transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full h-12 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-500/50 focus:bg-transparent transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Subject</label>
              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can I help you?"
                className="w-full h-12 px-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-500/50 focus:bg-transparent transition-all outline-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full p-4 rounded-xl bg-gray-100 dark:bg-white/5 border border-transparent focus:border-brand-500/50 focus:bg-transparent transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full gap-2 text-base h-14"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === "success" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20"
                >
                  <CheckCircle2 size={18} />
                  <span className="text-sm font-bold">Message sent! I'll get back to you soon.</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 text-red-500 border border-red-500/20"
                >
                  <AlertCircle size={18} />
                  <span className="text-sm font-bold">Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
