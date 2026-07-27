import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollToSections from "./utils/useScrollToSections";
import type { NavigationProps } from "./interfaces/NavigationProps";
import { personalInfo } from "./constants";
import { Sparkles } from "lucide-react";

const navItems = ["Home", "About", "Projects", "Experience", "Contact"];

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
      setLoading(false);
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
      { threshold: 0.3 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [setActiveSection]);

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-md z-50 border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection("home")}
            className="font-display text-lg font-semibold text-zinc-100"
          >
            {personalInfo.name}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    activeSection === item.toLowerCase()
                      ? "text-zinc-100"
                      : "text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent-400"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="w-px h-5 bg-zinc-800" />

            <button
              onClick={handlePersona}
              className="flex items-center gap-2 rounded-lg px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors"
            >
              <Sparkles className="w-4 h-4" />
              {loading ? "Loading..." : "Ask AI"}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 relative flex flex-col justify-center gap-1.5">
              <span
                className={`block h-px w-full bg-zinc-100 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-zinc-100 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-full bg-zinc-100 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-1">
                <div className="bg-zinc-900 rounded-xl p-2 border border-zinc-800">
                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left py-3 px-4 text-sm font-medium text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/60 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handlePersona}
                  className="w-full flex items-center justify-center gap-2 rounded-xl px-4 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4" />
                  {loading ? "Loading..." : "Ask AI"}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
