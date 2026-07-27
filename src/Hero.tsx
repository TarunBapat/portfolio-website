import { motion } from "framer-motion";
import useScrollToSections from "./utils/useScrollToSections";
import { personalInfo } from "./constants";
import { Download, Mail, ChevronDown } from "lucide-react";
import profileImageUrl from "/tarun.jpeg";
import resumeUrl from "/Tarun_Bapat_Resume.pdf";
import { fadeUp, staggerContainer } from "./utils/motion";

const Hero = () => {
  const scrollToSection = useScrollToSections();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-zinc-950 relative overflow-hidden"
    >
      {/* Subtle static glow */}
      <div className="absolute inset-0 [background:radial-gradient(circle_at_75%_35%,rgba(99,102,241,0.12),transparent_55%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={fadeUp} className="space-y-4">
              <p className="text-accent-400 font-medium tracking-wide">
                Welcome to my portfolio
              </p>
              <h1 className="font-display text-4xl md:text-6xl font-semibold text-zinc-100 leading-tight">
                Hi, I'm {personalInfo.name}
              </h1>
              <p className="text-xl text-zinc-400 font-light">
                {personalInfo.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg text-zinc-400 max-w-xl lg:max-w-none"
            >
              I'm a passionate {personalInfo.title.toLowerCase()} who loves
              creating beautiful, functional web applications that solve
              real-world problems and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={resumeUrl}
                download
                className="inline-flex items-center justify-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-700 text-zinc-200 font-medium rounded-lg hover:border-zinc-500 hover:bg-zinc-900 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </button>
            </motion.div>
          </div>

          {/* Image Content */}
          <motion.div
            variants={fadeUp}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent-500/20 rounded-2xl blur-2xl" />
              <img
                src={profileImageUrl}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl border border-zinc-800"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-5 h-5 text-zinc-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
