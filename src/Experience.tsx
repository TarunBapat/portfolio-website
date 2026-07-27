import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { experiences } from "./constants";
import TechStacks from "./TechStacks";
import { fadeUp, viewportOnce } from "./utils/motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <Briefcase className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-zinc-300 font-medium">
              Career Journey
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-100 mb-6">
            Work Experience
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A journey through innovation, growth, and meaningful impact across
            different organizations and projects.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-zinc-800" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start mb-12 last:mb-0"
            >
              <div className="absolute left-4 top-2 w-4 h-4 bg-accent-500 rounded-full border-4 border-zinc-950 z-10" />

              <div className="ml-16 w-full">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 transition-colors duration-300 hover:border-zinc-700">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                        {exp.title}
                      </h3>
                      <span className="text-accent-400 font-medium">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 lg:items-end text-sm text-zinc-400 shrink-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-zinc-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-zinc-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-zinc-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-zinc-200 mb-3 text-sm tracking-wide uppercase">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-accent-400 rounded-full mt-2 shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-200 mb-3 text-sm tracking-wide uppercase">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <TechStacks project={{ tech: exp.tech }} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
