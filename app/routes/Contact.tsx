import { Github, Link, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
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
      <div className="min-h-screen  py-20">
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
                  <Mail className="h-6 w-6 text-3x1" />
                  <a
                    href="tsedeys19@gmail.com"
                    className=" hover:text-gray-300 transition-colors"
                  >
                    tsedeys19@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Linkedin className="h-6 w-6 text-3xl" />
                  <a
                    href="https://linkedin.com/in/tsedeysolomon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3x1 hover:text-gray-300 transition-colors"
                  >
                    linkedin.com/in/tsedeysolomon
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <Github className="h-6 w-6 text-3x1" />
                  <a
                    href="https://github.com/tsedeysolomon19"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3x1 hover:text-gray-300 transition-colors"
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
    </>
  );
}
export default contact;
