import { Calendar, MapPin } from "lucide-react";
import { experiences } from "./constants";
import { useState } from "react";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-slate-500">
            My professional journey and the impact I've made at various
            organizations.
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline bar with animated progress */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200">
            <div
              className="absolute left-0 top-0 w-full bg-gradient-to-b from-indigo-500 to-purple-500 transition-all duration-500 ease-in-out origin-top"
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
              className="relative flex items-start mb-12 last:mb-0 group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Animated timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl" />

              {/* Card */}
              <div className="ml-16 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl hover:ring-1 hover:ring-indigo-300 w-full">
                {/* Header line */}
                <div className="h-1 w-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-t-md mb-4" />

                {/* Title + Meta */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800">
                      {exp.title}
                    </h3>
                    <p className="text-indigo-600 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 mt-2 md:mt-0 space-y-1 md:text-right">
                    <div className="flex items-center md:justify-end">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center md:justify-end">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-700 mb-2 text-sm tracking-wide uppercase">
                    Key Achievements
                  </h4>
                  <ul className="list-disc list-inside text-sm text-slate-600 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
