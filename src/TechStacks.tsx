import { useState } from "react";

interface ProjectProps {
  project: {
    tech: string[];
  };
  value?: number;
}
const TechStacks: React.FC<ProjectProps> = ({ project, value }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {showAll
        ? project.tech.map((tech, techIndex) => (
            <span
              key={techIndex}
              className={
                value == 1
                  ? "px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/30"
                  : "px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 text-sm font-medium rounded-full border border-slate-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              }
            >
              {tech}
            </span>
          ))
        : project.tech.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className={
                value == 1
                  ? "px-2 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-md border border-slate-600/30"
                  : "px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-slate-200 text-sm font-medium rounded-full border border-slate-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5"
              }
            >
              {tech}
            </span>
          ))}
      {!showAll && project.tech.length > 3 && (
        <span
          className="px-2 py-1 bg-slate-700/50 text-slate-400 text-xs rounded-full border border-slate-600/30"
          onClick={() => setShowAll(true)}
        >
          +{project.tech.length - 3}
        </span>
      )}
    </div>
  );
};

export default TechStacks;
