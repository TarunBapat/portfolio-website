import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Sparkles,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "./constants";
import axios from "axios";
import { fadeUp, viewportOnce } from "./utils/motion";

type SubmitStatus = "idle" | "success" | "error";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const apiUrl = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email.trim() === "" || formData.name.trim() === "") return;

    setIsSubmitting(true);
    setStatus("idle");

    try {
      await axios.post(
        apiUrl,
        { ...formData },
        { headers: { Accept: "application/json" } }
      );
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-zinc-950 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 rounded-full border border-zinc-800 mb-6">
            <MessageCircle className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-zinc-300 font-medium">
              Let's Connect
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-semibold text-zinc-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            I'm always excited about new opportunities and collaborations.
            Let's discuss how we can create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-zinc-100">
                Let's Create Something Amazing
              </h3>
            </div>

            <p className="text-zinc-400 mb-8 leading-relaxed">
              Whether you have a groundbreaking project in mind, want to
              collaborate on something innovative, or just want to connect
              and share ideas, I'd love to hear from you. Every great project
              starts with a conversation.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/50 border border-zinc-800">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-zinc-300 font-medium break-all">
                  {personalInfo.email}
                </span>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-lg bg-zinc-800/50 border border-zinc-800">
                <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent-400" />
                </div>
                <span className="text-zinc-300 font-medium">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-zinc-100 font-semibold mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personalInfo.github },
                  { icon: Linkedin, href: personalInfo.linkedin },
                  { icon: Twitter, href: personalInfo.twitter },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 bg-zinc-800 hover:bg-accent-500 rounded-xl flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-accent-500 rounded-xl flex items-center justify-center">
                <Send className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-display font-semibold text-zinc-100">
                Send a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-zinc-300 mb-2"
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
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-zinc-300 mb-2"
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
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-zinc-300 mb-2"
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
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-xl text-zinc-100 placeholder-zinc-500 focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project or just say hi! I'd love to hear your ideas..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 px-6 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {status === "success" && (
                <p className="text-sm text-emerald-400 text-center">
                  Thanks for reaching out — I'll get back to you soon!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 text-center">
                  Something went wrong sending your message. Please try again
                  or email me directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
