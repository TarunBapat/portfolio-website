import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={personalInfo.github}
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.twitter}
              className="text-zinc-500 hover:text-zinc-200 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
