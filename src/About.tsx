import { useState } from "react";
import { personalInfo, skills } from "./constants";
import { Github, Linkedin, Twitter } from "lucide-react";
const About = () => {
  const [isHovered, setIsHovered] = useState(false);

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Handwritten Journey Section */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Paper background with subtle animation */}
            <div
              className={`
                relative bg-gradient-to-br from-amber-50 to-yellow-100 
                rounded-lg shadow-2xl transform transition-all duration-500 ease-out
                ${isHovered ? "rotate-1 scale-105" : "rotate-0 scale-100"}
                border border-amber-200
              `}
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23d4af37%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] rounded-lg" />

              {/* Spiral binding holes */}
              <div className="absolute left-4 top-0 bottom-0 flex flex-col justify-start pt-8 gap-6">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-red-400 shadow-inner"
                  ></div>
                ))}
              </div>

              {/* Red margin line */}
              <div className="absolute left-12 top-0 bottom-0 w-px bg-red-300 opacity-60"></div>

              <div className="p-8 pl-16 relative z-10">
                <h3
                  className="text-2xl font-bold text-gray-800 mb-6 transform -rotate-1"
                  style={{ fontFamily: "Comic Sans MS, cursive" }}
                >
                  My Journey ✨
                </h3>

                {/* Handwritten style content */}
                <div
                  className="space-y-6"
                  style={{ fontFamily: "Comic Sans MS, cursive" }}
                >
                  <div className="relative">
                    <p className="text-gray-700 leading-relaxed text-base transform rotate-0.5">
                      What began as curiosity about how websites work in 2019
                      has evolved into a{" "}
                      <span className="bg-yellow-200 px-1 rounded">
                        6-year journey
                      </span>{" "}
                      of crafting digital experiences that matter. I started as
                      a frontend developer, captivated by the power of turning
                      ideas into interactive interfaces...
                    </p>
                    {/* Doodle arrow */}
                    <div className="absolute -right-2 top-2 text-2xl transform rotate-45">
                      ✏️
                    </div>
                  </div>

                  <div className="relative transform -rotate-0.5">
                    <p className="text-gray-700 leading-relaxed text-base">
                      Over the years, I've transformed from someone who wondered
                      <span className="italic">"how does this work?"</span> to
                      someone who builds robust, full-stack solutions. My
                      experience spans the entire development lifecycle...
                    </p>
                    {/* Coffee stain */}
                    <div className="absolute -left-4 bottom-2 w-8 h-8 rounded-full bg-amber-200 opacity-40"></div>
                  </div>

                  <div className="relative transform rotate-0.5">
                    <p className="text-gray-700 leading-relaxed text-base">
                      The tech landscape never stops evolving, and neither do I
                      . I'm constantly exploring emerging frameworks, refining
                      my approach...
                    </p>
                    {/* Smiley face doodle */}
                    <div className="absolute -right-3 -top-2 text-yellow-500">
                      😊
                    </div>
                  </div>

                  <div className="relative transform -rotate-0.5">
                    <p className="text-gray-700 leading-relaxed text-base">
                      When I'm not deep in code, I'm often sharing knowledge
                      with fellow developers, contributing to the{" "}
                      <span className="bg-green-200 px-1 rounded">
                        open-source community
                      </span>
                      , or experimenting with cutting-edge tools...
                    </p>
                    {/* Heart doodle */}
                    <div className="absolute -left-6 top-8 text-red-400 text-xl">
                      💝
                    </div>
                  </div>
                </div>

                {/* Handwritten note at bottom */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border-2 border-dashed border-blue-200 transform rotate-1">
                  <p
                    className="text-sm text-blue-700 italic"
                    style={{ fontFamily: "Comic Sans MS, cursive" }}
                  >
                    📝 P.S. - Always learning, always growing! 🚀
                  </p>
                </div>

                {/* Social links with handwritten labels */}
                <div className="mt-8 flex space-x-6">
                  <div className="text-center">
                    <a
                      href={personalInfo.github}
                      className="inline-block text-gray-600 hover:text-cyan-600 transition-colors transform hover:scale-110"
                    >
                      <Github className="w-6 h-6 mx-auto mb-1" />
                    </a>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "Comic Sans MS, cursive" }}
                    >
                      GitHub
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href={personalInfo.linkedin}
                      className="inline-block text-gray-600 hover:text-purple-600 transition-colors transform hover:scale-110"
                    >
                      <Linkedin className="w-6 h-6 mx-auto mb-1" />
                    </a>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "Comic Sans MS, cursive" }}
                    >
                      LinkedIn
                    </p>
                  </div>
                  <div className="text-center">
                    <a
                      href={personalInfo.twitter}
                      className="inline-block text-gray-600 hover:text-pink-600 transition-colors transform hover:scale-110"
                    >
                      <Twitter className="w-6 h-6 mx-auto mb-1" />
                    </a>
                    <p
                      className="text-xs text-gray-600"
                      style={{ fontFamily: "Comic Sans MS, cursive" }}
                    >
                      Twitter
                    </p>
                  </div>
                </div>
              </div>

              {/* Torn paper effect at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-transparent to-amber-100 
             bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 20%22%3E%3Cpath d=%22M0,20 Q5,0 10,20 T30,20 T50,20 T70,20 T90,20 L100,20 L100,0 L0,0 Z%22 fill=%22%23f59e0b%22/%3E%3C/svg%3E')]
             bg-bottom bg-repeat-x"
              />
            </div>

            {/* Paper shadow */}
            <div className="absolute inset-0 bg-gray-400 rounded-lg transform translate-x-1 translate-y-1 -z-10 opacity-30"></div>
          </div>

          {/* Skills section remains the same */}
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
                  <span className="text-2xl font-bold text-cyan-400">10+</span>
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
