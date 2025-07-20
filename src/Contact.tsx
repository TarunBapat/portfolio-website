import { Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "./constants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    // Here you would integrate with EmailJS or Formspree
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. Let's
            discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Let's Connect
            </h3>
            <p className="text-gray-600 mb-8">
              Whether you have a project in mind, want to collaborate, or just
              want to say hello, I'd love to hear from you. Drop me a message
              and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-600">{personalInfo.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                <span className="text-gray-600">{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <a
                href={personalInfo.github}
                className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 hover:bg-blue-200 hover:text-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.twitter}
                className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 hover:bg-sky-200 hover:text-sky-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Tell me about your project or just say hi!"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
