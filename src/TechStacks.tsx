import { useState } from "react";

interface ProjectProps {
  project: {
    tech: string[];
  };
  value?: number;
}

const TechStacks: React.FC<ProjectProps> = ({ project, value }) => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const chipClass =
    value === 1
      ? "px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-md border border-zinc-700"
      : "px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm font-medium rounded-full border border-zinc-700 hover:border-accent-500/50 transition-colors";

  const visibleTech = showAll ? project.tech : project.tech.slice(0, 3);

  return (
    <div className="flex flex-wrap gap-1.5 mb-4">
      {visibleTech.map((tech, techIndex) => (
        <span key={techIndex} className={chipClass}>
          {tech}
        </span>
      ))}
      {!showAll && project.tech.length > 3 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded-full border border-zinc-700 hover:text-zinc-200 transition-colors"
        >
          +{project.tech.length - 3}
        </button>
      )}
    </div>
  );
};

export default TechStacks;
