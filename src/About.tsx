import { personalInfo, skills } from "./constants";
import { Github, Linkedin, Twitter } from "lucide-react";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.1),transparent_50%)]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            I'm a dedicated full-stack developer with{" "}
            {new Date().getFullYear() - 2019}+ years of experience building
            scalable web applications and leading development teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
            <p className="text-gray-300 mb-6">
              Started as a curious developer in 2019, I've grown into a seasoned
              professional who thrives on solving complex problems and creating
              exceptional user experiences. My expertise spans both frontend and
              backend technologies, with a passion for clean code and scalable
              architecture.
            </p>
            <p className="text-gray-300 mb-6">
              I believe in continuous learning and staying up-to-date with the
              latest technologies. When I'm not coding, you'll find me
              contributing to open-source projects, mentoring aspiring
              developers, or exploring new tech trends.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href={personalInfo.twitter}
                className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className={`px-3 py-2 rounded-full text-sm font-medium ${skill.color} text-center hover:scale-105 transition-transform cursor-pointer`}
                >
                  {skill.name}
                </span>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <h4 className="font-bold text-white mb-3">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-2xl font-bold text-cyan-400">50+</span>
                  <p className="text-gray-300">Projects Completed</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-emerald-400">
                    100k+
                  </span>
                  <p className="text-gray-300">Users Served</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-purple-400">
                    {new Date().getFullYear() - 2019}+
                  </span>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div>
                  <span className="text-2xl font-bold text-pink-400">10+</span>
                  <p className="text-gray-300">Team Members Led</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
