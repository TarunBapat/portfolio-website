import useScrollToSections from "./utils/useScrollToSections";
import { personalInfo } from "./constants";
import { Download, Mail, ChevronDown } from "lucide-react";
import profileImageUrl from "/tarun.jpeg";
import resumeUrl from "/Tarun_Bapat_Resume.pdf";

const Hero = () => {
  const scrollToSection = useScrollToSections();

  // Replace this with your actual image URL or import

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <p className="text-cyan-400 font-medium text-lg tracking-wide">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light">
                {personalInfo.tagline}
              </p>
            </div>

            <p className="text-lg text-gray-400 max-w-xl lg:max-w-none">
              I'm a passionate {personalInfo.title.toLowerCase()} who loves
              creating beautiful, functional web applications that solve
              real-world problems and deliver exceptional user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 group"
              >
                <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              {/* Glowing border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Image container */}
              <div className="relative">
                <img
                  src={profileImageUrl}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-2xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-cyan-900/20 rounded-2xl"></div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
