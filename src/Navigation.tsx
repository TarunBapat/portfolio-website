import React, { useState } from "react";
import useScrollToSections from "./utils/useScrollToSections";
import type { NavigationProps } from "./interfaces/NavigationProps";
import { personalInfo } from "./constants";

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSections(setIsMenuOpen);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Projects", "Experience", "Blog", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative group ${
                    activeSection === item.toLowerCase()
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform transition-transform ${
                      activeSection === item.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`block h-0.5 w-full bg-white transition-transform ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white mt-1 transition-opacity ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white mt-1 transition-transform ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 bg-gray-800/95 rounded-lg mt-2">
            {["Home", "About", "Projects", "Experience", "Blog", "Contact"].map(
              (item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-4 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-colors"
                >
                  {item}
                </button>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
