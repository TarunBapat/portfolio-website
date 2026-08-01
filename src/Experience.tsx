import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "./constants";
import { fadeUp, viewportOnce } from "./utils/motion";
import ExperienceItem from "./ExperienceItem";

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

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
        <div ref={timelineRef} className="relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-zinc-800" />
          <motion.div
            className="absolute left-6 top-2 w-px bg-gradient-to-b from-accent-400 to-accent-500 origin-top"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <ExperienceItem key={exp.id} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
