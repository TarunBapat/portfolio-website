import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";
import { useState } from "react";
import { experiences } from "./constants";
import TechStacks from "./TechStacks";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <Briefcase className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300 font-medium">
              Career Journey
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-6">
            Work Experience
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A journey through innovation, growth, and meaningful impact across
            different organizations and projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated background line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-slate-700 to-transparent">
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-700 ease-out"
              style={{
                height:
                  activeIndex !== null
                    ? `${((activeIndex + 1) / experiences.length) * 100}%`
                    : "0%",
              }}
            />
          </div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative flex items-start mb-16 last:mb-0 group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Timeline dot with glow effect */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-4 border-slate-800 shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-blue-500/25 group-hover:shadow-2xl z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              </div>

              {/* Experience card */}
              <div className="ml-20 w-full">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-blue-500/10 group-hover:border-blue-500/30 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Animated border top */}
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {exp.company}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors duration-300" />
                        </div>
                      </div>

                      <div className="text-sm text-slate-400 space-y-2 lg:text-right lg:ml-8">
                        <div className="flex items-center lg:justify-end gap-2 px-3 py-1.5 bg-slate-700/50 rounded-lg border border-slate-600/30">
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="font-medium">{exp.period}</span>
                        </div>
                        <div className="flex items-center lg:justify-end gap-2 px-3 py-1.5 bg-slate-700/50 rounded-lg border border-slate-600/30">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="font-medium">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 mb-6 leading-relaxed text-lg">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-bold text-white mb-4 text-sm tracking-wider uppercase flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                        Key Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group/achievement"
                          >
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 group-hover/achievement:scale-125 transition-transform duration-300" />
                            <span className="text-slate-300 leading-relaxed group-hover/achievement:text-slate-200 transition-colors duration-300">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-bold text-white mb-3 text-sm tracking-wider uppercase flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-blue-400 rounded-full" />
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <TechStacks project={{ tech: exp.tech }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="flex justify-center mt-20">
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Experience;
