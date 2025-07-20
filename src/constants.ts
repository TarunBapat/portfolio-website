export const personalInfo = {
  name: "Tarun Bapat",
  title: "Full Stack Developer",
  tagline: "Building digital experiences that matter",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  github: "https://github.com/johndoe",
  linkedin: "https://linkedin.com/in/johndoe",
  twitter: "https://twitter.com/johndoe",
  resumeUrl: "/resume.pdf",
};

export const skills = [
  { name: "React", color: "bg-cyan-100 text-cyan-800 border border-cyan-200" },
  {
    name: "Node.js",
    color: "bg-emerald-100 text-emerald-800 border border-emerald-200",
  },
  {
    name: "TypeScript",
    color: "bg-purple-100 text-purple-800 border border-purple-200",
  },
  {
    name: "Python",
    color: "bg-amber-100 text-amber-800 border border-amber-200",
  },
  {
    name: "PostgreSQL",
    color: "bg-indigo-100 text-indigo-800 border border-indigo-200",
  },
  {
    name: "AWS",
    color: "bg-orange-100 text-orange-800 border border-orange-200",
  },
  { name: "Docker", color: "bg-blue-100 text-blue-800 border border-blue-200" },
  {
    name: "GraphQL",
    color: "bg-pink-100 text-pink-800 border border-pink-200",
  },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React frontend and Node.js backend, featuring payment integration and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, built with React and Firebase.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
    tech: ["React", "Firebase", "Material-UI", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/taskapp",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with location-based forecasts and interactive charts.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
    tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/johndoe/weather",
  },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Led development of microservices architecture serving 100k+ users. Mentored junior developers and implemented CI/CD pipelines.",
    achievements: [
      "Increased application performance by 40%",
      "Led team of 5 developers on major product launch",
      "Implemented automated testing reducing bugs by 60%",
    ],
    tech: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications and collaborated with design team to create intuitive user experiences.",
    achievements: [
      "Built component library used across 5+ products",
      "Improved page load times by 50%",
      "Collaborated with UX team on design system",
    ],
    tech: ["React", "TypeScript", "SCSS", "Jest", "Storybook"],
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "WebSolutions Ltd.",
    location: "Remote",
    period: "2019 - 2020",
    description:
      "Worked on various client projects, focusing on frontend development and API integrations.",
    achievements: [
      "Delivered 10+ client projects on time",
      "Learned and implemented React hooks",
      "Contributed to open-source projects",
    ],
    tech: ["JavaScript", "React", "PHP", "MySQL", "WordPress"],
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Best practices for structuring large React applications with proper state management and component architecture.",
    date: "2024-03-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "Performance"],
  },
  {
    id: 2,
    title: "Modern CSS Techniques for 2024",
    excerpt:
      "Exploring the latest CSS features including container queries, cascade layers, and modern layout techniques.",
    date: "2024-03-01",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Design"],
  },
  {
    id: 3,
    title: "API Design Best Practices",
    excerpt:
      "How to design RESTful APIs that are scalable, maintainable, and developer-friendly.",
    date: "2024-02-20",
    readTime: "10 min read",
    tags: ["API", "Backend", "Architecture"],
  },
];
