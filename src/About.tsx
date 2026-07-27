import { motion } from "framer-motion";
import { personalInfo, skills, projects } from "./constants";
import { Github, Linkedin, Twitter, User } from "lucide-react";
import { fadeUp, staggerContainer, viewportOnce } from "./utils/motion";

const stats = [
  { value: `${new Date().getFullYear() - 2019}+`, label: "Years Experience" },
  { value: `${projects.length}+`, label: "Projects Completed" },
  { value: "3", label: "Companies" },
  { value: "5", label: "Team Members Led" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-950 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <User className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-zinc-300 font-medium">About</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-100 mb-6">
            About Me
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            I'm a dedicated full-stack developer with{" "}
            {new Date().getFullYear() - 2019}+ years of experience building
            scalable web applications and leading development teams.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-6"
          >
            <p className="text-zinc-300 leading-relaxed text-lg">
              What began as curiosity about how websites work in 2019 has
              evolved into a career spent crafting digital experiences that
              matter. I started as a frontend developer, drawn to turning
              ideas into interactive interfaces, and have since grown into
              leading full-stack teams end to end — from architecture to
              delivery.
            </p>
            <p className="text-zinc-300 leading-relaxed text-lg">
              My experience spans the entire development lifecycle: building
              scalable APIs, designing component systems, and mentoring
              engineers along the way. The tech landscape never stops
              evolving, and neither do I — I'm always exploring new tools and
              refining how I build.
            </p>

            <div className="flex gap-5 pt-2">
              <a
                href={personalInfo.github}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.twitter}
                className="text-zinc-400 hover:text-zinc-100 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <h3 className="font-display text-xl font-semibold text-zinc-100 mb-6">
              Skills & Technologies
            </h3>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-sm font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-accent-500/50 hover:text-zinc-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 p-6 bg-zinc-900 rounded-xl border border-zinc-800"
            >
              <h4 className="font-semibold text-zinc-100 mb-4">
                Quick Stats
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <span className="text-2xl font-display font-semibold text-accent-400">
                      {stat.value}
                    </span>
                    <p className="text-sm text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
