import { ExternalLink, Github } from "lucide-react";
import { projects } from "./constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills
            in various technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105 border border-gray-200"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Overlay buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    className="px-4 py-2 bg-white/90 text-gray-900 rounded-lg font-medium hover:bg-white transition-colors transform hover:scale-105"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="px-4 py-2 bg-gray-900/90 text-white rounded-lg font-medium hover:bg-gray-900 transition-colors transform hover:scale-105"
                  >
                    View Code
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gradient-to-r from-cyan-100 to-purple-100 text-gray-700 text-xs rounded-md border border-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 md:opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.liveUrl}
                    className="flex items-center text-cyan-600 hover:text-cyan-700 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center text-gray-600 hover:text-gray-700 text-sm font-medium"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
