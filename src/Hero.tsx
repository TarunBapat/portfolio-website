import useScrollToSections from "./utils/useScrollToSections";
import { personalInfo } from "./constants";
import { Download, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToSection = useScrollToSections();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            {personalInfo.tagline}
          </p>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            I'm a passionate {personalInfo.title.toLowerCase()} who loves
            creating beautiful, functional web applications that solve
            real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group"
            >
              <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-medium rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all transform hover:scale-105"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
