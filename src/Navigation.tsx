import React, { useEffect, useState } from "react";
import useScrollToSections from "./utils/useScrollToSections";
import type { NavigationProps } from "./interfaces/NavigationProps";
import { personalInfo } from "./constants";

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const scrollToSection = useScrollToSections(setIsMenuOpen);

  const handlePersona = async () => {
    try {
      setLoading(true);
      const resp = await fetch(import.meta.env.VITE_PERSONA_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_PERSONA_API_KEY || "",
        },
        body: JSON.stringify({
          replica_id: "rca8a38779a8",
          persona_id: "p54e48416ff5",
          properties: {
            participant_left_timeout: 0,
            language: "english",
          },
        }),
      });
      const data = await resp.json();
      if (data?.conversation_id) {
        window.open(data?.conversation_url, "_blank");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching persona:", error);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.getAttribute("id");
            if (sectionId) {
              setActiveSection(sectionId);
            }
          }
        });
      },
      { threshold: 0.3 } // Adjust threshold as needed
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
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

            {/* Separator */}
            <div className="w-px h-6 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

            {/* AI Chat Button */}
            <button
              onClick={handlePersona}
              className="relative group overflow-hidden rounded-xl px-4 py-2 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover:shadow-xl"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <div className="relative flex items-center gap-2 text-white font-medium text-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {loading ? <span>Loading...</span> : <span>Ask AI</span>}
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
          >
            <div className="w-6 h-6 relative flex flex-col justify-center">
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-0.5" : "mb-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "mb-1.5"
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
              {["Home", "About", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block w-full text-left py-3 px-4 text-sm font-medium text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 rounded-lg transition-all duration-200"
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile AI Button */}
            <button
              onClick={handlePersona}
              className="w-full relative group overflow-hidden rounded-xl px-4 py-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Content */}
              <div className="relative flex items-center justify-center gap-3 text-white font-medium">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Ask My AI Anything</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
