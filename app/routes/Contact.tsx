import { Github, Link, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

function contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <div className=" bg-black text-white mr-0">
        {/* Navigation */}

        <header className="sticky top-0 z-40 py-4 px-6 flex items-center justify-between border-b border-gray-800 bg-gray-900">
          <div className="text-xl font-bold">DevPortfolio</div>

          <nav className="hidden md:flex items-center space-x-8 ">
            <Link to="/about" className="text-gray-300 hover:text-brown">
              About
            </Link>
            <Link to="/skill" className="text-gray-300 hover:text-white">
              Skill
            </Link>
            <Link to="/project" className="text-gray-300 hover:text-white">
              Project
            </Link>
            <Link to="/experience" className="text-gray-300 hover:text-white">
              Experience
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-amber-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </button>
            <button className="px-4 py-2 border border-gray-700 rounded-md text-white hover:bg-gray-800">
              <a
                href="/Tsedey's Resume(F).pdf"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </button>
          </div>
        </header>
      </div>
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In Touch
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-gray-400 text-lg mb-12">
                I&apos;m currently open to new opportunities and collaborations.
                Whether you have a question or just want to say hi, I&apos;ll do
                my best to get back to you!
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-white" />
                  <a
                    href="mailto:tsedeys19@gmail.com"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    tsedeys19@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-white" />
                  <a
                    href="https://linkedin.com/in/tsedeysolomon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    linkedin.com/in/tsedeysolomon
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-white" />
                  <a
                    href="https://github.com/tsedeysolomon19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    github.com/tsedeysolomon
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-gray-800 focus:border-gray-600 text-white"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-gray-800 focus:border-gray-600 text-white"
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-transparent border-gray-800 focus:border-gray-600 text-white"
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="bg-transparent border-gray-800 focus:border-gray-600 text-white resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-black hover:bg-gray-200 px-6 py-6 rounded-md"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <footer className="bg-gray-900 text-white py-10 mr-0 ">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
            {/* Left: Name or Logo */}
            <div className="text-lg font-semibold mb-4 md:mb-0">
              © {new Date().getFullYear()} Tsedey Solomon
            </div>

            {/* Center: Navigation */}
            <div className="flex space-x-6 text-sm mb-4 md:mb-0">
              <a href="/" className="hover:underline">
                Home
              </a>
              <a href="/about" className="hover:underline">
                About
              </a>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </div>
            {/* Right: Social Icons */}
            <div className="flex space-x-4 text-xl">
              <a
                href="https://github.com/tsedeysolomon19"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/tsedeysolomon"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaLinkedin />
              </a>
              <a href="tsedeys19@gmail.com" className="hover:text-gray-400">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default contact;
