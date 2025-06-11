import type React from "react"

import { useState } from "react"
import { Mail, Linkedin, Github } from "lucide-react"
import { Button } from "app/components/ui/button"
import { Input } from "app/components/ui/input"
import { Textarea } from "app/components/ui/textarea"

function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">Get In Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <p className="text-gray-400 text-lg mb-12">
              I&apos;m currently open to new opportunities and collaborations. Whether you have a question or just want
              to say hi, I&apos;ll do my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-white" />
                <a href="mailto:your.email@example.com" className="text-white hover:text-gray-300 transition-colors">
                  your.email@example.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Linkedin className="h-6 w-6 text-white" />
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  linkedin.com/in/yourusername
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Github className="h-6 w-6 text-white" />
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  github.com/yourusername
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
  )
}
function useToast(): { toast: any } {
    throw new Error("Function not implemented.")
}
export default ContactPage;

