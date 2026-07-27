import { ArrowUpRight, Code, ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "./constants";
import TechStacks from "./TechStacks";
import { fadeUp, staggerContainer, viewportOnce } from "./utils/motion";

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <Code className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-zinc-300 font-medium">My Work</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-100 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating
            exceptional digital experiences with cutting-edge technologies and
            thoughtful design.
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Star className="w-5 h-5 text-accent-400" />
              <h3 className="text-xl font-display font-semibold text-zinc-100">
                Featured Work
              </h3>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid lg:grid-cols-2 gap-8"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={fadeUp}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden transition-colors duration-300 hover:border-zinc-700"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="px-5 py-2.5 bg-zinc-100 hover:bg-white text-zinc-900 rounded-lg font-medium transition-colors flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="px-5 py-2.5 bg-zinc-950/90 hover:bg-zinc-950 text-white rounded-lg font-medium transition-colors flex items-center gap-2 border border-zinc-700"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-display font-semibold text-zinc-100 group-hover:text-accent-400 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-accent-400 transition-colors" />
                    </div>

                    <p className="text-zinc-400 mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <TechStacks project={{ tech: project.tech }} />

                    <div className="flex gap-6 pt-1">
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-2 text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* Other Projects - Grid */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Code className="w-5 h-5 text-accent-400" />
            <h3 className="text-xl font-display font-semibold text-zinc-100">
              More Projects
            </h3>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {otherProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeUp}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden transition-colors duration-300 hover:border-zinc-700"
              >
                <div className="relative overflow-hidden h-40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-display font-semibold text-zinc-100 mb-2 group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                    {project.description.length > 120
                      ? `${project.description.substring(0, 120)}...`
                      : project.description}
                  </p>

                  <TechStacks project={{ tech: project.tech }} value={1} />

                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1.5 text-accent-400 hover:text-accent-300 text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-200 text-sm font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
