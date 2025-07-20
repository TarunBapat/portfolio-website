import { Github, Linkedin, Twitter } from "lucide-react";
import { personalInfo } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href={personalInfo.github}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.twitter}
              className="text-gray-400 hover:text-white transition-colors"
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
