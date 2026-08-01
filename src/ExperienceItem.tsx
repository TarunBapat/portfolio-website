import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import TechStacks from "./TechStacks";
import { fadeUp, viewportOnce } from "./utils/motion";

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const ExperienceItem = ({
  exp,
  index,
}: {
  exp: Experience;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isActive = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={{ delay: index * 0.1 }}
      className="relative flex items-start mb-12 last:mb-0"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-4 top-2 w-4 h-4 rounded-full border-4 border-zinc-950 z-10 transition-all duration-500 ${
          isActive
            ? "bg-accent-400 scale-125 shadow-[0_0_0_6px_rgba(99,102,241,0.25)]"
            : "bg-zinc-700"
        }`}
      />

      <div className="ml-16 w-full">
        <div
          className={`bg-zinc-900 border rounded-2xl p-8 transition-all duration-500 ${
            isActive
              ? "border-accent-500/60 shadow-lg shadow-accent-500/10"
              : "border-zinc-800"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6 gap-4">
            <div>
              <h3 className="text-xl font-display font-semibold text-zinc-100 mb-1">
                {exp.title}
              </h3>
              <span
                className={`font-medium transition-colors duration-500 ${
                  isActive ? "text-accent-400" : "text-zinc-400"
                }`}
              >
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
  );
};

export default ExperienceItem;
