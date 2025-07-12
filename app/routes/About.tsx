import { Award, Code, Mail, MapPin, Users } from "lucide-react";
import { Badge } from "~/components/ui/badge";

function about() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "JavaScript",
    "Express",
    "Prisma",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "Git",
    "MySQL",
  ];
  return (
    <div className=" text-3xl">
      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-6 md:px-12 lg:px-20">
        <div className="flex-1 max-w-2xl">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light italic mb-4 ">
            hi there, I'm
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Tsedey Solomon
          </h1>
          <p className="text-3xl md:text-2xl  mt-8 max-w-xl">
            Full Stack Developer with a strong foundation in web and mobile
            technologies, passionate about creating impactful digital
            experiences. Known for being a fast learner, adaptable, and deeply
            committed to solving real-world problems through clean and
            thoughtful code.
          </p>
          <div className="flex items-center gap-6 mt-8 text-xl">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Ethiopian, Adiss Abeba , NLKK</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>hello@tsedeysolomons.dev</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-shrink-0 ml-12">
          <div className="relative">
            <img
              src="/tsedeypic.JPG"
              alt="tsedey's pic"
              width={400}
              height={600}
              className="object-cover rounded-b-none "
            />
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg  leading-relaxed">
                I'm a passionate Full Stack Developer with hands-on experience
                in building impactful web and mobile applications. With a strong
                foundation in both frontend and backend development, I enjoy
                turning complex problems into elegant, user-friendly solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Beyond coding, I’m always exploring new technologies like React
                Native and microcontroller integrations. I believe in continuous
                learning and enjoy contributing to the tech community by sharing
                ideas, writing blogs, and supporting fellow developers.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={`${skill}-${index}`}
                      className="bg-gray-800 text-gray-200 text-lg"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">5+</div>
                  <div className="text-gray-400 text-xl">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-400">1</div>
                  <div className="text-gray-400 text-xl">
                    Years Experience in acadamy and internship
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What I Value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-400 text-xl">
                Writing maintainable, scalable, and well-documented code that
                stands the test of time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-400 text-xl">
                Working closely with teams to deliver exceptional products and
                share knowledge.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-400 text-xl">
                Continuously learning and pushing boundaries to deliver the best
                possible solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default about;
